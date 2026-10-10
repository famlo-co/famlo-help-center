#!/usr/bin/env node
// Every <Screenshot src="..."> in docs/ and blog/ must point at a real file in
// static/, and must have its dark twin (name.dark.webp) unless the tag says
// dark={false}. Also lists captures that no page uses, so stale images do not
// pile up in a public repo. Exit 1 on a missing file; orphans only warn.
import {readFileSync, readdirSync, existsSync, statSync} from 'node:fs';
import {join, relative} from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const walk = (dir) =>
  readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });

const pages = ['docs', 'blog'].flatMap((d) => walk(join(root, d))).filter((p) => /\.mdx?$/.test(p));
const tag = /<Screenshot\b([\s\S]*?)\/>/g;
const dark = (src) => src.replace(/(\.[a-z0-9]+)$/i, '.dark$1');

const used = new Set();
const missing = [];
for (const page of pages) {
  const text = readFileSync(page, 'utf8');
  for (const [, attrs] of text.matchAll(tag)) {
    const src = /\bsrc="([^"]+)"/.exec(attrs)?.[1];
    if (!src) { missing.push(`${relative(root, page)}: <Screenshot> without src`); continue; }
    if (!/\balt="[^"]{8,}"/.test(attrs)) missing.push(`${relative(root, page)}: ${src} needs a real alt`);
    const wanted = /\bdark=\{false\}/.test(attrs) ? [src] : [src, dark(src)];
    for (const s of wanted) {
      used.add(s);
      if (!existsSync(join(root, 'static', s))) missing.push(`${relative(root, page)}: missing static${s}`);
    }
  }
}

const shotsDir = join(root, 'static/img/screens');
const orphans = existsSync(shotsDir)
  ? walk(shotsDir).map((p) => '/' + relative(join(root, 'static'), p)).filter((s) => !used.has(s))
  : [];

console.log(`${used.size} screenshot file(s) referenced from ${pages.length} pages`);
if (orphans.length) console.log(`warning: ${orphans.length} unused capture(s):\n  ${orphans.join('\n  ')}`);
if (missing.length) {
  console.error(`FAIL\n  ${missing.join('\n  ')}`);
  process.exit(1);
}
console.log('PASS');
