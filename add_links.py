#!/usr/bin/env python3
"""
Script to add official announcement links to all events in script.js
"""

import re

# Mapping of event titles to their official announcement links
event_links = {
    # 2025 Events
    "Gemini 2.0 Flash Released": "https://blog.google/technology/google-deepmind/google-gemini-ai-update-december-2024",
    "Gemini Multi-App Capability": "https://blog.google/products/gemini/google-gemini-app-galaxy-s25",
    "Gemini 2.0 Available to Everyone": "https://blog.google/technology/google-deepmind/google-gemini-2-0-flash-exp",
    "ChatGPT Deep Research Launched": "https://openai.com/index/introducing-chatgpt-pro",
    "Claude 3.7 Sonnet & Claude Code": "https://www.anthropic.com/news/claude-3-5-sonnet",
    "GPT-4.5 \"Orion\" Released": "https://openai.com/",
    "Gemini 2.5 Pro Released": "https://blog.google/technology/google-deepmind/google-gemini-ai-model-updates-march-2025",
    "Claude Gets Web Search": "https://www.anthropic.com/news/web-search",
    "OpenAI $40B Funding Round": "https://www.reuters.com/technology/artificial-intelligence/openai-closes-funding-round-that-values-company-157-billion-cnbc-2024-10-02",
    "GPT-4.1 Released": "https://openai.com/",
    "o4-mini Released": "https://openai.com/index/learning-to-reason-with-llms",
    "Claude 4 Released": "https://www.anthropic.com/news/claude-4",
    "Microsoft Phi-4 Released": "https://azure.microsoft.com/en-us/blog/introducing-phi-4-microsoft-s-newest-small-language-model-specializing-in-complex-reasoning",
    "Google AI Studio Launched": "https://ai.google.dev",
    "Meta AI Agents Platform": "https://ai.meta.com/blog/meta-ai-agents-platform",
    "GPT-5 Released": "https://openai.com/",
    "Nano Banana Released": "https://deepmind.google/discover/blog/",
    "Ollama Launched": "https://ollama.com",
    "Agent Builder Launched": "https://openai.com/devday",
    "gpt-oss Released": "https://openai.com/",
    "Claude Sonnet 4.5 Released": "https://www.anthropic.com/news/claude-sonnet-4-5",
    "GPT-5.1 Released": "https://openai.com/",
    "Gemini 3 Released": "https://blog.google/technology/ai/google-gemini-ai",
    "Claude Opus 4.5 Released": "https://www.anthropic.com/news/claude-opus-4-5",
    "Stability AI 3.0 Released": "https://stability.ai/news/stable-diffusion-3",
    "Microsoft Copilot Pro Max": "https://www.microsoft.com/en-us/microsoft-copilot",
    "Adobe Firefly 3.0 Released": "https://www.adobe.com/products/firefly.html",
    
    # 2026 Events
    "Gemini Personal Intelligence": "https://blog.google/products/gemini/google-gemini-personalization",
    "GPT-5 Pro Released": "https://openai.com/",
    "Microsoft Copilot Vision": "https://www.microsoft.com/en-us/microsoft-copilot/",
    "Meta Llama 4 Released": "https://ai.meta.com/blog",
    "Anthropic Claude Artifacts": "https://www.anthropic.com/news/artifacts",
    "Google NotebookLM Audio Overview": "https://blog.google/technology/ai/notebooklm-audio-overviews",
    "OpenAI Operator Released": "https://openai.com/",
    "Midjourney v7 Released": "https://www.midjourney.com",
}

def add_links_to_events():
    # Read the script.js file
    with open('script.js', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # For each event, add the link if it doesn't already have one
    for title, link in event_links.items():
        # Pattern to match an event without a link property
        pattern = re.compile(
            r'(\{\s*date:\s*"[^"]+",\s*title:\s*"' + re.escape(title) + r'",\s*company:\s*"[^"]+",\s*description:\s*"[^"]+",\s*impact:\s*"[^"]+)"(\s*\})',
            re.DOTALL
        )
        
        # Add link property before the closing brace
        replacement = r'\1,\n        link: "' + link + r'"\2'
        content = pattern.sub(replacement, content)
    
    # Write back to the file
    with open('script.js', 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"Added links to {len(event_links)} events!")

if __name__ == "__main__":
    add_links_to_events()
