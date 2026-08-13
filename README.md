# Vercel AI SDK — Course Build

Hands-on implementation of all 5 lessons from Vercel's AI SDK Academy course — going from raw LLM calls to a production chatbot pattern, with model access unified through Vercel AI Gateway.

## What's inside

- **Lesson 1 — Extraction**: pulls structured calendar-appointment data out of free-form email text using `generateObject`.
- **Lesson 2 — Classification**: classifies support tickets into categories, run from the CLI.
- **Lesson 3 — Summarization**: summarizes multi-turn message threads in the web UI.
- **Lesson 4 — Extraction (Advanced)**: a richer extraction pipeline validated against a defined schema.
- **Lesson 5 — Chatbot**: an interactive, streaming chatbot with tool-calling, built on the AI SDK's `useChat` hook.

## Why I built this

I wanted hands-on depth with the Vercel AI SDK specifically — `generateObject`/`generateText`, streaming responses, and tool-calling — rather than just reading docs, since it's the same SDK pattern I use in [JudGit](https://github.com/cazyyTom/JudGit)'s review-generation pipeline.

## Tech stack

Next.js 15 · TypeScript · Vercel AI SDK · Vercel AI Gateway (unified provider access across OpenAI/Anthropic, automatic retries, usage monitoring) · Tailwind CSS v4 · shadcn/ui

## Project structure

```
app/
  (1-extraction)/        # CLI extraction lesson
  (2-classification)/    # CLI classification lesson
  (3-summarization)/     # Web summarization lesson
  (4-extraction)/        # Web extraction lesson (advanced)
  (5-chatbot)/           # Web chatbot lesson
  page.tsx               # Navigation homepage
components/ui/           # Reusable UI components
lib/                     # Utility functions
```

## Running locally

```bash
pnpm install
vercel link
vercel deploy
vercel env pull        # generates .env.local with a 12-hour VERCEL_OIDC_TOKEN
vercel dev
```

CLI lessons:

```bash
pnpm run extraction
pnpm run classification
```

Web lessons (summarization, extraction, chatbot) — visit `localhost:3000` and navigate from the homepage.

## Credit

Built while completing Vercel's official [AI SDK Academy course](https://vercel.com/academy/ai-sdk). Course structure and starter scaffolding are Vercel's; all lesson implementations in this repo are my own.
