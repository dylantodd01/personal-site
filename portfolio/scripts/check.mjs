import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
const pages = ['index.html', 'projects/surf/index.html'];
const pageIds = html => [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
for (const path of pages) {
  const page = new URL(`../${path}`, import.meta.url);
  const html = await readFile(page, 'utf8');
  const ids = pageIds(html);
  assert.equal(ids.length, new Set(ids).size, `${path}: duplicate IDs`);
  assert.equal([...html.matchAll(/<h1\b/g)].length, 1, `${path}: use one h1`);
  for (const match of html.matchAll(/(?:src|href)="([^"]+)"/g)) {
    if (/^(?:https?:|mailto:|tel:)/.test(match[1])) continue;
    let target = new URL(match[1], page);
    if (target.pathname.endsWith('/')) target = new URL(`index.html${target.hash}`, target);
    await access(target);
    if (target.hash) {
      const targetHtml = await readFile(target, 'utf8');
      assert.ok(pageIds(targetHtml).includes(target.hash.slice(1)), `${path}: missing anchor ${match[1]}`);
    }
  }
}
const home = await readFile(new URL('../index.html', import.meta.url), 'utf8');
assert.ok(home.includes('id="experience"'), 'Experience section is required');
assert.ok(home.includes('Illustrative data'), 'Demo charts must be identified');
assert.ok(home.includes('class="project-page-link" href="./projects/surf/"'), 'Surf must link to its own page');
console.log('Both pages, section links, project navigation and local assets checked.');
