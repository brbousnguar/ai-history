// Timeline Events Data
const timelineEvents = [
    {
        date: "June 9, 2026",
        title: "Claude Fable 5 (Mythos-Class) Launched",
        company: "Anthropic",
        description: "Anthropic released Claude Fable 5, the first publicly accessible Mythos-class model, sharing the same underlying weights as the restricted Claude Mythos 5. It scored 80.3% on SWE-Bench Pro and became the first model to exceed 90% on Hex's analytical benchmark. High-risk queries (cyber, bio, chem) fall back to Opus 4.8 rather than refusing outright. Priced at $10/$50 per million input/output tokens.",
        impact: "Sets a new public capability ceiling and introduces a 'graceful fallback' safety architecture instead of hard refusals — a significant alignment design choice that balances raw capability with responsible deployment.",
        link: "https://www.anthropic.com/news/claude-fable-5-mythos-5",
        eventType: "major",
        addedDate: "2026-06-10"
    },
    {
        date: "June 2, 2026",
        title: "White House AI Innovation & Security Executive Order",
        company: "US Government",
        description: "President Trump signed an executive order titled 'Promoting Advanced Artificial Intelligence Innovation and Security,' directing a voluntary AI cybersecurity clearinghouse and a secure early-access framework for frontier models reviewed by federal agencies. The order explicitly prohibits mandatory licensing or pre-clearance requirements for AI model releases.",
        impact: "Sets US federal AI policy for 2026 — pro-innovation, anti-mandatory-regulation — in direct contrast to the EU AI Act's compliance-heavy approach, shaping the global regulatory landscape for frontier AI development.",
        link: "https://www.whitehouse.gov/presidential-actions/2026/06/promoting-advanced-artificial-intelligence-innovation-and-security/",
        eventType: "major",
        addedDate: "2026-06-10"
    },
    {
        date: "June 1, 2026",
        title: "NVIDIA RTX Spark AI Agent PC Superchip",
        company: "NVIDIA",
        description: "NVIDIA unveiled the RTX Spark, an Arm-based superchip purpose-built for personal AI agents on Windows PCs, announced alongside Microsoft at NVIDIA GTC Taipei. First laptops arrive fall 2026 from ASUS, Dell, HP, Lenovo, Microsoft Surface, and MSI.",
        impact: "NVIDIA's first move into the ~$200B PC CPU market challenges Intel, AMD, and Apple Silicon while creating a new on-device AI agent hardware category, bringing persistent local AI agents to consumer devices.",
        link: "https://investor.nvidia.com/news/press-release-details/2026/NVIDIA-and-Microsoft-Reinvent-Windows-PCs-for-the-Age-of-Personal-AI/default.aspx",
        eventType: "major",
        addedDate: "2026-06-10"
    },
    {
        date: "May 28, 2026",
        title: "Mistral Launches Vibe Agentic Platform",
        company: "Mistral AI",
        description: "Mistral rebranded its Le Chat product as 'Vibe' and shipped a full agentic platform with Work Mode (long-running background tasks), Code Mode (remote pull-request-level coding), a VS Code extension, and CLI. Powered by the new Mistral Medium 3.5 running persistent cloud-side coding agents.",
        impact: "Mistral pivots from model vendor to agentic product company, directly competing with Cursor, Devin, and GitHub Copilot Workspace — signaling the broader shift from AI assistants to AI agents in developer tooling.",
        link: "https://mistral.ai/news/vibe-agent/",
        addedDate: "2026-06-10"
    },
    {
        date: "May 12, 2026",
        title: "OpenAI Launches $4B Deployment Company, Acquires Tomoro",
        company: "OpenAI",
        description: "OpenAI launched the OpenAI Deployment Company — a $4B+ joint venture with 19 investment firms led by TPG, Advent, Bain Capital, and Brookfield — and simultaneously acquired Tomoro, a London-based AI consulting firm with ~150 engineers embedded at enterprises including Fidelity, Tesco, and Virgin Atlantic.",
        impact: "OpenAI moves beyond model provision into high-margin enterprise deployment services, creating a new competitive front against Accenture, McKinsey, and consulting firms in the AI integration market.",
        link: "https://openai.com/index/openai-launches-the-deployment-company/",
        addedDate: "2026-06-10"
    },
    {
        date: "May 19, 2026",
        title: "Mistral Acquires Emmi AI (Industrial Physics Simulation)",
        company: "Mistral AI",
        description: "Mistral acquired Emmi AI, an Austrian startup building AI simulation models for industrial engineering, adding digital twin and physics-AI capabilities to its enterprise platform across manufacturing, aerospace, energy, and semiconductor sectors.",
        impact: "Signals Mistral's push into scientific and industrial AI — a domain less occupied by US hyperscalers — differentiating its enterprise offering beyond language tasks toward real-world physical simulation.",
        addedDate: "2026-06-10"
    },
    {
        date: "May 5, 2026",
        title: "US Commerce Dept Signs AI Pre-Deployment Testing Deals",
        company: "US Government",
        description: "The Center for Artificial Intelligence Standards and Innovation (CAISI) struck voluntary deals with Google DeepMind, Microsoft, and xAI to conduct pre-deployment security testing of their AI models in classified government environments — the first formal pre-deployment government security evaluation of frontier models in the US.",
        impact: "Establishes a precedent for industry-government model review that stops short of mandatory approval, laying groundwork for a US voluntary safety framework as an alternative to the EU's regulatory approach.",
        addedDate: "2026-06-10"
    },
    {
        date: "May 28, 2026",
        title: "Claude Opus 4.8 Released",
        company: "Anthropic",
        description: "Anthropic released Claude Opus 4.8, which it characterized as \"a modest but tangible improvement\" over Opus 4.7. The model scores 69.2% on SWE-bench Pro and tops GPT-5.5 and Gemini 3.1 Pro across most benchmarks, with a new Dynamic Workflows feature for running hundreds of parallel subagents, effort controls, and a fast mode running at roughly 2.5x speed for one-third the prior cost. Pricing remained unchanged at $5/$25 per million input/output tokens.",
        impact: "Beyond benchmark gains, Anthropic emphasized honesty improvements — the model is roughly four times less likely than its predecessor to let flaws in its own code pass unremarked — and reported misalignment rates approaching its restricted Claude Mythos Preview, signaling a shift toward reliability and self-correction as differentiators in agentic and enterprise workloads.",
        link: "https://www.anthropic.com/news/claude-opus-4-8",
        addedDate: "2026-05-31"
    },
    {
        date: "May 28, 2026",
        title: "Anthropic Raises $65B Series H at $965B Valuation",
        company: "Anthropic",
        description: "Anthropic closed a $65 billion Series H funding round at a $965 billion post-money valuation, led by Altimeter Capital, Dragoneer, Greenoaks, and Sequoia Capital. The round includes $15 billion of previously committed hyperscaler investments, with $5 billion from Amazon, plus participation from infrastructure partners Micron, Samsung, and SK Hynix. The company reported its run-rate revenue crossed $47 billion earlier in the month.",
        impact: "The financing makes Anthropic the most valuable AI startup, surpassing OpenAI's $852 billion mark for the first time, and is widely expected to be its final private raise before a potential IPO. It marks a dramatic reversal from February 2026, when Anthropic was valued at $380 billion.",
        link: "https://www.anthropic.com/news/series-h",
        eventType: "major",
        addedDate: "2026-05-31"
    },
    {
        date: "October 2025",
        title: "ChatGPT Apps SDK Released",
        company: "OpenAI",
        description: "OpenAI releases the ChatGPT Apps SDK, allowing partners to integrate actions into ChatGPT. For example, Booking.com can expose search, availability checks and booking actions so users can find and reserve accommodations directly within chat (partner auth and secure action flows required).",
        impact: "Enables direct partner actions inside ChatGPT such as search and booking workflows, improving user experience and reducing context switching.",
        link: "https://platform.openai.com/docs",
        eventType: "major"
    },
    {
        date: "Q4 2026 (Planned)",
        title: "GPT-6 Expected",
        company: "OpenAI",
        description: "OpenAI is expected to release GPT-6 in Q4 2026 or early 2027. OpenAI finished pre-training a model codenamed 'Spud' in March 2026, but it shipped as GPT-5.5 rather than GPT-6. GPT-6 proper has no confirmed architecture or launch date, though market consensus (Polymarket: ~82% by end of 2026) points to Q4 2026.",
        impact: "GPT-6 could mark a step-change in reasoning and agentic capability, potentially the most significant OpenAI release since GPT-4 — though the roadmap has already shifted once with GPT-5.5.",
        link: "https://openai.com/",
        eventType: "planned"
    },
    {
        date: "Late 2027 (Planned)",
        title: "Gemini 4.0 Announced",
        company: "Google",
        description: "Google is expected to announce Gemini 4.0 with advanced multimodal capabilities, real-time learning, and enhanced integration across all Google services and hardware.",
        impact: "Gemini 4.0 could revolutionize how AI integrates with everyday devices, enabling truly ambient and context-aware computing experiences.",
        link: "https://blog.google/",
        eventType: "planned"
    },
    {
        date: "Mid 2027 (Planned)",
        title: "Meta Llama 5 Release",
        company: "Meta",
        description: "Meta plans to release Llama 5, an open-source model expected to exceed 1 trillion parameters with advanced reasoning, coding, and multimodal capabilities.",
        impact: "Llama 5 could democratize access to frontier AI capabilities, enabling developers worldwide to build sophisticated AI applications without relying on proprietary models.",
        link: "https://ai.meta.com/",
        eventType: "planned"
    },
    {
        date: "June 8, 2026",
        title: "WWDC26: Apple Rebuilds Siri with Gemini",
        company: "Apple",
        description: "At WWDC26, Apple announced a fully rebuilt Siri powered by Google Gemini under the hood, now a standalone app with cross-app context awareness and genuine conversational capability. Apple also unveiled Apple Foundation Models v2 (AFM v2) — including 'AFM Cloud Pro', a collaboration with Google running on Nvidia GPUs that matches Gemini Frontier quality. iOS 27, macOS 27 'Golden Gate', and iPadOS 27 were announced alongside deeper Apple Intelligence features including tab management, one-tap password updating, and cross-app context.",
        impact: "Apple's decision to partner with Google rather than build its own frontier model signals a pragmatic pivot — prioritizing user experience over AI independence — and marks one of the most significant platform-level AI integrations in consumer tech history.",
        link: "https://www.apple.com/newsroom/2026/06/apple-unveils-next-generation-of-apple-intelligence-siri-ai-and-more/",
        eventType: "major",
        addedDate: "2026-06-10"
    },
    {
        date: "June 2, 2026",
        title: "Microsoft Build 2026: MAI Models & Scout Agents",
        company: "Microsoft",
        description: "Microsoft Build 2026 (June 2-3, San Francisco) delivered a major AI platform push: seven new MAI models for coding, reasoning, image, and voice — led by MAI-Thinking-1 (35B parameters, 256K context, private preview); Microsoft IQ, a new intelligence layer across Copilot and Foundry with Work IQ and Web IQ APIs; the GitHub Copilot App (native desktop with agentic workflows); Microsoft Scout ('Autopilot' always-on agents acting on a user's behalf); and Project Solara, an agent-first platform making agents the primary interaction model.",
        impact: "Microsoft repositioned its entire product stack around autonomous agents — moving beyond Copilot as a chat assistant toward agents that act independently, signaling an industry-wide shift in how enterprise AI is deployed.",
        link: "https://blogs.microsoft.com/blog/2026/06/02/microsoft-build-2026-be-yourself-at-work/",
        eventType: "major",
        addedDate: "2026-06-10"
    },
    {
        date: "June 2026 (Planned)",
        title: "Gemini 3.5 Pro Planned Rollout",
        company: "Google",
        description: "At Google I/O 2026, Google said Gemini 3.5 Pro is already being used internally and that the company expects to roll it out the following month after launching Gemini 3.5 Flash.",
        impact: "Gemini 3.5 Pro is positioned as Google's next flagship step after Gemini 3.5 Flash, extending the agentic Gemini model family to harder tasks.",
        link: "https://blog.google/innovation-and-ai/technology/ai/google-io-2026-all-our-announcements/",
        eventType: "planned"
    },
    {
        date: "September 29, 2026 (Planned)",
        title: "OpenAI DevDay 2026",
        company: "OpenAI",
        description: "OpenAI announced DevDay 2026 for September 29 in San Francisco, calling it the company's biggest event of the year.",
        impact: "DevDay is likely to be OpenAI's major developer venue for model, API, agent, and platform announcements in late 2026.",
        link: "https://openai.com/index/devday-2026/",
        eventType: "planned"
    },
    {
        date: "November 18, 2026 (Planned)",
        title: "Microsoft Copilot 3.0",
        company: "Microsoft",
        description: "Microsoft plans to launch Copilot 3.0 with autonomous agent capabilities, advanced workflow automation, and deeper integration across Microsoft 365 and Azure services.",
        impact: "Copilot 3.0 could transform enterprise productivity by enabling AI agents to handle complex multi-step tasks autonomously.",
        link: "https://www.microsoft.com/copilot",
        eventType: "planned"
    },
    {
        date: "Late 2026 (Planned)",
        title: "Midjourney v8 with Real-Time Generation",
        company: "Midjourney",
        description: "Midjourney is expected to release v8 with real-time image generation, 3D model creation, and advanced style consistency features for professional workflows.",
        impact: "Midjourney v8 could bridge the gap between AI-generated and professional-grade content, enabling real-time creative collaboration.",
        link: "https://www.midjourney.com/",
        eventType: "planned"
    },
    {
        date: "Q3 2026 (Planned)",
        title: "Stability AI 4.0 with Video",
        company: "Stability AI",
        description: "Stability AI plans to release Stable Diffusion 4.0 with integrated video generation, 3D asset creation, and improved photorealism for both images and animations.",
        impact: "Stable Diffusion 4.0 could maintain open-source leadership in generative AI while expanding into video and 3D content creation.",
        link: "https://stability.ai/",
        eventType: "planned"
    },
    {
        date: "May 20, 2026",
        title: "Google I/O 2026: Gemini 3.5 Flash & Gemini Omni",
        company: "Google",
        description: "Google I/O 2026 delivers a broad AI slate, including Gemini 3.5 Flash, Gemini Omni for any-input video generation and editing, Google Antigravity updates, Google AI Studio updates, and deeper Gemini integration across Search, YouTube, Android, Workspace, shopping, and developer tools.",
        impact: "Google framed I/O 2026 as the start of the agentic Gemini era, pushing Gemini from assistant into an action layer across Google's consumer and developer ecosystem.",
        link: "https://blog.google/innovation-and-ai/technology/ai/google-io-2026-all-our-announcements/",
        eventType: "major"
    },
    {
        date: "April 23, 2026",
        title: "GPT-5.5 Released",
        company: "OpenAI",
        description: "OpenAI releases GPT-5.5 for ChatGPT and Codex, describing it as its smartest model yet for real-world professional work. The model is built for agentic coding, computer use, research, data analysis, document and spreadsheet creation, and multi-tool task completion, with API availability following shortly after launch.",
        impact: "GPT-5.5 pushed OpenAI's frontier model line further toward long-running work on a computer, combining stronger reasoning, tool use, coding, and productivity workflows.",
        link: "https://openai.com/index/introducing-gpt-5-5/",
        eventType: "major"
    },
    {
        date: "April 16, 2026",
        title: "Claude Opus 4.7 Released",
        company: "Anthropic",
        description: "Anthropic releases Claude Opus 4.7, a direct upgrade over Opus 4.6 with stronger advanced software engineering, better high-resolution vision, more reliable long-running task execution, new effort controls, task budgets in public beta, and Claude Code updates such as /ultrareview.",
        impact: "Opus 4.7 strengthened Claude's position in agentic coding and professional work while serving as Anthropic's safer broad-release step after the more restricted Mythos Preview.",
        link: "https://www.anthropic.com/news/claude-opus-4-7",
        eventType: "major"
    },
    {
        date: "June 2018",
        title: "GPT-1 Released",
        company: "OpenAI",
        description: "OpenAI releases GPT (Generative Pre-trained Transformer), the first model in the GPT series with 117 million parameters, introducing the transformer-based language modeling approach.",
        impact: "GPT-1 laid the foundation for modern large language models, demonstrating that unsupervised pre-training on large text corpora could produce powerful language understanding.",
        link: "https://openai.com/research/language-unsupervised"
    },
    {
        date: "November 2016",
        title: "Adobe Sensei Launched",
        company: "Adobe",
        description: "Adobe introduces Sensei, an AI and machine learning framework integrated across Adobe's Creative Cloud, Document Cloud, and Experience Cloud products.",
        impact: "Adobe Sensei brought AI capabilities to creative professionals, enabling intelligent features like auto-tagging, content-aware fill, and automated workflows across Adobe's entire product suite.",
        link: "https://www.adobe.com/sensei.html"
    },
    {
        date: "December 2012",
        title: "AlexNet Published",
        company: "University of Toronto",
        description: "Alex Krizhevsky, Ilya Sutskever, and Geoffrey Hinton publish 'ImageNet Classification with Deep Convolutional Neural Networks' at NIPS 2012. The deep convolutional neural network, later known as AlexNet, used GPUs, ReLU activations, dropout, and data augmentation to dramatically improve ImageNet classification.",
        impact: "AlexNet is widely treated as the breakthrough that launched the modern deep learning era, proving that large neural networks trained on GPUs could outperform hand-engineered computer vision systems at scale.",
        link: "https://papers.nips.cc/paper/4824-imagenet-classification-with-deep-convolutional-neural-networks",
        eventType: "major"
    },
    {
        date: "December 11, 2015",
        title: "OpenAI Founded",
        company: "OpenAI",
        description: "OpenAI launches as a non-profit artificial intelligence research company with a mission to ensure that artificial general intelligence benefits humanity.",
        impact: "OpenAI's founding created one of the defining frontier AI labs of the modern era, shaping later progress in reinforcement learning, large language models, AI safety, and consumer AI products.",
        link: "https://openai.com/index/introducing-openai/",
        eventType: "major"
    },
    {
        date: "March 15, 2016",
        title: "AlphaGo Defeats Lee Sedol",
        company: "Google DeepMind",
        description: "Google DeepMind's AlphaGo defeats legendary Go player Lee Sedol 4-1 in Seoul, South Korea. The match showcased deep neural networks combined with search and reinforcement learning in a game long considered too complex for traditional AI methods.",
        impact: "AlphaGo became a public turning point for AI, showing that learning systems could discover powerful strategies in domains with enormous search spaces and inspiring broader interest in reinforcement learning.",
        link: "https://deepmind.google/en/research/alphago/",
        eventType: "major"
    },
    {
        date: "June 12, 2017",
        title: "Transformer Paper Published",
        company: "Google",
        description: "Google researchers publish 'Attention Is All You Need,' introducing the Transformer architecture. The paper replaces recurrence with self-attention, enabling more parallel training and stronger sequence modeling.",
        impact: "The Transformer became the foundation for modern large language models and multimodal AI systems, including BERT, GPT, Gemini, Claude, and many open-weight model families.",
        link: "https://research.google/pubs/attention-is-all-you-need/",
        eventType: "major"
    },
    {
        date: "June 2020",
        title: "GPT-3 Released",
        company: "OpenAI",
        description: "OpenAI releases GPT-3, a language model with 175 billion parameters, demonstrating remarkable text generation capabilities.",
        impact: "GPT-3 showed the world the potential of large language models, sparking widespread interest in AI capabilities.",
        link: "https://openai.com/blog/gpt-3-apps"
    },
    {
        date: "January 2021",
        title: "DALL-E Launched",
        company: "OpenAI",
        description: "OpenAI introduces DALL-E, an AI system that can create images from text descriptions, revolutionizing creative AI.",
        impact: "DALL-E demonstrated that AI could understand and generate visual content from natural language, opening new creative possibilities.",
        link: "https://openai.com/blog/dall-e"
    },
    {
        date: "June 29, 2021",
        title: "GitHub Copilot Technical Preview",
        company: "GitHub",
        description: "GitHub launches the technical preview of GitHub Copilot, an AI pair programmer developed with OpenAI that suggests code from editor context.",
        impact: "GitHub Copilot introduced AI-assisted coding to mainstream developer workflows, accelerating the move toward context-aware coding assistants inside editors.",
        link: "https://github.blog/news-insights/product-news/introducing-github-copilot-ai-pair-programmer/",
        eventType: "major"
    },
    {
        date: "June 21, 2022",
        title: "GitHub Copilot Generally Available",
        company: "GitHub",
        description: "GitHub officially releases GitHub Copilot to individual developers as a paid AI pair programmer that suggests code directly in the editor, with free access for verified students and maintainers of popular open-source projects.",
        impact: "Copilot's general availability moved AI code completion from preview into everyday developer tooling, helping establish paid AI assistants as a mainstream software development category.",
        link: "https://github.blog/changelog/2022-06-21-github-copilot-is-now-available-to-individual-developers/",
        eventType: "major"
    },
    {
        date: "March 22, 2023",
        title: "GitHub Copilot X Announced",
        company: "GitHub",
        description: "GitHub announces Copilot X, expanding the Copilot vision beyond code completion into chat, voice, pull requests, documentation, command-line help, and GPT-4-powered developer workflows.",
        impact: "Copilot X marked GitHub's shift from AI autocomplete toward an AI-powered developer platform spanning the full software development lifecycle.",
        link: "https://github.blog/news-insights/product-news/github-copilot-x-the-ai-powered-developer-experience/",
        eventType: "major"
    },
    {
        date: "December 29, 2023",
        title: "GitHub Copilot Chat Generally Available",
        company: "GitHub",
        description: "GitHub makes Copilot Chat generally available for Visual Studio Code and Visual Studio, including it in all GitHub Copilot plans. The GPT-4-powered assistant provides natural-language coding help, explanations, debugging support, security guidance, and slash-command workflows.",
        impact: "Copilot Chat brought conversational programming into mainstream IDEs, turning natural language into a core interface for understanding, generating, and modifying code.",
        link: "https://github.blog/news-insights/product-news/github-copilot-chat-now-generally-available-for-organizations-and-individuals/",
        eventType: "major"
    },
    {
        date: "March 21, 2024",
        title: "GitHub Copilot in the CLI Generally Available",
        company: "GitHub",
        description: "GitHub makes Copilot in the CLI generally available for Copilot Individual, Business, and Enterprise customers. The GitHub CLI extension provides command suggestions and explanations, adds command execution for suggested commands, and introduces helper aliases such as ghcs and ghce.",
        impact: "Copilot in the CLI brought AI assistance to shell workflows, helping developers understand, generate, and run terminal commands without leaving the command line.",
        link: "https://github.blog/changelog/2024-03-21-github-copilot-general-availability-in-the-cli/",
        eventType: "major"
    },
    {
        date: "February 6, 2025",
        title: "GitHub Copilot Agent Mode Preview",
        company: "GitHub",
        description: "GitHub introduces agent mode for Copilot in VS Code, announces Copilot Edits general availability, adds Gemini 2.0 Flash to the model picker, and previews its autonomous software engineering agent, Project Padawan.",
        impact: "Agent mode moved Copilot from suggestion and chat into multi-step coding assistance that can inspect context, edit files, and collaborate more autonomously inside the editor.",
        link: "https://github.blog/news-insights/product-news/github-copilot-the-agent-awakens/",
        eventType: "major"
    },
    {
        date: "May 19, 2025",
        title: "GitHub Copilot Coding Agent Launched",
        company: "GitHub",
        description: "GitHub launches Copilot coding agent, allowing users to assign issues to Copilot or prompt it from VS Code. The agent runs in a GitHub Actions-powered development environment, commits to a draft pull request, and asks humans for review.",
        impact: "Copilot coding agent turned GitHub issues into delegable AI tasks, bringing asynchronous AI software engineering directly into the GitHub workflow.",
        link: "https://github.blog/news-insights/product-news/github-copilot-meet-the-new-coding-agent/",
        eventType: "major"
    },
    {
        date: "September 25, 2025",
        title: "GitHub Copilot CLI Public Preview",
        company: "GitHub",
        description: "GitHub launches GitHub Copilot CLI in public preview, bringing Copilot coding agent into the terminal as a local, synchronous agent that understands code and GitHub context, works with repositories, issues, and pull requests, and can plan and execute complex tasks.",
        impact: "Copilot CLI preview transformed GitHub's terminal AI from command suggestions into an agentic development environment for local coding, debugging, and refactoring.",
        link: "https://github.blog/changelog/2025-09-25-github-copilot-cli-is-now-in-public-preview/",
        eventType: "major"
    },
    {
        date: "February 2022",
        title: "Midjourney Launched",
        company: "Midjourney",
        description: "Midjourney launches its first version (v1) through Discord, introducing AI-powered image generation to early beta users.",
        impact: "Midjourney's Discord-based approach created a unique community-driven platform for AI art generation, setting it apart from competitors.",
        link: "https://www.midjourney.com"
    },
    {
        date: "April 2022",
        title: "DALL-E 2 Released",
        company: "OpenAI",
        description: "DALL-E 2 launches with significantly improved image quality, resolution, and understanding of complex prompts.",
        impact: "DALL-E 2 made AI-generated art accessible to millions, sparking debates about creativity, copyright, and the future of art.",
        link: "https://openai.com/dall-e-2"
    },
    {
        date: "April 2022",
        title: "Midjourney v2 Released",
        company: "Midjourney",
        description: "Midjourney releases version 2 with improved image quality and more sophisticated prompt understanding.",
        impact: "Version 2 marked significant improvements in Midjourney's artistic capabilities, attracting more users to the platform.",
        link: "https://www.midjourney.com"
    },
    {
        date: "May 2022",
        title: "PaLM Announced",
        company: "Google",
        description: "Google unveils Pathways Language Model (PaLM) with 540 billion parameters, showcasing advanced reasoning capabilities.",
        impact: "PaLM demonstrated Google's commitment to large-scale AI research and set new benchmarks for language understanding.",
        link: "https://ai.googleblog.com/2022/04/pathways-language-model-palm-scaling-to.html"
    },
    {
        date: "July 2022",
        title: "Imagen Released",
        company: "Google",
        description: "Google releases Imagen, a text-to-image model competing with DALL-E 2, featuring photorealistic image generation.",
        impact: "Imagen showcased Google's capabilities in generative AI and intensified competition in the text-to-image space.",
        link: "https://imagen.research.google"
    },
    {
        date: "July 2022",
        title: "Midjourney Open Beta",
        company: "Midjourney",
        description: "Midjourney opens its Discord server to the public, allowing anyone to join and use the AI image generation service.",
        impact: "The public launch via Discord made Midjourney accessible to millions, creating a vibrant community of artists and creators using AI for artistic expression.",
        link: "https://www.midjourney.com"
    },
    {
        date: "August 2022",
        title: "Stable Diffusion Released",
        company: "Stability AI",
        description: "Stability AI releases Stable Diffusion as open-source, making high-quality image generation accessible to everyone.",
        impact: "Stable Diffusion democratized AI image generation, enabling millions of developers and creators to build with the technology.",
        link: "https://stability.ai/stable-diffusion",
        tags: ["local-model", "open-weights"]
    },
    {
        date: "August 2022",
        title: "DreamStudio Launched",
        company: "Stability AI",
        description: "Stability AI launches DreamStudio, a user-friendly web interface for Stable Diffusion, making AI image generation accessible without technical setup.",
        impact: "DreamStudio provided an easy entry point for non-technical users to explore Stable Diffusion, expanding its reach beyond developers."
    },
    {
        date: "October 2022",
        title: "Stability AI Raises $101M",
        company: "Stability AI",
        description: "Stability AI secures $101 million in funding led by Coatue and Lightspeed Venture Partners, with participation from O'Shaughnessy Ventures.",
        impact: "The funding validated Stability AI's open-source approach and provided resources to further develop generative AI technologies."
    },
    {
        date: "October 2022",
        title: "Stable Diffusion 1.5 Released",
        company: "Stability AI",
        description: "Stability AI releases Stable Diffusion 1.5 with improved image quality, better prompt understanding, and enhanced inpainting capabilities.",
        impact: "Version 1.5 became the most widely used Stable Diffusion model, forming the foundation for countless community tools and applications."
    },
    {
        date: "November 2022",
        title: "Stable Diffusion 2.0 Released",
        company: "Stability AI",
        description: "Stability AI releases Stable Diffusion 2.0 with major improvements including higher resolution (768x768), new text encoder, and depth-to-image and inpainting models.",
        impact: "SD 2.0 represented a significant architectural upgrade, though the community remained split between 1.5 and 2.0 due to different strengths."
    },
    {
        date: "November 2022",
        title: "ChatGPT Launched",
        company: "OpenAI",
        description: "OpenAI releases ChatGPT to the public, a conversational AI that quickly becomes the fastest-growing consumer application in history.",
        impact: "ChatGPT brought AI to mainstream consciousness, reaching 100 million users in just 2 months and transforming how people interact with AI.",
        link: "https://openai.com/blog/chatgpt"
    },
    {
        date: "December 2022",
        title: "Stable Diffusion 2.1 Released",
        company: "Stability AI",
        description: "Stability AI releases Stable Diffusion 2.1, refining version 2.0 with improved image quality and better handling of complex prompts.",
        impact: "SD 2.1 addressed many concerns from the 2.0 release, improving model performance and bringing it closer to community expectations."
    },
    {
        date: "February 2023",
        title: "ControlNet for Stable Diffusion",
        company: "Stability AI",
        description: "ControlNet integration brings precise control over Stable Diffusion generation using edge detection, depth maps, pose estimation, and other conditioning methods.",
        impact: "ControlNet revolutionized AI image generation by giving users unprecedented control over composition and structure, becoming essential for professional workflows."
    },
    {
        date: "February 2023",
        title: "Bard Announced",
        company: "Google",
        description: "Google announces Bard, its conversational AI assistant powered by LaMDA, entering direct competition with ChatGPT.",
        impact: "Bard marked Google's entry into the consumer AI chatbot market, intensifying the AI race between major tech companies.",
        link: "https://blog.google/technology/ai/bard-google-ai-search-updates"
    },
    {
        date: "March 2023",
        title: "GPT-4 Released",
        company: "OpenAI",
        description: "OpenAI releases GPT-4, a multimodal model that can process both text and images, with significantly improved reasoning and accuracy.",
        impact: "GPT-4 set new standards for AI capabilities, powering advanced applications and demonstrating the rapid pace of AI advancement.",
        link: "https://openai.com/gpt-4"
    },
    {
        date: "March 2023",
        title: "Midjourney v5",
        company: "Midjourney",
        description: "Midjourney releases version 5, achieving unprecedented photorealism and artistic quality in AI-generated images.",
        impact: "Midjourney v5 became the gold standard for artistic AI image generation, widely used by artists and creators worldwide.",
        link: "https://www.midjourney.com"
    },
    {
        date: "March 2023",
        title: "Adobe Firefly Beta Launched",
        company: "Adobe",
        description: "Adobe launches Firefly in beta, a family of creative generative AI models designed to generate images, text effects, and other creative content trained on Adobe Stock and licensed content.",
        impact: "Firefly marked Adobe's entry into the generative AI space, offering creators AI tools trained on licensed content, addressing copyright concerns that plagued other image generation models.",
        link: "https://www.adobe.com/products/firefly.html"
    },
    {
        date: "March 2023",
        title: "llama.cpp Released",
        company: "llama.cpp",
        description: "Georgi Gerganov releases llama.cpp, an efficient C/C++ inference project that makes Meta's LLaMA-class models practical on consumer CPUs and laptops.",
        impact: "llama.cpp became the core execution layer behind the local-LLM ecosystem, enabling quantization, offline inference, and fast community ports across macOS, Linux, and Windows.",
        link: "https://github.com/ggml-org/llama.cpp",
        eventType: "major",
        tags: ["local-model", "open-source-runtime"]
    },
    {
        date: "March 2023",
        title: "Claude Released",
        company: "Anthropic",
        description: "Anthropic releases Claude, an AI assistant focused on safety, helpfulness, and harmlessness, built with Constitutional AI.",
        impact: "Claude introduced a new approach to AI safety and ethics, emphasizing responsible AI development and user trust.",
        link: "https://www.anthropic.com/claude"
    },
    {
        date: "April 2023",
        title: "SDXL Beta Released",
        company: "Stability AI",
        description: "Stability AI releases Stable Diffusion XL (SDXL) in beta, featuring a larger model with improved photorealism, better text rendering, and native 1024x1024 resolution.",
        impact: "SDXL beta showcased the next generation of Stable Diffusion, demonstrating significant improvements in image quality and detail."
    },
    {
        date: "April 2023",
        title: "Stable Assistant Announced",
        company: "Stability AI",
        description: "Stability AI announces Stable Assistant, an AI chatbot combining conversational AI with image generation capabilities.",
        impact: "Stable Assistant showed Stability AI's ambition to expand beyond image generation into multimodal AI assistants."
    },
    {
        date: "May 2023",
        title: "LLaMA Released",
        company: "Meta",
        description: "Meta releases LLaMA (Large Language Model Meta AI) as open-source, enabling researchers and developers worldwide.",
        impact: "LLaMA democratized access to large language models, enabling innovation and research beyond big tech companies.",
        link: "https://ai.meta.com/blog/large-language-model-llama-meta-ai",
        tags: ["local-model", "open-weights"]
    },
    {
        date: "July 2023",
        title: "Llama 2 Released",
        company: "Meta",
        description: "Meta and Microsoft release Llama 2 with openly available weights for research and commercial use, making strong chat and base models broadly deployable.",
        impact: "Llama 2 turned local LLMs into a mainstream developer workflow by giving startups, hobbyists, and enterprises a credible open model family they could run and fine-tune themselves.",
        link: "https://about.fb.com/news/2023/07/llama-2",
        tags: ["local-model", "open-weights"]
    },
    {
        date: "August 2023",
        title: "Ollama Launched",
        company: "Ollama",
        description: "Ollama emerges as a simple local LLM runtime and package manager, giving developers a fast way to pull, run, and serve models from the terminal on personal machines.",
        impact: "Ollama lowered the operational friction of local AI, helping local models move from hacker demos to an everyday workflow for developers and enthusiasts.",
        link: "https://ollama.com/blog/run-llama2-uncensored-locally",
        tags: ["local-model", "runtime", "developer-tool"]
    },
    {
        date: "September 2023",
        title: "Mistral 7B Released",
        company: "Mistral AI",
        description: "Mistral AI releases Mistral 7B under Apache 2.0, showing that a compact open model can deliver strong quality while remaining practical for local and self-hosted deployment.",
        impact: "Mistral 7B accelerated the shift toward smaller, efficient local models that could run well on prosumer hardware without giving up too much capability.",
        link: "https://mistral.ai/news/about-mistral-ai",
        eventType: "major",
        tags: ["local-model", "open-weights"]
    },
    {
        date: "July 2023",
        title: "Claude 2 Released",
        company: "Anthropic",
        description: "Anthropic releases Claude 2 with improved capabilities, longer context windows, and enhanced safety features.",
        impact: "Claude 2 strengthened Anthropic's position in the AI market and demonstrated continued focus on safe AI development.",
        link: "https://www.anthropic.com/news/claude-2"
    },
    {
        date: "July 2023",
        title: "SDXL 1.0 Released",
        company: "Stability AI",
        description: "Stability AI releases Stable Diffusion XL 1.0, the production version featuring dramatically improved image quality, composition, and face/text generation at 1024x1024 resolution.",
        impact: "SDXL 1.0 set a new standard for open-source image generation, competing with commercial models while remaining freely available."
    },
    {
        date: "September 2023",
        title: "Adobe Firefly 1.0 Released",
        company: "Adobe",
        description: "Adobe releases Firefly 1.0 for general availability, integrating generative AI capabilities directly into Photoshop, Illustrator, and Express with commercial-use licensing.",
        impact: "Firefly 1.0 brought enterprise-ready generative AI to creative professionals, with commercial licensing that addressed legal concerns and integrated seamlessly into existing Adobe workflows.",
        link: "https://blog.adobe.com/en/publish/2023/09/13/adobe-firefly-generally-available"
    },
    {
        date: "September 2023",
        title: "ChatGPT Gets Vision",
        company: "OpenAI",
        description: "OpenAI adds vision capabilities to ChatGPT, allowing it to analyze and discuss images uploaded by users.",
        impact: "This update made ChatGPT multimodal, expanding its use cases to include visual analysis and image-based conversations.",
        link: "https://openai.com/blog/chatgpt-can-now-see-hear-and-speak"
    },
    {
        date: "November 2023",
        title: "Stable Video Diffusion Released",
        company: "Stability AI",
        description: "Stability AI releases Stable Video Diffusion (SVD), bringing the Stable Diffusion approach to video generation with image-to-video capabilities.",
        impact: "SVD opened the video generation space to open-source development, enabling researchers and creators to experiment with AI video generation."
    },
    {
        date: "November 2023",
        title: "Stability AI Partners with AWS",
        company: "Stability AI",
        description: "Stability AI announces partnership with Amazon Web Services to make Stable Diffusion models available on AWS, including enterprise support.",
        impact: "The AWS partnership brought enterprise credibility to Stability AI and made their models more accessible to businesses."
    },
    {
        date: "December 2023",
        title: "Gemini Pro Released",
        company: "Google",
        description: "Google releases Gemini, a multimodal AI model designed to understand and process text, images, audio, and video.",
        impact: "Gemini represented Google's most advanced AI model, designed to compete directly with GPT-4 across multiple modalities.",
        link: "https://blog.google/technology/ai/google-gemini-ai"
    },
    {
        date: "February 2024",
        title: "Adobe Acrobat AI Assistant Launched",
        company: "Adobe",
        description: "Adobe launches Acrobat AI Assistant in beta, bringing conversational AI to PDFs with document summarization, Q&A capabilities, and intelligent content extraction.",
        impact: "Acrobat AI Assistant transformed how people interact with documents, making it possible to quickly understand and extract insights from lengthy PDFs through natural language conversations.",
        link: "https://www.adobe.com/acrobat/generative-ai-pdf.html"
    },
    {
        date: "February 2024",
        title: "Stable Cascade Released",
        company: "Stability AI",
        description: "Stability AI releases Stable Cascade, a new architecture based on Würstchen that offers faster inference and better training efficiency than previous Stable Diffusion models.",
        impact: "Stable Cascade demonstrated Stability AI's continued innovation in model architecture, offering improved performance and resource efficiency."
    },
    {
        date: "February 2024",
        title: "Sora Announced",
        company: "OpenAI",
        description: "OpenAI announces Sora, a text-to-video model capable of generating high-quality, coherent video clips from text prompts.",
        impact: "Sora demonstrated the next frontier of generative AI, showing that AI could create realistic video content, raising both excitement and concerns.",
        link: "https://openai.com/sora"
    },
    {
        date: "March 2024",
        title: "Claude 3 Released",
        company: "Anthropic",
        description: "Anthropic releases Claude 3 with three variants (Opus, Sonnet, Haiku), achieving state-of-the-art performance across multiple benchmarks.",
        impact: "Claude 3 Opus matched or exceeded GPT-4 in many benchmarks, establishing Anthropic as a major player in the AI race.",
        link: "https://www.anthropic.com/news/claude-3-family"
    },
    {
        date: "April 2024",
        title: "Stable Diffusion 3 Released",
        company: "Stability AI",
        description: "Stability AI releases Stable Diffusion 3, featuring improved text generation in images, better prompt following, and a new Multimodal Diffusion Transformer architecture.",
        impact: "SD3 represented a major architectural shift using transformer-based diffusion, bringing significant improvements in text rendering and prompt adherence."
    },
    {
        date: "April 2024",
        title: "GPT-4 Turbo Released",
        company: "OpenAI",
        description: "OpenAI releases GPT-4 Turbo with improved performance, lower costs, and updated knowledge cutoff.",
        impact: "GPT-4 Turbo made advanced AI more accessible and cost-effective, enabling broader adoption across industries.",
        link: "https://openai.com/blog/new-models-and-developer-products-announced-at-devday"
    },
    {
        date: "June 2024",
        title: "Stable Diffusion 3 Medium Released",
        company: "Stability AI",
        description: "Stability AI releases Stable Diffusion 3 Medium, a 2 billion parameter model offering high-quality image generation with improved efficiency for consumer hardware.",
        impact: "SD3 Medium made the latest Stable Diffusion technology accessible to users with mid-range hardware, balancing quality and accessibility.",
        tags: ["local-model", "open-weights"]
    },
    {
        date: "May 2024",
        title: "LM Studio First Ships",
        company: "LM Studio",
        description: "LM Studio first ships as an offline desktop app for discovering, loading, and chatting with local LLMs on consumer hardware.",
        impact: "LM Studio gave local models a polished desktop experience, broadening local AI beyond terminal-first tools and making private, offline workflows easier for non-experts.",
        link: "https://lmstudio.ai/blog/lmstudio-v0.3.0",
        tags: ["local-model", "runtime", "desktop-app"]
    },
    {
        date: "May 2024",
        title: "Gemini 1.5 Pro",
        company: "Google",
        description: "Google releases Gemini 1.5 Pro with a massive 1 million token context window, enabling processing of entire codebases and long documents.",
        impact: "The unprecedented context window opened new possibilities for AI applications in code analysis, research, and long-form content.",
        link: "https://blog.google/technology/ai/google-gemini-next-generation-model-february-2024"
    },
    {
        date: "May 2024",
        title: "Adobe Firefly 2.0 Released",
        company: "Adobe",
        description: "Adobe releases Firefly 2.0 with improved image quality, better prompt understanding, and new capabilities including reference image support and style matching.",
        impact: "Firefly 2.0 significantly improved the quality and versatility of AI-generated content, making it more competitive with other leading image generation models while maintaining Adobe's focus on commercial safety.",
        link: "https://blog.adobe.com/en/publish/2024/04/16/firefly-2-0-adobe-creative-cloud"
    },
    {
        date: "May 2024",
        title: "o1 Models Announced",
        company: "OpenAI",
        description: "OpenAI announces o1 and o1-preview, reasoning models that show improved performance on complex problem-solving tasks.",
        impact: "The o1 models represented a shift toward AI systems with better reasoning capabilities, moving beyond pattern matching to true problem-solving.",
        link: "https://openai.com/index/learning-to-reason-with-llms"
    },
    {
        date: "August 2024",
        title: "Midjourney Web App Launched",
        company: "Midjourney",
        description: "Midjourney launches its official web application, making the service accessible directly through a browser without requiring Discord.",
        impact: "The web app launch marked Midjourney's evolution from a Discord-only service to a standalone platform, making it more accessible to users who preferred web interfaces over Discord.",
        link: "https://www.midjourney.com"
    },
    {
        date: "October 2024",
        title: "Stable Diffusion 3.5 Released",
        company: "Stability AI",
        description: "Stability AI releases Stable Diffusion 3.5 with three variants (Large, Large Turbo, and Medium), offering improved image quality, faster generation, and better prompt understanding.",
        impact: "SD 3.5 refined the SD3 architecture with significant quality improvements and introduced turbo models for real-time generation, strengthening Stability AI's competitive position.",
        tags: ["local-model", "open-weights"]
    },
    {
        date: "August 2025",
        title: "Adobe Acrobat Studio Released",
        company: "Adobe",
        description: "Adobe launches Acrobat Studio, an AI-powered workspace featuring PDF Spaces for collaboration, AI Agents for automation, and integrated Express creation tools for transforming insights into presentations.",
        impact: "Acrobat Studio represented Adobe's vision for AI-powered productivity, combining document intelligence, collaboration, and content creation into a unified platform for enterprise users.",
        link: "https://www.adobe.com/acrobat/hub.html"
    },
    {
        date: "January 2025",
        title: "DeepSeek-R1 Released",
        company: "DeepSeek",
        description: "DeepSeek releases DeepSeek-R1 and openly publishes distilled 1.5B to 70B variants, bringing frontier-style reasoning into the open-model ecosystem.",
        impact: "DeepSeek-R1 reset expectations for what users could run locally or self-host, especially through smaller distilled checkpoints that were practical on prosumer hardware.",
        link: "https://api-docs.deepseek.com/news/news250120",
        eventType: "major",
        tags: ["local-model", "open-weights"]
    },
    {
        date: "January 2025",
        title: "Gemini 2.0 Flash Released",
        company: "Google",
        description: "Google releases Gemini 2.0 Flash, a faster and more capable version with improved multimodal capabilities and agentic behaviors.",
        impact: "Gemini 2.0 Flash marked Google's shift toward agentic AI, enabling models to take multi-step actions and use tools autonomously.",
        link: "https://blog.google/technology/google-deepmind/google-gemini-ai-update-december-2024"
    },
    {
        date: "January 2025",
        title: "Gemini Multi-App Capability",
        company: "Google",
        description: "Google introduces Gemini's multi-app capability, allowing it to handle tasks across multiple apps in a single prompt, becoming the default assistant on Galaxy S25.",
        impact: "This feature demonstrated Gemini's ability to orchestrate complex workflows across different applications, bringing AI assistants closer to true personal AI.",
        link: "https://blog.google/products/gemini"
    },
    {
        date: "February 2025",
        title: "Gemini 2.0 Available to Everyone",
        company: "Google",
        description: "Google makes Gemini 2.0 available to everyone, expanding access to its most powerful AI model with agentic capabilities.",
        impact: "The broad availability of Gemini 2.0 democratized access to advanced agentic AI, enabling millions of users to experience next-generation AI capabilities.",
        link: "https://blog.google/technology/google-deepmind/google-gemini-2-0-flash-thinking-exp"
    },
    {
        date: "February 2025",
        title: "ChatGPT Deep Research Launched",
        company: "OpenAI",
        description: "OpenAI launches Deep Research, an autonomous research mode in ChatGPT that generates cited reports by browsing the web for 5-30 minutes.",
        impact: "Deep Research transformed ChatGPT into an autonomous research assistant, capable of conducting thorough investigations and compiling comprehensive reports.",
        link: "https://openai.com/index/introducing-chatgpt-pro"
    },
    {
        date: "February 2025",
        title: "Claude 3.7 Sonnet Released",
        company: "Anthropic",
        description: "Anthropic releases Claude 3.7 Sonnet, its first hybrid reasoning model with controllable extended thinking.",
        impact: "Claude 3.7 Sonnet introduced hybrid reasoning capabilities, allowing users to choose between instant responses or detailed step-by-step reasoning.",
        link: "https://www.anthropic.com/news/claude-3-5-sonnet"
    },
    {
        date: "February 2025",
        title: "Claude Code Released",
        company: "Anthropic",
        description: "Anthropic releases Claude Code, a terminal-based coding assistant for searching codebases, editing files, running commands, and handling developer workflows from the command line.",
        impact: "Claude Code marked Anthropic's push into agentic developer tooling, bringing Claude directly into terminal-centric software engineering workflows.",
        link: "https://www.anthropic.com/news/claude-3-5-sonnet",
        tags: ["agentic-coder", "cli", "developer-tool"]
    },
    {
        date: "February 2025",
        title: "GPT-4.5 \"Orion\" Released",
        company: "OpenAI",
        description: "OpenAI releases GPT-4.5 (codenamed Orion), an intermediate model between GPT-4 and GPT-5 with improved pattern recognition and creative insights.",
        impact: "GPT-4.5 served as a bridge to GPT-5, offering significant improvements while maintaining stability and reliability.",
        link: "https://openai.com/"
    },
    {
        date: "March 2025",
        title: "Gemini 2.5 Pro Released",
        company: "Google",
        description: "Google releases Gemini 2.5 Pro, its most capable experimental model with enhanced reasoning, coding abilities, and security features.",
        impact: "Gemini 2.5 Pro pushed the boundaries of AI capabilities, showcasing Google's continued innovation in multimodal and agentic AI.",
        link: "https://blog.google/technology/ai/google-gemini-ai"
    },
    {
        date: "April 2025",
        title: "Google ADK Published",
        company: "Google",
        description: "Google publishes ADK (Agent Development Kit), a framework to build, orchestrate, and deploy AI agents with tool use, workflows, and multi-agent patterns.",
        impact: "ADK accelerated agent development by giving teams a structured, production-oriented toolkit for designing and shipping reliable agent systems.",
        link: "https://google.github.io/adk-docs/"
    },
    {
        date: "March 2025",
        title: "Claude Gets Web Search",
        company: "Anthropic",
        description: "Anthropic adds web search capabilities to Claude 3.7 Sonnet, enabling responses with current information and clickable citations.",
        impact: "Web search integration made Claude more useful for real-time information needs, competing directly with other AI assistants that had web access.",
        link: "https://www.anthropic.com/news/web-search"
    },
    {
        date: "March 2025",
        title: "OpenAI $40B Funding Round",
        company: "OpenAI",
        description: "OpenAI raises $40 billion at a $300 billion valuation, partnering with SoftBank to scale compute and model research toward AGI.",
        impact: "This massive funding round demonstrated investor confidence in OpenAI's path to AGI and enabled unprecedented scaling of AI infrastructure.",
        link: "https://openai.com/index/openai-announces-partnership-with-softbank-to-invest-up-to-500-billion-in-ai-infrastructure"
    },
    {
        date: "April 2025",
        title: "GPT-4.1 Released",
        company: "OpenAI",
        description: "OpenAI releases GPT-4.1 with mini and nano versions, focusing on coding capabilities and making smaller-model variants with higher-end capabilities.",
        impact: "GPT-4.1's smaller variants made advanced AI more accessible and cost-effective for developers and businesses.",
        link: "https://openai.com/"
    },
    {
        date: "April 2025",
        title: "o4-mini Released",
        company: "OpenAI",
        description: "OpenAI releases o4-mini, a lightweight reasoning model opened to all ChatGPT users, supporting multimodal tasks.",
        impact: "o4-mini brought reasoning capabilities to a broader audience, making advanced AI reasoning accessible to free users.",
        link: "https://openai.com/index/learning-to-reason-with-llms"
    },
    {
        date: "April 2025",
        title: "Codex CLI Released",
        company: "OpenAI",
        description: "OpenAI launches Codex CLI, a lightweight open-source coding agent that runs in the terminal and connects frontier reasoning models to local code and command-line workflows.",
        impact: "Codex CLI brought OpenAI's coding agents directly onto developers' machines, accelerating the shift toward terminal-native, agentic software engineering workflows.",
        link: "https://openai.com/index/introducing-o3-and-o4-mini/",
        tags: ["agentic-coder", "cli", "developer-tool"]
    },
    {
        date: "May 2025",
        title: "Claude 4 Released",
        company: "Anthropic",
        description: "Anthropic releases Claude 4 with Opus and Sonnet variants, featuring major leaps in reasoning, coding, long-context capability, and enhanced memory.",
        impact: "Claude 4 represented a significant advancement in AI capabilities, with Opus 4 handling extended autonomous tasks and demonstrating superior reasoning.",
        link: "https://www.anthropic.com/news/claude-4"
    },
    {
        date: "May 2025",
        title: "Windows AI Foundry Announced",
        company: "Microsoft",
        description: "At Microsoft Build 2025, Microsoft unveils Windows AI Foundry — a unified platform for the full AI developer lifecycle on Windows, covering model selection, optimization, fine-tuning, and deployment on both local devices and the cloud. It succeeds the Windows Copilot Runtime and offers hardware-agnostic support across NPU, GPU, and CPU on AMD, Intel, NVIDIA, and Qualcomm silicon.",
        impact: "Windows AI Foundry positioned Windows as a first-class platform for building and running local AI applications, enabling developers to ship AI-powered experiences without cloud dependency.",
        link: "https://blogs.windows.com/windowsdeveloper/2025/05/19/advancing-windows-for-ai-development-new-platform-capabilities-and-tools-introduced-at-build-2025/",
        eventType: "major"
    },
    {
        date: "May 2025",
        title: "Microsoft Foundry Local Launched",
        company: "Microsoft",
        description: "Also at Microsoft Build 2025, Microsoft launches Foundry Local — a runtime that lets developers deploy and run small and large language models directly on PCs and edge devices with no cloud connectivity required. It ships with an OpenAI-compatible REST API, multi-language SDKs (Python, Node.js), a CLI, and integrates with Ollama and NVIDIA NIMs model catalogs.",
        impact: "Foundry Local made on-device LLM inference a first-party Windows workflow, bringing ultra-low latency, full offline support, and data-privacy guarantees to enterprise and consumer AI applications.",
        link: "https://devblogs.microsoft.com/foundry/foundry-local-a-new-era-of-edge-ai/",
        eventType: "major"
    },
    {
        date: "June 2025",
        title: "Microsoft Phi-4 Released",
        company: "Microsoft",
        description: "Microsoft releases Phi-4, a 14B parameter small language model that outperforms much larger models on reasoning and mathematics benchmarks.",
        impact: "Phi-4 demonstrated that smaller, more efficient models could rival or exceed larger models, advancing the trend toward efficient AI.",
        link: "https://azure.microsoft.com/en-us/blog/introducing-phi-4-microsoft-s-newest-small-language-model-specializing-in-complex-reasoning"
    },
    {
        date: "August 2024",
        title: "LM Studio 0.3.0 Released",
        company: "LM Studio",
        description: "LM Studio 0.3.0 ships built-in local RAG, a light theme, structured outputs, and the ability to serve models over the network, marking the app's maturation into a full local-AI workstation.",
        impact: "LM Studio helped push local LLMs beyond raw inference into a desktop product for browsing models, chatting offline, exposing local APIs, and experimenting without cloud dependencies.",
        link: "https://lmstudio.ai/blog/lmstudio-v0.3.0",
        eventType: "minor",
        tags: ["local-model", "runtime", "desktop-app"]
    },
    {
        date: "June 2025",
        title: "Google AI Studio Launched",
        company: "Google",
        description: "Google launches AI Studio, a comprehensive platform for building, testing, and deploying AI applications with Gemini models and custom tools.",
        impact: "AI Studio democratized AI application development, making it easier for developers to create sophisticated AI-powered products.",
        link: "https://ai.google.dev/aistudio"
    },
    {
        date: "June 2025",
        title: "Gemini CLI Released",
        company: "Google",
        description: "Google announces Gemini CLI, an open-source AI agent that brings Gemini directly into developers' terminals for coding, problem-solving, research, and automation.",
        impact: "Gemini CLI extended Google's AI tooling into the command line, giving developers a terminal-native agent with large context, tool integrations, and open-source extensibility.",
        link: "https://blog.google/technology/developers/introducing-gemini-cli-open-source-ai-agent/",
        tags: ["agentic-coder", "cli", "developer-tool"]
    },
    {
        date: "July 2025",
        title: "Meta AI Agents Platform",
        company: "Meta",
        description: "Meta launches AI Agents Platform, enabling developers to create custom AI agents with memory, tools, and personality for WhatsApp, Instagram, and Messenger.",
        impact: "Meta's platform brought AI agents to billions of users across its social platforms, making AI assistance ubiquitous in daily communication.",
        link: "https://ai.meta.com/"
    },
    {
        date: "August 2025",
        title: "GPT-5 Released",
        company: "OpenAI",
        description: "OpenAI releases GPT-5, described as the smartest, fastest, and most useful model yet, with multimodal capabilities, better reasoning, and large context windows.",
        impact: "GPT-5 marked a major breakthrough in AI capabilities, setting new standards across multiple benchmarks and becoming available to millions of users.",
        link: "https://openai.com/"
    },
    {
        date: "August 2025",
        title: "Nano Banana Released",
        company: "Google",
        description: "Google releases Nano Banana (Gemini 2.5 Flash Image), a viral image generation and editing model producing photorealistic, high-quality images.",
        impact: "Nano Banana went viral and demonstrated Google's capabilities in AI image generation, competing with established players like DALL-E and Midjourney.",
        link: "https://deepmind.google/discover/blog/"
    },
    {
        date: "August 2025",
        title: "Agent Builder Launched",
        company: "OpenAI",
        description: "OpenAI launches Agent Builder, a visual tool for composing, debugging, and publishing multi-step agent workflows (announced at DevDay 2025).",
        impact: "Agent Builder made it significantly easier to build agentic workflows without extensive orchestration or custom code, enabling faster prototyping and deployment of multi-step AI agents.",
        link: "https://openai.com/devday"
    },
    {
        date: "September 30, 2025",
        title: "Sora 2 Launched",
        company: "OpenAI",
        description: "OpenAI launched Sora 2 for ChatGPT Plus and Pro subscribers, with a simultaneous iOS app release (Android followed two months later). Sora 2 added synchronized audio generation, videos up to 25 seconds, character cameos for consistent subjects across scenes, and significantly improved physics simulation over the original Sora.",
        impact: "Sora 2 represented OpenAI's first major step beyond proof-of-concept video AI into a consumer-grade product — making AI video generation accessible on mobile for the first time.",
        link: "https://openai.com/index/sora-2/",
        addedDate: "2026-06-10"
    },
    {
        date: "October 2025",
        title: "gpt-oss Released",
        company: "OpenAI",
        description: "OpenAI releases gpt-oss, including safeguard model variants (e.g., gpt-oss-safeguard-120b and gpt-oss-safeguard-20b), as part of its October 2025 updates.",
        impact: "gpt-oss provided open-source model variants and safety-focused releases that expanded research access and encouraged community-led experimentation while emphasizing safeguards.",
        link: "https://openai.com/",
        tags: ["local-model", "open-weights"]
    },
    {
        date: "September 2025",
        title: "Claude Sonnet 4.5 Released",
        company: "Anthropic",
        description: "Anthropic releases Claude Sonnet 4.5, topping coding benchmarks with 77.2% on SWE-bench and maintaining long focus across tasks for 30+ hours.",
        impact: "Claude Sonnet 4.5 set new records in coding performance, demonstrating exceptional capabilities in software engineering tasks.",
        link: "https://www.anthropic.com/news/claude-sonnet-4-5"
    },
    {
        date: "September 2025",
        title: "Claude Agent SDK Released",
        company: "Anthropic",
        description: "Anthropic releases the Claude Agent SDK, making the infrastructure behind Claude Code available for developers to build their own long-running, permission-aware AI agents.",
        impact: "The Agent SDK expanded Anthropic's agent platform beyond Claude Code itself, giving developers a production-ready foundation for building more capable autonomous workflows.",
        link: "https://www.anthropic.com/news/claude-sonnet-4-5"
    },
    {
        date: "November 2025",
        title: "GPT-5.1 Released",
        company: "OpenAI",
        description: "OpenAI releases GPT-5.1 with personalities, faster responses, and improved coding performance, including GPT-5.1-Codex-Max for complex coding tasks.",
        impact: "GPT-5.1 introduced customizable AI personalities and enhanced coding capabilities, making AI more versatile and useful for specialized tasks.",
        link: "https://openai.com/"
    },
    {
        date: "November 2025",
        title: "Gemini 3 Released",
        company: "Google",
        description: "Google releases Gemini 3 (Pro & DeepThink), a frontier model family with powerful multimodal reasoning, agentic abilities, and large context windows.",
        impact: "Gemini 3 represented Google's most advanced AI model, pushing the boundaries of what AI systems could accomplish across multiple modalities.",
        link: "https://blog.google/technology/ai/google-gemini-ai"
    },
    {
        date: "November 2025",
        title: "Google Antigravity IDE Launched",
        company: "Google",
        description: "Google launches Antigravity IDE in public preview, an AI-powered integrated development environment released concurrently with Gemini 3, supporting Windows, macOS, and Linux.",
        impact: "Antigravity IDE marked a major shift in software development by providing developers with an advanced, AI-native environment tightly integrated with Gemini models.",
        link: "https://antigravity.google"
    },
    {
        date: "November 2025",
        title: "Claude Opus 4.5 Released",
        company: "Anthropic",
        description: "Anthropic releases Claude Opus 4.5 with major upgrades for coding and workplace tasks, featuring Infinite Chats that eliminate context limit errors.",
        impact: "Claude Opus 4.5's Infinite Chats feature removed practical limitations on conversation length, enabling truly extended AI interactions.",
        link: "https://www.anthropic.com/news/claude-opus-4-5"
    },
    {
        date: "December 2025",
        title: "Stability AI 3.0 Released",
        company: "Stability AI",
        description: "Stability AI releases Stable Diffusion 3.0 with major improvements in image quality, prompt adherence, and text rendering within images.",
        impact: "Stable Diffusion 3.0 brought the open-source image generation model closer to proprietary competitors in quality and capabilities.",
        link: "https://stability.ai/news/stable-diffusion-3",
        tags: ["local-model", "open-weights"]
    },
    {
        date: "December 2025",
        title: "Microsoft Copilot Pro Max",
        company: "Microsoft",
        description: "Microsoft launches Copilot Pro Max tier with advanced AI capabilities, priority access to GPT-5, and extended context windows for enterprise users.",
        impact: "Copilot Pro Max targeted power users and enterprises, offering the most advanced AI assistance integrated across Microsoft's ecosystem.",
        link: "https://www.microsoft.com/en-us/microsoft-copilot"
    },
    {
        date: "December 2025",
        title: "Adobe Firefly 3.0 Released",
        company: "Adobe",
        description: "Adobe releases Firefly 3.0 with video generation capabilities, advanced style transfer, and improved integration across Creative Cloud apps.",
        impact: "Firefly 3.0's video generation brought Adobe into competition with Sora and other video AI tools, while maintaining commercial licensing.",
        link: "https://www.adobe.com/products/firefly.html"
    },
    {
        date: "January 2026",
        title: "Gemini Personal Intelligence",
        company: "Google",
        description: "Google launches Personal Intelligence for Gemini, allowing it to access Gmail, Photos, YouTube, and Search history to provide personalized assistance with privacy safeguards.",
        impact: "Personal Intelligence marked a major step toward true AI personal assistants, capable of understanding individual context and preferences.",
        link: "https://blog.google/products/gemini"
    },
    {
        date: "January 2026",
        title: "GPT-5 Pro Released",
        company: "OpenAI",
        description: "OpenAI releases GPT-5 Pro with enhanced reasoning capabilities, better code generation, and improved multimodal understanding, setting new benchmarks across AI tasks.",
        impact: "GPT-5 Pro demonstrated a significant leap in AI capabilities, particularly in complex problem-solving and scientific reasoning.",
        link: "https://openai.com/"
    },
    {
        date: "January 2026",
        title: "Microsoft Copilot Vision",
        company: "Microsoft",
        description: "Microsoft launches Copilot Vision with advanced computer vision capabilities integrated across Office, Windows, and Edge browser for real-time visual understanding.",
        impact: "Copilot Vision brought AI visual understanding to productivity tools, enabling users to interact with content through natural language and images.",
        link: "https://www.microsoft.com/en-us/microsoft-copilot"
    },
    {
        date: "April 2025",
        title: "Meta Llama 4 Scout & Maverick Released",
        company: "Meta",
        description: "Meta releases Llama 4 Scout and Maverick, the first Llama models with native multimodal (text + image) support using a Mixture-of-Experts architecture. Scout features a 10M-token context window (the largest among open models), while Maverick (17B active / 400B total params) rivals GPT-4o and Gemini 2.0 on coding and multilingual benchmarks.",
        impact: "Llama 4 brought frontier-class multimodal and long-context capabilities to the open-weight ecosystem, deployed to billions of users across WhatsApp, Messenger, and Instagram.",
        link: "https://ai.meta.com/blog/llama-4-multimodal-intelligence/",
        eventType: "major",
        tags: ["local-model", "open-weights"]
    },
    {
        date: "February 2026",
        title: "Anthropic Claude Artifacts",
        company: "Anthropic",
        description: "Anthropic introduces Claude Artifacts, allowing Claude to create, preview, and iterate on code, documents, and designs in a dedicated workspace alongside conversations.",
        impact: "Claude Artifacts transformed AI interactions from pure conversation to collaborative creation, enabling real-time co-creation of complex projects.",
        link: "https://www.anthropic.com/news/artifacts"
    },
    {
        date: "February 2026",
        title: "Google NotebookLM Audio Overview",
        company: "Google",
        description: "Google enhances NotebookLM with AI-generated audio overviews that transform documents into engaging podcast-style conversations between AI hosts.",
        impact: "NotebookLM's Audio Overview feature revolutionized how people consume and understand complex documents through AI-generated audio narratives.",
        link: "https://blog.google/technology/ai/notebooklm-audio-overviews"
    },
    {
        date: "January 2025",
        title: "OpenAI Operator Launched",
        company: "OpenAI",
        description: "OpenAI launches Operator as a research preview for Pro subscribers, an AI agent powered by the Computer-Using Agent (CUA) model that autonomously controls a browser to complete real-world tasks such as filling forms, booking travel, and shopping.",
        impact: "Operator marked OpenAI's entry into autonomous web-browsing AI agents, enabling AI to take actions in the real world rather than just generating responses.",
        link: "https://openai.com/index/introducing-operator"
    },
    {
        date: "February 2026",
        title: "Midjourney v7 Released",
        company: "Midjourney",
        description: "Midjourney releases version 7 with dramatic improvements in photorealism, text rendering, and prompt understanding, plus new personalization features.",
        impact: "Midjourney v7 set a new bar for AI image generation quality, with near-perfect photorealism and the ability to generate accurate text within images.",
        link: "https://www.midjourney.com/news"
    },
    {
        date: "February 3, 2026",
        title: "GPT-5.2 Released",
        company: "OpenAI",
        description: "OpenAI releases GPT-5.2, a minor update with performance optimizations, reduced latency, and improved API rate limits for developers.",
        impact: "GPT-5.2 focused on refinements and stability improvements, making the model more efficient for production deployments.",
        link: "https://openai.com/"
    },
    {
        date: "February 5, 2026",
        title: "GPT-5.3 Codex Released",
        company: "OpenAI",
        description: "OpenAI releases GPT-5.3 Codex, a model that notably contributed to its own development, debugging its training and managing its deployment.",
        impact: "Marked a significant milestone toward self-improving AI systems, with the model actively participating in its own development cycle.",
        link: "https://openai.com/",
        eventType: "major"
    },
    {
        date: "February 25, 2026",
        title: "GitHub Copilot CLI Generally Available",
        company: "GitHub",
        description: "GitHub makes Copilot CLI generally available, bringing an agentic GitHub Copilot coding experience directly into the terminal for planning, editing, testing, reviewing, and automating development workflows.",
        impact: "Copilot CLI expanded AI coding assistance beyond editors into terminal-native agent workflows, helping developers keep coding, shell commands, and repository context in one place.",
        link: "https://github.blog/changelog/2026-02-25-github-copilot-cli-is-now-generally-available/",
        eventType: "major"
    },
    {
        date: "February 2026",
        title: "Samsung Galaxy S26 Series",
        company: "Samsung",
        description: "Samsung unveils the Galaxy S26 series, its third-generation AI phone, expanding its agentic AI vision with personalized and connected experiences.",
        impact: "Further embedded agentic AI into consumer hardware and everyday mobile experiences.",
        link: "https://www.samsung.com/",
        eventType: "major"
    },
    {
        date: "January 2026",
        title: "Google Gemini 3 Flash Expansion",
        company: "Google",
        description: "Google makes Gemini 3 Flash the default for Google Search to improve speed for multimodal queries, and introduces GenTabs (Disco) as an AI browser agent.",
        impact: "Deepened the integration of fast, multimodal AI into everyday search and browsing experiences.",
        link: "https://blog.google/",
        eventType: "major"
    },
    {
        date: "January 2026",
        title: "NVIDIA Physical AI Breakthroughs",
        company: "NVIDIA",
        description: "At CES 2026, NVIDIA announces a 'ChatGPT moment for physical AI', introducing new robot-specific chips and the Alpamayo Autonomous Driving Platform.",
        impact: "Accelerated the intersection of AI with robotics and the physical world, bringing advanced AI capabilities to hardware and manufacturing.",
        eventType: "major"
    },
    {
        date: "June 2025",
        title: "Midjourney v6 Released",
        company: "Midjourney",
        description: "Midjourney releases version 6 with substantial improvements in prompt understanding, faster sampling, and new style controls for professional creators.",
        impact: "v6 broadened Midjourney's adoption in professional pipelines by improving fidelity, reducing artifacts, and offering advanced style parameters.",
        link: "https://www.midjourney.com/news/v6",
        eventType: "major"
    },
    {
        date: "April 2025",
        title: "Midjourney v6 Alpha Released",
        company: "Midjourney",
        description: "Midjourney announces a v6 alpha release for early testers featuring experimental photorealism and a new tokenizer for better prompt-to-image alignment.",
        impact: "The v6 alpha allowed artists and power users to test bleeding-edge features and provide feedback ahead of the general release.",
        link: "https://www.midjourney.com/news/v6-alpha",
        eventType: "minor"
    },
    {
        date: "March 2023",
        title: "AutoGPT Released",
        company: "Significant Gravitas",
        description: "Toran Bruce Richards releases AutoGPT, an experimental open-source application showcasing the capabilities of the GPT-4 language model acting autonomously.",
        impact: "Triggered the first massive wave of hype around autonomous AI agents capable of spawning sub-tasks and browsing the web."
    },
    {
        date: "March 2024",
        title: "Devin Announced",
        company: "Cognition",
        description: "Cognition announces Devin, described as the first autonomous AI software engineer, capable of planning, coding, and debugging entire projects.",
        impact: "Sparked intense industry debate over the future of software engineering and popularized the fully autonomous coding agent paradigm.",
        link: "https://www.cognition.ai/blog",
        eventType: "major"
    },
    {
        date: "April 2024",
        title: "OpenHands Launched",
        company: "OpenHands",
        description: "OpenHands (formerly OpenDevin) is launched as an open-source alternative to Devin, aiming to democratize autonomous AI software engineering.",
        impact: "Rapidly accumulated thousands of GitHub stars, proving massive community demand for open-source agentic coding tools."
    },
    {
        date: "November 2025",
        title: "OpenClaw Launched",
        company: "Moltbot",
        description: "Peter Steinberger launches OpenClaw (initially Clawdbot/Moltbot), a free and open-source self-hosted autonomous AI assistant that runs locally and integrates with models like Claude and DeepSeek.",
        impact: "Popularized the concept of locally hosted, persistently running background AI agents that communicate through standard messaging apps like WhatsApp and Telegram.",
        link: "https://open-claw.org",
        eventType: "major"
    },
    {
        date: "May 2020",
        title: "NVIDIA Ampere Architecture (A100)",
        company: "NVIDIA",
        description: "NVIDIA introduces the Ampere architecture and the A100 GPU, offering a substantial leap in performance for AI training and inference workloads.",
        impact: "The A100 became the foundational workhorse for the generative AI boom, powering the training of early massive models like GPT-3.",
        eventType: "major"
    },
    {
        date: "March 2022",
        title: "NVIDIA GTC 2022: Hopper Architecture",
        company: "NVIDIA",
        description: "NVIDIA announces the Hopper architecture and the H100 Tensor Core GPU, featuring a new dedicated Transformer Engine to accelerate large language models.",
        impact: "The H100 became the most sought-after chip on the planet, dramatically accelerating LLM training and making trillion-parameter models feasible.",
        eventType: "major"
    },
    {
        date: "March 2024",
        title: "NVIDIA GTC 2024: Blackwell Architecture",
        company: "NVIDIA",
        description: "NVIDIA unveils the Blackwell architecture (including the B200 and GB200 Superchip), delivering up to a 30x performance increase for LLM inference over Hopper.",
        impact: "Marked a massive generational leap in computing power and efficiency, cementing NVIDIA's absolute dominance in AI data center infrastructure.",
        eventType: "major"
    },
    {
        date: "March 2025",
        title: "NVIDIA GTC 2025: Blackwell Ultra & Rubin",
        company: "NVIDIA",
        description: "NVIDIA announces the Blackwell Ultra AI Factory Platform and previews the next-generation Vera Rubin architecture, optimizing efficiency for autonomous agentic AI.",
        impact: "Highlighted NVIDIA's accelerated yearly cadence of major AI architecture updates, pushing the boundaries of physical robotics and reasoning AI.",
        eventType: "major"
    },
    {
        date: "March 5, 2026",
        title: "GPT-5.4 Released with Native Computer Use",
        company: "OpenAI",
        description: "OpenAI releases GPT-5.4, the first general-purpose model with native, state-of-the-art computer-use capabilities, enabling AI agents to operate computers and carry out complex workflows across applications. It achieved record scores on OSWorld-Verified, WebArena Verified, and scored 83% on OpenAI's GDPval knowledge work benchmark.",
        impact: "GPT-5.4 marked a major step toward fully autonomous AI agents capable of completing real-world computer tasks without human intervention.",
        link: "https://openai.com/",
        eventType: "major"
    },
    {
        date: "April 2, 2026",
        title: "Google Gemma 4 Released",
        company: "Google",
        description: "Google releases Gemma 4, a 31B open-weight model under the Apache 2.0 license with zero commercial restrictions. The model ranked #3 globally on Arena AI among all open models.",
        impact: "Gemma 4 continued Google's commitment to open-source AI, delivering a top-tier open model that enterprises could deploy freely without licensing barriers.",
        link: "https://blog.google/technology/ai",
        eventType: "major",
        tags: ["local-model", "open-weights"]
    },
    {
        date: "April 7, 2026",
        title: "Claude Mythos: Restricted Access Under Project Glasswing",
        company: "Anthropic",
        description: "Anthropic confirms the existence of Claude Mythos, the most capable model it has ever built, but announces it will not be publicly released. Access is restricted to 50 organizations under Project Glasswing, tasked with using Mythos defensively to scan their own infrastructure for vulnerabilities.",
        impact: "A landmark moment in AI safety: the first time a major lab publicly withheld a frontier model from general release due to safety concerns, signaling a new era of responsible deployment decisions.",
        link: "https://www.anthropic.com/",
        eventType: "major"
    },
    {
        date: "April 8, 2026",
        title: "Meta Muse Spark Released",
        company: "Meta",
        description: "Meta debuts Muse Spark (code-named Avocado), the first model from Meta's new Muse series developed by Meta Superintelligence Labs under Alexandr Wang. This marks Meta's first proprietary (non-open-weight) AI model.",
        impact: "Meta's pivot to a proprietary model strategy represented a major strategic shift, signaling that even the strongest open-source AI champion now sees value in closed frontier models.",
        link: "https://www.cnbc.com/2026/04/08/meta-debuts-first-major-ai-model-since-14-billion-deal-to-bring-in-alexandr-wang.html",
        eventType: "major"
    },
    {
        date: "April 26, 2026",
        title: "OpenAI Discontinues Sora",
        company: "OpenAI",
        description: "OpenAI shut down Sora, its text-to-video product, less than 7 months after the Sora 2 launch. The app was fully discontinued on April 26, 2026, with the API planned for shutdown on September 24, 2026. Reasons cited included computation shortages, cost pressures, and a strategic shift toward core enterprise and agentic products.",
        impact: "Sora's discontinuation marked a rare product retreat for OpenAI and signaled that consumer video AI was not financially sustainable at the current state of compute economics — redirecting resources toward higher-margin agent and enterprise offerings.",
        link: "https://help.openai.com/en/articles/20001152-what-to-know-about-the-sora-discontinuation",
        addedDate: "2026-06-10"
    },
    {
        date: "April 2026",
        title: "Zhipu AI GLM-5.1 Released",
        company: "Zhipu AI",
        description: "Zhipu AI releases GLM-5.1 under the MIT license — a 744-billion-parameter mixture-of-experts model with 40B active parameters per forward pass and a 200K context window. On SWE-Bench Pro, it reportedly outperformed both Claude Opus 4.6 and GPT-5.4.",
        impact: "GLM-5.1 demonstrated that open-source models from China could surpass Western frontier models on expert software engineering benchmarks, intensifying global AI competition.",
        link: "https://llm-stats.com/ai-news",
        tags: ["local-model", "open-weights"]
    },
    {
        date: "October 2024",
        title: "Apple Intelligence Launched",
        company: "Apple",
        description: "Apple releases iOS 18.1, iPadOS 18.1, and macOS Sequoia 15.1 with the debut of Apple Intelligence — a personal AI system featuring systemwide writing tools, notification and email summaries, a smarter Siri, and a Photos Clean Up tool. All processing runs on-device or via Private Cloud Compute for larger requests.",
        impact: "Apple Intelligence brought private, on-device AI to hundreds of millions of iPhones, iPads, and Macs, setting a new bar for privacy-preserving personal AI at consumer scale.",
        link: "https://www.apple.com/newsroom/2024/10/apple-intelligence-is-available-today-on-iphone-ipad-and-mac/",
        eventType: "major"
    },
    {
        date: "February 2025",
        title: "xAI Grok 3 Released",
        company: "xAI",
        description: "Elon Musk's xAI releases Grok 3, trained on the 200,000-GPU Colossus supercomputer with 10–15× more compute than prior versions. The model introduces 'Deep Search' for in-depth research and 'Big Brain' extended-thinking mode, outperforming GPT-4o and Gemini 1.5 Pro on several reasoning benchmarks.",
        impact: "Grok 3 established xAI as a credible frontier lab, demonstrating that massive compute investment could rapidly close the gap with OpenAI and Google on reasoning and knowledge tasks.",
        link: "https://x.ai/news/grok-3",
        eventType: "major"
    },
    {
        date: "April 2025",
        title: "OpenAI o3 Released",
        company: "OpenAI",
        description: "OpenAI releases o3 alongside o4-mini on April 16, 2025. o3 is OpenAI's most powerful reasoning model at the time, able to 'think with images' — actively analyzing diagrams, sketches, and charts as part of its chain-of-thought. It achieves new SOTA scores on Codeforces, SWE-bench, and MMMU, and makes 20% fewer major errors than o1 on hard real-world problems.",
        impact: "o3 pushed the boundary of reasoning AI and introduced visual chain-of-thought, making complex multimodal problem-solving practical for developers via the API and GitHub Copilot.",
        link: "https://openai.com/index/introducing-o3-and-o4-mini/",
        eventType: "major"
    },
    {
        date: "May 2025",
        title: "Google I/O 2025: Veo 3, Project Astra & Agent Mode",
        company: "Google",
        description: "At Google I/O 2025, Google unveils Veo 3 (high-quality AI video generation with synchronized audio and dialogue), Project Astra (a universal real-time AI assistant operating through camera and audio on phones and smart glasses), and Gemini Agent Mode (an autonomous task-execution layer for booking, research, and scheduling). Imagen 4 and the Android XR glasses with live AR experiences are also announced.",
        impact: "Google I/O 2025 marked Google's most AI-dense keynote ever, cementing Gemini as the backbone of Search, Workspace, Android, and a new wave of autonomous agent experiences for everyday users.",
        link: "https://blog.google/innovation-and-ai/products/google-io-2025-all-our-announcements/",
        eventType: "major"
    },
    {
        date: "November 2024",
        title: "Model Context Protocol (MCP) Released",
        company: "Anthropic",
        description: "Anthropic releases MCP (Model Context Protocol) as an open standard for connecting AI assistants to external data sources, tools, and business systems via a universal client-server interface. OpenAI, Google DeepMind, and major developer tools rapidly adopt it, making MCP the de facto 'USB standard' for AI-tool integration.",
        impact: "MCP eliminated the need for custom one-off integrations between AI systems and external tools, creating a universal agentic connector layer that became the backbone of enterprise AI agent deployments.",
        link: "https://www.anthropic.com/news/model-context-protocol",
        eventType: "major"
    },
    {
        date: "December 2024",
        title: "OpenAI o1 Full Model & ChatGPT Pro Launched",
        company: "OpenAI",
        description: "OpenAI releases the full o1 reasoning model with multimodal (text + image) support, alongside a new $200/month ChatGPT Pro subscription tier that provides access to 'o1 Pro' — a higher-compute variant that makes 30%+ fewer errors on hard problems. The launch is part of OpenAI's '12 Days of Shipmas' event.",
        impact: "The full o1 launch marked a major leap in AI reasoning reliability, while ChatGPT Pro set a new premium tier for power users and enterprises requiring the highest accuracy on complex scientific, math, and coding problems.",
        link: "https://openai.com/index/o1-and-new-tools-for-developers/",
        eventType: "major"
    },
    {
        date: "December 2024",
        title: "OpenAI Sora Publicly Launched",
        company: "OpenAI",
        description: "OpenAI publicly launches Sora Turbo, its text-to-video model, for ChatGPT Plus and Pro subscribers. Users can generate HD videos up to 20 seconds long in various aspect ratios, with features like a storyboard tool and asset remixing. C2PA watermarking is embedded in all outputs.",
        impact: "Sora's public release opened a new frontier in AI video generation, enabling creators to produce high-quality video from text prompts and positioning AI as a serious tool for creative filmmaking.",
        link: "https://openai.com/index/sora-is-here/",
        eventType: "major"
    },
    {
        date: "December 2024",
        title: "DeepSeek V3 Released",
        company: "DeepSeek",
        description: "DeepSeek releases DeepSeek-V3, a 671B-parameter Mixture-of-Experts open-source model (37B active per token) trained on 14.8 trillion tokens at a cost of ~$5.6M in compute — an order of magnitude cheaper than competitors. It rivals Claude 3.5 Sonnet and GPT-4o on major benchmarks and delivers 60 tokens/second throughput.",
        impact: "DeepSeek V3 shocked the AI industry by demonstrating that frontier-class performance could be achieved at a fraction of the cost, triggering a global re-evaluation of AI compute economics and cementing China's open-source labs as serious competitors.",
        link: "https://api-docs.deepseek.com/news/news1226",
        eventType: "major",
        tags: ["local-model", "open-weights"]
    },
    {
        date: "April 2025",
        title: "Gemini 2.5 Flash Released",
        company: "Google",
        description: "Google announces Gemini 2.5 Flash in preview, the first fully hybrid reasoning model in the Gemini family. Developers can tune the model's 'thinking budget' (0 to 24,576 tokens) to precisely control quality, latency, and cost per request. It supports a 1M-token context window and text, image, video, and audio inputs.",
        impact: "Gemini 2.5 Flash made controllable reasoning affordable at scale, giving developers the first production-ready tool to dial reasoning depth dynamically — ideal for high-volume, cost-sensitive agent workloads.",
        link: "https://developers.googleblog.com/en/start-building-with-gemini-25-flash/",
        eventType: "major"
    },
    {
        date: "July 2025",
        title: "xAI Grok 4 Released",
        company: "xAI",
        description: "xAI releases Grok 4 and 'Grok 4 Heavy' on July 9, 2025, trained on 200,000 GPUs with 6× improved training efficiency over Grok 3. Grok 4 introduces a multi-agent reasoning architecture, native tool use (Python, web/X search, code editors), and claims PhD-level performance across all subjects. Benchmarks include 44.4% on Humanity's Last Exam and 75% on SWE-Bench.",
        impact: "Grok 4 positioned xAI as a genuine top-tier frontier lab, matching or exceeding GPT-5 and Gemini 3 on key reasoning benchmarks and introducing a $300/month SuperGrok Heavy tier for the most demanding agentic workloads.",
        link: "https://x.ai/news/grok-4",
        eventType: "major"
    },
    {
        date: "February 2026",
        title: "Claude Sonnet 4.6 with Agent Teams Released",
        company: "Anthropic",
        description: "Anthropic releases Claude Sonnet 4.6 as the new default model across all tiers. It introduces 'Agent Teams' — coordinating 2–16 Claude instances in parallel for complex multi-step workflows — and reaches near-Opus performance (79.6% SWE-bench, 72.5% OSWorld) at Sonnet pricing. A 1M-token context window is available in beta.",
        impact: "Claude Sonnet 4.6 brought flagship-grade agentic orchestration to mid-tier pricing, democratizing enterprise-grade agent workflows and making multi-Claude task parallelism practical for production deployments.",
        link: "https://www.anthropic.com/news/claude-sonnet-4-6",
        eventType: "major"
    },
    {
        date: "February 2026",
        title: "Gemini 3.1 Pro Released",
        company: "Google",
        description: "Google releases Gemini 3.1 Pro on February 19, 2026, delivering more than double the reasoning performance of Gemini 3 Pro with a 77.1% score on ARC-AGI-2. The model supports 1M-token context, a 65K-token output limit, three compute tiers (Low/Medium/High), and advanced agentic capabilities including code-based animation and complex system synthesis.",
        impact: "Gemini 3.1 Pro dominated 12 of 18 leading benchmarks and set a new standard for agentic reasoning in production, surpassing GPT-5 on several software engineering metrics and becoming the default model in Google Antigravity IDE.",
        link: "https://cloud.google.com/blog/products/ai-machine-learning/gemini-3-1-pro-on-gemini-cli-gemini-enterprise-and-vertex-ai",
        eventType: "major"
    },
    {
        date: "February 2026",
        title: "DeepSeek V3.2 Released",
        company: "DeepSeek",
        description: "DeepSeek releases V3.2, a 685B-parameter open-source MoE model (37B active per token) under the MIT license. It unifies fast conversational response and deep multi-step reasoning via intelligent routing, supports a 262K-token context window, and introduces DeepSeek Sparse Attention (DSA) for efficiency. The 'Speciale' variant achieved gold-medal results at the 2025 IMO and IOI.",
        impact: "DeepSeek V3.2 continued China's open-source AI surge by reaching near-GPT-5 performance under MIT licensing, giving enterprises and researchers a cost-efficient, agent-ready frontier model with no proprietary restrictions.",
        link: "https://huggingface.co/deepseek-ai/DeepSeek-V3.2",
        eventType: "major",
        tags: ["local-model", "open-weights"]
    },

    // ── RECENT NEWS (July 2026) ──────────────────────────────────────────────
    {
        date: "July 2026",
        title: "Claude Sonnet 5 Released",
        company: "Anthropic",
        description: "Anthropic released Claude Sonnet 5, a major generational leap over the Claude 4 Sonnet line. The model achieves top-tier scores on coding, reasoning, and instruction-following benchmarks while remaining more cost-efficient than Opus-class models. It introduces improved agentic reliability — significantly fewer dropped instructions and self-corrections in multi-step workflows — and supports an expanded 300K-token context window.",
        impact: "Claude Sonnet 5 became the new default for cost-effective frontier performance, widely adopted by developers and enterprises for production agentic pipelines, and set a new bar for the 'capable-but-affordable' tier of AI models.",
        eventType: "major",
        addedDate: "2026-07-26"
    },
    {
        date: "July 2026",
        title: "GPT-5.6 Terra & Luna Released",
        company: "OpenAI",
        description: "OpenAI released two distinct GPT-5.6 variants simultaneously: Terra (optimized for factual grounding, structured data, and enterprise workflows) and Luna (optimized for creative tasks, long-form generation, and nuanced dialogue). Both models feature a 256K-token context window and improved tool use. The dual-variant release reflects OpenAI's shift toward task-specialized frontier models rather than a single universal flagship.",
        impact: "The Terra/Luna split signals a new era of OpenAI product strategy — specializing frontier-class models for distinct workload profiles — and directly competes with Anthropic's Opus/Sonnet tiering and Google's Gemini Ultra/Flash branching.",
        eventType: "major",
        addedDate: "2026-07-26"
    },
    {
        date: "July 2026",
        title: "Gemini 3.6 Flash Released",
        company: "Google",
        description: "Google released Gemini 3.6 Flash, the fastest and most efficient model in the Gemini 3 family. Building on Gemini 3.5 Flash, the 3.6 variant brings 40% lower latency, improved multimodal understanding (image, audio, video), and native support for agentic tool calls with structured outputs. It is available in Google AI Studio and via the Gemini API with competitive token pricing.",
        impact: "Gemini 3.6 Flash set a new speed-performance frontier for mid-tier AI APIs, making real-time AI applications (voice assistants, live document analysis, agentic loops) more accessible and cost-efficient for developers worldwide.",
        eventType: "major",
        addedDate: "2026-07-26"
    },
    {
        date: "July 2026",
        title: "Kimi K2.7 Code Released by Moonshot AI",
        company: "Moonshot AI",
        description: "Moonshot AI (China) released Kimi K2.7 Code, a frontier coding-specialized model trained on an extensive corpus of code, math, and reasoning data. The model achieves competitive SWE-bench scores and supports a 128K-token context window. Kimi K2.7 Code is available via API and as an open-weights release, making it one of the strongest open coding models from a Chinese AI lab.",
        impact: "Kimi K2.7 Code expands the global competitive landscape for frontier coding AI, demonstrating that Chinese AI labs are closing the gap with US counterparts on specialized tasks, and provides open-weights access at a tier previously dominated by closed models.",
        eventType: "major",
        addedDate: "2026-07-26"
    },
    {
        date: "July 2026",
        title: "MAI-Code-1 Flash Released by Microsoft",
        company: "Microsoft",
        description: "Microsoft released MAI-Code-1 Flash, the first model from the MAI (Microsoft AI) model family — a series of frontier models developed internally at Microsoft Research. The Flash variant is optimized for low-latency code generation, completion, and review tasks, and is deeply integrated into GitHub Copilot, Azure AI Foundry, and VS Code. It is trained on a proprietary dataset of enterprise and open-source code.",
        impact: "MAI-Code-1 Flash marks Microsoft's transition from model consumer to model producer, reducing its dependence on OpenAI for coding AI and enabling tighter integration between its AI models and developer tools ecosystem.",
        eventType: "major",
        addedDate: "2026-07-26"
    },

    // ── FORGOTTEN HISTORICAL MILESTONES ────────────────────────────────────────
    {
        date: "May 11, 1997",
        title: "IBM Deep Blue Defeats Garry Kasparov",
        company: "IBM",
        description: "IBM's Deep Blue chess-playing supercomputer defeated world chess champion Garry Kasparov in a six-game match, winning 3.5–2.5. It was the first time a computer beat a reigning world chess champion under standard tournament conditions. Deep Blue evaluated up to 200 million chess positions per second using specialized hardware and handcrafted evaluation functions.",
        impact: "The match became a cultural watershed — proof that machines could defeat humans at the highest levels of strategic reasoning. It ignited global debate about machine intelligence and is widely credited with catalyzing renewed investment in AI research throughout the late 1990s and 2000s.",
        link: "https://www.ibm.com/history/deep-blue",
        eventType: "major"
    },
    {
        date: "February 16, 2011",
        title: "IBM Watson Defeats Champions on Jeopardy!",
        company: "IBM",
        description: "IBM's Watson question-answering system defeated Jeopardy! all-time champions Ken Jennings and Brad Rutter in a televised three-game exhibition match. Watson processed natural language questions, searched its 4TB knowledge base, and generated confident answers in real time. It ran on 90 IBM Power 750 servers and used a combination of information retrieval, machine learning, and probabilistic reasoning.",
        impact: "Watson's Jeopardy! victory demonstrated that machines could master natural language understanding and common-sense reasoning at human-expert levels, inspiring a wave of NLP research and enterprise AI investment. It put 'cognitive computing' into the mainstream business lexicon.",
        link: "https://www.ibm.com/watson",
        eventType: "major"
    },
    {
        date: "January 2013",
        title: "Word2Vec Released by Google",
        company: "Google",
        description: "Researchers at Google (led by Tomáš Mikolov) published Word2Vec, a set of neural network models for learning dense vector representations of words from large text corpora. Word2Vec introduced the concepts of CBOW and Skip-Gram training objectives, enabling vectors that captured semantic relationships — famously, 'king − man + woman ≈ queen'.",
        impact: "Word2Vec became one of the most cited NLP papers in history, laying the foundation for modern word embeddings, sentence representations, and ultimately transformer-based language models. It demonstrated that unsupervised pre-training on text could encode rich linguistic structure.",
        link: "https://arxiv.org/abs/1301.3781",
        eventType: "major"
    },
    {
        date: "June 10, 2014",
        title: "Generative Adversarial Networks (GANs) Introduced",
        company: "Google",
        description: "Ian Goodfellow and colleagues (then at Université de Montréal) published 'Generative Adversarial Nets,' introducing the GAN framework — two neural networks (a generator and discriminator) trained in opposition to produce realistic synthetic data. The original paper demonstrated image generation and laid out the min-max game-theoretic training objective.",
        impact: "GANs became the dominant paradigm for generative AI for nearly a decade, powering deepfakes, image synthesis, style transfer, and data augmentation. They were a direct intellectual predecessor to diffusion models and the entire modern generative image/video AI ecosystem.",
        link: "https://arxiv.org/abs/1406.2661",
        eventType: "major"
    },
    {
        date: "October 2018",
        title: "BERT Released by Google",
        company: "Google",
        description: "Google researchers published 'BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding,' introducing a new technique for NLP pre-training that achieved state-of-the-art results on 11 NLP benchmarks. BERT used masked language modeling and next-sentence prediction to learn bidirectional contextual representations from unlabeled text at scale.",
        impact: "BERT revolutionized NLP by proving that a single pre-trained model, fine-tuned on downstream tasks, could outperform highly specialized architectures. It directly influenced the 'pre-train then fine-tune' paradigm adopted by virtually every major language model that followed.",
        link: "https://arxiv.org/abs/1810.04805",
        eventType: "major"
    },
    {
        date: "February 2019",
        title: "GPT-2 Released — Too Dangerous to Publish",
        company: "OpenAI",
        description: "OpenAI released GPT-2, a 1.5B-parameter language model trained on 40GB of internet text. OpenAI controversially staged the release over several months, initially withholding the full model due to concerns about misuse for disinformation and synthetic text generation. GPT-2 could generate coherent multi-paragraph text and complete prompts with remarkable fluency.",
        impact: "GPT-2 sparked the first major public debate about AI safety in language models and dual-use risk. It demonstrated that large-scale unsupervised language modeling could produce human-like text, foreshadowing the capabilities — and societal risks — of GPT-3, ChatGPT, and beyond.",
        link: "https://openai.com/research/language-unsupervised",
        eventType: "major"
    },
    {
        date: "November 2020",
        title: "AlphaFold Wins CASP14 — Protein Folding Solved",
        company: "Google DeepMind",
        description: "DeepMind's AlphaFold 2 system achieved unprecedented accuracy at CASP14 (Critical Assessment of Protein Structure Prediction), predicting protein structures with atomic-level precision. It solved a challenge that had stumped biologists for 50 years, achieving a median GDT score of 92.4 — comparable to experimental methods. The result stunned the structural biology community.",
        impact: "AlphaFold is widely regarded as the most significant scientific achievement in biology in decades. It accelerated drug discovery, enzyme engineering, and our understanding of disease mechanisms. DeepMind later released the full AlphaFold database of 200+ million protein structures, freely accessible to all researchers.",
        link: "https://www.deepmind.com/research/highlighted-research/alphafold",
        eventType: "major"
    },
    {
        date: "January 2021",
        title: "CLIP Released by OpenAI",
        company: "OpenAI",
        description: "OpenAI released CLIP (Contrastive Language–Image Pre-training), a neural network trained on 400 million image-text pairs scraped from the internet using a contrastive learning objective. CLIP learns a joint embedding space for images and text, enabling zero-shot image classification and open-vocabulary visual reasoning without task-specific training.",
        impact: "CLIP became the backbone of an entire generation of image-text AI systems, including DALL-E 2, Stable Diffusion's text-image alignment, and many multimodal models. Its zero-shot capability demonstrated that language supervision could replace labeled vision datasets, transforming computer vision research.",
        link: "https://openai.com/research/clip",
        eventType: "major"
    },
    {
        date: "July 2021",
        title: "AlphaFold 2 Published in Nature",
        company: "Google DeepMind",
        description: "DeepMind published the full AlphaFold 2 methodology in Nature and released the AlphaFold Protein Structure Database in partnership with EMBL-EBI, containing predicted structures for nearly all catalogued proteins — over 350,000 initially, later expanded to 200+ million. The model uses an Evoformer neural network architecture to process multiple sequence alignments and pairwise residue relationships.",
        impact: "The public release democratized structural biology, enabling researchers worldwide to access high-quality protein structure predictions for free. It accelerated antibiotic resistance research, cancer drug development, and fundamental biology at a scale previously impossible.",
        link: "https://www.nature.com/articles/s41586-021-03819-2",
        eventType: "major"
    },
    {
        date: "August 2021",
        title: "OpenAI Codex Released",
        company: "OpenAI",
        description: "OpenAI released Codex, a GPT-3-derived model fine-tuned on 159GB of Python code from GitHub repositories. Codex could translate natural language descriptions into working code across more than a dozen programming languages. It was the foundational model powering GitHub Copilot and available to developers via the OpenAI API.",
        impact: "Codex was the first widely deployed AI code completion system at frontier scale, proving that large language models could act as productive programming assistants. It directly seeded the AI coding tool market — GitHub Copilot, which Codex powered, would go on to serve millions of developers.",
        link: "https://openai.com/blog/openai-codex",
        eventType: "major"
    },
    {
        date: "January 2022",
        title: "InstructGPT / RLHF Paper Published",
        company: "OpenAI",
        description: "OpenAI published 'Training language models to follow instructions with human feedback,' introducing the InstructGPT methodology — using Reinforcement Learning from Human Feedback (RLHF) to fine-tune GPT-3 to be more helpful, harmless, and honest. Human raters ranked model outputs, training a reward model used to steer the base model via PPO.",
        impact: "RLHF became the standard alignment technique for all major conversational AI systems — ChatGPT, Claude, Gemini, and others. InstructGPT was the direct predecessor of ChatGPT and is arguably the most influential alignment paper published, transforming how language models are made safe and useful.",
        link: "https://arxiv.org/abs/2203.02155",
        eventType: "major"
    },
    {
        date: "September 2022",
        title: "OpenAI Whisper Released",
        company: "OpenAI",
        description: "OpenAI released Whisper, an open-source automatic speech recognition (ASR) system trained on 680,000 hours of multilingual and multitask supervised data collected from the web. Whisper demonstrated near-human accuracy across dozens of languages, including low-resource ones, and was released as open weights.",
        impact: "Whisper democratized high-quality speech recognition: its open-weights release enabled thousands of applications, from local transcription tools to real-time captioning systems. It directly powers voice features across the AI ecosystem and remains a standard benchmark and deployment choice for speech-to-text.",
        link: "https://openai.com/research/whisper",
        eventType: "major"
    },
    {
        date: "October 2022",
        title: "LangChain Released",
        company: "LangChain",
        description: "Harrison Chase released LangChain, an open-source Python (later also TypeScript) framework for building applications with large language models. LangChain introduced abstractions for chains, agents, memory, tools, and retrieval-augmented generation (RAG), making it dramatically easier to compose LLM-powered workflows. It quickly became the most-starred AI repo on GitHub.",
        impact: "LangChain catalyzed the LLM application development ecosystem, providing the scaffolding that tens of thousands of developers used to build production AI applications. Its core abstractions — chains, agents, RAG — became industry-standard patterns that shaped how the entire AI application layer evolved.",
        link: "https://github.com/langchain-ai/langchain",
        eventType: "major"
    },

    // ── MISSING 2023 EVENTS ────────────────────────────────────────────────────
    {
        date: "January 23, 2023",
        title: "Microsoft Invests $10B in OpenAI",
        company: "Microsoft",
        description: "Microsoft announced a multiyear, multibillion-dollar investment in OpenAI — later confirmed at approximately $10 billion — as part of a deepened partnership. The deal extended their existing Azure hosting relationship and gave Microsoft exclusive licensing rights to deploy OpenAI models commercially. Microsoft gained the right to embed OpenAI's models across its entire product portfolio.",
        impact: "The investment was the defining commercial AI deal of 2023, accelerating Microsoft's AI integration across Office, Bing, GitHub, and Azure. It also validated the generative AI business model and triggered an industry-wide race among hyperscalers to either acquire or invest in leading AI labs.",
        link: "https://news.microsoft.com/2023/01/23/microsoftandopenaiextendpartnership/",
        eventType: "major"
    },
    {
        date: "February 1, 2023",
        title: "ChatGPT Plus Launched",
        company: "OpenAI",
        description: "OpenAI launched ChatGPT Plus, a $20/month subscription tier offering priority access, faster response speeds, and early access to new features and models — starting with GPT-4 when it launched in March 2023. It was OpenAI's first consumer revenue product, transitioning ChatGPT from a free research preview into a commercial service.",
        impact: "ChatGPT Plus established the subscription model for consumer AI assistants and generated hundreds of millions in annual recurring revenue within months. It became the blueprint for AI monetization that virtually every competitor — Google, Anthropic, xAI — adopted.",
        link: "https://openai.com/blog/chatgpt-plus",
        eventType: "major"
    },
    {
        date: "November 6, 2023",
        title: "OpenAI DevDay 2023: GPTs & Assistants API",
        company: "OpenAI",
        description: "At the first OpenAI DevDay, OpenAI announced the GPT Store (custom GPTs), the Assistants API (with persistent threads, code interpreter, and file retrieval), and a massive GPT-4 Turbo upgrade with a 128K-token context window and knowledge cutoff extended to April 2023. OpenAI also cut API prices by up to 3×. The event introduced the concept of 'GPTs' — custom, shareable AI assistants built on top of ChatGPT.",
        impact: "DevDay 2023 transformed ChatGPT from a chat interface into a platform, creating a new app distribution channel and seeding the custom AI assistant ecosystem. The Assistants API laid groundwork for agentic workflows, and GPT-4 Turbo's price cuts made frontier AI accessible to a much broader developer audience.",
        link: "https://openai.com/blog/new-models-and-developer-products-announced-at-devday",
        eventType: "major"
    },

    // ── MISSING 2024 EVENTS ────────────────────────────────────────────────────
    {
        date: "April 18, 2024",
        title: "Meta Llama 3 Released",
        company: "Meta",
        description: "Meta released Llama 3 in 8B and 70B parameter sizes under a permissive open-source license. Llama 3 demonstrated a step-change in open-model quality, outperforming many previously closed models on standard benchmarks. It used a 15-trillion-token pre-training dataset, a 128K-token vocabulary, and grouped query attention. Meta simultaneously released Llama 3 in Meta AI across WhatsApp, Messenger, Instagram, and Facebook.",
        impact: "Llama 3 was the most capable open-weights model available at launch and further eroded the gap between open and closed models. Its release democratized frontier AI capabilities for researchers, startups, and self-hosters, accelerating the open-source AI ecosystem.",
        link: "https://ai.meta.com/blog/meta-llama-3/",
        eventType: "major"
    },
    {
        date: "May 13, 2024",
        title: "GPT-4o Released",
        company: "OpenAI",
        description: "OpenAI unveiled GPT-4o ('o' for omni) at a live Spring Update event — a natively multimodal model processing text, images, and audio in a unified architecture. GPT-4o responded to voice with human-like speed (232ms average), could perceive emotion from tone and facial expression, and matched GPT-4 Turbo on text while being significantly faster and cheaper. It became the default ChatGPT model for free users.",
        impact: "GPT-4o was the biggest consumer AI moment of 2024 — the live demo of real-time emotional voice interaction went viral and defined the public's vision of conversational AI. It also made frontier-quality text AI free for the first time, drastically expanding ChatGPT's user base.",
        link: "https://openai.com/index/hello-gpt-4o/",
        eventType: "major"
    },
    {
        date: "May 2024",
        title: "Gemini 1.5 Flash Released",
        company: "Google",
        description: "Google released Gemini 1.5 Flash at Google I/O 2024 — a lighter, faster, and significantly cheaper variant of Gemini 1.5 Pro built using distillation. It retained the landmark 1-million-token context window while delivering much lower latency and pricing, making long-context multimodal AI accessible for high-throughput developer applications.",
        impact: "Gemini 1.5 Flash proved that the 1M-token context window — previously exclusive to premium models — could be offered at commodity pricing, pushing long-context AI into mainstream developer workflows and sparking a competitive race on context length and efficiency.",
        link: "https://developers.googleblog.com/en/gemini-15-flash-8b-is-now-generally-available-for-use/",
        eventType: "major"
    },
    {
        date: "June 20, 2024",
        title: "Claude 3.5 Sonnet Released",
        company: "Anthropic",
        description: "Anthropic released Claude 3.5 Sonnet, which immediately topped major benchmark leaderboards across coding (HumanEval), reasoning (MMLU, GPQA), and instruction-following tasks — surpassing both GPT-4o and Gemini 1.5 Pro. The model introduced Computer Use (public beta), allowing Claude to directly control a desktop computer by viewing screenshots and executing mouse/keyboard actions.",
        impact: "Claude 3.5 Sonnet was Anthropic's first model to definitively beat OpenAI and Google on major benchmarks, establishing Anthropic as a serious capability competitor. The Computer Use feature previewed the agentic AI era and directly influenced OpenAI's later operator and computer-use product launches.",
        link: "https://www.anthropic.com/news/claude-3-5-sonnet",
        eventType: "major"
    },
    {
        date: "July 18, 2024",
        title: "GPT-4o mini Released",
        company: "OpenAI",
        description: "OpenAI released GPT-4o mini, a small, fast, and cheap multimodal model priced at $0.15/$0.60 per million input/output tokens — roughly 15× cheaper than GPT-4o. Despite its size, it outperformed GPT-3.5 Turbo across most benchmarks and became the default model for ChatGPT free-tier users, as well as a popular choice for high-volume API workloads.",
        impact: "GPT-4o mini set a new efficiency standard for capable AI at minimal cost, enabling developers to run AI-powered features at scale economics. It accelerated commoditization of 'good-enough' AI, making GPT-4-class reasoning accessible in budget-constrained applications.",
        link: "https://openai.com/index/gpt-4o-mini-advancing-cost-efficient-intelligence/",
        eventType: "major"
    },

    // ── NEW FUTURE & PLANNED EVENTS ───────────────────────────────────────────
    {
        date: "August 2026 (Planned)",
        title: "EU AI Act GPAI Code of Practice Enforcement",
        company: "EU",
        description: "The European Union's AI Act requires all providers of General Purpose AI (GPAI) models with systemic risk — including GPT-series, Gemini, Claude, and Llama — to comply with the Code of Practice by August 2026. Obligations include adversarial testing, incident reporting, model card disclosure, and cybersecurity assessments. Non-compliance carries fines of up to 3% of global annual turnover.",
        impact: "The first binding AI regulation for frontier model developers globally, the EU AI Act's enforcement marks the end of self-regulation for large AI labs in European markets and is expected to reshape how all major AI companies document, test, and deploy models worldwide.",
        link: "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai",
        eventType: "planned"
    },
    {
        date: "2027 (Planned)",
        title: "OpenAI Stargate Phase 2: 500,000 GPUs Online",
        company: "OpenAI",
        description: "OpenAI's Stargate infrastructure project — a joint venture with SoftBank, Oracle, and MGX announced in January 2025 with a $500B commitment — is expected to complete its Phase 2 data centers in 2027. Phase 2 targets over 500,000 NVIDIA Blackwell Ultra or next-generation GPUs across US facilities in Texas and Arizona, representing the largest dedicated AI compute cluster ever built.",
        impact: "Stargate Phase 2 would give OpenAI an unprecedented compute advantage — an order-of-magnitude more training capacity than current leading clusters — enabling training of models at scales not yet publicly attempted and potentially defining the ceiling of AI capability for the late 2020s.",
        link: "https://openai.com/index/announcing-the-stargate-project/",
        eventType: "planned"
    },
    {
        date: "2027 (Planned)",
        title: "Anthropic Claude 5 Expected",
        company: "Anthropic",
        description: "Anthropic is expected to release Claude 5 in 2027, representing the next major architectural generation after the Claude 4/Fable series. Based on Anthropic's release cadence and public roadmap signals, Claude 5 is anticipated to target agentic autonomy, improved long-horizon task completion, and substantially lower hallucination rates. Anthropic has hinted at continued investment in Constitutional AI and alignment interpretability.",
        impact: "Claude 5 will mark Anthropic's next major bet on safety-first frontier AI and is expected to be a key competitive response to GPT-6 and Gemini 4, with implications for enterprise adoption, agentic deployment norms, and AI alignment research.",
        eventType: "planned"
    },
    {
        date: "2027 (Planned)",
        title: "Google Gemini 4 Ultra Expected",
        company: "Google",
        description: "Google is widely expected to release Gemini 4 Ultra in 2027, succeeding the Gemini 3 family. Based on Google's annual Gemini cadence and research signals, Gemini 4 is anticipated to feature deep integration of Google's Search and Knowledge Graph at inference time, improved native tool use for agentic tasks, and a new multimodal architecture. Google DeepMind's Veo and Project Astra research are expected to feed into Gemini 4's video and embodied reasoning capabilities.",
        impact: "Gemini 4 Ultra represents Google's flagship response to GPT-6 and Claude 5. With Google's unmatched real-time data access and consumer deployment scale across Search, Android, and Workspace, Gemini 4 could define consumer AI for billions of users.",
        eventType: "planned"
    },
    {
        date: "Late 2027 (Planned)",
        title: "OpenAI GPT-6 Full Release",
        company: "OpenAI",
        description: "Following GPT-6's anticipated initial release in Q4 2026, a full GPT-6 rollout with enhanced capabilities, expanded context, and API availability is expected through 2027. OpenAI is expected to include GPT-6's multimodal and agentic capabilities across ChatGPT, the API, and Sora's next generation, targeting autonomous task completion over hours-long horizons.",
        impact: "GPT-6 full deployment could mark the first commercially available model capable of reliably completing multi-day complex tasks without human intervention — a meaningful milestone toward practical general-purpose AI assistants at scale.",
        eventType: "planned"
    },
    {
        date: "2028 (Planned)",
        title: "Autonomous AI Research Agents Milestone",
        company: "Google DeepMind",
        description: "Google DeepMind, Anthropic, and OpenAI have each signaled 2027–2028 as a target for AI systems capable of autonomously conducting and publishing novel scientific research — running experiments, forming hypotheses, and iterating without continuous human oversight. Projects like AlphaProof, AlphaCode, and Anthropic's interpretability roadmap are expected to converge toward this milestone.",
        impact: "If achieved, self-directed AI research agents would represent the most significant acceleration of scientific discovery in history — potentially compressing decades of progress in biology, materials science, and medicine into years. This milestone is central to the 'intelligence explosion' debate and AGI trajectory forecasts.",
        eventType: "planned"
    }
].reverse(); // Reverse timeline to show most recent events first

