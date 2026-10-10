export const brand = {
  name: 'Prompt & Done',
  tagline: 'AI tools & productivity, daily.',
  year: 2026,
};


export type Link = {
  icon: 'instagram' | 'tiktok' | 'youtube' | 'github' | 'website' | 'email';
  label: string;
  href: string;
  ariaLabel: string;
  handle?: string;
  external?: boolean;
  rel?: string;
  event: string;
};


export const links: Link[] = [
  { icon: 'instagram', label: 'Instagram', href: 'https://instagram.com/promptanddone', ariaLabel: 'Visit Prompt and Done on Instagram', handle: '@promptanddone', event: 'click-instagram' },
  { icon: 'tiktok', label: 'TikTok', href: 'https://www.tiktok.com/@promptanddoneai', ariaLabel: 'Visit Prompt and Done on TikTok', handle: '@promptanddoneai', event: 'click-tiktok' },
  { icon: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/@promptanddone', ariaLabel: 'Visit Prompt and Done on YouTube', handle: '@promptanddone', event: 'click-youtube' },
  { icon: 'github', label: 'GitHub', href: 'https://github.com/promptanddone', ariaLabel: 'Visit Prompt and Done on GitHub', handle: '/promptanddone', event: 'click-github' },
  { icon: 'website', label: 'Website', href: 'https://promptanddone.com', ariaLabel: 'Visit the Prompt and Done website', handle: 'promptanddone.com', event: 'click-website' },
  { icon: 'email', label: 'Email', href: 'mailto:thepromptanddone@gmail.com', ariaLabel: 'Email Prompt and Done', handle: 'thepromptanddone@gmail.com', external: false, event: 'click-email' },
];


export type Tool = Omit<Link, 'icon'> & {
  description: string;
  kind: 'tool' | 'prompt' | 'guide';
  affiliate?: boolean;
};


export const tools: Tool[] = [
  {
    label: '10 AI Tools for Job Seekers',
    href: 'https://promptanddone.com/jobseekers/',
    ariaLabel: 'Open the 10 AI tools for job seekers toolkit — resume, ATS, interviews, salary',
    description: 'The full toolkit from the reel — ChatGPT, Claude, Teal, Jobscan, LinkedIn, Canva, Grammarly, Huntr, Levels.fyi, and Final Round AI, each linking to its official site.',
    external: false,
    event: 'click-tool-jobseekers',
    kind: 'tool',
  },
  {
    label: 'OpenAI Dots',
    href: 'https://openai.com/index/introducing-dots/',
    ariaLabel: 'Open the OpenAI Dots announcement — always-on AI agents',
    description: "OpenAI's always-on AI agents — give yours a goal and it works across 4,000+ apps with its own computer and browser, asking your approval before anything big.",
    event: 'click-tool-dots',
    kind: 'tool',
  },
  {
    label: '2 ChatGPT Prompts: 0 to 30M Views',
    href: 'https://promptanddone.com/scripts/',
    ariaLabel: 'Open the 2 ChatGPT prompts that turn ChatGPT into a viral strategist and script writer',
    description: 'The exact 2 prompts from the reel — one turns ChatGPT into a viral strategist for your niche, the other writes 30 days of scripts in your voice.',
    external: false,
    event: 'click-tool-scripts',
    kind: 'prompt',
  },
  {
    label: 'AI Engineering from Scratch',
    href: 'https://github.com/rohitg00/ai-engineering-from-scratch',
    ariaLabel: 'Open AI Engineering from Scratch on GitHub — free AI engineering curriculum',
    description: 'A complete AI engineering degree, free on GitHub — 523 lessons across 20 phases, from math to LLMs to agents, and every lesson ships a real artifact: a prompt, a skill, an agent, or an MCP server. ~58K stars, MIT.',
    event: 'click-tool-aiengineering',
    kind: 'guide',
  },
  {
    label: 'AI Job Search',
    href: 'https://github.com/MadsLorentzen/ai-job-search',
    ariaLabel: 'Open AI Job Search on GitHub — open-source AI job-search framework',
    description: 'Free, open-source framework that turns Claude Code into a full job-search machine — it scores postings, tailors your CV, writes cover letters, and preps you for interviews. ~44K stars, MIT.',
    event: 'click-tool-aijobsearch',
    kind: 'tool',
  },
  {
    label: "God's Eye View",
    href: 'https://github.com/bilawalsidhu/gods-eye-view',
    ariaLabel: "Open God's Eye View on GitHub — free 3D spy-satellite globe",
    description: 'Free 3D "spy satellite" in your browser — live aircraft, ships, satellites, earthquakes and public cameras on a photorealistic globe, with voice control. No API keys, no signup.',
    event: 'click-tool-godseyeview',
    kind: 'tool',
  },
  {
    label: 'OmniRoute',
    href: 'https://github.com/diegosouzapw/OmniRoute',
    ariaLabel: 'Open OmniRoute on GitHub — free open-source AI model gateway',
    description: 'Free, open-source AI gateway — one endpoint routes you through 1,200+ models with quota-aware auto-failover and token compression that stretches every token up to 10x further.',
    event: 'click-tool-omniroute',
    kind: 'tool',
  },
  {
    label: 'VoiceStudio',
    href: 'https://github.com/debpalash/VoiceStudio',
    ariaLabel: 'Open VoiceStudio on GitHub — free open-source AI voice cloning',
    description: 'Free, open-source local ElevenLabs alternative — clone any voice from a 3-second clip, dub videos, transcribe, make audiobooks. No account, no API key.',
    event: 'click-tool-voicestudio',
    kind: 'tool',
  },
  {
    label: 'Claude for Financial Services',
    href: 'https://github.com/anthropics/financial-services',
    ariaLabel: 'Open Claude for Financial Services on GitHub — open-source finance agents',
    description: "Anthropic's free, open-source agent pack for finance — pitch decks, DCF models, earnings reviews, and more.",
    event: 'click-tool-finance',
    kind: 'tool',
  },
  {
    label: 'Impeccable',
    href: 'https://github.com/pbakaus/impeccable',
    ariaLabel: 'Open Impeccable on GitHub — design guidance for AI coding agents',
    description: 'Free, open-source design guidance for AI coding agents — 1 skill, 24 commands, 61 rules that kill ugly AI website tells.',
    event: 'click-tool-ugly',
    kind: 'tool',
  },
  {
    label: 'video-use',
    href: 'https://github.com/browser-use/video-use',
    ariaLabel: 'Open video-use on GitHub — edit videos with your coding agent',
    description: 'Free, open-source video editing by AI coding agent — drop in raw footage, it cuts, grades, captions, and self-checks the render.',
    event: 'click-tool-videuse',
    kind: 'tool',
  },
  {
    label: 'AX',
    href: 'https://github.com/google/ax',
    ariaLabel: "Open AX — Google's open-source agentic orchestration runtime",
    description: "Google's open-source Kubernetes for AI agents — declare a task in YAML, run it in an isolated sandbox.",
    event: 'click-tool-ax',
    kind: 'tool',
  },
  {
    label: 'agent-skills',
    href: 'https://github.com/addyosmani/agent-skills',
    ariaLabel: 'Open agent-skills on GitHub — 25 production-grade engineering skills for AI coding agents',
    description: '25 free engineering skills that turn your AI coding agent into a senior engineer — testing, reviews, specs.',
    event: 'click-tool-agent-skills',
    kind: 'tool',
  },
  {
    label: 'Unbagrnd',
    href: 'https://github.com/zidniryi/unbagrnd',
    ariaLabel: 'Open Unbagrnd on GitHub',
    description: 'Free, open-source — removes photo backgrounds on your own device. No account, no uploads, no limits.',
    event: 'click-tool-unbagrnd',
    kind: 'tool',
  },
  {
    label: 'Jev',
    href: 'https://typesafe.ai',
    ariaLabel: "Open Jev — TypeSafe's System One decision model",
    description: 'The AI model that never writes a word — typed decisions with probabilities, in milliseconds, for fractions of a cent.',
    event: 'click-tool-jev',
    kind: 'tool',
  },
  {
    label: 'OpenCodeReview',
    href: 'https://open-codereview.ai',
    ariaLabel: "Open OpenCodeReview — Alibaba's open-source AI code reviewer",
    description: "Alibaba's internal AI code reviewer, now open source — line-level precision, 1/9 the tokens.",
    event: 'click-tool-opencode-review',
    kind: 'tool',
  },
  {
    label: 'Orca',
    href: 'https://onorca.dev',
    ariaLabel: 'Open Orca — the free, open-source fleet of parallel coding agents',
    description: 'Free, open-source — fan one prompt across a fleet of coding agents in isolated worktrees, merge the winner.',
    event: 'click-tool-orca',
    kind: 'tool',
  },
  {
    label: 'OpenCut',
    href: 'https://opencut.app',
    ariaLabel: 'Open OpenCut — the free, open-source CapCut alternative',
    description: 'Free, open-source CapCut clone in your browser — 4K export, auto captions, no watermark.',
    event: 'click-tool-opencut',
    kind: 'tool',
  },
  {
    label: 'DuckDB Skills',
    href: 'https://duckdb.org/2026/09/16/duckdb-skills.html',
    ariaLabel: 'Open the DuckDB Skills launch post',
    description: 'Ask your data files questions in plain English — no Python scripts.',
    event: 'click-tool-duckdb-skills',
    kind: 'tool',
  },
  {
    label: 'Wispr Flow',
    href: 'https://ref.wisprflow.ai/promptanddone',
    ariaLabel: 'Try Wispr Flow, an affiliate link that supports Prompt and Done',
    description: 'AI voice dictation that cleans up filler words. Free to start.',
    affiliate: true,
    rel: 'sponsored noopener noreferrer',
    event: 'click-tool-wispr-flow',
    kind: 'tool',
  },
  {
    label: 'Agent-Reach',
    href: 'https://github.com/Panniantong/Agent-Reach',
    ariaLabel: 'Open Agent-Reach on GitHub',
    description: 'Gives your AI agent eyes on the whole internet.',
    event: 'click-tool-agent-reach',
    kind: 'tool',
  },
  {
    label: 'BrowserSkill',
    href: 'https://github.com/Tencent/BrowserSkill',
    ariaLabel: 'Open BrowserSkill on GitHub',
    description: "Tencent's tool: your AI agent borrows a browser tab, already logged in.",
    event: 'click-tool-browserskill',
    kind: 'tool',
  },
  {
    label: 'brag',
    href: 'https://github.com/latent-spaces/brag',
    ariaLabel: 'Open brag on GitHub',
    description: 'Turn the project you just shipped into a launch video with one command.',
    event: 'click-tool-brag',
    kind: 'tool',
  },
  {
    label: 'security-audit-skill',
    href: 'https://github.com/cloudflare/security-audit-skill',
    ariaLabel: 'Open security-audit-skill on GitHub',
    description: "Cloudflare's skill: tell your AI to audit your code — and it actually does it.",
    event: 'click-tool-security-audit-skill',
    kind: 'tool',
  },
  {
    label: 'HyperFrames',
    href: 'https://github.com/heygen-com/hyperframes',
    ariaLabel: 'Open HyperFrames on GitHub',
    description: 'Write HTML. Render video. Built for agents.',
    event: 'click-tool-hyperframes',
    kind: 'tool',
  },
  {
    label: 'Muse Gadgets SDK',
    href: 'https://promptanddone.com/go/muse-gadgets/',
    ariaLabel: "Open the Muse Gadgets SDK on GitHub — Meta's open SDK for building Muse hardware",
    description: "Meta's open SDK for building your own Muse gadgets — ESP32 and Linux firmware, Apache 2.0. Grab an API token, point your coding agent at it, build screens, buttons, sensors.",
    external: false,
    event: 'click-tool-muse-gadgets',
    kind: 'tool',
  },
  {
    label: 'Claude Code Mods',
    href: 'https://promptanddone.com/go/mods/',
    ariaLabel: 'Open the Claude Code Mods README on GitHub — tiny TypeScript add-ons that plug into the agent',
    description: 'Tiny TypeScript add-ons that plug straight into Claude Code — rewrite what it says, block what it does, even redraw the screen. Four ship built in: diff view, security guard, usage stats, project instructions.',
    external: false,
    event: 'click-tool-mods',
    kind: 'tool',
  },
  {
    label: 'Procedural Isometric Worlds',
    href: 'https://promptanddone.com/go/worlds/',
    ariaLabel: 'Open the Procedural Isometric Worlds skill on GitHub — generate 3D worlds from code',
    description: 'A skill that generates entire miniature 3D worlds from code — a rocket launch with exhaust shaders and pooled smoke, a waving robot, even a garden center. No Blender, no modeling skills: describe what you want, get a world.',
    external: false,
    event: 'click-tool-worlds',
    kind: 'tool',
  },
  {
    label: 'Beam',
    href: 'https://promptanddone.com/go/beam/',
    ariaLabel: "Join the Beam waitlist — Reflection AI's 501B open-weight model",
    description: "Reflection AI's 501B open-weight model — only 23B parameters fire per token, with a 1M-token context. Join the waitlist for early access.",
    external: false,
    event: 'click-tool-beam',
    kind: 'tool',
  },
  {
    label: 'REA',
    href: 'https://promptanddone.com/go/reverse/',
    ariaLabel: 'Open REA on GitHub — reverse engineer anything with agents',
    description: 'MCP server that turns your coding agent into a reverse engineer — point it at any app, no source code needed.',
    external: false,
    event: 'click-tool-rea',
    kind: 'tool',
  },
];
