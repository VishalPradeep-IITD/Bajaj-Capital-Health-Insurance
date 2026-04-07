# Bajaj Capital Health Insurance — GitHub Pages Build

Single-page Insurance Needs Analyser hosted as static files (`index.html`).

## Deploy to GitHub Pages

Publish this repository (or the branch/folder containing `index.html`) with GitHub Pages.
Recommended source is **GitHub Actions** using the included workflow.

## AI chat setup (env-style config file)

The app reads the key from `env.js` via `window.APP_ENV.GEMINI_API_KEY`.

1. Copy the template:

```bash
cp env.example.js env.js
```

2. Edit `env.js`:

```js
window.APP_ENV = {
  GEMINI_API_KEY: "YOUR_GEMINI_API_KEY"
};
```

`env.js` is gitignored, so you can keep local values out of Git.

## Keep key out of Git (recommended)

This repo includes `.github/workflows/deploy-pages.yml` that generates `env.js` during deploy from a GitHub Secret.

1. In GitHub: **Settings -> Secrets and variables -> Actions -> New repository secret**
2. Name: `GEMINI_API_KEY`
3. Value: your Gemini API key
4. In **Settings -> Pages**, set source to **GitHub Actions**
5. Push to `main` (or run the workflow manually)

The key will not be stored in your repository history, but it is still visible in browser dev tools at runtime.

## Important warning

Client-side keys are visible to anyone using the site (view-source/devtools/network),
including values loaded from `env.js` on GitHub Pages.
Treat this key as public and restrict/rotate it.

## Run locally

Open `index.html` directly, or serve with:

```bash
npx serve .
```
