# AngleDesk

**Status:** v0.1 foundation prototype. **No live Grok calls, database persistence, or publishing integration yet.**

AngleDesk is a human-directed multi-agent newsroom: discover → verify → propose angles → human approval → draft → review → package.

## Quick start (Windows PowerShell)

Install Node.js 20+ (prefer current LTS), then:

```powershell
npm install
npm run dev
```

Open http://localhost:3000. The interface runs in **demo mode** with example stories; edits exist only in browser memory and reset on refresh.

## Validate

```powershell
npm run typecheck
npm run lint
npm run build
```

## Current scope

- Next.js App Router + React + TypeScript
- Responsive story inbox, editorial angle selection, editable draft, manual ready status
- `/api/health` JSON endpoint
- Strictly local demonstration state; no backend database and no automated posting

## Next increments

1. PostgreSQL schema and migrations for stories, sources, angle approvals, agent runs, drafts, and audit events.
2. Authenticated server-side xAI client with rate/cost limits and source citation capture.
3. Persistent approval-gated researcher → chief → writer pipeline.
4. Tests, CI, publishing adapters, and later desktop packaging.

## Security

Keep provider API keys **server-side only** in environment variables. Never put secrets in `NEXT_PUBLIC_*` variables or commit `.env` files. No third-party calls are made by the demo UI.

## Branch workflow

Initial implementation lives on `feat/v0.1-foundation` for review before merging into `main`.