// Logo mapping for companies and tools
const logoMap = {
    'Adobe': './assets/logos/adobe.png',
    'OpenAI': './assets/logos/openai.png',
    'Google': './assets/logos/google.png',
    'Google DeepMind': './assets/logos/google.png',
    'Anthropic': './assets/logos/anthropic.png',
    'Microsoft': './assets/logos/microsoft.png',
    'Meta': './assets/logos/meta.png',
    'Stability AI': './assets/logos/stabilityai.png',
    'Midjourney': './assets/logos/midjourney.png',
    'Ollama': './assets/logos/ollama.png',
    'LM Studio': 'https://lmstudio.ai/favicon.ico',
    'DeepSeek': 'https://chat.deepseek.com/favicon.ico',
    'Apple': 'https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png',
    'Samsung': 'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg',
    'NVIDIA': 'https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg',
    'GitHub': 'https://github.githubassets.com/favicons/favicon.svg',
    'xAI': 'https://x.ai/favicon.ico',
    'Mistral AI': 'https://mistral.ai/favicon.ico',
    'US Government': 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Seal_of_the_United_States_Department_of_Commerce.svg',
    'IBM': 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
    'LangChain': 'https://python.langchain.com/img/favicon.ico',
    'Moonshot AI': 'https://www.moonshot.cn/favicon.ico',
    'EU': 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg',
    'University of Toronto': 'https://upload.wikimedia.org/wikipedia/en/0/04/Utoronto_coa.svg'
};

