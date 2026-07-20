#!/usr/bin/env node
/**
 * Snapshot the SEO-critical head tags of every sitemap URL on the LIVE site.
 * Used to prove the Contentful migration changes nothing Google cares about:
 * run once before the switch (baseline) and once after, then diff.
 *
 * Usage:
 *   node scripts/seo/head-snapshot.mjs baseline   # writes .secrets/seo-baseline.json
 *   node scripts/seo/head-snapshot.mjs compare    # fetches again and diffs vs baseline
 */

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const BASELINE_FILE = join(ROOT, '.secrets/seo-baseline.json');
const SITEMAP = 'https://maxmendes.dev/sitemap.xml';
const UA = { 'User-Agent': 'Mozilla/5.0 (seo-head-snapshot)' };

const mode = process.argv[2] || 'baseline';

function extract(html) {
  const pick = (re) => [...html.matchAll(re)].map((m) => m[1].trim());
  return {
    canonical: pick(/<link rel="canonical" href="([^"]+)"/g)[0] || null,
    robots: pick(/<meta name="robots" content="([^"]+)"/g)[0] || null,
    title: pick(/<title>([^<]*)<\/title>/g)[0] || null,
    description: pick(/<meta name="description" content="([^"]*)"/g)[0] || null,
    hreflang: [...html.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)]
      .map((m) => `${m[1]}=${m[2]}`)
      .sort(),
    h1: pick(/<h1[^>]*>(.*?)<\/h1>/gs)[0]?.replace(/<[^>]+>/g, '').slice(0, 120) || null,
    ogImage: pick(/<meta property="og:image" content="([^"]*)"/g)[0] || null,
    jsonLdTypes: [...html.matchAll(/"@type":\s*"([A-Za-z]+)"/g)].map((m) => m[1])
      .filter((t, i, a) => a.indexOf(t) === i).sort(),
  };
}

async function snapshot() {
  const xml = await (await fetch(SITEMAP, { headers: UA })).text();
  const urls = [...new Set([...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim()))];
  const out = {};
  for (const url of urls) {
    try {
      const res = await fetch(url, { headers: UA });
      const html = await res.text();
      out[url] = { status: res.status, ...extract(html) };
    } catch (e) {
      out[url] = { status: 'FETCH_ERROR', error: e.message };
    }
    await new Promise((r) => setTimeout(r, 120));
  }
  return out;
}

function diff(base, now) {
  const problems = [];
  for (const [url, b] of Object.entries(base)) {
    const n = now[url];
    if (!n) { problems.push(`MISSING from new sitemap: ${url}`); continue; }
    for (const key of ['status', 'canonical', 'robots', 'title', 'description', 'h1', 'ogImage']) {
      if (JSON.stringify(b[key]) !== JSON.stringify(n[key])) {
        problems.push(`${url}\n    ${key}: "${b[key]}" -> "${n[key]}"`);
      }
    }
    if (JSON.stringify(b.hreflang) !== JSON.stringify(n.hreflang)) {
      problems.push(`${url}\n    hreflang changed`);
    }
    if (JSON.stringify(b.jsonLdTypes) !== JSON.stringify(n.jsonLdTypes)) {
      problems.push(`${url}\n    JSON-LD types: [${b.jsonLdTypes}] -> [${n.jsonLdTypes}]`);
    }
  }
  for (const url of Object.keys(now)) {
    if (!base[url]) problems.push(`NEW url (not in baseline): ${url}`);
  }
  return problems;
}

const snap = await snapshot();
if (mode === 'baseline') {
  writeFileSync(BASELINE_FILE, JSON.stringify(snap, null, 2));
  console.log(`Baseline saved: ${Object.keys(snap).length} URLs -> ${BASELINE_FILE}`);
} else {
  const base = JSON.parse(readFileSync(BASELINE_FILE, 'utf8'));
  const problems = diff(base, snap);
  if (!problems.length) {
    console.log(`CLEAN: all ${Object.keys(base).length} URLs identical to baseline.`);
  } else {
    console.log(`${problems.length} difference(s):\n`);
    for (const p of problems) console.log('  ' + p);
    process.exit(1);
  }
}
