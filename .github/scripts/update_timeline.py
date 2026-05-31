#!/usr/bin/env python3
"""
Calls the Anthropic API (with web search) to find AI news from the past
7 days, then prepends verified new events to timelineEvents in script.js.
"""
import anthropic
import json
import os
import re
import sys

TODAY = os.environ["UPDATE_DATE"]
MAX_EVENTS = 8


def extract_existing_titles(content: str) -> list:
    return re.findall(r'title:\s*"([^"]+)"', content)


def esc(value: str) -> str:
    return str(value).replace("\\", "\\\\").replace('"', '\\"')


def format_event(ev: dict) -> str:
    lines = ["    {"]
    for key in ("date", "title", "company", "description", "impact"):
        if ev.get(key):
            lines.append(f'        {key}: "{esc(ev[key])}",')
    if ev.get("link"):
        lines.append(f'        link: "{esc(ev["link"])}",')
    if ev.get("eventType"):
        lines.append(f'        eventType: "{esc(ev["eventType"])}",')
    if ev.get("tags") and isinstance(ev["tags"], list):
        lines.append(f"        tags: {json.dumps(ev['tags'])},")
    lines.append(f'        addedDate: "{TODAY}"')
    lines.append("    },")
    return "\n".join(lines)


def inject_events(content: str, events: list) -> str:
    marker = "const timelineEvents = ["
    idx = content.index(marker) + len(marker)
    block = "\n" + "\n".join(format_event(e) for e in events)
    return content[:idx] + block + content[idx:]


def parse_events(raw: str) -> list:
    raw = re.sub(r"^```(?:json)?\n?", "", raw.strip())
    raw = re.sub(r"\n?```$", "", raw.strip())
    m = re.search(r"\[.*\]", raw, re.DOTALL)
    if not m:
        return []
    try:
        result = json.loads(m.group(0))
        return result if isinstance(result, list) else []
    except json.JSONDecodeError as exc:
        print(f"JSON parse error: {exc}", file=sys.stderr)
        return []


def main():
    with open("script.js", encoding="utf-8") as f:
        script = f.read()

    existing = extract_existing_titles(script)
    existing_list = "\n".join(f"- {t}" for t in existing[:60])

    prompt = f"""Today is {TODAY}. Search the web for AI news from the past 7 days.

Events already in the timeline — do NOT add these:
{existing_list}

Return ONLY a valid JSON array (no markdown fences, no commentary). Up to {MAX_EVENTS} new events:
[
  {{
    "date": "Month DD, YYYY",
    "title": "Short event title",
    "company": "Company Name",
    "description": "What was announced or released.",
    "impact": "Why it matters for the AI industry.",
    "link": "https://official-url.com"
  }}
]

Optional fields (add only when applicable):
- "eventType": "major"   — truly landmark events only
- "eventType": "planned" — announced but not yet released
- "tags": ["local-model"] — reuse existing tags from the codebase only

Known logo companies (use exact casing): OpenAI, Google, Anthropic, Meta, Microsoft, Adobe, Stability AI, Midjourney, Ollama

Return [] if no verified notable announcements were found this week.
Only include events with real, working source URLs."""

    client = anthropic.Anthropic()

    messages = [{"role": "user", "content": prompt}]
    raw_text = ""

    for _ in range(6):  # safety cap on iterations
        try:
            resp = client.beta.messages.create(
                model="claude-opus-4-8",
                max_tokens=4096,
                tools=[{"type": "web_search_20250305", "name": "web_search"}],
                messages=messages,
                betas=["web-search-2025-03-05"],
            )
        except Exception as exc:
            print(f"API error: {exc}", file=sys.stderr)
            sys.exit(0)

        # Collect any text from this turn
        for block in resp.content:
            if getattr(block, "type", "") == "text" and block.text:
                raw_text = block.text

        if resp.stop_reason == "end_turn":
            break

        if resp.stop_reason == "tool_use":
            # Continue the conversation so Claude can finish after searching
            messages.append({"role": "assistant", "content": resp.content})
            tool_results = [
                {"type": "tool_result", "tool_use_id": b.id, "content": ""}
                for b in resp.content
                if getattr(b, "type", "") == "tool_use"
            ]
            if tool_results:
                messages.append({"role": "user", "content": tool_results})
            else:
                break
        else:
            break

    if not raw_text:
        print("No text response from Claude — nothing to commit.", file=sys.stderr)
        sys.exit(0)

    events = parse_events(raw_text)[:MAX_EVENTS]

    if not events:
        print("No new events found.")
        sys.exit(0)

    updated = inject_events(script, events)

    with open("script.js", "w", encoding="utf-8") as f:
        f.write(updated)

    print(f"Added {len(events)} event(s):")
    for ev in events:
        print(f"  • {ev.get('title', '?')} — {ev.get('company', '?')}")


if __name__ == "__main__":
    main()
