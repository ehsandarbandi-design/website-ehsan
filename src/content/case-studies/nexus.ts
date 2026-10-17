import { projects } from "../site";
import type { CaseImage, CaseStudy } from "./types";

const img = (file: string, width: number, height: number, alt: string): CaseImage => ({
  src: `/case-studies/nexus/${file}`,
  width,
  height,
  alt,
});

// Copy, order and images follow the Figma "Desktop" frame (node 103:3150) exactly.
export const nexus: CaseStudy = {
  slug: "nexusai",
  title: "Nexus AI",
  description: "Rebuilding the AI tool employees did not use",
  color: projects.find((p) => p.id === "nexus")!.color!,
  menu: [
    { id: "overview", label: "Overview" },
    { id: "problem", label: "The Problem" },
    { id: "exploration", label: "Exploration" },
    { id: "stakeholder-alignment", label: "Stakeholder alignment" },
    { id: "design-direction", label: "Design direction" },
    { id: "impact", label: "Impact" },
    { id: "reflection", label: "Reflection" },
  ],
  blocks: [
    // Title
    { type: "title", title: "Nexus AI", subtitle: "Rebuilding the AI tool employees did not use" },
    { type: "image", image: img("hero.png", 2500, 1616, "Nexus AI screens laid out on a grid") },

    // Metadata
    {
      type: "columns",
      items: [
        { heading: "Role", body: ["Product Designer, sole designer"] },
        { heading: "Timeline", body: ["4 months, kickoff to handoff"] },
      ],
    },
    {
      type: "columns",
      items: [
        { heading: "Team", body: ["2 Business Analysts · 1 Project Manager · 8 Engineers across India and the US"] },
        { heading: "Skills", body: ["Product Strategy · UX Design · UI Design · Design Systems · Stakeholder Alignment"] },
      ],
    },

    // Overview
    {
      type: "text",
      id: "overview",
      heading: "Overview",
      body: [
        "Nexus AI is Coca-Cola's internal conversational AI tool, using retrieval-augmented generation (RAG) to ground AI responses in the company's proprietary documents. The goal was to make internal knowledge easier to access while giving employees a faster, more trustworthy way to work with company information.",
      ],
    },
    { type: "image", image: img("overview.webp", 1024, 609, "Nexus AI on a phone and a laptop") },

    // The Problem
    {
      type: "text",
      id: "problem",
      eyebrow: "The Problem",
      heading: "Live, but abandoned",
      body: [
        "Coca-Cola’s AI app was live, but employees abandoned it. They signed in, had a poor first experience, and returned to tools they already knew, like ChatGPT, Copilot, and SharePoint. When leadership described the problem, it was simple:",
        "**\"People sign in, but they don't use it.\"**",
        "The brief was ambiguous; it asked us to design a better UI and fix all the usability issues. The challenge wasn't simply to make the interface look better. We needed to understand why employees had abandoned the product and fix the underlying experience.",
      ],
    },
    { type: "image", image: img("comparison.webp", 2500, 903, "The old internal AI tool next to the new Nexus AI") },

    // Exploration
    {
      type: "text",
      id: "exploration",
      eyebrow: "Exploration",
      heading: "Exploration",
      body: ["I started by auditing the existing product. Three problems stood out."],
    },
    {
      type: "text",
      sub: true,
      heading: "It ignored existing AI mental models",
      body: [
        "Employees were already familiar with conversational AI tools like ChatGPT and Copilot, but Nexus forced them to learn a different, unnecessary interaction model.",
      ],
    },
    {
      type: "text",
      sub: true,
      heading: "It didn't feel like Coca-Cola",
      body: [
        "The generic, off-brand interface eroded trust. Employees were less likely to rely on a product that didn’t look official or meet Coca-Cola’s quality standards.",
      ],
    },
    {
      type: "text",
      sub: true,
      heading: "It wasn't designed to grow",
      body: [
        "The UI had been designed around its current feature set rather than a scalable system. Adding new functionality would require moving existing elements or redesigning parts of the interface.",
      ],
    },
    { type: "image", image: img("audit.webp", 1024, 609, "The old interface with its usability issues numbered 1 to 6") },

    // Stakeholder alignment
    {
      type: "text",
      id: "stakeholder-alignment",
      eyebrow: "Stakeholder alignment",
      heading: "From conflicting requests to a shared direction",
      body: [
        "The design director wanted an impressive, visually distinctive UI, while the project manager needed a design engineers could implement quickly.",
        "",
        "I reframed these competing priorities as design constraints and explored three UI directions. Using effort-impact analysis, I compared the tradeoffs of each option and aligned the team around a polished, on-brand design that could be delivered on time without unnecessary implementation and QA risks.",
      ],
    },
    {
      type: "gallery",
      items: [
        { ...img("direction-mobile-bold.webp", 2000, 951, "Bold direction on five phone screens"), caption: "Large Text" },
        { ...img("direction-mobile-minimal.webp", 2000, 951, "Minimal direction on five phone screens"), caption: "Minimal UI" },
        { ...img("direction-mobile-glass.webp", 2000, 951, "Glass morphism direction on five phone screens"), caption: "Glass Morphism" },
      ],
      label: "UI directions",
      contained: true,
    },
    { type: "image", image: img("constraints.webp", 1024, 300, "Brand trust + usability + scalability + engineering feasibility + timeline") },
    {
      type: "text",
      body: [
        "This gave the team a shared basis for decision-making and moved the conversation away from subjective opinions about what looked “impressive.”",
      ],
    },

    // Design around what users already knew
    {
      type: "text",
      id: "mental-models",
      heading: "Design around what users already knew",
      body: [
        "Familiarity was the strategy. Employees were already using AI tools like ChatGPT, Copilot, and Gemini—which set clear expectations for how conversational AI should work:",
        "Prompt input at the bottom, Conversation history on the left, Minimal visual distraction, Familiar onboarding pattern and navigation. Rather than reinventing the wheel, we intentionally built on these familiar patterns. This let us focus design efforts on Nexus AI’s unique challenges: trust, enterprise content, and scalability.",
      ],
    },
    { type: "image", image: img("ai-tools.webp", 1024, 520, "ChatGPT, Gemini and Copilot interfaces side by side") },

    // Design direction
    {
      type: "text",
      id: "design-direction",
      eyebrow: "design direction",
      heading: "Make Coca-Cola feel present without adding unnecessary complexity",
      body: [
        "Coca-Cola’s strong visual identity was built for marketing, not internal tools. Coca-Cola’s internal products often lacked brand consistency.",
        "I explored three visual directions to find a balance between:",
        "",
        "**Coca-Cola's brand character + modern AI product patterns + engineering feasibility.**",
        "",
        "The more restrained direction gave us the strongest balance of: Brand recognition, Visual quality, Usability, Implementation speed, Scalability. I presented the tradeoffs to leadership and got alignment before moving into detailed UI design.",
      ],
    },
    { type: "image", image: img("ui-components.webp", 1024, 609, "Nexus AI interface pieces: sidebar, help menu, send button and What's new card") },

    // Design System
    {
      type: "text",
      id: "design-system",
      eyebrow: "Design System",
      heading: "Build a system, not just screens",
      body: [
        "With the visual direction set, I built a lightweight design system for Nexus AI—focused on providing just enough structure for speed and consistency. Reusable patterns supported future features without major redesigns, giving engineering a clear path forward and the product room to evolve.",
      ],
    },
    { type: "image", image: img("design-system-overview.webp", 2500, 1406, "Nexus AI design system: typography, colors and button components") },

    // Solve the trust problem
    {
      type: "text",
      id: "trust",
      eyebrow: "Solve the trust problem",
      heading: "Users need to verify AI, not simply believe it",
      body: [
        "The biggest product problem wasn't whether Nexus AI could generate an answer. It was whether employees could trust and verify that answer. AI-generated responses are probabilistic; employees needed a way to understand an answer's source, especially when making significant decisions.",
      ],
    },
    {
      type: "text",
      sub: true,
      heading: "Solution 1: Confidence scores",
      body: [
        "A percentage could communicate how confident the system was in its answer.",
        "",
        "**Problem:** a number doesn't tell the user why they should trust an answer or where the information came from.",
      ],
    },
    {
      type: "text",
      sub: true,
      heading: "Solution 2: Source pills",
      body: [
        "We could show the documents used to generate the answer as compact source indicators.",
        "",
        "**Problem:** users still had to leave the conversation and search through the document themselves to verify important information.",
      ],
    },
    { type: "image", image: img("source-pills.webp", 1024, 609, "Source pills under an answer, with a document preview on hover") },
    {
      type: "text",
      sub: true,
      heading: "Solution 3: Expandable source references",
      body: [
        "The final direction showed the supporting resources directly alongside the response. Users could expand a source and see the relevant information from the original document as bullet points. The user didn't have to simply trust the AI. They could quickly inspect the evidence behind the answer.",
        "This reduced the distance between:",
        "",
        "**AI answer → source → verification**",
      ],
    },
    { type: "image", image: img("source-expandable.webp", 1024, 609, "An expanded source reference showing the document's key points as bullets") },

    // Impact
    {
      type: "text",
      id: "impact",
      eyebrow: "Impact",
      heading: "Feedback showed the direction was working",
      body: [
        "Nexus AI entered pre-launch testing after approximately two months. Around 500 users actively used the product during testing. The feedback consistently reinforced the design decisions:",
      ],
    },
    {
      type: "columns",
      items: [
        { body: ["The interface was intuitive and easy to use."] },
        { body: ["Users could verify AI-generated responses."] },
        { body: ["The interface felt more aligned with Coca-Cola."] },
      ],
    },
    { type: "embed", src: "/case-studies/nexus/walkthrough.html", title: "Nexus AI walkthrough: asking a question and expanding a source", width: 1440, height: 900 },
    {
      type: "columns",
      items: [
        { heading: "~500", body: ["active users during pre-launch testing"] },
        { heading: "4 months", body: ["kickoff to handoff, within the original timeline"] },
      ],
    },

    // Reflection
    {
      type: "text",
      id: "reflection",
      eyebrow: "Reflection",
      heading: "What I learned",
    },
    {
      type: "columns",
      items: [
        {
          heading: "Align stakeholders through evidence earlier",
          body: ["Effort-impact analysis resolved subjective debates, but involving real users earlier would have created even stronger alignment."],
        },
        {
          heading: "Don't confuse \"impressive\" with good design",
          body: ["Great product design solves real problems, meets constraints, and creates a foundation for growth—not just visual impact."],
        },
      ],
    },
  ],
};
