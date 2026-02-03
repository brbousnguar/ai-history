// Timeline Events Data
const timelineEvents = [
    {
        date: "November 2016",
        title: "Adobe Sensei Launched",
        company: "Adobe",
        description: "Adobe introduces Sensei, an AI and machine learning framework integrated across Adobe's Creative Cloud, Document Cloud, and Experience Cloud products.",
        impact: "Adobe Sensei brought AI capabilities to creative professionals, enabling intelligent features like auto-tagging, content-aware fill, and automated workflows across Adobe's entire product suite."
    },
    {
        date: "June 2020",
        title: "GPT-3 Released",
        company: "OpenAI",
        description: "OpenAI releases GPT-3, a language model with 175 billion parameters, demonstrating remarkable text generation capabilities.",
        impact: "GPT-3 showed the world the potential of large language models, sparking widespread interest in AI capabilities."
    },
    {
        date: "January 2021",
        title: "DALL-E Launched",
        company: "OpenAI",
        description: "OpenAI introduces DALL-E, an AI system that can create images from text descriptions, revolutionizing creative AI.",
        impact: "DALL-E demonstrated that AI could understand and generate visual content from natural language, opening new creative possibilities."
    },
    {
        date: "February 2022",
        title: "Midjourney Launched",
        company: "Midjourney",
        description: "Midjourney launches its first version (v1) through Discord, introducing AI-powered image generation to early beta users.",
        impact: "Midjourney's Discord-based approach created a unique community-driven platform for AI art generation, setting it apart from competitors."
    },
    {
        date: "April 2022",
        title: "DALL-E 2 Released",
        company: "OpenAI",
        description: "DALL-E 2 launches with significantly improved image quality, resolution, and understanding of complex prompts.",
        impact: "DALL-E 2 made AI-generated art accessible to millions, sparking debates about creativity, copyright, and the future of art."
    },
    {
        date: "April 2022",
        title: "Midjourney v2 Released",
        company: "Midjourney",
        description: "Midjourney releases version 2 with improved image quality and more sophisticated prompt understanding.",
        impact: "Version 2 marked significant improvements in Midjourney's artistic capabilities, attracting more users to the platform."
    },
    {
        date: "May 2022",
        title: "PaLM Announced",
        company: "Google",
        description: "Google unveils Pathways Language Model (PaLM) with 540 billion parameters, showcasing advanced reasoning capabilities.",
        impact: "PaLM demonstrated Google's commitment to large-scale AI research and set new benchmarks for language understanding."
    },
    {
        date: "July 2022",
        title: "Imagen Released",
        company: "Google",
        description: "Google releases Imagen, a text-to-image model competing with DALL-E 2, featuring photorealistic image generation.",
        impact: "Imagen showcased Google's capabilities in generative AI and intensified competition in the text-to-image space."
    },
    {
        date: "July 2022",
        title: "Midjourney Open Beta",
        company: "Midjourney",
        description: "Midjourney opens its Discord server to the public, allowing anyone to join and use the AI image generation service.",
        impact: "The public launch via Discord made Midjourney accessible to millions, creating a vibrant community of artists and creators using AI for artistic expression."
    },
    {
        date: "August 2022",
        title: "Stable Diffusion Released",
        company: "Stability AI",
        description: "Stability AI releases Stable Diffusion as open-source, making high-quality image generation accessible to everyone.",
        impact: "Stable Diffusion democratized AI image generation, enabling millions of developers and creators to build with the technology."
    },
    {
        date: "November 2022",
        title: "ChatGPT Launched",
        company: "OpenAI",
        description: "OpenAI releases ChatGPT to the public, a conversational AI that quickly becomes the fastest-growing consumer application in history.",
        impact: "ChatGPT brought AI to mainstream consciousness, reaching 100 million users in just 2 months and transforming how people interact with AI."
    },
    {
        date: "February 2023",
        title: "Bard Announced",
        company: "Google",
        description: "Google announces Bard, its conversational AI assistant powered by LaMDA, entering direct competition with ChatGPT.",
        impact: "Bard marked Google's entry into the consumer AI chatbot market, intensifying the AI race between major tech companies."
    },
    {
        date: "March 2023",
        title: "GPT-4 Released",
        company: "OpenAI",
        description: "OpenAI releases GPT-4, a multimodal model that can process both text and images, with significantly improved reasoning and accuracy.",
        impact: "GPT-4 set new standards for AI capabilities, powering advanced applications and demonstrating the rapid pace of AI advancement."
    },
    {
        date: "March 2023",
        title: "Midjourney v5",
        company: "Midjourney",
        description: "Midjourney releases version 5, achieving unprecedented photorealism and artistic quality in AI-generated images.",
        impact: "Midjourney v5 became the gold standard for artistic AI image generation, widely used by artists and creators worldwide."
    },
    {
        date: "March 2023",
        title: "Adobe Firefly Beta Launched",
        company: "Adobe",
        description: "Adobe launches Firefly in beta, a family of creative generative AI models designed to generate images, text effects, and other creative content trained on Adobe Stock and licensed content.",
        impact: "Firefly marked Adobe's entry into the generative AI space, offering creators AI tools trained on licensed content, addressing copyright concerns that plagued other image generation models."
    },
    {
        date: "March 2023",
        title: "Claude Released",
        company: "Anthropic",
        description: "Anthropic releases Claude, an AI assistant focused on safety, helpfulness, and harmlessness, built with Constitutional AI.",
        impact: "Claude introduced a new approach to AI safety and ethics, emphasizing responsible AI development and user trust."
    },
    {
        date: "May 2023",
        title: "LLaMA Released",
        company: "Meta",
        description: "Meta releases LLaMA (Large Language Model Meta AI) as open-source, enabling researchers and developers worldwide.",
        impact: "LLaMA democratized access to large language models, enabling innovation and research beyond big tech companies."
    },
    {
        date: "July 2023",
        title: "Claude 2 Released",
        company: "Anthropic",
        description: "Anthropic releases Claude 2 with improved capabilities, longer context windows, and enhanced safety features.",
        impact: "Claude 2 strengthened Anthropic's position in the AI market and demonstrated continued focus on safe AI development."
    },
    {
        date: "September 2023",
        title: "Adobe Firefly 1.0 Released",
        company: "Adobe",
        description: "Adobe releases Firefly 1.0 for general availability, integrating generative AI capabilities directly into Photoshop, Illustrator, and Express with commercial-use licensing.",
        impact: "Firefly 1.0 brought enterprise-ready generative AI to creative professionals, with commercial licensing that addressed legal concerns and integrated seamlessly into existing Adobe workflows."
    },
    {
        date: "September 2023",
        title: "ChatGPT Gets Vision",
        company: "OpenAI",
        description: "OpenAI adds vision capabilities to ChatGPT, allowing it to analyze and discuss images uploaded by users.",
        impact: "This update made ChatGPT multimodal, expanding its use cases to include visual analysis and image-based conversations."
    },
    {
        date: "December 2023",
        title: "Gemini Pro Released",
        company: "Google",
        description: "Google releases Gemini, a multimodal AI model designed to understand and process text, images, audio, and video.",
        impact: "Gemini represented Google's most advanced AI model, designed to compete directly with GPT-4 across multiple modalities."
    },
    {
        date: "February 2024",
        title: "Adobe Acrobat AI Assistant Launched",
        company: "Adobe",
        description: "Adobe launches Acrobat AI Assistant in beta, bringing conversational AI to PDFs with document summarization, Q&A capabilities, and intelligent content extraction.",
        impact: "Acrobat AI Assistant transformed how people interact with documents, making it possible to quickly understand and extract insights from lengthy PDFs through natural language conversations."
    },
    {
        date: "February 2024",
        title: "Sora Announced",
        company: "OpenAI",
        description: "OpenAI announces Sora, a text-to-video model capable of generating high-quality, coherent video clips from text prompts.",
        impact: "Sora demonstrated the next frontier of generative AI, showing that AI could create realistic video content, raising both excitement and concerns."
    },
    {
        date: "March 2024",
        title: "Claude 3 Released",
        company: "Anthropic",
        description: "Anthropic releases Claude 3 with three variants (Opus, Sonnet, Haiku), achieving state-of-the-art performance across multiple benchmarks.",
        impact: "Claude 3 Opus matched or exceeded GPT-4 in many benchmarks, establishing Anthropic as a major player in the AI race."
    },
    {
        date: "April 2024",
        title: "GPT-4 Turbo Released",
        company: "OpenAI",
        description: "OpenAI releases GPT-4 Turbo with improved performance, lower costs, and updated knowledge cutoff.",
        impact: "GPT-4 Turbo made advanced AI more accessible and cost-effective, enabling broader adoption across industries."
    },
    {
        date: "May 2024",
        title: "Gemini 1.5 Pro",
        company: "Google",
        description: "Google releases Gemini 1.5 Pro with a massive 1 million token context window, enabling processing of entire codebases and long documents.",
        impact: "The unprecedented context window opened new possibilities for AI applications in code analysis, research, and long-form content."
    },
    {
        date: "May 2024",
        title: "Adobe Firefly 2.0 Released",
        company: "Adobe",
        description: "Adobe releases Firefly 2.0 with improved image quality, better prompt understanding, and new capabilities including reference image support and style matching.",
        impact: "Firefly 2.0 significantly improved the quality and versatility of AI-generated content, making it more competitive with other leading image generation models while maintaining Adobe's focus on commercial safety."
    },
    {
        date: "May 2024",
        title: "o1 Models Announced",
        company: "OpenAI",
        description: "OpenAI announces o1 and o1-preview, reasoning models that show improved performance on complex problem-solving tasks.",
        impact: "The o1 models represented a shift toward AI systems with better reasoning capabilities, moving beyond pattern matching to true problem-solving."
    },
    {
        date: "August 2024",
        title: "Midjourney Web App Launched",
        company: "Midjourney",
        description: "Midjourney launches its official web application, making the service accessible directly through a browser without requiring Discord.",
        impact: "The web app launch marked Midjourney's evolution from a Discord-only service to a standalone platform, making it more accessible to users who preferred web interfaces over Discord."
    },
    {
        date: "August 2025",
        title: "Adobe Acrobat Studio Released",
        company: "Adobe",
        description: "Adobe launches Acrobat Studio, an AI-powered workspace featuring PDF Spaces for collaboration, AI Agents for automation, and integrated Express creation tools for transforming insights into presentations.",
        impact: "Acrobat Studio represented Adobe's vision for AI-powered productivity, combining document intelligence, collaboration, and content creation into a unified platform for enterprise users."
    },
    {
        date: "January 2025",
        title: "Gemini 2.0 Flash Released",
        company: "Google",
        description: "Google releases Gemini 2.0 Flash, a faster and more capable version with improved multimodal capabilities and agentic behaviors.",
        impact: "Gemini 2.0 Flash marked Google's shift toward agentic AI, enabling models to take multi-step actions and use tools autonomously."
    },
    {
        date: "January 2025",
        title: "Gemini Multi-App Capability",
        company: "Google",
        description: "Google introduces Gemini's multi-app capability, allowing it to handle tasks across multiple apps in a single prompt, becoming the default assistant on Galaxy S25.",
        impact: "This feature demonstrated Gemini's ability to orchestrate complex workflows across different applications, bringing AI assistants closer to true personal AI."
    },
    {
        date: "February 2025",
        title: "Gemini 2.0 Available to Everyone",
        company: "Google",
        description: "Google makes Gemini 2.0 available to everyone, expanding access to its most powerful AI model with agentic capabilities.",
        impact: "The broad availability of Gemini 2.0 democratized access to advanced agentic AI, enabling millions of users to experience next-generation AI capabilities."
    },
    {
        date: "February 2025",
        title: "ChatGPT Deep Research Launched",
        company: "OpenAI",
        description: "OpenAI launches Deep Research, an autonomous research mode in ChatGPT that generates cited reports by browsing the web for 5-30 minutes.",
        impact: "Deep Research transformed ChatGPT into an autonomous research assistant, capable of conducting thorough investigations and compiling comprehensive reports."
    },
    {
        date: "February 2025",
        title: "Claude 3.7 Sonnet & Claude Code",
        company: "Anthropic",
        description: "Anthropic releases Claude 3.7 Sonnet, its first hybrid reasoning model with controllable extended thinking, and Claude Code for terminal-based coding tasks.",
        impact: "Claude 3.7 Sonnet introduced hybrid reasoning capabilities, allowing users to choose between instant responses or detailed step-by-step reasoning."
    },
    {
        date: "February 2025",
        title: "GPT-4.5 \"Orion\" Released",
        company: "OpenAI",
        description: "OpenAI releases GPT-4.5 (codenamed Orion), an intermediate model between GPT-4 and GPT-5 with improved pattern recognition and creative insights.",
        impact: "GPT-4.5 served as a bridge to GPT-5, offering significant improvements while maintaining stability and reliability."
    },
    {
        date: "March 2025",
        title: "Gemini 2.5 Pro Released",
        company: "Google",
        description: "Google releases Gemini 2.5 Pro, its most capable experimental model with enhanced reasoning, coding abilities, and security features.",
        impact: "Gemini 2.5 Pro pushed the boundaries of AI capabilities, showcasing Google's continued innovation in multimodal and agentic AI."
    },
    {
        date: "March 2025",
        title: "Claude Gets Web Search",
        company: "Anthropic",
        description: "Anthropic adds web search capabilities to Claude 3.7 Sonnet, enabling responses with current information and clickable citations.",
        impact: "Web search integration made Claude more useful for real-time information needs, competing directly with other AI assistants that had web access."
    },
    {
        date: "March 2025",
        title: "OpenAI $40B Funding Round",
        company: "OpenAI",
        description: "OpenAI raises $40 billion at a $300 billion valuation, partnering with SoftBank to scale compute and model research toward AGI.",
        impact: "This massive funding round demonstrated investor confidence in OpenAI's path to AGI and enabled unprecedented scaling of AI infrastructure."
    },
    {
        date: "April 2025",
        title: "GPT-4.1 Released",
        company: "OpenAI",
        description: "OpenAI releases GPT-4.1 with mini and nano versions, focusing on coding capabilities and making smaller-model variants with higher-end capabilities.",
        impact: "GPT-4.1's smaller variants made advanced AI more accessible and cost-effective for developers and businesses."
    },
    {
        date: "April 2025",
        title: "o4-mini Released",
        company: "OpenAI",
        description: "OpenAI releases o4-mini, a lightweight reasoning model opened to all ChatGPT users, supporting multimodal tasks.",
        impact: "o4-mini brought reasoning capabilities to a broader audience, making advanced AI reasoning accessible to free users."
    },
    {
        date: "May 2025",
        title: "Claude 4 Released",
        company: "Anthropic",
        description: "Anthropic releases Claude 4 with Opus and Sonnet variants, featuring major leaps in reasoning, coding, long-context capability, and enhanced memory.",
        impact: "Claude 4 represented a significant advancement in AI capabilities, with Opus 4 handling extended autonomous tasks and demonstrating superior reasoning."
    },
    {
        date: "August 2025",
        title: "GPT-5 Released",
        company: "OpenAI",
        description: "OpenAI releases GPT-5, described as the smartest, fastest, and most useful model yet, with multimodal capabilities, better reasoning, and large context windows.",
        impact: "GPT-5 marked a major breakthrough in AI capabilities, setting new standards across multiple benchmarks and becoming available to millions of users."
    },
    {
        date: "August 2025",
        title: "Nano Banana Released",
        company: "Google",
        description: "Google releases Nano Banana (Gemini 2.5 Flash Image), a viral image generation and editing model producing photorealistic, high-quality images.",
        impact: "Nano Banana went viral and demonstrated Google's capabilities in AI image generation, competing with established players like DALL-E and Midjourney."
    },
    {
        date: "August 2025",
        title: "Ollama Launched",
        company: "Ollama",
        description: "Ollama launches an easy-to-use local LLM runtime and desktop app that makes running open models locally simple for developers and hobbyists (desktop app released July/August 2025).",
        impact: "Ollama accelerated adoption of local AI workflows by simplifying model management, downloads, and a developer-friendly CLI and GUI for running models on personal machines.",
    },
    {
        date: "October 2025",
        title: "Agent Builder Launched",
        company: "OpenAI",
        description: "OpenAI launches Agent Builder, a visual tool for composing, debugging, and publishing multi-step agent workflows (announced at DevDay 2025).",
        impact: "Agent Builder made it significantly easier to build agentic workflows without extensive orchestration or custom code, enabling faster prototyping and deployment of multi-step AI agents."
    },
    {
        date: "October 2025",
        title: "gpt-oss Released",
        company: "OpenAI",
        description: "OpenAI releases gpt-oss, including safeguard model variants (e.g., gpt-oss-safeguard-120b and gpt-oss-safeguard-20b), as part of its October 2025 updates.",
        impact: "gpt-oss provided open-source model variants and safety-focused releases that expanded research access and encouraged community-led experimentation while emphasizing safeguards."
    },
    {
        date: "September 2025",
        title: "Claude Sonnet 4.5 Released",
        company: "Anthropic",
        description: "Anthropic releases Claude Sonnet 4.5, topping coding benchmarks with 77.2% on SWE-bench and maintaining long focus across tasks for 30+ hours.",
        impact: "Claude Sonnet 4.5 set new records in coding performance, demonstrating exceptional capabilities in software engineering tasks."
    },
    {
        date: "November 2025",
        title: "GPT-5.1 Released",
        company: "OpenAI",
        description: "OpenAI releases GPT-5.1 with personalities, faster responses, and improved coding performance, including GPT-5.1-Codex-Max for complex coding tasks.",
        impact: "GPT-5.1 introduced customizable AI personalities and enhanced coding capabilities, making AI more versatile and useful for specialized tasks."
    },
    {
        date: "November 2025",
        title: "Gemini 3 Released",
        company: "Google",
        description: "Google releases Gemini 3 (Pro & DeepThink), a frontier model family with powerful multimodal reasoning, agentic abilities, and large context windows.",
        impact: "Gemini 3 represented Google's most advanced AI model, pushing the boundaries of what AI systems could accomplish across multiple modalities."
    },
    {
        date: "November 2025",
        title: "Claude Opus 4.5 Released",
        company: "Anthropic",
        description: "Anthropic releases Claude Opus 4.5 with major upgrades for coding and workplace tasks, featuring Infinite Chats that eliminate context limit errors.",
        impact: "Claude Opus 4.5's Infinite Chats feature removed practical limitations on conversation length, enabling truly extended AI interactions."
    },
    {
        date: "January 2026",
        title: "Gemini Personal Intelligence",
        company: "Google",
        description: "Google launches Personal Intelligence for Gemini, allowing it to access Gmail, Photos, YouTube, and Search history to provide personalized assistance with privacy safeguards.",
        impact: "Personal Intelligence marked a major step toward true AI personal assistants, capable of understanding individual context and preferences."
    }
];

