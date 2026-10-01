import { nameRow } from "./site";
import type { CaseStudy } from "./case-studies/types";

/**
 * About page (Figma node 110:3978). Built with the same components as the case studies.
 *
 * TODO(Ehsan): the timeline below is a placeholder drafted from the site copy, not from your resume —
 * replace roles, companies and years with the real ones.
 */

const timeline: { year: string; role: string; detail: string }[] = [
  { year: "2025", role: "Lead Product Designer — Coca-Cola (Nexus AI)", detail: "Sole designer on an enterprise AI assistant and design system for 50,000+ employees." },
  { year: "2024", role: "Lead UX/UI Designer — Tailorbird", detail: "Enterprise AI workflows and a design system for a property-renovation platform." },
  { year: "2023", role: "Senior Product Designer — TIAA", detail: "Simplified complex financial journeys for retirement planning." },
  { year: "2022", role: "Senior Product Designer — Cigna", detail: "Healthcare experiences across member and provider tools." },
  { year: "2021", role: "MBA, Design Strategy", detail: "Business strategy paired with design craft." },
  { year: "2020", role: "Product Designer — Punchbird", detail: "0→1 product for a personalized skincare startup, from research to investor pitch." },
  { year: "2019", role: "Product Designer — All Around", detail: "A fitness app for people who aren't athletes." },
  { year: "2018", role: "UX Designer", detail: "Research, interaction and visual design for early-stage startups." },
  { year: "2017", role: "UI Designer", detail: "Interfaces for web and mobile products." },
  { year: "2016", role: "Visual Designer", detail: "Where the practice started — branding, layout and illustration." },
  { year: "2000", role: "First drawings", detail: "The beginning of an obsession with how things look and work." },
];

export const about: CaseStudy = {
  slug: "about",
  title: "About",
  description: "I design AI products people can trust.",
  // The Figma menu dot is the orange from the name row.
  color: nameRow.color!,
  menu: [
    { id: "hi", label: "Hi!" },
    { id: "currently", label: "Currently" },
    ...timeline.map((t) => ({ id: `y${t.year}`, label: t.year })),
  ],
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
        "I design AI products people can trust — and I've spent 9 years learning how to make complex systems feel simple.",
        "I pair an MBA in design strategy with hands-on craft, which means I can sit in a room with PMs, engineers, and executives and translate between all three. I'm at my best when a brief is messy and high-stakes: untangling the system, finding the real problem, and reframing it into something people can actually use.",
      ],
    },
    {
      type: "text",
      id: "currently",
      sub: true,
      heading: "Currently",
      body: ["Designing and building AI products — and exploring where design ends and code begins."],
    },
    ...timeline.map((t) => ({
      type: "text" as const,
      id: `y${t.year}`,
      sub: true,
      heading: t.year,
      body: [`**${t.role}**`, t.detail],
    })),
  ],
};
