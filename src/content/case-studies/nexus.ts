import { projects } from "../site";
import type { CaseImage, CaseStudy } from "./types";

const img = (file: string, width: number, height: number, alt: string): CaseImage => ({
  src: `/case-studies/nexus/${file}`,
  width,
  height,
  alt,
});

export const nexus: CaseStudy = {
  slug: "nexusai",
  title: "Nexus AI",
  description: "A Unified, Intuitive AI Experience for Coca-Cola employees",
  color: projects.find((p) => p.id === "nexus")!.color!,
  menu: [
    { id: "problem", label: "The Problem" },
    { id: "stakeholder-alignment", label: "Stakeholder Alignment" },
    { id: "strategic-direction", label: "Strategic Direction" },
    { id: "hardest-decision", label: "The Hardest Decision" },
    { id: "pushback", label: "The pushback" },
    { id: "design", label: "The Design" },
    { id: "visual-language", label: "Visual Language" },
    { id: "outcome", label: "Outcome" },
    { id: "reflection", label: "Reflection" },
  ],
  blocks: [
    { type: "title", title: "Nexus AI", subtitle: "A Unified, Intuitive AI Experience for Coca-Cola employees" },
    { type: "image", image: img("hero.png", 2500, 1616, "Nexus AI screens laid out on a grid") },
    {
      type: "text",
      id: "problem",
      heading: "The Problem",
      body: [
        "The previous internal AI tool was technically live — but effectively abandoned. Employees logged in, had a poor experience, and went back to personal ChatGPT and manual SharePoint searches. No real company data integration, an unintuitive interface, and off-brand visuals. Leadership summed it up directly:",
        "\"People sign in — but they don't use it.\"",
        "A new team was assembled. I joined as the sole designer, tasked with rebuilding from scratch. Same deadline, same engineering constraints — and 50,000+ employees who'd already been given one reason not to bother.",
      ],
    },
    {
      type: "columns",
      items: [
        { heading: "Role", body: ["Lead Product Designer, Sole Designer"] },
        { heading: "Timeline", body: ["4 months, kickoff to handoff"] },
      ],
    },
    {
      type: "columns",
      items: [
        { heading: "Deliverables", body: ["End-to-end UX, UI, Design System"] },
        { heading: "Audience", body: ["50,000+ company-wide"] },
      ],
    },
    { type: "image", image: img("new-ui.png", 1800, 1300, "The new Nexus AI interface") },
    { type: "image", image: img("old-ui.png", 1800, 1300, "The previous internal AI tool") },
    {
      type: "text",
      id: "stakeholder-alignment",
      eyebrow: "Kickoff",
      heading: "Stakeholder Alignment",
      body: [
        "At the start of the project, I partnered with the product owner and two cross-functional teams working in different time zones to ensure deadlines could be met. A senior stakeholder emphasized the need for a design that felt impressive and strongly aligned with Coca-Cola’s brand identity. At the same time, the engineering teams required a solution that was simple enough to begin building the following week. To align everyone quickly, I synthesized the requirements and reviewed all available Coca-Cola brand resources. I spoke with other internal design teams to understand how they approached and maintained design consistency. This early alignment provided the foundation for moving into research and design with clarity and speed.",
      ],
    },
    { type: "image", image: img("goals.webp", 2500, 720, "Coca-Cola brand illustration") },
    {
      type: "columns",
      items: [{ heading: "Increase onboarding" }, { heading: "Increase Efficiency" }],
    },
    {
      type: "columns",
      items: [{ heading: "Build confidence in AI" }, { heading: "Maintain brand integrity" }],
    },
    {
      type: "text",
      id: "strategic-direction",
      eyebrow: "Strategic Direction",
      heading: "Familiarity wasn't a cop-out. It was the strategy.",
      body: [
        "I audited the AI interfaces employees were already using — ChatGPT, Copilot, Gemini — alongside Coca-Cola's brand guidelines. Two things became clear immediately.",
        "**Pattern convergence is a signal, not laziness.** Every major AI interface uses the same structural model — centered input, clean thread, minimal chrome — because users already know how to operate inside it. For a tool fighting an adoption problem, any deviation introduces friction it can't afford.",
        "**Branding is a trust mechanism.** The previous tool's off-brand feel wasn't just aesthetic — it made the product feel unsanctioned. The redesign had to make Nexus AI feel unmistakably Coca-Cola so employees would choose it over the personal tools they'd defaulted to.",
      ],
    },
    { type: "image", image: img("chatgpt.webp", 1956, 1030, "ChatGPT interface") },
    { type: "image", image: img("gemini.webp", 968, 568, "Gemini interface") },
    { type: "image", image: img("copilot.webp", 1724, 930, "Copilot interface") },
    {
      type: "columns",
      items: [
        {
          heading: "ChatGPT",
          body: [
            "**Conversational:** Excels at casual conversation and creative writing.",
            "**Versatility:** Handles various tasks like code debugging and writing different content formats.",
            "**Limited Integration:** Primarily a standalone web app, lacking integration with other tools.",
            "**Lacks source attribution:** doesn't provide sources for its responses, hindering credibility for factual inquiries.",
          ],
        },
        {
          heading: "Gemini",
          body: [
            "**Accessibility:** Straightforward interface with clear prompts and functionalities.",
            "**Search Integration:** Seamlessly integrates with search engines for fact-checking and research.",
            "**Focus:** Leans more towards information retrieval and completion than open-ended conversation.",
            "**Limited Creativity:** May struggle with highly creative writing prompts compared to ChatGPT.",
          ],
        },
        {
          heading: "Copilot",
          body: [
            "**Deep Integration:** Integrates directly with developer environments like Visual Studio Code, boosting workflow.",
            "**Inconsistent responsiveness:** UI elements may disappear on smaller screens, creating a frustrating user experience.",
            "**Inconsistent Intuitive Interaction:** Some interactions are not as intuitive as expected. Users may encounter unexpected behavior.",
          ],
        },
      ],
    },
    {
      type: "text",
      id: "hardest-decision",
      eyebrow: "The Hardest Decision",
      heading: "The brief asked for \"impressive.\" I delivered minimal. Here's why.",
      body: [
        "The initial brief asked for a \"wow effect.\" I developed five visual directions. The complex ones were exciting — but when mapped against the engineering timeline and QA capacity, the answer was clear. I called a meeting with leadership and presented an effort-impact analysis across all five.",
      ],
    },
    {
      type: "gallery",
      items: [
        { ...img("direction-glass-morphism.webp", 2500, 1189, "Glass morphism direction"), caption: "Glass Morphism" },
        { ...img("direction-dark-ui.webp", 2500, 1189, "Dark UI direction"), caption: "Dark UI" },
        { ...img("direction-minimal-ui.webp", 2500, 1189, "Minimal UI direction"), caption: "Minimal UI" },
        { ...img("direction-complex-gradient.webp", 2500, 1189, "Complex gradient direction"), caption: "Complex Gradient" },
        { ...img("direction-large-text.webp", 2500, 1189, "Large text direction"), caption: "Large Text" },
      ],
    },
    {
      type: "text",
      id: "pushback",
      heading: "The pushback — and how I handled it",
      body: [
        "The design director's reaction was immediate: \"This looks generic.\" My argument: \"Impressive\" is a feeling, not a design requirement. A polished, on-brand product that ships on time is worth more than an ambitious UI that ships broken or late. The effort-impact data made the case. He accepted the rationale — and the timeline held.",
      ],
    },
    {
      type: "text",
      id: "design",
      eyebrow: "The Design",
      heading: "One interface, flexible enough for every department.",
      body: [
        "The core model mirrors what employees already knew — centered chat, clean thread, minimal chrome — with Coca-Cola's brand layer on top. Midway through the project, the finance PM requested a fully custom UI. I pushed back: familiar patterns matter more than differentiation for enterprise AI adoption. What finance needed wasn't a new interface — it was structured output formatting (tables, graphs, data responses) that the existing system already supported. They agreed. One coherent system served every department — and stayed extensible enough to be applied to two more AI tools.",
        // TODO(Ehsan): this sentence is cut off on the old site ("…two more AI tools after I") — finish it.
      ],
    },
    {
      type: "text",
      id: "visual-language",
      eyebrow: "Visual Language",
      heading: "Design System & Visual Language",
      body: [
        "To ensure consistency and scalability, I built a lightweight design system tailored to Nexus AI. I started by auditing Coca-Cola’s existing brand assets and design language, then extended them into reusable components, patterns, and guidelines that aligned with both Coca-Cola’s identity and the needs of an AI interface. Since development resources were limited, I prioritized simplicity and modularity, making sure the system could be implemented quickly without sacrificing brand integrity. The result was a visual language that felt Coca-Cola unmistakably. Providing a foundation that the team could build on as the product evolved.",
      ],
    },
    { type: "image", image: img("design-system.webp", 2500, 1406, "Nexus AI design system: typography, colors and components") },
    {
      type: "text",
      id: "outcome",
      eyebrow: "Outcome",
      heading: "From under 100 users to 500 in the test group alone.",
      body: [
        "Nexus AI entered pre-launch testing in the final weeks of my engagement. Active users grew from under 100 (previous tool) to approximately 500 — without a formal rollout. Test users and stakeholders consistently cited usability and branding as the reasons it felt different from the tool they'd abandoned.",
      ],
    },
    {
      type: "columns",
      items: [
        {
          heading: "5× user growth before official launch",
          body: [
            "The previous tool peaked under 100 active users. The rebuild reached ~500 in pre-launch testing ahead of the company-wide rollout to 50,000+.",
          ],
        },
        {
          heading: "2+ products built on the design system",
          body: [
            "The component library was handed off and immediately applied to at least two additional Coca-Cola AI tools, including marketing team extensions.",
          ],
        },
      ],
    },
    { type: "image", image: img("outcome.webp", 2500, 1438, "Coca-Cola brand illustration") },
    {
      type: "text",
      id: "reflection",
      eyebrow: "Reflection",
      heading: "What I'd do differently.",
    },
    {
      type: "columns",
      items: [
        {
          heading: "I'd Change",
          body: [
            "Get test group users in front of the visual directions earlier. User signal is harder to argue with than an effort-impact matrix — and it would have made the design director conversation shorter.",
          ],
        },
        {
          heading: "I'd Change",
          body: [
            "Document design rationale more formally throughout. The component library was solid at handoff, but the thinking lived in my head. A decision log reduces drift when others extend the system.",
          ],
        },
      ],
    },
    {
      type: "text",
      heading: "Most Proud Of",
      body: [
        "Navigating the tension between what leadership wanted (impressive) and what the project could support (minimal, polished, on-brand) — and making that case in a room where I was the only designer. The numbers validated the call.",
      ],
    },
  ],
};
