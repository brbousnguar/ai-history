// Timeline Events Data
const timelineEvents = [
    {
        date: "Q2 2027 (Planned)",
        title: "GPT-6 Expected",
        company: "OpenAI",
        description: "OpenAI is expected to release GPT-6, potentially featuring human-level AGI capabilities, multi-step reasoning, and advanced agentic behavior across multiple domains.",
        impact: "GPT-6 could mark a significant milestone toward artificial general intelligence, with capabilities approaching or matching human expertise across diverse tasks.",
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
        date: "Q3 2026 (Planned)",
        title: "Claude Opus 5 Expected",
        company: "Anthropic",
        description: "Anthropic is expected to release Claude Opus 5, featuring enhanced constitutional AI principles, longer context windows (up to 1M tokens), and improved safety mechanisms.",
        impact: "Claude Opus 5 could set new standards for AI safety and alignment while maintaining state-of-the-art performance across reasoning and creative tasks.",
        link: "https://www.anthropic.com/",
        eventType: "planned"
    },
    {
        date: "Q2 2026 (Planned)",
        title: "Sora Full Public Release",
        company: "OpenAI",
        description: "OpenAI plans to release Sora to the general public with extended video generation capabilities (up to 60 seconds), better motion consistency, and creative controls.",
        impact: "Sora's public release could transform video content creation, enabling creators to produce high-quality video content from text descriptions at scale.",
        link: "https://openai.com/sora",
        eventType: "planned"
    },
    {
        date: "Mid 2026 (Planned)",
        title: "Apple Intelligence 2.0",
        company: "Apple",
        description: "Apple is expected to unveil Intelligence 2.0 with on-device AI capabilities, Siri enhancements, and deep integration across iOS, iPadOS, and macOS ecosystems.",
        impact: "Apple's AI push could bring advanced AI capabilities to billions of devices with a focus on privacy and on-device processing.",
        link: "https://www.apple.com/",
        eventType: "planned"
    },
    {
        date: "Q4 2026 (Planned)",
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
        date: "March 2026 (Planned)",
        title: "Google I/O 2026 AI Announcements",
        company: "Google",
        description: "Google I/O 2026 is expected to showcase major AI updates including Gemini enhancements, new AI hardware, and expanded AI integration across Android and Search.",
        impact: "Google I/O 2026 could reveal Google's next major push in AI hardware and software integration for consumer and enterprise markets.",
        link: "https://io.google/2026",
        eventType: "planned"
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
        link: "https://stability.ai/stable-diffusion"
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
        link: "https://ai.meta.com/blog/large-language-model-llama-meta-ai"
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
        impact: "SD3 Medium made the latest Stable Diffusion technology accessible to users with mid-range hardware, balancing quality and accessibility."
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
        impact: "SD 3.5 refined the SD3 architecture with significant quality improvements and introduced turbo models for real-time generation, strengthening Stability AI's competitive position."
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
        title: "Claude 3.7 Sonnet & Claude Code",
        company: "Anthropic",
        description: "Anthropic releases Claude 3.7 Sonnet, its first hybrid reasoning model with controllable extended thinking, and Claude Code for terminal-based coding tasks.",
        impact: "Claude 3.7 Sonnet introduced hybrid reasoning capabilities, allowing users to choose between instant responses or detailed step-by-step reasoning.",
        link: "https://www.anthropic.com/news/claude-3-5-sonnet"
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
        date: "May 2025",
        title: "Claude 4 Released",
        company: "Anthropic",
        description: "Anthropic releases Claude 4 with Opus and Sonnet variants, featuring major leaps in reasoning, coding, long-context capability, and enhanced memory.",
        impact: "Claude 4 represented a significant advancement in AI capabilities, with Opus 4 handling extended autonomous tasks and demonstrating superior reasoning.",
        link: "https://www.anthropic.com/news/claude-4"
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
        date: "June 2025",
        title: "Google AI Studio Launched",
        company: "Google",
        description: "Google launches AI Studio, a comprehensive platform for building, testing, and deploying AI applications with Gemini models and custom tools.",
        impact: "AI Studio democratized AI application development, making it easier for developers to create sophisticated AI-powered products.",
        link: "https://ai.google.dev/aistudio"
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
        title: "Ollama Launched",
        company: "Ollama",
        description: "Ollama launches an easy-to-use local LLM runtime and desktop app that makes running open models locally simple for developers and hobbyists (desktop app released July/August 2025).",
        impact: "Ollama accelerated adoption of local AI workflows by simplifying model management, downloads, and a developer-friendly CLI and GUI for running models on personal machines.",
        link: "https://ollama.com"
    },
    {
        date: "October 2025",
        title: "Agent Builder Launched",
        company: "OpenAI",
        description: "OpenAI launches Agent Builder, a visual tool for composing, debugging, and publishing multi-step agent workflows (announced at DevDay 2025).",
        impact: "Agent Builder made it significantly easier to build agentic workflows without extensive orchestration or custom code, enabling faster prototyping and deployment of multi-step AI agents.",
        link: "https://openai.com/devday"
    },
    {
        date: "October 2025",
        title: "gpt-oss Released",
        company: "OpenAI",
        description: "OpenAI releases gpt-oss, including safeguard model variants (e.g., gpt-oss-safeguard-120b and gpt-oss-safeguard-20b), as part of its October 2025 updates.",
        impact: "gpt-oss provided open-source model variants and safety-focused releases that expanded research access and encouraged community-led experimentation while emphasizing safeguards.",
        link: "https://openai.com/"
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
        link: "https://stability.ai/news/stable-diffusion-3"
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
        date: "February 2026",
        title: "Meta Llama 4 Released",
        company: "Meta",
        description: "Meta releases Llama 4, an open-source model family with 405B parameters, multimodal capabilities, and state-of-the-art performance rivaling proprietary models.",
        impact: "Llama 4 democratized access to frontier AI capabilities, enabling developers worldwide to build advanced AI applications without vendor lock-in.",
        link: "https://ai.meta.com/blog"
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
        date: "February 2026",
        title: "OpenAI Operator Released",
        company: "OpenAI",
        description: "OpenAI launches Operator, an AI agent that can browse the web and perform tasks autonomously on behalf of users, including booking, shopping, and research.",
        impact: "Operator marked OpenAI's entry into autonomous AI agents, enabling AI to take actions in the real world rather than just generating responses.",
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
        link: "https://openai.com/",
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
    }
].reverse(); // Reverse timeline to show most recent events first

