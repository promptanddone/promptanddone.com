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