// Product-specific logos (for tools that might need custom logos)
const productLogos = {
    'GPT-1 Released': './assets/logos/openai.png',
    'OpenAI Founded': './assets/logos/openai.png',
    'GPT-3 Released': './assets/logos/openai.png',
    'GPT-4 Released': './assets/logos/openai.png',
    'GPT-4.5 "Orion" Released': './assets/logos/openai.png',
    'GPT-4.1 Released': './assets/logos/openai.png',
    'GPT-4 Turbo Released': './assets/logos/openai.png',
    'GPT-5 Released': './assets/logos/openai.png',
    'GPT-5.1 Released': './assets/logos/openai.png',
    'GPT-5.2 Released': './assets/logos/openai.png',
    'Codex CLI Released': './assets/logos/openai.png',
    'GitHub Copilot Technical Preview': 'https://github.githubassets.com/favicons/favicon.svg',
    'GitHub Copilot Generally Available': 'https://github.githubassets.com/favicons/favicon.svg',
    'GitHub Copilot X Announced': 'https://github.githubassets.com/favicons/favicon.svg',
    'GitHub Copilot Chat Generally Available': 'https://github.githubassets.com/favicons/favicon.svg',
    'GitHub Copilot in the CLI Generally Available': 'https://github.githubassets.com/favicons/favicon.svg',
    'GitHub Copilot Agent Mode Preview': 'https://github.githubassets.com/favicons/favicon.svg',
    'GitHub Copilot Coding Agent Launched': 'https://github.githubassets.com/favicons/favicon.svg',
    'GitHub Copilot CLI Public Preview': 'https://github.githubassets.com/favicons/favicon.svg',
    'GitHub Copilot CLI Generally Available': 'https://github.githubassets.com/favicons/favicon.svg',
    'ChatGPT Launched': './assets/logos/openai.png',
    'ChatGPT Gets Vision': './assets/logos/openai.png',
    'ChatGPT Deep Research Launched': './assets/logos/openai.png',
    'DALL-E Launched': './assets/logos/openai.png',
    'DALL-E 2 Released': './assets/logos/openai.png',
    'Sora Announced': './assets/logos/openai.png',
    'o1 Models Announced': './assets/logos/openai.png',
    'o3 Released': './assets/logos/openai.png',
    'o4-mini Released': './assets/logos/openai.png',
    'Claude Released': './assets/logos/anthropic.png',
    'Claude 2 Released': './assets/logos/anthropic.png',
    'Claude 3 Released': './assets/logos/anthropic.png',
    'Claude 3.7 Sonnet Released': './assets/logos/anthropic.png',
    'Claude Code Released': './assets/logos/anthropic.png',
    'Claude Gets Web Search': './assets/logos/anthropic.png',
    'Claude 4 Released': './assets/logos/anthropic.png',
    'Claude Opus 4.5 Released': './assets/logos/anthropic.png',
    'Claude Sonnet 4.5 Released': './assets/logos/anthropic.png',
    'Gemini Pro Released': './assets/logos/google.png',
    'Gemini 1.5 Pro': './assets/logos/google.png',
    'Gemini 2.0 Flash Released': './assets/logos/google.png',
    'Gemini Multi-App Capability': './assets/logos/google.png',
    'Gemini 2.0 Available to Everyone': './assets/logos/google.png',
    'Gemini 2.5 Pro Released': './assets/logos/google.png',
    'Gemini CLI Released': './assets/logos/google.png',
    'Gemini 3 Released': './assets/logos/google.png',
    'Gemini Personal Intelligence': './assets/logos/google.png',
    'Bard Announced': './assets/logos/google.png',
    'PaLM Announced': './assets/logos/google.png',
    'Imagen Released': './assets/logos/google.png',
    'Transformer Paper Published': './assets/logos/google.png',
    'AlphaGo Defeats Lee Sedol': './assets/logos/google.png',
    'Nano Banana Released': './assets/logos/google.png',
    'LLaMA Released': './assets/logos/meta.png',
    'Stable Diffusion Released': './assets/logos/stabilityai.png',
    'Midjourney Launched': './assets/logos/midjourney.png',
    'Midjourney v2 Released': './assets/logos/midjourney.png',
    'Midjourney Open Beta': './assets/logos/midjourney.png',
    'Midjourney v5': './assets/logos/midjourney.png',
    'Midjourney Web App Launched': './assets/logos/midjourney.png',
    'Midjourney v6 Alpha Released': './assets/logos/midjourney.png',
    'Midjourney v6 Released': './assets/logos/midjourney.png',
    'Midjourney v7 Released': './assets/logos/midjourney.png',
    'Adobe Sensei Launched': './assets/logos/adobe.png',
    'Adobe Firefly Beta Launched': './assets/logos/adobe.png',
    'Adobe Firefly 1.0 Released': './assets/logos/adobe.png',
    'Adobe Acrobat AI Assistant Launched': './assets/logos/adobe.png',
    'Adobe Firefly 2.0 Released': './assets/logos/adobe.png',
    'Adobe Firefly 3.0 Released': './assets/logos/adobe.png',
    'Adobe Acrobat Studio Released': './assets/logos/adobe.png',
    'GPT-5 Pro Released': './assets/logos/openai.png',
    'OpenAI Operator Launched': './assets/logos/openai.png',
    'Microsoft Copilot Vision': './assets/logos/microsoft.png',
    'Microsoft Phi-4 Released': './assets/logos/microsoft.png',
    'LM Studio First Ships': 'https://lmstudio.ai/favicon.ico',
    'LM Studio 0.3.0 Released': 'https://lmstudio.ai/favicon.ico',
    'DeepSeek-R1 Released': 'https://chat.deepseek.com/favicon.ico',
    'Microsoft Copilot Pro Max': './assets/logos/microsoft.png',
    'Windows AI Foundry Announced': './assets/logos/microsoft.png',
    'Microsoft Foundry Local Launched': './assets/logos/microsoft.png',
    'Meta Llama 4 Scout & Maverick Released': './assets/logos/meta.png',
    'Meta AI Agents Platform': './assets/logos/meta.png',
    'Anthropic Claude Artifacts': './assets/logos/anthropic.png',
    'Google NotebookLM Audio Overview': './assets/logos/google.png',
    'Google AI Studio Launched': './assets/logos/google.png',
    'Google I/O 2025: Veo 3, Project Astra & Agent Mode': './assets/logos/google.png',
    'Apple Intelligence Launched': 'https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png',
    'xAI Grok 3 Released': 'https://x.ai/favicon.ico',
    'OpenAI o3 Released': './assets/logos/openai.png',
    'OpenAI o1 Full Model & ChatGPT Pro Launched': './assets/logos/openai.png',
    'OpenAI Sora Publicly Launched': './assets/logos/openai.png',
    'Model Context Protocol (MCP) Released': './assets/logos/anthropic.png',
    'Claude Sonnet 4.6 with Agent Teams Released': './assets/logos/anthropic.png',
    'Gemini 2.5 Flash Released': './assets/logos/google.png',
    'Gemini 3.1 Pro Released': './assets/logos/google.png',
    'xAI Grok 4 Released': 'https://x.ai/favicon.ico',
    'DeepSeek V3 Released': 'https://chat.deepseek.com/favicon.ico',
    'DeepSeek V3.2 Released': 'https://chat.deepseek.com/favicon.ico',
    'Stability AI 3.0 Released': './assets/logos/stabilityai.png'
};