// Logo mapping for companies and tools
const logoMap = {
    'Adobe': './assets/logos/adobe.png',
    'OpenAI': './assets/logos/openai.png',
    'Google': './assets/logos/google.png',
    'Anthropic': './assets/logos/anthropic.png',
    'Microsoft': './assets/logos/microsoft.png',
    'Meta': './assets/logos/meta.png',
    'Stability AI': './assets/logos/stabilityai.png',
    'Midjourney': './assets/logos/midjourney.png',
    'Ollama': './assets/logos/ollama.png',
    'Apple': 'https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png'
};

// Product-specific logos (for tools that might need custom logos)
const productLogos = {
    'GPT-1 Released': './assets/logos/openai.png',
    'GPT-3 Released': './assets/logos/openai.png',
    'GPT-4 Released': './assets/logos/openai.png',
    'GPT-4.5 "Orion" Released': './assets/logos/openai.png',
    'GPT-4.1 Released': './assets/logos/openai.png',
    'GPT-4 Turbo Released': './assets/logos/openai.png',
    'GPT-5 Released': './assets/logos/openai.png',
    'GPT-5.1 Released': './assets/logos/openai.png',
    'GPT-5.2 Released': './assets/logos/openai.png',
    'ChatGPT Launched': './assets/logos/openai.png',
    'ChatGPT Gets Vision': './assets/logos/openai.png',
    'ChatGPT Deep Research Launched': './assets/logos/openai.png',
    'DALL-E Launched': './assets/logos/openai.png',
    'DALL-E 2 Released': './assets/logos/openai.png',
    'Sora Announced': './assets/logos/openai.png',
    'o1 Models Announced': './assets/logos/openai.png',
    'o4-mini Released': './assets/logos/openai.png',
    'Claude Released': './assets/logos/anthropic.png',
    'Claude 2 Released': './assets/logos/anthropic.png',
    'Claude 3 Released': './assets/logos/anthropic.png',
    'Claude 3.7 Sonnet & Claude Code': './assets/logos/anthropic.png',
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
    'Gemini 3 Released': './assets/logos/google.png',
    'Gemini Personal Intelligence': './assets/logos/google.png',
    'Bard Announced': './assets/logos/google.png',
    'PaLM Announced': './assets/logos/google.png',
    'Imagen Released': './assets/logos/google.png',
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
    'OpenAI Operator Released': './assets/logos/openai.png',
    'Microsoft Copilot Vision': './assets/logos/microsoft.png',
    'Microsoft Phi-4 Released': './assets/logos/microsoft.png',
    'Microsoft Copilot Pro Max': './assets/logos/microsoft.png',
    'Meta Llama 4 Released': './assets/logos/meta.png',
    'Meta AI Agents Platform': './assets/logos/meta.png',
    'Anthropic Claude Artifacts': './assets/logos/anthropic.png',
    'Google NotebookLM Audio Overview': './assets/logos/google.png',
    'Google AI Studio Launched': './assets/logos/google.png',
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
    const plannedEventsGrid = document.getElementById('plannedEventsGrid');
    const plannedCount = document.getElementById('plannedCount');
    
    timelineContainer.innerHTML = '';
    plannedEventsGrid.innerHTML = '';
    
    // Separate planned and historical events
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

    // Animate events on scroll
    observeEvents();
}

