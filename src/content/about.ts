import { nameRow } from "./site";
import type { CaseStudy } from "./case-studies/types";

/**
 * About page (Figma node 110:3978). Built with the same components as the case studies.
 * Told in chapters rather than a year-by-year timeline; copy written from Ehsan's interview answers.
 */
export const about: CaseStudy = {
  slug: "about",
  title: "About",
  description: "I design AI products people can trust.",
  // The Figma menu dot is the orange from the name row.
  color: nameRow.color!,
  menu: [
    { id: "hi", label: "Hi!" },
    { id: "buildings-to-software", label: "From buildings to software" },
    { id: "brought-in-for", label: "What I'm brought in for" },
    { id: "starting-from-zero", label: "Starting from zero" },
    { id: "ai-and-trust", label: "AI and trust" },
    { id: "outside-work", label: "Outside work" },
  ],
  paragraphSpacing: true,
  blocks: [
    {
      type: "image",
      image: { src: "/about/ehsan.jpg", width: 1334, height: 862, alt: "Ehsan Darbandi in an orange beanie in front of orange flowers" },
    },
    {
      type: "text",
      id: "hi",
      heading: "👋 I’m Ehsan (/ehh-saan/).",
      body: [
        "I design AI products people can trust.",
        "Most products I join were built one feature at a time. Each piece works on its own, but nobody designed the whole. I find the real process underneath, rebuild the structure around it, and the product starts to make sense.",
        "I trained as an architect. Architects design buildings around how people move through space. I design software around how people move through their work.",
      ],
    },
    {
      type: "text",
      id: "buildings-to-software",
      sub: true,
      heading: "From buildings to software",
      body: [
        "I started in architecture. After school, I co-founded a design studio with two friends, working on homes and commercial spaces.",
        "The studio taught me a hard lesson: great design doesn't matter if you can't sell it and grow it. So I chose an MBA in Design Strategy over another design degree. I earned it in San Francisco from 2017 to 2019, and the city, plus a lifelong love of technology, pulled me into tech.",
      ],
    },
    {
      type: "text",
      id: "brought-in-for",
      sub: true,
      heading: "What I'm brought in for",
      body: [
        "I consulted for enterprise teams at Cigna, TIAA and Coca-Cola. The story was usually the same: engineers had built the product feature by feature, and people couldn't use it.",
        "- **Cigna:** A contract-negotiation tool, two years in the making, never tested with users. I interviewed the negotiators and found the real shape of their work: a year-long cycle of offers and counteroffers. I rebuilt the navigation around that cycle, with notes that follow a contract through every round.",
        "- **TIAA:** A CRM full of small, disconnected features. I organized it around the real customer lifecycle and added process tracking, so everyone could see where each customer stood.",
        "- **Coca-Cola:** An internal AI tool employees had stopped using. I rebuilt it as Nexus AI, using patterns people already knew and trusted.",
      ],
    },
    {
      type: "text",
      id: "starting-from-zero",
      sub: true,
      heading: "Starting from zero",
      body: [
        "I also love a blank page. I was the first designer at Tailorbird (then Scale Builders), working on its brand, its pitch deck and an app that filled the gaps in an AI measurement model. With founding teams, I've designed products from scratch, like Punchbird and All Around.",
        "I build what I design, too. Most recently, I designed and built a website for a San Francisco real estate agent, from positioning to the live site.",
      ],
    },
    {
      type: "text",
      id: "ai-and-trust",
      sub: true,
      heading: "What I believe about AI and trust",
      body: [
        "**People trust AI when they can check its work.** Show the source behind every answer, so people can verify it instead of taking it on faith.",
        "**When the stakes are high, people need the final say.** Users should be able to edit what the AI produces. If people can't correct it, they won't trust it, no matter how good the model is.",
      ],
    },
    {
      type: "text",
      id: "outside-work",
      sub: true,
      heading: "Outside work",
      body: ["You'll usually find me hiking, biking or running somewhere in nature, or wandering through a museum."],
    },
  ],
};