// Get logo URL for an event
function getLogoUrl(event) {
    // First check if the product/tool has a specific logo
    if (productLogos[event.title]) {
        return productLogos[event.title];
    }
    // Then check company logo
    if (logoMap[event.company]) {
        return logoMap[event.company];
    }
    // Fallback: try to construct from company name
    const companyDomain = event.company.toLowerCase().replace(/\s+/g, '') + '.com';
    return `https://logo.clearbit.com/${companyDomain}`;
}

// Return initials for a company name (used as a fallback when logo fails to load)
function getInitials(name) {
    if (!name) return '';
    const parts = name.trim().split(/\s+/);
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[1][0]).toUpperCase();
}


// Extract year from date string
function extractYear(dateString) {
    const match = dateString.match(/\d{4}/);
    return match ? match[0] : null;
}

function isNewEvent(event) {
    if (!event.addedDate) return false;
    return (Date.now() - new Date(event.addedDate).getTime()) < 7 * 24 * 60 * 60 * 1000;
}

// Parse various date string formats into a comparable numeric key (YYYYMMDD)
function parseEventDate(dateString) {
    if (!dateString) return 0;
    // Remove parenthetical notes like (Planned)
    let s = dateString.replace(/\(.*\)/, '').trim();

    const monthMap = {
        january: 1, jan: 1,
        february: 2, feb: 2,
        march: 3, mar: 3,
        april: 4, apr: 4,
        may: 5,
        june: 6, jun: 6,
        july: 7, jul: 7,
        august: 8, aug: 8,
        september: 9, sep: 9, sept: 9,
        october: 10, oct: 10,
        november: 11, nov: 11,
        december: 12, dec: 12
    };

    // Month + Day? + Year (e.g., "March 2026", "May 12, 2026")
    const monthYear = s.match(/(January|Jan|February|Feb|March|Mar|April|Apr|May|June|Jun|July|Jul|August|Aug|September|Sept|Sep|October|Oct|November|Nov|December|Dec)\s+(?:(\d{1,2})(?:st|nd|rd|th)?,?\s+)?(\d{4})/i);
    if (monthYear) {
        const month = monthMap[monthYear[1].toLowerCase()];
        const day = monthYear[2] ? parseInt(monthYear[2], 10) : 0;
        const year = parseInt(monthYear[3], 10);
        return year * 10000 + (month || 12) * 100 + day;
    }

    // Quarter (e.g., Q2 2027)
    const quarter = s.match(/Q([1-4])\s*(\d{4})/i);
    if (quarter) {
        const q = parseInt(quarter[1], 10);
        const year = parseInt(quarter[2], 10);
        const month = q * 3; // end of quarter
        return year * 10000 + month * 100 + 0;
    }

    // Early/Mid/Late YEAR or phrases like "Mid 2027"
    const part = s.match(/(Early|Mid|Late)\s*(\d{4})/i);
    if (part) {
        const p = part[1].toLowerCase();
        const year = parseInt(part[2], 10);
        let month = 6; // default to mid-year
        if (p === 'early') month = 3;
        if (p === 'late') month = 9;
        return year * 10000 + month * 100 + 0;
    }

    // Fallback: just extract year and use month=12
    const yearOnly = s.match(/(\d{4})/);
    if (yearOnly) {
        const year = parseInt(yearOnly[1], 10);
        return year * 10000 + 1200;
    }

    return 0;
}

