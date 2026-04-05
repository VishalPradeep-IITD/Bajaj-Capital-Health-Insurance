# Bajaj Capital Health Insurance — Needs Analyser

Single-page **Insurance Needs Analyser** for Bajaj Capital: a 4-step wizard, gap analysis (life, health, critical illness, income protection), results with charts, and an optional AI advisor (Anthropic Claude) when you add an API key in `index.html`.

## Run locally

Open `index.html` in a browser, or serve the folder over HTTP (recommended for the chat feature due to browser CORS):

```bash
npx serve .
```

## Setup

1. Open `index.html` in an editor.
2. Set `const API_KEY = 'your-key'` in the script section for the AI advisor.

Do not commit real API keys to Git.
