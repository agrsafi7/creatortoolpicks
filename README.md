# CreatorToolPicks

CreatorToolPicks.com — tools and studio gear for faceless content creators, researched and evaluated on published criteria. Rankings are never ranked by commission.

## Stack

React 19 + Vite + Tailwind CSS 4. Client-side routing with clean URLs (History API); `vercel.json` rewrites all routes to `index.html` for SPA serving on Vercel.

## Pages

- `/` — Home (Top Picks, comparisons, How We Test summary, gear)
- `/tools-gear` — Tools & Gear directory with live search and filters
- `/tools/systeme-io-review` — Systeme.io review
- `/compare/pictory-vs-invideo` — Pictory vs InVideo comparison
- `/blog/how-to-start-a-faceless-channel-2026` — Blog guide
- `/how-we-test` — Evaluation criteria, process and monetization
- `/about`, `/affiliate-disclosure`, `/privacy-policy`, `/contact`

## Content rules (genuine only)

- All products live in `src/data/products.ts` — edit links and prices in that one file.
- Prices are shown only after verification against the vendor's official pricing page.
- No scores, star ratings, review counts, statistics, testimonials or discount claims.
- Affiliate links must use `rel="sponsored nofollow"` (handled in `ProductCard`).

## Develop

```bash
npm install
npm run dev     # local dev server
npm run build   # production build to dist/
```
