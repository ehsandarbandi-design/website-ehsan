import { projects } from "../site";
import type { CaseImage, CaseStudy } from "./types";

const img = (file: string, width: number, height: number, alt: string): CaseImage => ({
  src: `/case-studies/allaround/${file}`,
  width,
  height,
  alt,
});

// Source: Ehsan's original All Around case study (edarbandi.com/allaround), reshaped with the case-study framework.
// TODO(Ehsan): project length isn't on the old page — add it to the Timeline row. An animated hero (or the Figma
// prototype as an embed) would beat the static cover.
export const allaround: CaseStudy = {
  slug: "allaround",
  title: "All Around • Designing an outdoor app for people who haven't started moving",
  description: "Shortening the distance between \"I want to go outside\" and \"I know where to go\"",
  color: projects.find((p) => p.id === "allaround")!.color!,
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
      title: "All Around • Designing an outdoor app for people who haven't started moving",
      subtitle: "Shortening the distance between \"I want to go outside\" and \"I know where to go\"",
    },
    { type: "image", image: img("cover.webp", 2500, 1563, "All Around app screens: sign-up, a trail page and route maps") },
    {
      type: "columns",
      items: [
        { heading: "Role", body: ["Sole Product Designer: research through high-fidelity prototype"] },
        { heading: "Team", body: ["Two founders + me"] },
      ],
    },
    {
      type: "columns",
      items: [
        { heading: "Users", body: ["Adults 20–45 who want to be more active but haven't started"] },
        { heading: "Result", body: ["87.5% found and saved an activity unassisted in testing"] },
      ],
    },

    // The problem
    {
      type: "text",
      id: "problem",
      eyebrow: "The problem",
      heading: "Fitness apps are built for people who are already fit",
      body: [
        "The founders had a hypothesis from their own frustration: the market serves people who are already active, and ignores the much bigger group who want to move more but don't know where to start. My job wasn't to take their word for it. It was to test whether the gap was real, and if it was, to close it.",
        "For most working adults, the barrier isn't information. They know they should move more. It's motivation, logistics and company: no time, no obvious place to go, no one to go with, and a sense that fitness apps aren't for \"people like me.\"",
      ],
    },
    {
      type: "text",
      body: [
        "**How might we shorten the distance between \"I want to get outside\" and \"I know exactly where to go\", and keep people coming back long enough to build a habit?**",
      ],
    },

    // Research
    {
      type: "text",
      id: "research",
      eyebrow: "Research",
      heading: "Motivated, but with no next step",
      body: [
        "I interviewed eight adults aged 22–44 who wanted to be more active but had no routine, from desk workers to occasional weekend walkers. Five themes came up again and again:",
        "- **Friends make plans happen.** Almost everyone was more likely to go if a friend came. Scheduling, not interest, was the blocker.",
        "- **Motivation comes in waves.** It spikes after a stressful day, with no quick way to act on it.",
        "- **Novelty gets people out.** A new park or route was a reason to go.",
        "- **Fitness apps felt like the wrong club.** Several had tried them and felt they weren't \"fit enough.\"",
        "- **Small wins count.** A dog walk felt good, but apps treated it as nothing.",
      ],
    },
    {
      type: "gallery",
      contained: true,
      label: "Personas",
      items: [
        { ...img("persona-1.webp", 1000, 657, "Persona: Marie, a time-poor project manager and dog owner"), caption: "Marie · The time-poor professional" },
        { ...img("persona-2.webp", 1000, 657, "Persona: Satwik, a remote worker with no reason to leave the house"), caption: "Satwik · The remote worker" },
        { ...img("persona-3.webp", 1000, 657, "Persona: Leah, a parent rebuilding an exercise habit"), caption: "Leah · The lapsed exerciser" },
      ],
    },
    {
      type: "text",
      body: [
        "The personas weren't the turning point. The journey maps were. Following each persona from motivation to planning to going out showed exactly where people dropped off: **they had the motivation but no immediate next step, and by the time they'd worked out where to go, the impulse was gone.**",
      ],
    },
    { type: "image", image: img("journey.webp", 1999, 936, "User journey map from finding time to planning the next activity, with feelings, pain points and opportunities") },
    {
      type: "text",
      body: [
        "Komoot, AllTrails, Google Maps and Strava all help someone who already knows what they want to do. None served the earlier moment: the person who is motivated but undecided, and doesn't call themselves a hiker or a runner. That became the opening.",
      ],
    },

    // Design exploration
    {
      type: "text",
      id: "exploration",
      eyebrow: "Design Exploration",
      heading: "Deciding what not to build",
      body: [
        "The founders were solving their own problem. That gave them conviction, but it quietly narrowed the product to an audience of one. My research kept surfacing barriers they'd never felt, so part of my job became widening the lens.",
        "The clearest case was in-app messaging. The founders wanted it in the first version. I pushed back: it didn't solve a barrier we'd found, it copied tools people already use, and it would have pulled scarce resources from the features that did. We cut it, framed as a later candidate rather than a flat no, which kept the founders on board.",
        "For the rest, I generated sixteen concepts and kept only those that passed one test: **does this close a drop-off point the journey map exposed?** Discovery and planning with friends won, because those were exactly where motivated people gave up.",
      ],
    },
    {
      type: "text",
      sub: true,
      heading: "Photos, not maps",
      body: [
        "The home screen came down to a fork. The obvious pattern is a map. But a map serves someone who has already decided to go. For someone who hasn't, a map is a chore: it asks for effort before they feel any pull.",
        "So I led with large photographs of each place and moved the map to a secondary view. I gave up some at-a-glance distance and location for emotional pull. For a product whose job is motivation, not navigation, that was the right trade.",
      ],
    },
    {
      type: "text",
      sub: true,
      heading: "Testing the structure before the pixels",
      body: [
        "Lo-fi testing surfaced three structural problems, each fixed as a design decision rather than a patch:",
        "- **Filters reset every visit.** Preferred activity types now show by default, and filtering is optional.",
        "- **\"Favorites\" in the nav bar confused people.** Saving moved onto the activity cards themselves.",
        "- **Trip editing assumed people plan ahead.** They don't, so editing became in-the-moment.",
      ],
    },
    { type: "image", image: img("wireframes.webp", 1791, 1779, "Lo-fi wireframe flow from sign-up through explore, routes, maps and recording") },

    // Final design
    {
      type: "text",
      id: "final-design",
      eyebrow: "Final Design",
      heading: "From \"I want to go outside\" to a place, in under 30 seconds",
      body: [
        "Personalized suggestions sit right on the home screen, so there's something to pick before any searching or filtering. Route cards lead with the place, and the map is one tap away for when someone has decided.",
      ],
    },
    { type: "image", image: img("screens.webp", 2221, 954, "Five final screens: home, map, filters, a place page and a route page") },
    { type: "image", image: img("hifi-explore.webp", 2434, 1904, "The Explore screen, with activity types at the top for quick access") },
    { type: "image", image: img("hifi-lists.webp", 2434, 1904, "The Lists screen, with favorites, finished and want-to-go routes in one place") },
    {
      type: "text",
      body: [
        "The visual language is approachable and grounded in nature: forest greens, warm amber and clean neutrals. It deliberately avoids the neon-and-black look of performance fitness apps, and uses large touch targets and high-contrast text that stay readable on the move.",
      ],
    },
    { type: "image", image: img("ui.webp", 2000, 923, "The All Around UI kit: typography, color palette, buttons, chips, maps and icons") },

    // Impact
    {
      type: "text",
      id: "impact",
      eyebrow: "Impact",
      heading: "People wanted it. Investors weren't convinced.",
    },
    {
      type: "columns",
      items: [
        { heading: "87.5% completion", body: ["7 of 8 testers found and saved a nearby activity without help"] },
        { heading: "4.2 / 5 ease of use", body: ["The photo-led suggestions were the highest-rated part of the experience"] },
      ],
    },
    {
      type: "text",
      body: [
        "Six of eight testers named planning with friends as their main reason to choose All Around, ahead of any tracking or metrics. Planning with a friend was harder to finish (75%), with two people needing a prompt on the invite step.",
        "The founders pitched with the prototype, but the company didn't raise. We couldn't convince investors the market was big and reachable enough, and the team moved on.",
      ],
    },

    // Reflection
    {
      type: "text",
      id: "reflection",
      eyebrow: "What I learned",
      heading: "Design can prove people want it. It can't prove it's a business.",
      body: [
        "We validated that people wanted All Around and could use it. We never validated whether they'd pay for it, what it would cost to reach them, or how big the reachable market really was, and those are the questions investors fund against. Next time, I'd test the business model and demand alongside usability from week one, de-risking the business, not just the experience.",
      ],
    },
  ],
};
