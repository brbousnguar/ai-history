#!/usr/bin/env python3
"""
Uses the Anthropic API with web search to find recent AI news
and prepend new events to timelineEvents in script.js.
"""
import anthropic
import json
import os
import re
import sys

TODAY = os.environ["UPDATE_DATE"]
client = anthropic.Anthropic()

with open("script.js", encoding="utf-8") as f:
    script = f.read()

existing = re.findall(r'title:\s*"([^"]+)"', script)

prompt = f"""Today is {TODAY}. Search the web for AI news from the past 7 days.

Events already in the timeline — do NOT add these:
{chr(10).join(f"- {t}" for t in existing[:60])}

Return ONLY a valid JSON array (no markdown, no commentary). Up to 8 new events:
[
  {{
    "date": "Month DD, YYYY",
    "title": "Short title",
    "company": "Company Name",
    "description": "What was announced.",
    "impact": "Why it matters.",
    "link": "https://official-url.com"
  }}
]

Add "eventType": "major" only for truly landmark events.
Return [] if nothing notable was found. Only include events with real source URLs."""

messages = [{"role": "user", "content": prompt}]
raw = ""

for _ in range(8):
    resp = client.beta.messages.create(
        model="claude-opus-4-8",
        max_tokens=4096,
        tools=[{"type": "web_search_20250305", "name": "web_search"}],
        messages=messages,
        betas=["web-search-2025-03-05"],
    )

    for block in resp.content:
        if getattr(block, "type", "") == "text":
            raw = block.text

    if resp.stop_reason == "end_turn":
        break

    if resp.stop_reason == "tool_use":
        messages.append({"role": "assistant", "content": resp.content})
        tool_results = [
            {"type": "tool_result", "tool_use_id": b.id, "content": ""}
            for b in resp.content if getattr(b, "type", "") == "tool_use"
        ]
        if tool_results:
            messages.append({"role": "user", "content": tool_results})
        else:
            break

if not raw:
    print("No response from API.", file=sys.stderr)
    sys.exit(0)

raw = re.sub(r"^```(?:json)?\n?", "", raw.strip())
raw = re.sub(r"\n?```$", "", raw.strip())
m = re.search(r"\[.*\]", raw, re.DOTALL)
raw = m.group(0) if m else "[]"

try:
    events = json.loads(raw)[:8]
except Exception as e:
    print(f"JSON error: {e}", file=sys.stderr)
    sys.exit(0)

if not events:
    print("No new events found.")
    sys.exit(0)


def esc(v):
    return str(v).replace("\\", "\\\\").replace('"', '\\"')


def fmt(ev):
    lines = ["    {"]
    for k in ("date", "title", "company", "description", "impact"):
        if ev.get(k):
            lines.append(f'        {k}: "{esc(ev[k])}",')
    if ev.get("link"):
        lines.append(f'        link: "{esc(ev["link"])}",')
    if ev.get("eventType"):
        lines.append(f'        eventType: "{esc(ev["eventType"])}",')
    lines.append(f'        addedDate: "{TODAY}"')
    lines.append("    },")
    return "\n".join(lines)


marker = "const timelineEvents = ["
idx = script.index(marker) + len(marker)
updated = script[:idx] + "\n" + "\n".join(fmt(e) for e in events) + script[idx:]

with open("script.js", "w", encoding="utf-8") as f:
    f.write(updated)

print(f"Added {len(events)} event(s):")
for e in events:
    print(f"  - {e.get('title')} — {e.get('company')}")
