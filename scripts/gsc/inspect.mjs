#!/usr/bin/env node
/**
 * GSC URL Inspection report.
 *
 * Auth: service-account JWT (no external deps, Node 18+ for global fetch).
 * The private key lives in .secrets/ (git-ignored) and is never printed.
 *
 * What it does:
 *   1. Mints an access token from the service account.
 *   2. Lists the GSC properties the account can see and picks the maxmendes.dev one
 *      (works for both sc-domain: and https:// property types).
 *   3. Reads every <loc> from the live sitemap.
 *   4. Runs the URL Inspection API on each URL and prints why each is / isn't indexed,
 *      with the Polish pages called out separately.
 *
 * Usage:
 *   node scripts/gsc/inspect.mjs                # all sitemap URLs
 *   node scripts/gsc/inspect.mjs --pl-only      # only /pl/ URLs
 *   node scripts/gsc/inspect.mjs --site sc-domain:maxmendes.dev   # force a property
 */

import { createSign } from 'node:crypto';
import { readdirSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const SECRETS_DIR = join(ROOT, '.secrets');
const SITEMAP_URL = 'https://maxmendes.dev/sitemap.xml';
const TOKEN_URL = 'https://oauth2.googleapis.com/token';
const SCOPE = 'https://www.googleapis.com/auth/webmasters';

const args = process.argv.slice(2);
const PL_ONLY = args.includes('--pl-only');
const SITE_OVERRIDE = args.includes('--site') ? args[args.indexOf('--site') + 1] : null;

function loadServiceAccount() {
  const file = readdirSync(SECRETS_DIR).find((f) => f.endsWith('.json'));
  if (!file) throw new Error('No service-account .json found in .secrets/');
  return JSON.parse(readFileSync(join(SECRETS_DIR, file), 'utf8'));
}

function base64url(input) {
  return Buffer.from(input).toString('base64').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
}

async function getAccessToken(sa) {
  const now = Math.floor(Date.now() / 1000);
  const header = base64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
  const claim = base64url(
    JSON.stringify({
      iss: sa.client_email,
      scope: SCOPE,
      aud: TOKEN_URL,
      iat: now,
      exp: now + 3600,
    }),
  );
  const signer = createSign('RSA-SHA256');
  signer.update(`${header}.${claim}`);
  const signature = signer.sign(sa.private_key).toString('base64').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
  const jwt = `${header}.${claim}.${signature}`;

  const res = await fetch(TOKEN_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt,
    }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(`Token error: ${JSON.stringify(data)}`);
  return data.access_token;
}

async function listSites(token) {
  const res = await fetch('https://www.googleapis.com/webmasters/v3/sites', {
    headers: { Authorization: `Bearer ${token}` },
  });
  const data = await res.json();
  if (!res.ok) throw new Error(`Sites error: ${JSON.stringify(data)}`);
  return (data.siteEntry || []).map((s) => s.siteUrl);
}

function pickSite(sites) {
  if (SITE_OVERRIDE) return SITE_OVERRIDE;
  return (
    sites.find((s) => s === 'sc-domain:maxmendes.dev') ||
    sites.find((s) => s.includes('maxmendes.dev')) ||
    null
  );
}

async function getSitemapUrls() {
  const res = await fetch(SITEMAP_URL, { headers: { 'User-Agent': 'Mozilla/5.0' } });
  const xml = await res.text();
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
  return [...new Set(locs)];
}

async function inspect(token, siteUrl, url) {
  const res = await fetch('https://searchconsole.googleapis.com/v1/urlInspection/index:inspect', {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ inspectionUrl: url, siteUrl, languageCode: 'en-US' }),
  });
  const data = await res.json();
  if (!res.ok) return { url, error: data.error?.message || JSON.stringify(data) };
  const r = data.inspectionResult?.indexStatusResult || {};
  return {
    url,
    verdict: r.verdict,
    coverageState: r.coverageState,
    robotsTxtState: r.robotsTxtState,
    indexingState: r.indexingState,
    lastCrawlTime: r.lastCrawlTime,
    pageFetchState: r.pageFetchState,
    googleCanonical: r.googleCanonical,
    userCanonical: r.userCanonical,
  };
}

function line(r) {
  if (r.error) return `  ✗ ${r.url}\n      ERROR: ${r.error}`;
  const canonMismatch =
    r.googleCanonical && r.userCanonical && r.googleCanonical !== r.userCanonical
      ? `\n      ⚠ canonical mismatch: you=${r.userCanonical} google=${r.googleCanonical}`
      : '';
  const crawl = r.lastCrawlTime ? new Date(r.lastCrawlTime).toISOString().slice(0, 10) : 'never';
  return `  ${r.verdict === 'PASS' ? '✓' : '•'} ${r.url}\n      ${r.coverageState || '(no coverage state)'} | last crawl: ${crawl}${canonMismatch}`;
}

async function main() {
  const sa = loadServiceAccount();
  console.log(`Service account: ${sa.client_email}\n`);
  const token = await getAccessToken(sa);

  const sites = await listSites(token);
  if (!sites.length) {
    console.error('No properties visible to this service account.');
    console.error('→ In Search Console: Settings → Users and permissions → Add user →');
    console.error(`  ${sa.client_email} (Full). Then re-run.`);
    process.exit(1);
  }
  console.log('Properties visible:', sites.join(', '));
  const siteUrl = pickSite(sites);
  if (!siteUrl) {
    console.error('\nNo maxmendes.dev property found among the above. Pass --site <property>.');
    process.exit(1);
  }
  console.log(`Using property: ${siteUrl}\n`);

  let urls = await getSitemapUrls();
  if (PL_ONLY) urls = urls.filter((u) => u.includes('/pl/') || u.endsWith('/pl'));
  console.log(`Inspecting ${urls.length} URL(s) from the sitemap...\n`);

  const results = [];
  for (const url of urls) {
    results.push(await inspect(token, siteUrl, url));
    await new Promise((r) => setTimeout(r, 150)); // stay well under 600/min
  }

  const groups = {};
  for (const r of results) {
    const key = r.error ? 'ERROR' : r.coverageState || 'UNKNOWN';
    (groups[key] ||= []).push(r);
  }

  console.log('='.repeat(70));
  console.log('RESULTS BY STATUS');
  console.log('='.repeat(70));
  for (const [state, rows] of Object.entries(groups).sort((a, b) => b[1].length - a[1].length)) {
    console.log(`\n### ${state}  (${rows.length})`);
    for (const r of rows) console.log(line(r));
  }

  const indexed = results.filter((r) => /indexed/i.test(r.coverageState || '') && !/not indexed/i.test(r.coverageState || '')).length;
  const pl = results.filter((r) => r.url.includes('/pl/') || r.url.endsWith('/pl'));
  const plIndexed = pl.filter((r) => /indexed/i.test(r.coverageState || '') && !/not indexed/i.test(r.coverageState || '')).length;
  console.log('\n' + '='.repeat(70));
  console.log(`SUMMARY: ${indexed}/${results.length} indexed overall | ${plIndexed}/${pl.length} Polish pages indexed`);
  console.log('='.repeat(70));
}

main().catch((e) => {
  console.error('FAILED:', e.message);
  process.exit(1);
});
