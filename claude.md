# WebResume — Project Conventions

## Overview

Experimental personal website with three pages: Home, Resume, Contacts.
Layout is pixel-matched to PNG screenshots provided by the designer.
Deploy: Vercel via GitHub.

---

## Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Font**: Helvetica Neue (system stack fallback: Arial, sans-serif)
- **Deploy**: Vercel → GitHub integration

---

## Commands

| Command | Description |
|---|---|
| `npm run dev` | Local dev server |
| `npm run build` | Production build check |
| `npm run lint` | ESLint check |

> **Rule**: Run `npm run build` after every block of changes. Show result before moving on.

---

## Workflow Rules

1. Before writing any code — propose a plan and wait for confirmation.
2. Implement one section at a time.
3. After each section — run `npm run build`, show output.
4. Screenshots are the source of truth for layout.
5. Mobile-first: every component must have a responsive mobile layout.

---

## Design Tokens

| Token | Value |
|---|---|
| Primary color | `#000000` / `rgba(0,0,0,0.9)` |
| Background | `#FFFFFF` / `rgba(255,255,255,0.9)` |
| Font family | `'Helvetica Neue', Arial, sans-serif` |

> Black and white palette with **90% alpha** as the base rule.

---

## Pages

| Route | File | Description |
|---|---|---|
| `/` | `app/page.tsx` | Home — student ID card (ВШЭ) centered |
| `/resume` | `app/resume/page.tsx` | Resume — parchment PNG centered |
| `/contacts` | `app/contacts/page.tsx` | Contacts — large `@SMACKSMOKE` + "everywhere" |

---

## Folder Structure

```
resume-web/
├── public/
│   ├── fonts/          # Custom fonts if needed
│   └── images/         # Static assets
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout (font, globals)
│   │   ├── page.tsx             # Home page
│   │   ├── resume/
│   │   │   └── page.tsx
│   │   └── contacts/
│   │       └── page.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   ├── home/
│   │   │   └── HeroSection.tsx  # (etc., per screenshot)
│   │   ├── resume/
│   │   │   └── ResumeSection.tsx
│   │   └── contacts/
│   │       └── ContactsSection.tsx
│   ├── lib/             # Utilities, helpers
│   └── types/           # Shared TypeScript types
├── claude.md
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Component Conventions

- All components live in `src/components/`.
- Named exports only.
- Mobile-first Tailwind classes: base = mobile, `md:` = tablet, `lg:` = desktop.
- No inline styles — use Tailwind utilities only.
- Props typed with TypeScript interfaces defined in the same file (or `src/types/`).

---

## Implementation Sections (plan, subject to confirmation)

1. **Project init** — `npx create-next-app`, config cleanup, font setup
2. **Layout** — `Header` + `Footer`, navigation between 3 pages
3. **Home page** — match screenshot section by section
4. **Resume page** — match screenshot section by section
5. **Contacts page** — match screenshot section by section
6. **Polish** — responsive QA, performance, meta tags
7. **Deploy** — push to GitHub, connect Vercel

---

## Notes

- Screenshots are provided by the user and are the reference for pixel accuracy.
- Helvetica Neue is a system font on macOS/iOS; no self-hosting needed for primary targets.
  If cross-platform support is critical — add Inter or use `@font-face` with a licensed copy.
- Vercel deployment is zero-config for Next.js; just connect the GitHub repo.