// Create planned event card
function createPlannedEventCard(event, index) {
    const card = document.createElement('div');
    card.className = 'planned-event-card';
    card.style.animationDelay = `${index * 0.1}s`;
    
    const logoUrl = getLogoUrl(event);
    
    card.innerHTML = `
        <div class="planned-event-header">
            <div class="logo-placeholder"></div>
            <div class="planned-event-info">
                <h3>${event.title}</h3>
                <div class="planned-event-date">${event.date}</div>
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
    const plannedYear = extractYear(event.date);
    if (plannedYear) card.dataset.year = plannedYear;

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

    // Build header structure without the image so we can handle load/error programmatically
    content.innerHTML = `
        <div class="event-header">
            <div class="event-header-left">
                <div class="logo-placeholder"></div>
                <div class="event-header-text">
                    <div class="event-date">${event.date}${minorBadge}</div>
                    <div class="event-title">${event.title}</div>
                </div>
            </div>
        </div>
        <div class="event-company">${event.company}</div>
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
    year: 'all',
    search: ''
};

// Apply filters
function applyFilters() {
    const events = document.querySelectorAll('.timeline-event');
    const emptyState = document.getElementById('emptyState');
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
        const isMinorEvent = event.classList.contains('minor-event');
        
        const companyMatch = currentFilters.company === 'all' || eventCompany === currentFilters.company;
        const yearMatch = currentFilters.year === 'all' || eventYear === currentFilters.year;
        const minorEventMatch = showMinorEvents || !isMinorEvent;
        
        // Search matches title, description, company, or date
        const searchMatch = searchTerm.length === 0 || 
            eventTitle.includes(searchTerm) || 
            eventDescription.includes(searchTerm) ||
            eventCompany.toLowerCase().includes(searchTerm) ||
            eventDate.includes(searchTerm);
        
        if (companyMatch && yearMatch && searchMatch && minorEventMatch) {
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

        const companyMatch = currentFilters.company === 'all' || eventCompany === currentFilters.company;
        const yearMatch = currentFilters.year === 'all' || eventYear === currentFilters.year;

        const searchMatch = searchTerm.length === 0 ||
            eventTitle.includes(searchTerm) ||
            eventDescription.includes(searchTerm) ||
            (eventCompany && eventCompany.toLowerCase().includes(searchTerm)) ||
            eventDate.includes(searchTerm);

        if (companyMatch && yearMatch && searchMatch) {
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
            const firstVisible = document.querySelector('.timeline-event:not(.hidden), .planned-event-card:not(.hidden)');
            if (firstVisible) {
                firstVisible.scrollIntoView({ behavior: 'smooth', block: 'center' });
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
            <span class="badge-label">${badge.type === 'company' ? 'Company' : badge.type === 'year' ? 'Year' : 'Search'}: ${badge.label}</span>
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
    currentFilters.search = '';
    
    document.getElementById('companyFilter').value = 'all';
    document.getElementById('yearFilter').value = 'all';
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
