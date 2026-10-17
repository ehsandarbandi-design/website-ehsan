import { projects } from "../site";
import type { CaseStudy } from "./types";

// TODO(Ehsan): still missing — testing details (who, how many, one moment a tenant got stuck, completion numbers).
export const tailorbird: CaseStudy = {
  slug: "tailorbird",
  title: "Tailorbird • Designing the human fallback for an AI measurement model",
  description: "Getting tenants to photograph what an AI model couldn't see",
  color: projects.find((p) => p.id === "tailorbird")!.color!,
  menu: [
    { id: "overview", label: "Overview" },
    { id: "problem", label: "The Problem" },
    { id: "research", label: "Research" },
    { id: "exploration", label: "Design Exploration" },
    { id: "final-design", label: "Final Design" },
    { id: "impact", label: "Impact" },
    { id: "reflection", label: "What I Learned" },
  ],
  blocks: [
    // Overview
    {
      type: "title",
      id: "overview",
      title: "Tailorbird • Designing the human fallback for an AI measurement model",
      subtitle: "Getting tenants to photograph what an AI model couldn't see",
    },
    {
      type: "video",
      src: "/case-studies/tailorbird/thumbnail.mp4",
      image: {
        src: "/case-studies/tailorbird/thumbnail-poster.jpg",
        width: 1302,
        height: 978,
        alt: "The Tailorbird app on a phone",
      },
    },
    {
      type: "columns",
      items: [
        { heading: "Role", body: ["Product Designer: research, UX, UI and brand"] },
        { heading: "Timeline", body: ["4 months, kickoff to handoff"] },
      ],
    },
    {
      type: "columns",
      items: [
        { heading: "Team", body: ["CEO · Computer Vision Lead"] },
        { heading: "Result", body: ["The company closed its seed round"] },
      ],
    },

    // The problem
    {
      type: "text",
      id: "problem",
      eyebrow: "The Problem",
      heading: "A good model with missing data",
      body: [
        "Tailorbird helps real estate investors price renovations before they buy. Its computer-vision model turns listing photos into room measurements, so a contractor can bid in under 24 hours without visiting the building.",
        "But listing photos miss rooms, show the wrong angles, or don't exist. Every gap meant sending someone to the property, the step the product was built to remove. The fix was a second source of data: photos taken on demand by the person who lives there.",
      ],
    },
    {
      type: "image",
      image: {
        src: "/case-studies/tailorbird/listing-photos.webp",
        width: 2000,
        height: 983,
        alt: "Redfin and Zillow listings showing the photos a listing typically has, and what it leaves out",
      },
    },

    // Research
    {
      type: "text",
      id: "research",
      eyebrow: "Research",
      heading: "The real blocker was the person living there",
      body: [
        "I interviewed six contractors, real estate agents and property owners. Their pain points (getting into occupied units, travel, measuring, unknown conditions) shared one root: someone lives there. So the user who mattered most wasn't the investor paying for the product. It was the tenant.",
      ],
    },
    {
      type: "image",
      image: {
        src: "/case-studies/tailorbird/personas.webp",
        width: 2000,
        height: 983,
        alt: "Persona cards for the tenant and the contractor: scenario, goals, drivers, motivation and personality",
      },
    },
    {
      type: "columns",
      // Same left-to-right order as the persona cards above.
      items: [
        {
          heading: "Sarah, the tenant",
          body: [
            "45 years old, single parent of two, intermediate tech skills. She wants minimal contact with others. She has no stake in the renovation and will give the task about five minutes.",
          ],
        },
        {
          heading: "Marco, the contractor",
          body: [
            "35, general contractor in Dallas, high tech skills. He wants to bid more projects in less time. He is motivated and capable, so he was not the hard problem.",
          ],
        },
      ],
    },
    {
      type: "text",
      body: ["**How do we get someone to take the exact photos an AI model needs?**"],
    },

    // Design exploration
    {
      type: "text",
      id: "exploration",
      eyebrow: "Design Exploration",
      heading: "Asking for more got us less",
      body: [
        "My first flow tried to capture everything in one visit: confirm the floor plan, take photos, comment on them, and message the team for help.",
      ],
    },
    {
      type: "image",
      image: {
        src: "/case-studies/tailorbird/user-flow-v2.png",
        width: 1330,
        height: 640,
        alt: "The first user flow: open the link, check and correct the information, take a picture for each task, review, and submit",
      },
    },
    {
      type: "text",
      body: [
        "Testing showed it was too complicated, especially for tenants. Reading a floor plan, guessing what an AI needs, and a chat that hinted the task was hard were all reasons to quit. And a tenant who quits means another site visit.",
        "One flow was trying to serve two very different people, so I split it:",
        "- **Tenants get a minimal flow:** no floor plan, no comments, no sign-up. The landlord's unique link is enough.",
        "- **Contractors get the depth:** multiple properties and detailed capture.",
        "- **Chat was cut:** clear screens did its job without the cost of someone answering messages.",
      ],
    },

    // Final design
    {
      type: "text",
      id: "final-design",
      eyebrow: "Final Design",
      heading: "One clear task per screen",
      body: [
        "The tenant flow is a single path a busy nurse can finish on the first try, without help:",
        "- **Open the link.** No app, no account.",
        "- **See what to expect.** What's needed and how long it takes.",
        "- **Take guided photos.** One room or angle per screen.",
        "- **Done.** Nothing to follow up, so no site visit.",
      ],
    },
    {
      type: "image",
      image: {
        src: "/case-studies/tailorbird/flow-steps.png",
        width: 600,
        height: 88,
        alt: "Unique link → Onboarding → Guided photos → Done",
      },
    },
    {
      type: "image",
      image: {
        src: "/case-studies/tailorbird/tenant-flow.webp",
        width: 2000,
        height: 983,
        alt: "The tenant flow in six screens: the text message, welcome, onboarding, camera access, room list and guided capture",
      },
    },
    {
      type: "text",
      body: ["The contractor flow is built for volume: a list of properties and the photos each still needs."],
    },
    {
      type: "image",
      image: {
        src: "/case-studies/tailorbird/contractor-flow.webp",
        width: 2000,
        height: 983,
        alt: "The contractor flow in six screens: launch, property list, unit list, rooms list, photo gallery and guided capture",
      },
    },

    // Impact
    {
      type: "text",
      id: "impact",
      eyebrow: "Impact",
      heading: "The concept held up with investors",
      body: [
        "The company closed its seed round and grew the team. Today Tailorbird is a CapEx platform working with 28 of the NMHC Top 50 owners. It has grown far beyond my work, but it rests on the idea this project tested: owners will pay for reliable interior data before they buy.",
      ],
    },
    {
      type: "video",
      src: "/case-studies/tailorbird/investor-slides.mp4",
      image: {
        src: "/case-studies/tailorbird/investor-slides-poster.jpg",
        width: 960,
        height: 540,
        alt: "Slides from the Tailorbird investor pitch deck",
      },
    },

    // Reflection
    {
      type: "text",
      id: "reflection",
      eyebrow: "What I learned",
      body: [
        "**Design for the least motivated user**",
        "The hardest user wasn't the investor or the contractor using it every day. It was the tenant in the middle, with no reason to care. Designing for Sarah's five minutes made every decision easier, and made the product better for everyone.",
        "",
        "**More data isn't better data**",
        "My first instinct was to collect everything: floor plans, comments, chat. Testing showed that every extra ask cost us completions, and an incomplete submission is worth nothing. Now I start by asking for the smallest input that still gets the job done.",
        "",
        "**AI needs a human fallback**",
        "When a model can’t see something, a person has to fill the gap. Clear instructions and simple steps are what make that data usable.",
      ],
    },
  ],
};
