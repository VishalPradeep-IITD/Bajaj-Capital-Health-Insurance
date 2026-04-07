# Bajaj Capital Health Insurance — GitHub Pages Build

Single-page Insurance Needs Analyser hosted as static files (`index.html`).

## Deploy to GitHub Pages

Publish this repository (or the branch/folder containing `index.html`) with GitHub Pages.

## AI chat setup (client-side)

In `index.html`, set:

```js
const API_KEY = 'YOUR_GEMINI_API_KEY';
```

This enables Gemini chat directly from the browser.

## Important warning

Client-side keys are visible to anyone using the site (view-source/devtools/network).
If you use this mode on GitHub Pages, treat the key as public and restrict/rotate it.

## Run locally

Open `index.html` directly, or serve with:

```bash
npx serve .
```
