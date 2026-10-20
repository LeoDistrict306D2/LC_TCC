# Leo Club of Taxila Central College — website

Next.js 16 · React 19 · TypeScript · Tailwind CSS v4

One of eleven independently designed club sites in Leo District 306 D2.

---

## Running it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
npm run lint
```

---

## Where things live

| Path | What it is |
|---|---|
| `app/` | Routes, layout, metadata |
| `app/page.tsx` | Home page — hero, about tabs, impact areas, donation box, events, team, testimonials, contact |
| `app/current-leaders/page.tsx` | The real 2026/27 Executive Committee |
| `components/` | Navbar, Footer, PageHeader, CounterCard |
| `public/images/board/` | Real officer photographs |

Unlike the other ten clubs in `D2Clubs/`, this site keeps its content inline
in each page file rather than in a separate `content/` directory.

---

## Content status

**Real data:** the Executive Committee on `/current-leaders` — names, roles
and photographs — comes from the club's own EXCO spreadsheet and
photography (processed by `scripts_exco.py`, now safe to delete). The
homepage's "Meet Our Team" section mirrors the same eight photographed
officers. Two committee members (Assistant Secretary, Assistant Treasurer)
have no photo on file and render an initials fallback on `/current-leaders`.

**Illustrative/dummy data — everything else:** the founding story and date
(2005), the sponsoring Lions Club (Horana — the town Taxila Central College
is actually in, but not a confirmed sponsor name), past leaders before
2025/26, awards history, blog posts, events/projects, testimonials, bank
donation details, and all contact details (phone, email, address) are
placeholder content written in the real data shape so every page renders
fully. This site previously shipped with the shared template's literal
"Sample City" placeholder text left in; that has been replaced throughout
with the club's real identity (Leo Club of Taxila Central College, Horana,
Sri Lanka), but the underlying facts in those sections are still
illustrative, not verified club records.

To go live with the real club:

- Replace the founding story, past-leaders table (rows before 2025/26),
  awards, blog posts, events/projects, and testimonials with real records.
- Confirm the sponsoring Lions Club and replace contact details (phone,
  email, address, bank accounts) with real ones.
- Fill in photos for the two unphotographed committee members.
