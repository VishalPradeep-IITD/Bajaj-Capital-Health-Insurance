# Bajaj Capital Health Insurance — Next.js App

Insurance Needs Analyser migrated to Next.js with a server-side Gemini API route.

## What changed

- Frontend UI remains your existing analyzer (`index.html`) and is rendered at `/` inside Next.js.
- Chat now calls a same-origin API route: `/api/chat`.
- Gemini key is stored only on the server as `GEMINI_API_KEY` (never in frontend code).

## Local setup

1. Install dependencies:

```bash
npm install
```

2. Create env file:

```bash
cp .env.example .env.local
```

3. Add your key in `.env.local`:

```env
GEMINI_API_KEY=your_real_key_here
```

4. Start dev server:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Deploy

Deploy this Next.js app on a platform that supports server-side API routes (for example Vercel, Netlify Functions, or Render).

Set `GEMINI_API_KEY` as an environment variable in your deployment platform.

## Security notes

- Never commit `.env.local`.
- Never put API keys in frontend JavaScript.
- If any key was previously exposed, revoke/regenerate it.
