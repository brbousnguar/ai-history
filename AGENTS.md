# Repository Guidelines

## Project Structure & Module Organization

This is a no-build static single-page app. `index.html` is the browser entry point and static shell. `script.js` contains the `timelineEvents` dataset plus rendering, filtering, modal, theme, and animation logic. `styles.css` contains all responsive layout and theme styling. `assets/logos/` stores company PNG logos; logo filenames should match the lowercased `company` value, for example `OpenAI` maps to `assets/logos/openai.png`. `add_links.py` is a standalone maintenance script for patching event links. GitHub automation lives under `.github/workflows/` and `.github/scripts/`.

## Build, Test, and Development Commands

- `docker compose up -d`: serve the repository with Nginx at `http://localhost:8085`.
- `docker compose down`: stop the local Nginx container.
- Open `index.html`: quick local preview without Docker.
- `python3 add_links.py`: update `link` fields in `script.js` from mappings in the Python script.

There is no package manager, bundler, or install step for the app itself.

## Coding Style & Naming Conventions

Use vanilla HTML, CSS, and JavaScript. Match the existing four-space indentation in `script.js` event objects and CSS blocks. Keep event fields concise and consistent: `date`, `title`, `company`, `description`, `impact`, optional `link`, optional `eventType`, and optional `tags`. Use `eventType: "major"` for highlighted timeline entries and `eventType: "planned"` for future entries. In CSS, prefer existing custom properties such as `var(--glass-bg)` and `var(--text-primary)` over hardcoded colors. UI additions should preserve the current glassmorphism style, theme support, and responsive behavior.

## Testing Guidelines

No automated test suite is currently defined. Before submitting changes, manually verify the page in a browser or via Docker. Check that timeline entries render, filters populate, modals open, planned events appear in the Future & Planned Events section, theme switching works, and the console has no errors. For content updates, verify official source links and logo filename matches.

## Commit & Pull Request Guidelines

Recent history uses conventional prefixes such as `fix:`, `feat:`, and `chore:`; follow that pattern with short imperative summaries, for example `feat: add 2026 model releases`. Pull requests should describe the change, list manual verification steps, link relevant issues when applicable, and include screenshots for visible UI changes. Keep PRs focused; separate timeline data updates from unrelated UI or workflow changes.

## Agent-Specific Instructions

When a feature affects usage, behavior, setup, configuration, API surface, or user-facing capability, update `README.md` in the same task. Do not treat README changes as optional follow-up work.
