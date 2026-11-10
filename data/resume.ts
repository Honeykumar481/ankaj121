// Single source of truth for all portfolio content.
// Edit this file to update the site — every section reads from here.

export const SITE_URL = "https://ankajrana.com"; // TODO: replace with your real domain

export const profile = {
  name: "Ankaj Rana",
  title: "Frontend Developer",
  headline: "React.js / Next.js · AI-Assisted Development",
  location: "Mohali, Punjab, India",
  email: "ranaanku501@gmail.com",
  phone: "+91 97793 32204",
  phoneHref: "+919779332204",
  linkedin: "https://www.linkedin.com/in/your-profile", // TODO: replace with your LinkedIn profile URL
  resumePdf: "/Ankaj_Rana_Resume.pdf",
  yearsExperience: "8+",
  productsShipped: "8", // ItsBot, Todemy, BharatPe, Everlens, Lyber, NFTyit, Chronifi, Grintafy
  summary: [
    "Frontend Developer with 8+ years of experience building responsive, production-grade web applications with React.js, Next.js, TypeScript and modern CSS frameworks. Currently building ItsBot, a multi-vertical AI voice agent and automation platform, and Todemy, a children’s educational app platform.",
    "Strong track record delivering complex UI — SaaS dashboards, social feeds, marketplaces, admin panels and Web3/NFT platforms — from design handoff to production. Experienced in REST API integration, scalable state management with Redux Toolkit and Context API, and cross-browser responsive delivery.",
    "I actively use AI-assisted development tools (Cursor, Claude, ChatGPT, GitHub Copilot) to accelerate delivery and raise code quality, and I’m comfortable owning features end-to-end and mentoring junior developers.",
  ],
};

export type Job = {
  role: string;
  company: string;
  location: string;
  start: string;
  end: string;
  bullets: string[];
};

export const experience: Job[] = [
  {
    role: "Frontend Developer",
    company: "Eminence Technology",
    location: "Mohali, India · On-site",
    start: "Sep 2024",
    end: "Present",
    bullets: [
      "ItsBot (itsbot.ai) — AI voice agent & automation platform: build and maintain the multi-vertical Next.js frontend serving dental, home services, cosmetics, hospitality and landscaping verticals from a single codebase with per-vertical theming, content and routing.",
      "Developed the agent configuration and call-management interface — live call logs, transcripts, post-call data-collection fields and transfer-to-human controls — integrating ElevenLabs Conversational AI and Twilio APIs.",
      "Rebuilt the itsbot.ai marketing site end-to-end across all landing-page sections with responsive, SEO-optimised Next.js pages.",
      "Todemy — children’s educational app platform: built the parent- and child-facing UI for a 365-day curriculum covering ages 2–7, including activity-library browsing, category/subcategory navigation, session briefs and progress views.",
      "Designed age-appropriate, accessible interfaces for young users — large touch targets, high-contrast visuals and animation-led feedback — while keeping parent-side screens data-dense and scannable.",
      "Use AI-assisted development tools (Cursor, Claude, ChatGPT, GitHub Copilot) for component scaffolding, refactoring legacy code, writing tests and reviewing pull requests, noticeably reducing feature turnaround time.",
      "Optimised performance via code-splitting, lazy loading and asset optimisation; collaborate with designers, backend engineers and QA in Agile sprints and mentor junior developers on React best practices.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "SoftRadix Technologies Pvt. Ltd.",
    location: "Mohali, Punjab, India · On-site",
    start: "Jul 2022",
    end: "Jan 2024",
    bullets: [
      "Developed a social marketplace platform in React.js where users create accounts, set up marketplace profiles, publish feeds and share content across their network.",
      "Built a complete news feed module with multi-format media upload, post editing, and like / unlike / repost / comment functionality with full CRUD support.",
      "Implemented dynamic charts and data visualisations to surface user analytics and connection insights, replacing static reporting screens.",
      "Delivered “who viewed your profile” and matching-connections features, improving user engagement and profile discoverability.",
      "Consumed REST APIs via Axios with centralised error handling, and structured global state using Redux Toolkit.",
      "Ensured cross-browser compatibility across Chrome, Firefox, Safari and Edge, and full responsiveness on mobile and tablet.",
    ],
  },
  {
    role: "Web Designer / UI Developer",
    company: "IT Waves",
    location: "Chandigarh, India",
    start: "Mar 2020",
    end: "Jul 2022",
    bullets: [
      "Delivered frontend for a range of E-Commerce and NFT / Web3 platforms, including Everlens, Lyber and NFTyit.",
      "Built multiple admin panels from scratch — dashboards, data tables, filters, role-based views and reporting screens.",
      "Created reusable UI components and shared style systems that cut build time on subsequent projects.",
      "Worked directly with clients and designers to translate requirements into responsive, production-ready interfaces.",
    ],
  },
  {
    role: "Web Designer",
    company: "Code Brew Labs",
    location: "Chandigarh, India",
    start: "Jan 2019",
    end: "Mar 2020",
    bullets: [
      "Designed and developed the app and web UI for BharatPe, a leading Indian merchant payments platform (client engagement, Delhi).",
      "Implemented interactive animations and micro-interactions using JavaScript and CSS to improve perceived performance and polish.",
      "Led and mentored a team of 3 on markup standards, responsive layout and design consistency.",
    ],
  },
  {
    role: "UI Designer",
    company: "eWeb A1Professionals Pvt. Ltd.",
    location: "India · On-site",
    start: "Oct 2017",
    end: "Dec 2018",
    bullets: [
      "Built E-Commerce and service websites from scratch using HTML5, CSS3, JavaScript, jQuery and Bootstrap.",
      "Converted PSD and design mockups into responsive, cross-browser compatible web pages.",
    ],
  },
];

export type Project = {
  name: string;
  tagline: string;
  stack?: string[];
  bullets: string[];
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    name: "ItsBot",
    tagline: "AI voice agent & automation platform",
    stack: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "REST APIs", "ElevenLabs", "Twilio"],
    bullets: [
      "Multi-vertical SaaS platform delivering AI voice agents for dental, home services, cosmetics, hospitality and landscaping businesses.",
      "Built the vertical-aware frontend architecture, agent configuration dashboard, call log and transcript views, and the full public marketing site.",
    ],
    links: [{ label: "itsbot.ai", href: "https://itsbot.ai/" }],
  },
  {
    name: "Todemy",
    tagline: "Children’s educational app platform",
    stack: ["React.js", "Next.js", "Tailwind CSS", "REST APIs"],
    bullets: [
      "Learning platform for children aged 2–7 built around a 365-day activity curriculum spanning academics, feelings, kindness, confidence and self-care.",
      "Delivered the activity library, category navigation, game modules and parent-facing session and progress screens.",
    ],
  },
  {
    name: "BharatPe",
    tagline: "Merchant payments application",
    stack: ["React.js", "HTML5", "CSS3", "Bootstrap", "JavaScript"],
    bullets: [
      "Owned the end-to-end UI for the payments app and marketing site, including the full responsive layer.",
      "Built JavaScript and CSS animation sequences across key user journeys; managed and trained a 3-person team.",
    ],
    links: [{ label: "bharatpe.com", href: "https://bharatpe.com/" }],
  },
  {
    name: "Everlens, Lyber & NFTyit",
    tagline: "NFT & Web3 platforms",
    bullets: [
      "Developed marketplace and minting interfaces with wallet-connection flows, live listings and responsive gallery views.",
    ],
    links: [
      { label: "everlens.io", href: "https://everlens.io/" },
      { label: "lyber.com", href: "https://lyber.com/" },
      { label: "nftyit.com", href: "https://nftyit.com/" },
    ],
  },
  {
    name: "Chronifi & Grintafy",
    tagline: "Web platforms",
    bullets: ["Delivered responsive frontends and admin dashboards."],
    links: [
      { label: "chronifi.com", href: "https://www.chronifi.com/" },
      { label: "grintafy.com", href: "http://grintafy.com/" },
    ],
  },
];

