# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Running Locally

Serve via Docker (Nginx on port 8085):
```bash
docker compose up -d    # start
docker compose down     # stop
```
Then open http://localhost:8085. Alternatively, open `index.html` directly in a browser — no build step required.

## Updating Event Links

To auto-map official announcement URLs into `script.js` from the mappings defined in `add_links.py`:
```bash
python3 add_links.py
```

## Architecture

This is a **no-build static SPA** — vanilla HTML/CSS/JS with no framework, bundler, or package manager.

- **`script.js`** — contains both the full dataset (`timelineEvents` array) and all application logic (filtering, rendering, modal, theme, scroll animations). Everything lives here.
- **`styles.css`** — all styling, including CSS variable–based theming (`:root` defines dark/light variables), responsive layout, and glassmorphism effects.
- **`index.html`** — static shell; all dynamic content is injected by `script.js` into `#timelineEvents`, `#plannedEventsGrid`, `#companyFilter`, `#yearFilter`, and `#tagFilter`.
- **`add_links.py`** — standalone utility that patches `link:` fields in `script.js`; not part of the runtime.
- **`assets/logos/`** — PNG logos matched by lowercasing the `company` field (e.g. company `"OpenAI"` → `assets/logos/openai.png`).

## Adding Timeline Events

Append a new object to `timelineEvents` in `script.js`:

```js
{
    date: "October 2025",          // display string; append " (Planned)" for future events
    title: "Short Event Name",
    company: "OpenAI",             // must match an existing logo in assets/logos/ (lowercased)
    description: "What happened.",
    impact: "Why it matters.",
    link: "https://...",           // optional
    eventType: "major",            // optional: "major" | "planned"; omit for standard events
    tags: ["open-weights"],        // optional array
}
```

- Events with `eventType: "planned"` render in the **Future & Planned Events** collapsible section, not the main timeline.
- `eventType: "major"` highlights the event visually in the main timeline.
- If adding a new company, add a matching `<company-lowercase>.png` to `assets/logos/`.

## UI Conventions

- Fonts: `Outfit` for titles/headers, `Inter` for body text (loaded from Google Fonts).
- Use CSS variables (e.g. `var(--glass-bg)`, `var(--glass-border)`) — never hardcode colors.
- New UI components should follow the glassmorphism style: `backdrop-filter: blur(...)`, hover 3D tilts, and glow effects already established in `styles.css`.
- Icons are inline SVGs so they inherit theme colors automatically.
