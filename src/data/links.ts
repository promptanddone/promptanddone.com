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


export type Tool = Omit<Link, 'icon'> & { description: string; affiliate?: boolean };


export const tools: Tool[] = [
  {
    label: 'AI Job Search',
    href: 'https://github.com/MadsLorentzen/ai-job-search',
    ariaLabel: 'Open AI Job Search on GitHub — open-source AI job-search framework',
    description: 'Free, open-source framework that turns Claude Code into a full job-search machine — it scores postings, tailors your CV, writes cover letters, and preps you for interviews. ~44K stars, MIT.',
    event: 'click-tool-aijobsearch',
  },
  {
    label: "God's Eye View",
    href: 'https://github.com/bilawalsidhu/gods-eye-view',
    ariaLabel: "Open God's Eye View on GitHub — free 3D spy-satellite globe",
    description: 'Free 3D "spy satellite" in your browser — live aircraft, ships, satellites, earthquakes and public cameras on a photorealistic globe, with voice control. No API keys, no signup.',
    event: 'click-tool-godseyeview',
  },
  {
    label: 'OmniRoute',
    href: 'https://github.com/diegosouzapw/OmniRoute',
    ariaLabel: 'Open OmniRoute on GitHub — free open-source AI model gateway',
    description: 'Free, open-source AI gateway — one endpoint routes you through 1,200+ models with quota-aware auto-failover and token compression that stretches every token up to 10x further.',
    event: 'click-tool-omniroute',
  },
  {
    label: 'VoiceStudio',
    href: 'https://github.com/debpalash/VoiceStudio',
    ariaLabel: 'Open VoiceStudio on GitHub — free open-source AI voice cloning',
    description: 'Free, open-source local ElevenLabs alternative — clone any voice from a 3-second clip, dub videos, transcribe, make audiobooks. No account, no API key.',
    event: 'click-tool-voicestudio',
  },
  {
    label: 'Claude for Financial Services',
    href: 'https://github.com/anthropics/financial-services',
    ariaLabel: 'Open Claude for Financial Services on GitHub — open-source finance agents',
    description: "Anthropic's free, open-source agent pack for finance — pitch decks, DCF models, earnings reviews, and more.",
    event: 'click-tool-finance',
  },
  {
    label: 'Impeccable',
    href: 'https://github.com/pbakaus/impeccable',
    ariaLabel: 'Open Impeccable on GitHub — design guidance for AI coding agents',
    description: 'Free, open-source design guidance for AI coding agents — 1 skill, 24 commands, 61 rules that kill ugly AI website tells.',
    event: 'click-tool-ugly',
  },
  {
    label: 'video-use',
    href: 'https://github.com/browser-use/video-use',
    ariaLabel: 'Open video-use on GitHub — edit videos with your coding agent',
    description: 'Free, open-source video editing by AI coding agent — drop in raw footage, it cuts, grades, captions, and self-checks the render.',
    event: 'click-tool-videuse',
  },
  {
    label: 'AX',
    href: 'https://github.com/google/ax',
    ariaLabel: "Open AX — Google's open-source agentic orchestration runtime",
    description: "Google's open-source Kubernetes for AI agents — declare a task in YAML, run it in an isolated sandbox.",
    event: 'click-tool-ax',
  },
  {
    label: 'agent-skills',
    href: 'https://github.com/addyosmani/agent-skills',
    ariaLabel: 'Open agent-skills on GitHub — 25 production-grade engineering skills for AI coding agents',
    description: '25 free engineering skills that turn your AI coding agent into a senior engineer — testing, reviews, specs.',
    event: 'click-tool-agent-skills',
  },
  {
    label: 'Unbagrnd',
    href: 'https://github.com/zidniryi/unbagrnd',
    ariaLabel: 'Open Unbagrnd on GitHub',
    description: 'Free, open-source — removes photo backgrounds on your own device. No account, no uploads, no limits.',
    event: 'click-tool-unbagrnd',
  },
  {
    label: 'Jev',
    href: 'https://typesafe.ai',
    ariaLabel: "Open Jev — TypeSafe's System One decision model",
    description: 'The AI model that never writes a word — typed decisions with probabilities, in milliseconds, for fractions of a cent.',
    event: 'click-tool-jev',
  },
  {
    label: 'OpenCodeReview',
    href: 'https://open-codereview.ai',
    ariaLabel: "Open OpenCodeReview — Alibaba's open-source AI code reviewer",
    description: "Alibaba's internal AI code reviewer, now open source — line-level precision, 1/9 the tokens.",
    event: 'click-tool-opencode-review',
  },
  {
    label: 'Orca',
    href: 'https://onorca.dev',
    ariaLabel: 'Open Orca — the free, open-source fleet of parallel coding agents',
    description: 'Free, open-source — fan one prompt across a fleet of coding agents in isolated worktrees, merge the winner.',
    event: 'click-tool-orca',
  },
  {
    label: 'OpenCut',
    href: 'https://opencut.app',
    ariaLabel: 'Open OpenCut — the free, open-source CapCut alternative',
    description: 'Free, open-source CapCut clone in your browser — 4K export, auto captions, no watermark.',
    event: 'click-tool-opencut',
  },
  {
    label: 'DuckDB Skills',
    href: 'https://duckdb.org/2026/09/16/duckdb-skills.html',
    ariaLabel: 'Open the DuckDB Skills launch post',
    description: 'Ask your data files questions in plain English — no Python scripts.',
    event: 'click-tool-duckdb-skills',
  },
  {
    label: 'Wispr Flow',
    href: 'https://ref.wisprflow.ai/promptanddone',
    ariaLabel: 'Try Wispr Flow, an affiliate link that supports Prompt and Done',
    description: 'AI voice dictation that cleans up filler words. Free to start.',
    affiliate: true,
    rel: 'sponsored noopener noreferrer',
    event: 'click-tool-wispr-flow',
  },
  {
    label: 'Agent-Reach',
    href: 'https://github.com/Panniantong/Agent-Reach',
    ariaLabel: 'Open Agent-Reach on GitHub',
    description: 'Gives your AI agent eyes on the whole internet.',
    event: 'click-tool-agent-reach',
  },
  {
    label: 'BrowserSkill',
    href: 'https://github.com/Tencent/BrowserSkill',
    ariaLabel: 'Open BrowserSkill on GitHub',
    description: "Tencent's tool: your AI agent borrows a browser tab, already logged in.",
    event: 'click-tool-browserskill',
  },
  {
    label: 'brag',
    href: 'https://github.com/latent-spaces/brag',
    ariaLabel: 'Open brag on GitHub',
    description: 'Turn the project you just shipped into a launch video with one command.',
    event: 'click-tool-brag',
  },
  {
    label: 'security-audit-skill',
    href: 'https://github.com/cloudflare/security-audit-skill',
    ariaLabel: 'Open security-audit-skill on GitHub',
    description: "Cloudflare's skill: tell your AI to audit your code — and it actually does it.",
    event: 'click-tool-security-audit-skill',
  },
  {
    label: 'HyperFrames',
    href: 'https://github.com/heygen-com/hyperframes',
    ariaLabel: 'Open HyperFrames on GitHub',
    description: 'Write HTML. Render video. Built for agents.',
    event: 'click-tool-hyperframes',
  },
];
