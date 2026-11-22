# Dylan Todd — personal site

A responsive portfolio MVP based on the supplied visual reference, with projects, experience, notes and about. Built with HTML, CSS, SVG and vanilla JavaScript. No package installation required.

```powershell
cd portfolio
npm run dev
```

Open http://localhost:3000. `npm run check` checks structure and JavaScript syntax; `npm run build` produces `portfolio/dist/`. The production output works with any static host.

Start with [frontend instructions](docs/FRONTEND.md) and [pending content](docs/CONTENT.md). Edit the source files in `portfolio/`, then rebuild. Surf has a standalone project page at `/projects/surf/`. The train and developer-tooling overviews use native HTML disclosure sections without JavaScript and dialogs when JavaScript is enabled.

The private Sites source history is retained locally in ignored `portfolio/.sites-source-git/`, so the main repository tracks the application as ordinary files. For a future Sites source synchronization, temporarily restore that directory to `portfolio/.git`, run the Sites workflow from `portfolio/`, then archive the metadata under its original name again. Keep the existing project ID in `.openai/hosting.json`.
