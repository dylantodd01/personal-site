import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
const files = new Map([['/', ['index.html', 'text/html']], ['/index.html', ['index.html', 'text/html']], ['/styles.css', ['styles.css', 'text/css']], ['/app.js', ['app.js', 'text/javascript']], ['/favicon.svg', ['favicon.svg', 'image/svg+xml']], ['/assets/surf-planner.png', ['assets/surf-planner.png', 'image/png']]]);
files.set('/projects/surf/', ['projects/surf/index.html', 'text/html']);
files.set('/projects/surf/index.html', ['projects/surf/index.html', 'text/html']);
for (const image of ['surf-map.png', 'surf-explore.png', 'surf-forecast.png']) files.set(`/assets/${image}`, [`assets/${image}`, 'image/png']);
createServer(async (req, res) => {
  if (new URL(req.url, 'http://localhost').pathname === '/projects/surf') { res.writeHead(308, { Location: '/projects/surf/' }); res.end(); return; }
  const file = files.get(new URL(req.url, 'http://localhost').pathname);
  if (!file) { res.writeHead(404); res.end('Not found'); return; }
  try {
    const body = await readFile(new URL(`../${file[0]}`, import.meta.url));
    res.writeHead(200, { 'Content-Type': file[1].startsWith('text/') ? `${file[1]}; charset=utf-8` : file[1], 'Cache-Control': 'no-cache' });
    res.end(body);
  } catch { res.writeHead(500); res.end('Unable to read file'); }
}).listen(3000, '127.0.0.1', () => console.log('Local: http://localhost:3000'));
