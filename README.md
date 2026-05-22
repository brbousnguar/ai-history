# AI History Timeline

An interactive static timeline of major AI milestones, model releases, product launches, and planned industry events.

## Running Locally

Open `index.html` directly in a browser, or run the included Nginx container:

```bash
docker compose up -d
```

Then visit `http://localhost:8085`.

## Updating The Timeline

Timeline data lives in the `timelineEvents` array in `script.js`.

Each event can include:

- `date`: Display date, such as `May 20, 2026` or `September 29, 2026 (Planned)`.
- `title`: Short event name.
- `company`: Company or organization name.
- `description`: What happened or what is scheduled.
- `impact`: Why the event matters.
- `link`: Official announcement or source URL.
- `eventType`: Optional. Use `major`, `minor`, or `planned`.
- `tags`: Optional array, such as `["local-model", "open-weights"]`.

Planned events render in the Future & Planned Events section. Non-planned events render in the main timeline.

## Current Content Update

The timeline now includes verified 2026 additions for GPT-5.5, Claude Opus 4.7, Google I/O 2026, Microsoft Build 2026, WWDC26, Gemini 3.5 Pro's planned rollout, and OpenAI DevDay 2026. It also includes foundational history entries such as AlexNet, AlphaGo, OpenAI's founding, and the Transformer paper.