// Initialize year filters
function initYearFilters() {
    const yearSelect = document.getElementById('yearFilter');
    const years = new Set();

    timelineEvents.forEach(event => {
        const year = extractYear(event.date);
        if (year) {
            years.add(year);
        }
    });

    const sortedYears = Array.from(years).sort((a, b) => parseInt(b) - parseInt(a));

    // Add year options
    sortedYears.forEach(year => {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        yearSelect.appendChild(option);
    });
}

// Initialize company filters from the dataset so new timeline entries stay filterable
function initCompanyFilters() {
    const companySelect = document.getElementById('companyFilter');
    if (!companySelect) return;

    companySelect.innerHTML = '<option value="all">All Companies</option>';

    const companies = Array.from(new Set(timelineEvents.map(event => event.company)))
        .sort((a, b) => a.localeCompare(b));

    companies.forEach(company => {
        const option = document.createElement('option');
        option.value = company;
        option.textContent = company;
        companySelect.appendChild(option);
    });
}

function formatTagLabel(tag) {
    return tag
        .split('-')
        .map(part => part.charAt(0).toUpperCase() + part.slice(1))
        .join(' ');
}

function initTagFilters() {
    const tagSelect = document.getElementById('tagFilter');
    if (!tagSelect) return;

    tagSelect.innerHTML = '<option value="all">All Tags</option>';

    const tags = Array.from(new Set(
        timelineEvents.flatMap(event => Array.isArray(event.tags) ? event.tags : [])
    )).sort((a, b) => a.localeCompare(b));

    tags.forEach(tag => {
        const option = document.createElement('option');
        option.value = tag;
        option.textContent = formatTagLabel(tag);
        tagSelect.appendChild(option);
    });
}

