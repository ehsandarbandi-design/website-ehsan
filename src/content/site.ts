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
    "For 9 years, I've worked at the intersection of AI, enterprise systems, and the messy organizational reality of getting things actually built — for Coca-Cola, TIAA, Cigna, and early-stage startups. I'm best at finding the real problem inside a complex brief, making AI feel trustworthy and intuitive, and building the alignment that turns good design into shipped products.",
  href: "/about",
  color: colors.intro,
  cursorLabel: "View about Ehsan",
};

export const projects: Row[] = [
  {
    id: "nexus",
    title: "Nexus AI — Coca-Cola",
    subtitle: "Lead UX/UI Designer · Enterprise AI · Design Systems",
    description:
      "Designed the AI assistant and design system for 90,000+ employees. Went from zero to shipped in 8 weeks, with the system later adopted across Coca-Cola's broader AI product suite.",
    image: { src: "/images/nexus.png", alt: "Nexus AI × Coca-Cola" },
    video: "/videos/nexus.mp4",
    href: "/nexusai",
    color: colors.nexus,
    cursorLabel: caseStudyLabel,
  },
  {
    id: "dustin",
    title: "Launching a New Real Estate Agent",
    subtitle: "Product Strategy · Positioning · Design & Build",
    description:
      "Launched a newly licensed San Francisco agent with no track record: positioning built on his finance background, a site shipped in two days, a price-guessing game that turned visitors into leads, and a rebuild he can grow without me.",
    image: { src: "/images/dustin.png", alt: "Real Estate IQ game round and price reveal" },
    href: "/dustin",
    color: colors.dustin,
    cursorLabel: caseStudyLabel,
  },
  {
    id: "tailorbird",
    title: "Tailorbird",
    subtitle: "Lead UX/UI Designer · Enterprise AI · Design Systems",
    // TODO: this copy is duplicated from Nexus AI in the Figma file — replace with Tailorbird's summary.
    description:
      "Designed the AI assistant and design system for 90,000+ employees. Went from zero to shipped in 8 weeks, with the system later adopted across Coca-Cola's broader AI product suite.",
    image: { src: "/images/tailorbird.png", alt: "Tailorbird app on a phone" },
    color: colors.tailorbird,
    cursorLabel: caseStudyLabel,
  },
  {
    id: "allaround",
    title: "All Around",
    subtitle: "UX Research · Interaction Design · Visual Design",
    description:
      "Designed a fitness app for people who aren't athletes — focused on lowering the barrier to outdoor activity through social motivation, location discovery, and lightweight tracking.",
    image: { src: "/images/allaround.png", alt: "All Around app icon over a city map" },
    color: colors.allaround,
    cursorLabel: caseStudyLabel,
  },
  {
    id: "punchbird",
    title: "Punchbird",
    subtitle: "Product Strategy · UX Research · Interaction Design · 0→1",
    description:
      "Designed the 0→1 product experience for a personalized skincare startup — from early user research through a quiz-driven e-commerce flow, validated with real users, and pitched to investors.",
    image: { src: "/images/punchbird.png", alt: "Punchbird natural bespoke skincare branding" },
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
