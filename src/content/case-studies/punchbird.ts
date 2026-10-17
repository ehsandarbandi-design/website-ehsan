import { projects } from "../site";
import type { CaseImage, CaseStudy } from "./types";

const img = (file: string, width: number, height: number, alt: string): CaseImage => ({
  src: `/case-studies/punchbird/${file}`,
  width,
  height,
  alt,
});

// Source: Ehsan's original Punchbird case study (edarbandi.com/punchbird), reshaped with the case-study framework.
// TODO(Ehsan): an animated hero (quiz walkthrough) would beat the product photo; a real tester quote or two
// beyond "filling out a form" would make the exploration land harder.
export const punchbird: CaseStudy = {
  slug: "punchbird",
  title: "Punchbird • Designing a personalized skincare brand, from quiz to pitch",
  description: "Helping people find skincare that works the first time",
  color: projects.find((p) => p.id === "punchbird")!.color!,
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
      title: "Punchbird • Designing a personalized skincare brand, from quiz to pitch",
      subtitle: "Helping people find skincare that works the first time",
    },
    { type: "image", image: img("product-hand.webp", 2500, 1875, "A personalized Punchbird oil blend labeled with the customer's name") },
    {
      type: "columns",
      items: [
        { heading: "Role", body: ["Design lead and co-founder: research, quiz UX, brand and strategy"] },
        { heading: "Timeline", body: ["4 months, from market hypothesis to investor pitch"] },
      ],
    },
    {
      type: "columns",
      items: [
        { heading: "Team", body: ["4 co-founders: business strategy, marketing, research and design"] },
        { heading: "Result", body: ["88% quiz completion in testing, pitched to investors"] },
      ],
    },

    // The problem
    {
      type: "text",
      id: "problem",
      eyebrow: "The problem",
      heading: "Skincare is personal. The market isn't.",
      body: [
        "Brands sort people into crude categories like \"oily\" or \"sensitive\" that don't reflect how skin actually behaves. So customers self-diagnose, cycle through products that don't work, and lose confidence along the way.",
        "Meanwhile, millennials expected personalization everywhere else, from Spotify to meal kits, and natural skincare was growing fast. Punchbird's idea: a personalized organic oil blend, matched to each customer through a five-minute online quiz and delivered to the door.",
      ],
    },
    {
      type: "text",
      body: [
        "**How might we design a personalized skincare experience that earns trust, simplifies discovery, and delivers a product that works?**",
      ],
    },

    // Research
    {
      type: "text",
      id: "research",
      eyebrow: "Research",
      heading: "Too much information, too little trust",
      body: [
        "I led the research: 50+ survey responses, then one-on-one interviews with millennials who buy natural products and keep a skincare routine. Four findings shaped everything after:",
        "- **Discovery is exhausting.** Hours of reviews and tutorials still left people unsure.",
        "- **Ingredient transparency builds trust.** Hidden or vague ingredient lists felt misleading.",
        "- **Customization is appealing but unfamiliar.** Could an algorithm really know their skin better than they did?",
        "- **Routines collapse under complexity.** More steps meant routines got abandoned.",
      ],
    },
    { type: "image", image: img("competitor-map.png", 1790, 1272, "Competitor map: synthetic to natural against generic to customized, with Punchbird alone in the natural and customized corner") },
    {
      type: "text",
      body: [
        "Mapping competitors like Curology, Prose and Function of Beauty showed the gap: no brand combined deep personalization with fully natural, oil-based blends at an accessible price.",
      ],
    },
    {
      type: "columns",
      items: [
        {
          heading: "Pampered Paloma",
          body: [
            "22–37, above-average income. Values natural ingredients but wants the work done for her. Spends $15–$60 on oils and discovers products on Instagram and through friends.",
          ],
        },
        {
          heading: "Why her",
          body: [
            "The highest conversion potential and the strongest fit for a ready-to-use, custom blend. She shaped the quiz's tone, the packaging and the pricing.",
          ],
        },
      ],
    },

    // Design exploration
    {
      type: "text",
      id: "exploration",
      eyebrow: "Design Exploration",
      heading: "The quiz felt like a medical form",
      body: [
        "The quiz carried the whole business. It was the conversion funnel, the data the blend algorithm needed, and the moment customers decided whether to trust us. Getting any one of those wrong would break the model.",
        "My first versions asked for everything the algorithm wanted, in a clinical tone. Testers said it felt like \"filling out a form.\" So I rebuilt it around how people actually answer questions about their skin:",
        "- **One question per screen**, grouped into short sections (skin type, lifestyle, goals, sensitivities) with a progress indicator.",
        "- **A conversational tone**, with a plain-language reason for every question, so transparency showed up in the quiz itself.",
        "- **Visual answers** for questions like how skin feels after washing, to reduce guesswork.",
        "- **An \"I'm not sure\" option** for combination skin, the one question testers kept getting stuck on.",
      ],
    },
    { type: "image", image: img("quiz.png", 2500, 1393, "A Punchbird quiz screen asking which skin issues matter most, with large answer buttons") },

    // Final design
    {
      type: "text",
      id: "final-design",
      eyebrow: "Final Design",
      heading: "From first click to a bottle with your name on it",
      body: [
        "The site follows one path: **land → understand → trust → quiz → purchase.** Before the quiz, it stays simple and builds trust. After it, it explains the result clearly enough to commit.",
      ],
    },
    { type: "image", image: img("website.webp", 2500, 1393, "The Punchbird website: \"personalize your blend\" over an illustrated botanical pattern") },
    {
      type: "text",
      body: [
        "- **A skin report, not just a receipt.** The quiz ends with a personal profile explaining the customer's skin and why each ingredient was chosen, which reduces doubt after purchase.",
        "- **A product made for one person.** Each blend is mixed from the quiz answers and labeled with the customer's name.",
        "- **A brand that isn't millennial pink.** Earthy tones, confident type and real, unretouched skin: ingredient-forward and premium without feeling exclusive.",
      ],
    },
    { type: "image", image: img("bottles-flatlay.jpg", 2500, 1393, "Four Punchbird bottles with navy labels and a botanical pattern on a wooden table") },

    // Impact
    {
      type: "text",
      id: "impact",
      eyebrow: "Impact",
      heading: "Validated with users, pitched to investors",
    },
    {
      type: "columns",
      items: [
        { heading: "88% completion", body: ["7 of 8 testers finished the quiz without help"] },
        { heading: "4.4 / 5 ease of use", body: ["Testers called it personalized and trustworthy, not generic"] },
      ],
    },
    {
      type: "text",
      body: [
        "We presented Punchbird to a panel of investors and advisors: market sizing, product differentiation, go-to-market strategy across San Francisco and Los Angeles, and a three-year financial projection.",
      ],
    },
    { type: "image", image: img("pitch-booth.png", 2500, 2500, "The Punchbird booth at the investor showcase, with brand panels and product samples") },

    // Reflection
    {
      type: "text",
      id: "reflection",
      eyebrow: "What I learned",
      heading: "Retention is a design decision, not a spreadsheet number",
      body: [
        "Our financial model assumed 36% of customers would buy again, but nothing in the product was designed to make that happen. For a subscription brand, the second purchase matters as much as the first. Now I treat retention as a design constraint from day one: reminders, reformulation prompts and progress tracking belong in the first version, not in the forecast.",
      ],
    },
  ],
};