function renderTagChips(tags = []) {
    if (!Array.isArray(tags) || tags.length === 0) return '';

    const chips = tags.map(tag => `<span class="event-tag">${formatTagLabel(tag)}</span>`).join('');
    return `<div class="event-tags">${chips}</div>`;
}

// Initialize the timeline
function initTimeline() {
    const timelineContainer = document.getElementById('timelineEvents');
    const plannedEventsGrid = document.getElementById('plannedEventsGrid');
    const plannedCount = document.getElementById('plannedCount');

    timelineContainer.innerHTML = '';
    plannedEventsGrid.innerHTML = '';

    // Sort events newest -> oldest using a normalized date key
    timelineEvents.sort((a, b) => parseEventDate(b.date) - parseEventDate(a.date));

    // Separate planned and historical events (maintaining sort order)
    const plannedEvents = timelineEvents.filter(event => event.eventType === 'planned');
    const historicalEvents = timelineEvents.filter(event => event.eventType !== 'planned');

    // Update planned count
    if (plannedCount) plannedCount.textContent = plannedEvents.length;

    // Render planned events in the grid
    plannedEvents.forEach((event, index) => {
        const plannedCard = createPlannedEventCard(event, index);
        plannedEventsGrid.appendChild(plannedCard);
    });

    // Render historical events in timeline
    historicalEvents.forEach((event, index) => {
        const eventElement = createEventElement(event, index);
        timelineContainer.appendChild(eventElement);
    });

    updateTimelineEventAlignment();
    updatePlannedSectionVisibility(plannedEvents.length);

    // Animate events on scroll
    observeEvents();
}