export type SkillGroup = {
  group: string;
  icon: "code" | "layers" | "monitor" | "link" | "sparkles" | "wrench" | "check";
  tone: "sky" | "indigo" | "blue" | "cyan" | "violet" | "slate" | "emerald";
  items: string[];
};

export const skills: SkillGroup[] = [
  { group: "Languages", icon: "code", tone: "sky", items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"] },
  { group: "Frameworks & Libraries", icon: "layers", tone: "indigo",
    items: ["React.js", "Next.js", "Redux & Redux Toolkit", "Context API", "React Hooks", "jQuery"],
  },
  { group: "Styling & UI", icon: "monitor", tone: "blue",
    items: ["Tailwind CSS", "Bootstrap", "Material UI", "SCSS", "Responsive Design", "Media Queries", "Figma to Code"],
  },
  { group: "APIs & Data", icon: "link", tone: "cyan",
    items: ["REST APIs", "Axios", "JSON", "Web3 / NFT integrations", "Dynamic Charts & Data Visualisation"],
  },
  { group: "AI Tools & Workflow", icon: "sparkles", tone: "violet",
    items: [
      "Cursor",
      "Claude",
      "ChatGPT",
      "GitHub Copilot",
      "Prompt Engineering",
      "AI-assisted debugging",
      "Code review & test generation",
    ],
  },
  { group: "Tools & Platforms", icon: "wrench", tone: "slate",
    items: ["Git", "GitHub", "VS Code", "Chrome DevTools", "Postman", "Jira", "Adobe Photoshop"],
  },
  { group: "Practices", icon: "check", tone: "emerald",
    items: [
      "Component-driven architecture",
      "Reusable design systems",
      "Cross-browser compatibility",
      "Web accessibility",
      "Agile / Scrum",
      "Code reviews",
    ],
  },
];

export const education = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    detail: "68%",
    school: "S.V.S.D.P.G. College, Bhatoli",
    location: "Una, Himachal Pradesh",
    year: "2016",
  },
  {
    degree: "Senior Secondary (12th)",
    school: "Mount Shivalik Sr. Sec. School, Gaddiwal",
    location: "Punjab",
    year: "2013",
  },
];

export const achievements = [
  { title: "Punctual Employee Award", detail: "Recognised for consistent delivery and reliability." },
  { title: "Energetic Employee Award", detail: "Recognised for proactive contribution and team energy." },
];