// Logo mapping for companies and tools
const logoMap = {
    'Adobe': './assets/logos/adobe.png',
    'OpenAI': './assets/logos/openai.png',
    'Google': './assets/logos/google.png',
    'Anthropic': 'https://logo.clearbit.com/anthropic.com',
    'Microsoft': 'https://logo.clearbit.com/microsoft.com',
    'Meta': 'https://logo.clearbit.com/meta.com',
    'Stability AI': 'https://logo.clearbit.com/stability.ai',
    'Midjourney': 'https://logo.clearbit.com/midjourney.com',
    'Ollama': './assets/logos/ollama.png'
};

// Product-specific logos (for tools that might need custom logos)
const productLogos = {
    'GPT-3 Released': './assets/logos/openai.png',
    'GPT-4 Released': './assets/logos/openai.png',
    'GPT-4.5 "Orion" Released': './assets/logos/openai.png',
    'GPT-4.1 Released': './assets/logos/openai.png',
    'GPT-4 Turbo Released': './assets/logos/openai.png',
    'GPT-5 Released': './assets/logos/openai.png',
    'GPT-5.1 Released': './assets/logos/openai.png',
    'ChatGPT Launched': './assets/logos/openai.png',
    'ChatGPT Gets Vision': './assets/logos/openai.png',
    'ChatGPT Deep Research Launched': './assets/logos/openai.png',
    'DALL-E Launched': './assets/logos/openai.png',
    'DALL-E 2 Released': './assets/logos/openai.png',
    'Sora Announced': './assets/logos/openai.png',
    'o1 Models Announced': './assets/logos/openai.png',
    'o4-mini Released': './assets/logos/openai.png',
    'Claude Released': 'https://logo.clearbit.com/anthropic.com',
    'Claude 2 Released': 'https://logo.clearbit.com/anthropic.com',
    'Claude 3 Released': 'https://logo.clearbit.com/anthropic.com',
    'Claude 3.7 Sonnet & Claude Code': 'https://logo.clearbit.com/anthropic.com',
    'Claude Gets Web Search': 'https://logo.clearbit.com/anthropic.com',
    'Claude 4 Released': 'https://logo.clearbit.com/anthropic.com',
    'Claude Opus 4.5 Released': 'https://logo.clearbit.com/anthropic.com',
    'Claude Sonnet 4.5 Released': 'https://logo.clearbit.com/anthropic.com',
    'Gemini Pro Released': 'https://logo.clearbit.com/google.com',
    'Gemini 1.5 Pro': 'https://logo.clearbit.com/google.com',
    'Gemini 2.0 Flash Released': 'https://logo.clearbit.com/google.com',
    'Gemini Multi-App Capability': 'https://logo.clearbit.com/google.com',
    'Gemini 2.0 Available to Everyone': 'https://logo.clearbit.com/google.com',
    'Gemini 2.5 Pro Released': 'https://logo.clearbit.com/google.com',
    'Gemini 3 Released': 'https://logo.clearbit.com/google.com',
    'Gemini Personal Intelligence': 'https://logo.clearbit.com/google.com',
    'Bard Announced': 'https://logo.clearbit.com/google.com',
    'PaLM Announced': 'https://logo.clearbit.com/google.com',
    'Imagen Released': 'https://logo.clearbit.com/google.com',
    'Nano Banana Released': 'https://logo.clearbit.com/google.com',
    'LLaMA Released': 'https://logo.clearbit.com/meta.com',
    'Stable Diffusion Released': 'https://logo.clearbit.com/stability.ai',
    'Midjourney Launched': 'https://logo.clearbit.com/midjourney.com',
    'Midjourney v2 Released': 'https://logo.clearbit.com/midjourney.com',
    'Midjourney Open Beta': 'https://logo.clearbit.com/midjourney.com',
    'Midjourney v5': 'https://logo.clearbit.com/midjourney.com',
    'Midjourney Web App Launched': 'https://logo.clearbit.com/midjourney.com',
    'Adobe Sensei Launched': './assets/logos/adobe.png',
    'Adobe Firefly Beta Launched': './assets/logos/adobe.png',
    'Adobe Firefly 1.0 Released': './assets/logos/adobe.png',
    'Adobe Acrobat AI Assistant Launched': './assets/logos/adobe.png',
    'Adobe Firefly 2.0 Released': './assets/logos/adobe.png',
    'Adobe Acrobat Studio Released': './assets/logos/adobe.png'
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

// Initialize the timeline
function initTimeline() {
    const timelineContainer = document.getElementById('timelineEvents');
    timelineContainer.innerHTML = '';

    timelineEvents.forEach((event, index) => {
        const eventElement = createEventElement(event, index);
        timelineContainer.appendChild(eventElement);
    });

    // Animate events on scroll
    observeEvents();
}

// Create event element
function createEventElement(event, index) {
    const eventDiv = document.createElement('div');
    eventDiv.className = 'timeline-event';
    eventDiv.dataset.company = event.company;
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

    // Build header structure without the image so we can handle load/error programmatically
    content.innerHTML = `
        <div class="event-header">
            <div class="event-header-left">
                <div class="logo-placeholder"></div>
                <div class="event-header-text">
                    <div class="event-date">${event.date}</div>
                    <div class="event-title">${event.title}</div>
                    <div class="event-company">${event.company}</div>
                </div>
            </div>
        </div>
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

// Current filter state
let currentFilters = {
    company: 'all',
    year: 'all'
};

// Apply filters
function applyFilters() {
    const events = document.querySelectorAll('.timeline-event');
    let visibleCount = 0;
    
    events.forEach(event => {
        const eventCompany = event.dataset.company;
        const eventYear = event.dataset.year;
        
        const companyMatch = currentFilters.company === 'all' || eventCompany === currentFilters.company;
        const yearMatch = currentFilters.year === 'all' || eventYear === currentFilters.year;
        
        if (companyMatch && yearMatch) {
            event.classList.remove('hidden');
            visibleCount++;
        } else {
            event.classList.add('hidden');
        }
    });
}

// Filter events by company or year
function setFilter(filterType, value) {
    currentFilters[filterType] = value;
    applyFilters();
}

// Clear all filters
function clearFilters() {
    currentFilters.company = 'all';
    currentFilters.year = 'all';
    
    document.getElementById('companyFilter').value = 'all';
    document.getElementById('yearFilter').value = 'all';
    
    applyFilters();
}

// Open modal with event details
function openModal(event) {
    const modal = document.getElementById('eventModal');
    const modalBody = document.getElementById('modalBody');
    const logoUrl = getLogoUrl(event);
    
    modalBody.innerHTML = `
        <div class="modal-header-content">
            <div class="modal-logo-placeholder"></div>
            <div class="modal-title-section">
                <h2>${event.title}</h2>
                <div class="event-date">${event.date}</div>
                <div class="event-company">${event.company}</div>
            </div>
        </div>
        <div class="event-description">${event.description}</div>
        <div class="event-impact">
            <h3>Impact</h3>
            <p>${event.impact}</p>
        </div>
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

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Initialize theme
    initTheme();
    
    // Theme toggle button
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    initYearFilters();
    initTimeline();

    // Company filter select
    document.getElementById('companyFilter').addEventListener('change', (e) => {
        setFilter('company', e.target.value);
    });

    // Year filter select
    document.getElementById('yearFilter').addEventListener('change', (e) => {
        setFilter('year', e.target.value);
    });

    // Clear filters button
    document.getElementById('clearFilters').addEventListener('click', clearFilters);

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