// Create planned event card
function createPlannedEventCard(event, index) {
    const card = document.createElement('div');
    card.className = 'planned-event-card';
    card.style.animationDelay = `${index * 0.1}s`;

    const logoUrl = getLogoUrl(event);

    const newBadge = isNewEvent(event) ? '<span class="new-badge">New</span>' : '';

    card.innerHTML = `
        <div class="planned-event-header">
            <div class="logo-placeholder"></div>
            <div class="planned-event-info">
                <h3>${event.title}</h3>
                <div class="planned-event-date">${event.date}${newBadge}</div>
            </div>
        </div>
        <div class="planned-event-company">${event.company}</div>
        <div class="planned-event-description">${event.description}</div>
    `;

    // Load logo with fallback
    const placeholder = card.querySelector('.logo-placeholder');
    const img = new Image();
    img.className = 'planned-event-logo';
    img.alt = `${event.company} logo`;
    img.src = logoUrl;
    img.onload = () => {
        if (placeholder) placeholder.replaceWith(img);
    };
    img.onerror = () => {
        const initials = document.createElement('div');
        initials.className = 'planned-event-logo initials';
        initials.textContent = getInitials(event.company);
        if (placeholder) placeholder.replaceWith(initials);
    };

    // Add dataset attributes so planned cards can be filtered
    card.dataset.eventType = 'planned';
    card.dataset.company = event.company;
    card.dataset.title = event.title;
    card.dataset.description = event.description;
    card.dataset.date = event.date;
    card.dataset.tags = (event.tags || []).join('|');
    const plannedYear = extractYear(event.date);
    if (plannedYear) card.dataset.year = plannedYear;

    const tagsMarkup = renderTagChips(event.tags);
    if (tagsMarkup) {
        card.insertAdjacentHTML('beforeend', tagsMarkup);
    }

    // Click to open modal
    card.addEventListener('click', () => openModal(event));

    return card;
}

