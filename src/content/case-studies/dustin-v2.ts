import { projects } from "../site";
import type { CaseImage, CaseStudy } from "./types";

const img = (file: string, width: number, height: number, alt: string): CaseImage => ({
  src: `/case-studies/dustin/${file}`,
  width,
  height,
  alt,
});

// Option B of the Dustin case study, for comparison with dustin.ts. Same facts and images, different structure:
// Overview → Problem → Solution + outcome early → Journey (HMW question, explorations with verdicts) → Final design
// → Outcomes → What I learned.
export const dustinV2: CaseStudy = {
  slug: "dustin-v2",
  title: "A realtor site that grows itself",
  description: "Dustin Chaveleh • Shipped 2026",
  color: projects.find((p) => p.id === "dustin")!.color!,
  menu: [
    { id: "overview", label: "Overview" },
    { id: "problem", label: "Problem" },
    { id: "solution", label: "Solution" },
    { id: "journey", label: "The Journey" },
    { id: "final-design", label: "Final Design" },
    { id: "outcomes", label: "Outcomes" },
    { id: "reflection", label: "What I Learned" },
  ],
  blocks: [
    // Cover
    { type: "title", title: "A realtor site that grows itself", subtitle: "Dustin Chaveleh • Shipped 2026" },
    {
      type: "video",
      src: "/case-studies/dustin/overview.mp4",
      image: img("overview-poster.webp", 1920, 1075, "Walkthrough of the rebuilt site and the Real Estate IQ game"),
    },
    {
      type: "columns",
      items: [
        { heading: "Role", body: ["Design Engineer"] },
        { heading: "Timeline", body: ["3 weeks, across April, May and August 2026"] },
      ],
    },
    {
      type: "columns",
      items: [
        { heading: "Team", body: ["Dustin, client and real estate expert · me, design engineer"] },
        { heading: "Skills", body: ["Positioning, Product Strategy, Game Design, Front-end, Design Systems"] },
      ],
    },

    // Overview
    {
      type: "text",
      id: "overview",
      eyebrow: "Overview",
      heading: "A website, a game and a design system that helped a brand-new agent earn trust, find buyers and grow his site without a designer.",
    },

    // Problem
    {
      type: "text",
      id: "problem",
      eyebrow: "Problem",
      heading: "Dustin had a real estate license and a deadline…",
      body: [
        "He'd just been licensed in San Francisco and needed to be online, fast. He had no sales, no reviews, no photos and no story yet.",
      ],
    },
    {
      type: "text",
      heading: "…but buyers choose agents on proof, and he had none. Or a budget to buy attention.",
      body: [
        "His audience is young professionals buying their first home. They're about to spend more money than ever before, and they want someone they can trust with it.",
      ],
    },

    // Solution + outcome, early
    {
      type: "text",
      id: "solution",
      eyebrow: "Solution",
      heading: "Show his expertise instead of claiming it.",
      body: [
        "I positioned Dustin as the agent who looks at a home like an investor, shipped his first site in two days, and built **Real Estate IQ**: a game where you guess what real San Francisco homes sold for. It brought people in and turned them into leads. Then I rebuilt the site on a strict design system he can extend himself.",
      ],
    },
    { type: "image", image: img("game-screens.webp", 1756, 988, "Real Estate IQ: game setup, a round, and the Saturday Shortlist sign-up") },
    {
      type: "columns",
      items: [
        { heading: "~1,700", body: ["unique visitors, April to September"] },
        { heading: "83%", body: ["of players who finished a game gave an email to save their score"] },
        { heading: "2 in 3", body: ["players who answered weren't working with an agent yet"] },
      ],
    },

    // The journey
    {
      type: "text",
      id: "journey",
      eyebrow: "The Journey · Positioning",
      heading: "Not another local expert. An investor's eye.",
      body: [
        "**How might we make a stranger trust an agent with no track record?**",
        "I studied how other agents present themselves online, then interviewed Dustin about his life before real estate. He'd worked in finance at Bloomberg and Goldman Sachs, and owned investment properties of his own.",
      ],
    },
    {
      type: "columns",
      items: [
        {
          heading: "\"Local expert\"",
          body: ["The line almost every agent site leads with.", "**Verdict:** everyone says it, so it proves nothing."],
        },
        {
          heading: "Listings first",
          body: ["A big property search at the top of the page.", "**Verdict:** a new agent can't out-list Zillow."],
        },
        {
          heading: "The investor's eye",
          body: ["An agent who evaluates a home the way he evaluates an investment.", "**Verdict:** speaks straight to a first-time buyer's fear of a bad call. Chosen."],
        },
      ],
    },
    {
      type: "text",
      eyebrow: "The Journey · Speed",
      heading: "Ship on the tool we'd outgrow.",
      body: [
        "**What if we launched before we knew what would work?**",
        "Dustin needed a presence now, and neither of us knew yet what visitors would respond to.",
      ],
    },
    {
      type: "columns",
      items: [
        {
          heading: "Custom build now",
          body: ["A coded site with a full design system from day one.", "**Verdict:** weeks of work, built on guesses."],
        },
        {
          heading: "Website builder first",
          body: ["A template-based site I could ship in two days.", "**Verdict:** not the long-term answer, but the fastest way to learn. Chosen."],
        },
      ],
    },
    {
      type: "video",
      src: "/case-studies/dustin/first-site.mp4",
      image: img("first-site-poster.webp", 1920, 1075, "Scrolling through the first site, built on a website builder"),
    },
    {
      type: "text",
      eyebrow: "The Journey · Listings",
      heading: "Don't send buyers to someone else's site.",
      body: [
        "**How might we let buyers browse homes without losing them to another agent?**",
        "This was Dustin's call, and I agreed with it.",
      ],
    },
    {
      type: "columns",
      items: [
        {
          heading: "Listing feed",
          body: ["Homes for sale pulled straight into the site.", "**Verdict:** around $300 for a new agent with no budget."],
        },
        {
          heading: "Brokerage listings",
          body: ["Link out to the brokerage's search.", "**Verdict:** sends buyers to a site full of other agents."],
        },
        {
          heading: "His own Zenlist",
          body: ["\"Browse Properties\" opens a search under Dustin's name.", "**Verdict:** free, and the buyer stays his. Chosen."],
        },
      ],
    },
    { type: "image", image: img("zenlist.webp", 1792, 1006, "The rebuilt site's property search section, pointing buyers to Dustin's own Zenlist") },
    {
      type: "text",
      eyebrow: "The Journey · Acquisition",
      heading: "No marketing budget. So the site had to bring people in itself.",
      body: [
        "**How might we attract first-time buyers without paying for ads?**",
        "Every buyer already guesses sale prices in their head, and in San Francisco it's surprisingly hard, because homes regularly sell well above or below asking. So we brainstormed a game, and I designed and built it. **Each round quietly makes the case for an agent who reads this market for a living.**",
      ],
    },
    {
      type: "columns",
      items: [
        {
          heading: "Sign up, then play",
          body: ["A form in front of the game, the usual lead-gen move.", "**Verdict:** more emails, but from people who might never play."],
        },
        {
          heading: "Play first, ask later",
          body: ["The first ask comes after the game, to save your score to the leaderboard.", "**Verdict:** fewer contacts, but every one has actually played. Chosen."],
        },
      ],
    },
    {
      type: "text",
      eyebrow: "The Journey · Engagement",
      heading: "Make every player a messenger.",
      body: [
        "**What if every player brought a friend?**",
        "I added a **Play with Friends** button: create a challenge link, send it, and your friends play the same homes and compare scores. It spreads the game for free, and playing against people you know is more engaging than playing alone.",
        "Testing with friends surfaced one more fix: the price slider should start at the home's list price, not an arbitrary number. It gives every guess a realistic anchor. I shipped it a week after launch.",
      ],
    },
    { type: "image", image: img("funnel.webp", 1944, 956, "Returning player, the Saturday Shortlist, the leaderboard and a friend challenge") },
    {
      type: "text",
      eyebrow: "The Journey · Consistency",
      heading: "Freedom without guardrails made the site drift.",
      body: [
        "**How might Dustin add content without breaking the design?**",
        "By summer, the game and charts sat in the website builder as pasted code, and the sections Dustin added himself used different colors, type and layouts.",
      ],
    },
    {
      type: "image",
      image: img(
        "press-before-after.webp",
        1992,
        994,
        "The Business Insider section before, on the website builder, and after, in the rebuilt design system",
      ),
    },
    {
      type: "columns",
      items: [
        {
          heading: "Stay on the builder",
          body: ["Keep the template and write a style guide.", "**Verdict:** nothing stops the next post from drifting."],
        },
        {
          heading: "Rebuild with guardrails",
          body: ["A coded site on a strict system, plus prompts that keep new content on-brand.", "**Verdict:** consistent by default, and Dustin still owns his content. Chosen."],
        },
      ],
    },

    // Final design
    {
      type: "text",
      id: "final-design",
      eyebrow: "Final Design",
      heading: "A design system strict enough that the site can grow without me.",
      body: [
        "The system is deliberately small: **8 text styles, 5 colors, 2 typefaces, square corners, no shadows.** Dustin adds content with AI prompts, and the fewer choices a prompt can make, the less the site can drift.",
      ],
    },
    {
      type: "columns",
      items: [
        {
          heading: "Brand keywords",
          body: ["Quiet luxury", "Editorial", "Calm", "Very San Francisco", "**Not:** template, salesy, \"AI-generated\""],
        },
        {
          heading: "Considerations",
          body: [
            "**Color comes from the photography.** No accent color in the UI.",
            "**The audience is nervous about money.** Calm and clear, not a sales pitch.",
            "**The client will extend it himself.** Every rule simple enough for a prompt to follow.",
          ],
        },
      ],
    },
    // TODO(Ehsan): replace the moodboard and rebuilt-site placeholders below.
    { type: "image", image: img("design-moodboard.webp", 2000, 1125, "Placeholder for the moodboard") },
    { type: "image", image: img("design-ui-sheet.webp", 1920, 1080, "UI sheet: typography, colors, buttons, form fields and logos") },
    {
      type: "text",
      body: [
        "The game is the one loud exception: its own condensed type and a gold accent, so it reads as a break in the page, on the same square, hairline-ruled structure.",
      ],
    },
    {
      type: "text",
      heading: "The name is the logo.",
      body: [
        "I explored four directions: an editorial wordmark, a monogram, a playful house mark and organic forms. The marks were more ownable, but each needed brand recognition Dustin didn't have yet. **For a new agent, his name is the brand**, so I chose the wordmark: his name in the system's own typeface.",
      ],
    },
    {
      type: "gallery",
      items: [
        { ...img("logo-a-wordmark.webp", 960, 540, "Direction A: editorial wordmark"), caption: "A · Editorial wordmark (chosen)" },
        { ...img("logo-b-monogram.webp", 960, 540, "Direction B: monogram and wordmark"), caption: "B · Monogram + wordmark" },
        { ...img("logo-c-playful.webp", 960, 540, "Direction C: playful house mark"), caption: "C · Playful design" },
        { ...img("logo-d-organic.webp", 960, 540, "Direction D: organic forms"), caption: "D · Organic forms" },
      ],
    },
    { type: "image", image: img("artifact-3-rebuilt-site.webp", 2000, 1125, "Placeholder for the rebuilt site") },
    {
      type: "text",
      body: [
        "Alongside the site, Dustin gets a **content kit**: documentation, AI prompts and data files for adding posts, sections and images that still look like the rest of the site.",
      ],
    },
    { type: "image", image: img("content-kit.webp", 1920, 1080, "A page template turned into a Markdown file Dustin can fill in with AI") },

    // Outcomes
    {
      type: "text",
      id: "outcomes",
      eyebrow: "Outcomes",
      heading: "The game converted. Getting people to it was the hard part.",
    },
    {
      type: "columns",
      items: [
        { heading: "3.7×", body: ["more unique visitors in June than in the site's first month"] },
        { heading: "36 of 39", body: ["players who left an email came back and played again"] },
        { heading: "426", body: ["visitors in four days, June 1–4, 85% of them direct"] },
      ],
    },
    { type: "image", image: img("traffic.webp", 2000, 1000, "Monthly unique visitors from April to September 2026, peaking in June") },
    {
      type: "text",
      body: [
        "Posting on Instagram and TikTok every other day held the site at about 10 visits a day. Flyers lifted flyer days to 30–45. The biggest spike came from direct visits on iPhones, which points to QR codes and shared links. Only 3 players gave a phone number for the Saturday Shortlist: people would trade an email for their score, but not a phone number for a list.",
      ],
    },

    // What I learned
    {
      type: "text",
      id: "reflection",
      eyebrow: "What I Learned",
      heading: "Two lessons I'm taking with me.",
    },
    {
      type: "columns",
      items: [
        {
          heading: "Distribution is part of the design.",
          body: ["The game converted well, but only moved when someone pushed it. Next time I'd plan the launch, and tag every flyer and link, as part of the product."],
        },
        {
          heading: "Design the handover, not just the launch.",
          body: ["A solo client's site lives or dies after I leave. The system he grows it with matters as much as the pages I designed."],
        },
      ],
    },
  ],
};
