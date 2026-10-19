export type Row = {
  id: string;
  title: string;
  subtitle?: string;
  /** Revealed on hover (desktop only). */
  description?: string;
  /** Preview shown to the right on hover (desktop only). With `video`, this is its poster frame. */
  image?: { src: string; alt: string };
  /** Optional looping video preview, played while the row is hovered. */
  video?: string;
  /** Preview height when 600px wide, from Figma (default 407). The preview stays centred beside the text. */
  previewHeight?: number;
  href?: string;
  /** Status-dot and cursor color while hovered. The cursor keeps it after leaving the row. */
  color?: string;
  /** Label the cursor morphs into while hovered. */
  cursorLabel?: string;
};

// Dot colors from the Figma hover variants.
const colors = {
  name: "#EBAB44",
  intro: "#A6BE86",
  nexus: "#D3131A",
  dustin: "#C8922A",
  tailorbird: "#A4916F",
  allaround: "#A6BE86",
  punchbird: "#E89E8E",
  linkedin: "#0A66C2",
  email: "#CACF8A",
  dribbble: "#CA697D",
  x: "#121111",
};

const caseStudyLabel = "View case study";

export const nameRow: Row = {
  id: "name",
  title: "Ehsan Darbandi",
  subtitle: "Product design",
  href: "/",
  color: colors.name,
};

export const introRow: Row = {
  id: "intro",
  title: "Hi, I’m Ehsan.",
  subtitle: "I design AI products people actually trust.",
  description:
    "I've worked at the intersection of AI, enterprise systems, and the messy organizational reality of getting things actually built, for Coca-Cola, TIAA, Cigna, and early-stage startups. I'm best at finding the real problem inside a complex brief, making AI feel trustworthy and intuitive, and building the alignment that turns good design into shipped products.",
  href: "/about",
  color: colors.intro,
  cursorLabel: "View about Ehsan",
};

export const projects: Row[] = [
  {
    id: "nexus",
    title: "Nexus AI / Rebuilding the AI tool employees did not use",
    subtitle: "Product Designer · Enterprise AI · Design Systems",
    description:
      "Rebuilt Coca-Cola's abandoned internal AI tool for 50,000+ employees in 4 months: familiar AI patterns, answers employees can verify against the source, and a design system built to grow.",
    image: { src: "/images/nexus.png", alt: "Nexus AI × Coca-Cola" },
    video: "/videos/nexus.mp4",
    href: "/nexusai",
    color: colors.nexus,
    cursorLabel: caseStudyLabel,
  },
  {
    id: "dustin",
    title: "A website that grows without a designer",
    subtitle: "Product Strategy · Positioning · Design & Build",
    description:
      "Launched a newly licensed San Francisco agent with no track record. Positioning built on his finance background. A website shipped in two days. A game that turned visitors into leads and a rebuild he can grow without me.",
    image: { src: "/images/dustin.png", alt: "The rebuilt site's home page: a San Francisco skyline above the fog" },
    video: "/case-studies/dustin/header.mp4",
    previewHeight: 345,
    href: "/dustin",
    color: colors.dustin,
    cursorLabel: caseStudyLabel,
  },
  {
    id: "tailorbird",
    title: "Tailorbird / Designing the human fallback for an AI measurement model",
    subtitle: "Product Designer · Enterprise AI · Design Systems",
    description:
      "Designed the human fallback for an AI measurement model: a five-minute mobile flow that gets tenants to photograph exactly what the model couldn't see, so contractors can bid without a site visit.",
    image: { src: "/case-studies/tailorbird/thumbnail-poster.jpg", alt: "Tailorbird app on a phone" },
    video: "/case-studies/tailorbird/thumbnail.mp4",
    href: "/tailorbird",
    color: colors.tailorbird,
    cursorLabel: caseStudyLabel,
  },
  {
    id: "allaround",
    title: "AllAround / An outdoor app for people who haven't started moving",
    subtitle: "UX Research · Interaction Design · Visual Design",
    description:
      "Designed a fitness app for people who aren't athletes — focused on lowering the barrier to outdoor activity through social motivation, location discovery, and lightweight tracking.",
    image: { src: "/images/allaround.png", alt: "All Around app icon over a city map" },
    href: "/allaround",
    color: colors.allaround,
    cursorLabel: caseStudyLabel,
  },
  {
    id: "punchbird",
    title: "Punchbird / A personalized skincare brand, from quiz to pitch",
    subtitle: "Product Strategy · UX Research · Interaction Design · 0→1",
    description:
      "Designed the 0→1 product experience for a personalized skincare startup — from early user research through a quiz-driven e-commerce flow, validated with real users, and pitched to investors.",
    image: { src: "/images/punchbird.png", alt: "Punchbird natural bespoke skincare branding" },
    href: "/punchbird",
    color: colors.punchbird,
    cursorLabel: caseStudyLabel,
  },
];

export const links: Row[] = [
  { id: "linkedin", title: "LinkedIn", href: "https://www.linkedin.com/in/ehsandarbandi/", color: colors.linkedin },
  { id: "email", title: "Email", href: "mailto:edarbandi@gmail.com", color: colors.email },
  { id: "dribbble", title: "Dribbble", href: "https://dribbble.com/ehsandarbandi", color: colors.dribbble },
  { id: "x", title: "X", href: "https://x.com/DarbandiEhsan", color: colors.x },
];