// Create event element
function createEventElement(event, index) {
    const eventDiv = document.createElement('div');
    eventDiv.className = 'timeline-event';
    if (event.eventType === 'minor') {
        eventDiv.classList.add('minor-event');
    }
    if (event.eventType === 'planned') {
        eventDiv.dataset.eventType = 'planned';
    }
    eventDiv.dataset.company = event.company;
    eventDiv.dataset.title = event.title;
    eventDiv.dataset.description = event.description;
    eventDiv.dataset.date = event.date;
    eventDiv.dataset.tags = (event.tags || []).join('|');
    const year = extractYear(event.date);
    if (year) {
        eventDiv.dataset.year = year;
    }
    eventDiv.style.animationDelay = `${index * 0.1}s`;

    const dot = document.createElement('div');
    dot.className = 'timeline-dot';

    const content = document.createElement('div');
    content.className = 'timeline-event-content';
    const logoUrl = getLogoUrl(event);

    // Add minor event badge if applicable
    const minorBadge = event.eventType === 'minor' ? '<span class="minor-badge">Minor Update</span>' : '';
    const newBadge = isNewEvent(event) ? '<span class="new-badge">New</span>' : '';

    // Build header structure without the image so we can handle load/error programmatically
    content.innerHTML = `
        <div class="event-header">
            <div class="event-header-left">
                <div class="logo-placeholder"></div>
                <div class="event-header-text">
                    <div class="event-date">${event.date}${minorBadge}${newBadge}</div>
                    <div class="event-title">${event.title}</div>
                </div>
            </div>
        </div>
        <div class="event-company">${event.company}</div>
        ${renderTagChips(event.tags)}
        <div class="event-description">${event.description}</div>
    `;

    // Attempt to load logo; on error show initials fallback
    (function loadLogo() {
        const placeholder = content.querySelector('.logo-placeholder');
        const img = new Image();
        img.className = 'event-logo';
        img.alt = `${event.company} logo`;
        img.src = logoUrl;
        img.onload = () => {
            if (placeholder && img) placeholder.replaceWith(img);
        };
        img.onerror = () => {
            // create initials fallback
            const initials = document.createElement('div');
            initials.className = 'event-logo initials';
            initials.textContent = getInitials(event.company);
            if (placeholder) placeholder.replaceWith(initials);
        };
    })();

    content.addEventListener('click', () => openModal(event));

    eventDiv.appendChild(dot);
    eventDiv.appendChild(content);

    return eventDiv;
}

function updateTimelineEventAlignment() {
    const allEvents = document.querySelectorAll('.timeline-event');
    allEvents.forEach((event) => {
        event.classList.remove('timeline-event-left', 'timeline-event-right');
    });

    const visibleEvents = document.querySelectorAll('.timeline-event:not(.hidden)');
    visibleEvents.forEach((event, index) => {
        if (index % 2 === 0) {
            event.classList.add('timeline-event-left');
        } else {
            event.classList.add('timeline-event-right');
        }
    });
}

function updatePlannedSectionVisibility(visiblePlanned) {
    const plannedSection = document.getElementById('plannedEventsSection');
    if (!plannedSection) return;
    plannedSection.classList.toggle('is-empty', visiblePlanned === 0);
}

// Current filter state
let currentFilters = {
    company: 'all',
    year: 'all',
    tag: 'all',
    search: ''
};

// Apply filters
function applyFilters() {
    const events = document.querySelectorAll('.timeline-event');
    const emptyState = document.getElementById('emptyState');
    const timelineList = document.getElementById('timelineEvents');
    const showMinorEvents = document.getElementById('showMinorEvents')?.checked ?? true;
    let visibleCount = 0;
    const searchTerm = currentFilters.search.toLowerCase().trim();

    // Filter timeline (historical) events
    events.forEach(event => {
        const eventCompany = event.dataset.company;
        const eventYear = event.dataset.year;
        const eventTitle = event.dataset.title?.toLowerCase() || '';
        const eventDescription = event.dataset.description?.toLowerCase() || '';
        const eventDate = event.dataset.date?.toLowerCase() || '';
        const eventTags = event.dataset.tags?.toLowerCase() || '';
        const isMinorEvent = event.classList.contains('minor-event');

        const companyMatch = currentFilters.company === 'all' || eventCompany === currentFilters.company;
        const yearMatch = currentFilters.year === 'all' || eventYear === currentFilters.year;
        const tagMatch = currentFilters.tag === 'all' || eventTags.split('|').includes(currentFilters.tag);
        const minorEventMatch = showMinorEvents || !isMinorEvent;

        // Search matches title, description, company, date, or tags
        const searchMatch = searchTerm.length === 0 ||
            eventTitle.includes(searchTerm) ||
            eventDescription.includes(searchTerm) ||
            eventCompany.toLowerCase().includes(searchTerm) ||
            eventDate.includes(searchTerm) ||
            eventTags.includes(searchTerm);

        if (companyMatch && yearMatch && tagMatch && searchMatch && minorEventMatch) {
            event.classList.remove('hidden');
            visibleCount++;
        } else {
            event.classList.add('hidden');
        }
    });

    // Filter planned (future) events
    const plannedCards = document.querySelectorAll('.planned-event-card');
    let visiblePlanned = 0;
    plannedCards.forEach(card => {
        const eventCompany = card.dataset.company;
        const eventYear = card.dataset.year;
        const eventTitle = card.dataset.title?.toLowerCase() || '';
        const eventDescription = card.dataset.description?.toLowerCase() || '';
        const eventDate = card.dataset.date?.toLowerCase() || '';
        const eventTags = card.dataset.tags?.toLowerCase() || '';

        const companyMatch = currentFilters.company === 'all' || eventCompany === currentFilters.company;
        const yearMatch = currentFilters.year === 'all' || eventYear === currentFilters.year;
        const tagMatch = currentFilters.tag === 'all' || eventTags.split('|').includes(currentFilters.tag);

        const searchMatch = searchTerm.length === 0 ||
            eventTitle.includes(searchTerm) ||
            eventDescription.includes(searchTerm) ||
            (eventCompany && eventCompany.toLowerCase().includes(searchTerm)) ||
            eventDate.includes(searchTerm) ||
            eventTags.includes(searchTerm);

        if (companyMatch && yearMatch && tagMatch && searchMatch) {
            card.classList.remove('hidden');
            visiblePlanned++;
        } else {
            card.classList.add('hidden');
        }
    });

    visibleCount += visiblePlanned;

    // Show/hide empty state
    if (emptyState) {
        const totalRendered = events.length + plannedCards.length;
        if (visibleCount === 0 && totalRendered > 0) {
            emptyState.style.display = 'flex';
        } else {
            emptyState.style.display = 'none';
        }
    }

    // Update planned count badge to reflect visible planned items
    const plannedCountEl = document.getElementById('plannedCount');
    if (plannedCountEl) plannedCountEl.textContent = visiblePlanned;

    // Hide the planned section when nothing matches
    updatePlannedSectionVisibility(visiblePlanned);

    // Re-balance visible items on left/right lanes for consistent layout after filtering
    updateTimelineEventAlignment();

    // Tighten spacing in filtered mode for denser, more consistent results
    if (timelineList) {
        const hasActiveFilters =
            currentFilters.company !== 'all' ||
            currentFilters.year !== 'all' ||
            currentFilters.tag !== 'all' ||
            searchTerm.length > 0 ||
            !showMinorEvents;
        timelineList.classList.toggle('filtered-view', hasActiveFilters);
    }

    // Update active filter badges
    updateActiveFilters();
}

// Filter events by company or year
function setFilter(filterType, value) {
    currentFilters[filterType] = value;
    applyFilters();

    // Smooth scroll to first visible event (timeline or planned) if year filter is selected
    if (filterType === 'year' && value !== 'all') {
        setTimeout(() => {
            const firstVisibleTimeline = document.querySelector('.timeline-event:not(.hidden)');
            const firstVisiblePlanned = document.querySelector('.planned-event-card:not(.hidden)');
            const firstVisible = firstVisibleTimeline || firstVisiblePlanned;
            if (firstVisible) {
                firstVisible.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 100);
    }
}

// Update active filter badges
function updateActiveFilters() {
    const activeFiltersContainer = document.getElementById('activeFilters');
    if (!activeFiltersContainer) return;

    activeFiltersContainer.innerHTML = '';
    const badges = [];

    if (currentFilters.company !== 'all') {
        badges.push({
            type: 'company',
            label: currentFilters.company,
            value: currentFilters.company
        });
    }

    if (currentFilters.year !== 'all') {
        badges.push({
            type: 'year',
            label: currentFilters.year,
            value: currentFilters.year
        });
    }

    if (currentFilters.tag !== 'all') {
        badges.push({
            type: 'tag',
            label: formatTagLabel(currentFilters.tag),
            value: currentFilters.tag
        });
    }

    if (currentFilters.search.trim().length > 0) {
        badges.push({
            type: 'search',
            label: `"${currentFilters.search}"`,
            value: ''
        });
    }

    badges.forEach(badge => {
        const badgeEl = document.createElement('div');
        badgeEl.className = 'active-filter-badge';
        badgeEl.innerHTML = `
            <span class="badge-label">${badge.type === 'company' ? 'Company' : badge.type === 'year' ? 'Year' : badge.type === 'tag' ? 'Tag' : 'Search'}: ${badge.label}</span>
            <button class="badge-remove" data-type="${badge.type}" data-value="${badge.value}">
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                    <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
            </button>
        `;
        activeFiltersContainer.appendChild(badgeEl);
    });

    // Add click handlers for badge removal
    activeFiltersContainer.querySelectorAll('.badge-remove').forEach(btn => {
        btn.addEventListener('click', () => {
            const type = btn.dataset.type;
            if (type === 'company') {
                document.getElementById('companyFilter').value = 'all';
                currentFilters.company = 'all';
            } else if (type === 'year') {
                document.getElementById('yearFilter').value = 'all';
                currentFilters.year = 'all';
            } else if (type === 'tag') {
                document.getElementById('tagFilter').value = 'all';
                currentFilters.tag = 'all';
            } else if (type === 'search') {
                document.getElementById('searchFilter').value = '';
                currentFilters.search = '';
                document.getElementById('clearSearch').style.display = 'none';
            }
            applyFilters();
        });
    });
}

// Clear all filters
function clearFilters() {
    currentFilters.company = 'all';
    currentFilters.year = 'all';
    currentFilters.tag = 'all';
    currentFilters.search = '';

    document.getElementById('companyFilter').value = 'all';
    document.getElementById('yearFilter').value = 'all';
    document.getElementById('tagFilter').value = 'all';
    document.getElementById('searchFilter').value = '';
    document.getElementById('clearSearch').style.display = 'none';

    applyFilters();
}

// Open modal with event details
function openModal(event) {
    const modal = document.getElementById('eventModal');
    const modalBody = document.getElementById('modalBody');
    const logoUrl = getLogoUrl(event);

    const linkHTML = event.link ? `
        <div class="event-link-section">
            <a href="${event.link}" target="_blank" rel="noopener noreferrer" class="event-link-button">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                Official Announcement
            </a>
        </div>
    ` : '';

    modalBody.innerHTML = `
        <div class="modal-header-content">
            <div class="modal-logo-placeholder"></div>
            <div class="modal-title-section">
                <h2>${event.title}</h2>
                <div class="event-date">${event.date}</div>
                <div class="event-company">${event.company}</div>
                ${renderTagChips(event.tags)}
            </div>
        </div>
        <div class="event-description">${event.description}</div>
        <div class="event-impact">
            <h3>Impact</h3>
            <p>${event.impact}</p>
        </div>
        ${linkHTML}
    `;

    // Load modal logo with fallback
    (function loadModalLogo() {
        const placeholder = modalBody.querySelector('.modal-logo-placeholder');
        const img = new Image();
        img.className = 'modal-logo';
        img.alt = `${event.company} logo`;
        img.src = logoUrl;
        img.onload = () => {
            if (placeholder) placeholder.replaceWith(img);
        };
        img.onerror = () => {
            const initials = document.createElement('div');
            initials.className = 'modal-logo initials';
            initials.textContent = getInitials(event.company);
            if (placeholder) placeholder.replaceWith(initials);
        };
    })();

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    const modal = document.getElementById('eventModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Intersection Observer for scroll animations
function observeEvents() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.timeline-event').forEach(event => {
        observer.observe(event);
    });
}

// Theme Management
function initTheme() {
    // Get saved theme or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
}

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
}

// ChatGPT Apps SDK note: the timeline entry below documents the SDK and example integrations (e.g., Booking.com)

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Initialize theme
    initTheme();

    // ChatGPT Apps SDK is included in the main `timelineEvents` dataset

    // Theme toggle button
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    initYearFilters();
    initCompanyFilters();
    initTagFilters();
    initTimeline();
    // No in-page apps cards — this page documents the SDK and its timeline entry above.

    // Company filter select
    document.getElementById('companyFilter').addEventListener('change', (e) => {
        setFilter('company', e.target.value);
    });

    // Year filter select
    document.getElementById('yearFilter').addEventListener('change', (e) => {
        setFilter('year', e.target.value);
    });

    document.getElementById('tagFilter').addEventListener('change', (e) => {
        setFilter('tag', e.target.value);
    });

    // Clear filters button
    document.getElementById('clearFilters').addEventListener('click', clearFilters);

    // Minor events toggle
    const showMinorEventsToggle = document.getElementById('showMinorEvents');
    if (showMinorEventsToggle) {
        showMinorEventsToggle.addEventListener('change', () => {
            applyFilters();
        });
    }

    // Search filter input
    const searchFilter = document.getElementById('searchFilter');
    const clearSearchBtn = document.getElementById('clearSearch');

    searchFilter.addEventListener('input', (e) => {
        const searchValue = e.target.value;
        currentFilters.search = searchValue;

        // Show/hide clear button
        if (searchValue.length > 0) {
            clearSearchBtn.style.display = 'flex';
        } else {
            clearSearchBtn.style.display = 'none';
        }

        // Apply filter after 2 characters
        if (searchValue.length >= 2 || searchValue.length === 0) {
            applyFilters();
        }
    });

    // Clear search button
    clearSearchBtn.addEventListener('click', () => {
        searchFilter.value = '';
        currentFilters.search = '';
        clearSearchBtn.style.display = 'none';
        applyFilters();
    });

    // Planned events toggle
    const plannedToggle = document.getElementById('plannedEventsToggle');
    const plannedSection = document.getElementById('plannedEventsSection');

    plannedToggle.addEventListener('click', () => {
        plannedSection.classList.toggle('collapsed');
    });

    // Modal close
    document.querySelector('.close-modal').addEventListener('click', closeModal);
    document.getElementById('eventModal').addEventListener('click', (e) => {
        if (e.target.id === 'eventModal') {
            closeModal();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });

});
