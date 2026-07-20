#!/usr/bin/env node
/**
 * (Re)submit the sitemap to Google Search Console via the API.
 * Auth: same service-account JWT flow as inspect.mjs.
 *
 * Usage: node scripts/gsc/submit-sitemap.mjs
 */

import { createSign } from 'node:crypto';
import { readdirSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const SECRETS_DIR = join(ROOT, '.secrets');
const SITE_URL = 'https://maxmendes.dev/';
const SITEMAP_URL = 'https://maxmendes.dev/sitemap.xml';
const TOKEN_URL = 'https://oauth2.googleapis.com/token';

function loadServiceAccount() {
  const file = readdirSync(SECRETS_DIR).find(
    (f) => f.endsWith('.json') && !f.startsWith('seo-') && !f.startsWith('gsc-report')
  );
  const parsed = JSON.parse(readFileSync(join(SECRETS_DIR, file), 'utf8'));
  if (parsed.type !== 'service_account') throw new Error('Not a service account json');
  return parsed;
}

function b64url(s) {
  return Buffer.from(s).toString('base64').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
}

async function getToken(sa) {
  const now = Math.floor(Date.now() / 1000);
  const header = b64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
  const claim = b64url(JSON.stringify({
    iss: sa.client_email,
    scope: 'https://www.googleapis.com/auth/webmasters',
    aud: TOKEN_URL, iat: now, exp: now + 3600,
  }));
  const signer = createSign('RSA-SHA256');
  signer.update(`${header}.${claim}`);
  const sig = signer.sign(sa.private_key).toString('base64').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
  const res = await fetch(TOKEN_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: `${header}.${claim}.${sig}`,
    }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(JSON.stringify(data));
  return data.access_token;
}

const sa = loadServiceAccount();
const token = await getToken(sa);
const url = `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(SITE_URL)}/sitemaps/${encodeURIComponent(SITEMAP_URL)}`;

const put = await fetch(url, { method: 'PUT', headers: { Authorization: `Bearer ${token}` } });
console.log('Submit:', put.status === 200 || put.status === 204 ? 'OK' : `HTTP ${put.status}`);

// Read back status
const get = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
const info = await get.json();
console.log('Sitemap status:', JSON.stringify({
  lastSubmitted: info.lastSubmitted,
  lastDownloaded: info.lastDownloaded,
  isPending: info.isPending,
  errors: info.errors,
  warnings: info.warnings,
  contents: info.contents,
}, null, 2));
