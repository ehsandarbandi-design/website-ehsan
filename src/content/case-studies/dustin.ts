import { projects } from "../site";
import type { CaseImage, CaseStudy } from "./types";

const img = (file: string, width: number, height: number, alt: string): CaseImage => ({
  src: `/case-studies/dustin/${file}`,
  width,
  height,
  alt,
});

// Numbers: the website builder's analytics (Apr–Sep 2026) and the game's leaderboard sheet (May 1 – Sep 14, 2026,
// Ehsan's and Dustin's own games removed). Monthly figures are read off its charts and marked "about".
export const dustin: CaseStudy = {
  slug: "dustin",
  title: "A realtor site that grows itself",
  description: "Dustin Chaveleh • Shipped 2026",
  color: projects.find((p) => p.id === "dustin")!.color!,
  menu: [
    { id: "context", label: "Context" },
    { id: "artifacts", label: "Final Artifacts" },
    { id: "first-site", label: "01 · The First Site" },
    { id: "real-estate-iq", label: "02 · Real Estate IQ" },
    { id: "rebuilt-site", label: "03 · The Rebuilt Site" },
    { id: "content-kit", label: "04 · The Content Kit" },
    { id: "moments", label: "Key Design Moments" },
    { id: "impact", label: "Impact" },
    { id: "reflection", label: "Reflection" },
  ],
  blocks: [
    // Cover
    { type: "title", title: "A realtor site that grows itself", subtitle: "Dustin Chaveleh • Shipped 2026" },
    {
      type: "video",
      src: "/case-studies/dustin/overview.mp4",
      image: img("overview-poster.webp", 1920, 1075, "Walkthrough of the rebuilt site and the Real Estate IQ game"),
    },

    // Metadata
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

    // Context
    {
      type: "text",
      id: "context",
      eyebrow: "Context",
      heading: "A new agent with nothing to show.",
      body: [
        "Dustin got his San Francisco real estate license and called me a few weeks later. He needed to be online, fast. He had no sales, no reviews, no photos and no story yet.",
        "That's a hard place to start. Buyers pick agents on proof, and he didn't have any. **So the question wasn't what the website should look like. It was why a first-time buyer would trust someone with no track record.**",
      ],
    },
    {
      type: "text",
      heading: "Not another local expert. An investor's eye.",
      body: [
        "I looked at how other agents present themselves. Almost every site says the same thing: a headshot, \"local expert,\" a listing search, a contact form.",
        "Then I asked Dustin about his life before real estate. He'd worked in finance at Bloomberg and Goldman Sachs, and he'd already bought investment properties of his own. That was the story.",
        "His audience is young professionals buying their first home. Their biggest fear isn't finding a place. **It's making the wrong call with the most money they've ever spent.** An agent who looks at a home like an investor speaks straight to that fear.",
      ],
    },

    // Final artifacts
    {
      type: "text",
      id: "artifacts",
      eyebrow: "Final Artifacts",
      heading: "Four pieces, shipped in the order we needed them.",
    },
    {
      type: "text",
      id: "first-site",
      sub: true,
      heading: "01 · The first site",
      body: ["A website-builder site made in two days: his story, his neighborhoods, and a way to reach him. Good enough to be real, fast enough to learn from."],
    },
    // TODO(Ehsan): replace each artifact placeholder below with the final artwork.
    {
      type: "video",
      src: "/case-studies/dustin/first-site.mp4",
      image: img("first-site-poster.webp", 1920, 1075, "Scrolling through the first site, built on a website builder"),
    },
    {
      type: "text",
      id: "real-estate-iq",
      sub: true,
      heading: "02 · Real Estate IQ",
      body: ["A game where you see a real San Francisco home and its list price, and guess what it sold for. It turns visitors into players, and players into leads."],
    },
    { type: "image", image: img("game-screens.webp", 1756, 988, "Real Estate IQ: game setup, a round, and the Saturday Shortlist sign-up") },
    {
      type: "text",
      id: "rebuilt-site",
      sub: true,
      heading: "03 · The rebuilt site",
      body: ["A coded site on a strict design system, with the game and market charts built in instead of pasted on top. Launching soon."],
    },
    { type: "image", image: img("artifact-3-rebuilt-site.webp", 2000, 1125, "Placeholder for the rebuilt site") },
    {
      type: "text",
      id: "content-kit",
      sub: true,
      heading: "04 · The content kit",
      body: ["Documentation, AI prompts and data files so Dustin can add posts, sections and images himself, and they still look like the rest of the site."],
    },
    { type: "image", image: img("content-kit.webp", 1920, 1080, "A page template turned into a Markdown file Dustin can fill in with AI") },

    // Key design moments
    {
      type: "text",
      id: "moments",
      eyebrow: "Key Design Moments",
      heading: "Why a game? Because there was no marketing budget.",
      body: [
        "Dustin is a solo agent. No ad budget, no marketing team, and a website that still asked people to take his word for it. Whatever we built had to attract people, prove his expertise and collect leads, all on its own.",
        "A game could do all three. Every buyer already guesses sale prices in their head, and in San Francisco it's surprisingly hard, because homes regularly sell well above or below asking. **Each round quietly makes the case for an agent who reads this market for a living.**",
        "We brainstormed Real Estate IQ together, and I designed and built it. Dustin adds new homes each month by editing a Google Sheet, so it stays fresh without me.",
      ],
    },
    { type: "image", image: img("loop.webp", 1944, 956, "Real Estate IQ: intro, setup, a round, and the price reveal") },
    {
      type: "text",
      heading: "Ship on the tool we'd outgrow.",
      body: [
        "Dustin needed a presence now, and neither of us knew yet what would work. I recommended a website builder, knowing it wasn't the long-term answer. **Speed to learning mattered more than a perfect system.** Two days later he had a site.",
      ],
    },
    {
      type: "text",
      heading: "Don't compete with Zillow.",
      body: [
        "Every agent site leads with a listing search. Dustin decided against one, and I agreed. A listing feed costs around $300, and linking to his brokerage's listings sends buyers to a site where they can find another agent.",
        "Instead, \"Browse Properties\" opens his own Zenlist search. That freed the website to do what listing portals can't: show who Dustin is and how he thinks.",
      ],
    },
    { type: "image", image: img("zenlist.webp", 1792, 1006, "The rebuilt site's property search section, pointing buyers to Dustin's own Zenlist") },
    {
      type: "text",
      heading: "Play first. Ask later.",
      body: [
        "The standard move is a sign-up form in front of the game. I put the first ask after it, when players want to save their score to the leaderboard. By then they have something to lose.",
        "Fewer contacts, but every one of them had actually played.",
      ],
    },
    {
      type: "text",
      heading: "Make every player a messenger.",
      body: [
        "With no ad budget, the game had to spread on its own. I added a **Play with Friends** button: create a challenge link, send it, and your friends play the same homes and compare scores.",
        "It does two jobs. Every challenge puts Dustin in front of someone new, and playing against people you know makes the game more engaging than playing alone.",
      ],
    },
    { type: "image", image: img("funnel.webp", 1944, 956, "Returning player, the Saturday Shortlist, the leaderboard and a friend challenge") },
    {
      type: "text",
      heading: "Start the slider at the list price.",
      body: [
        "Testing with friends surfaced one small change that mattered. The price slider started at an arbitrary number. It should start at the home's list price.",
        "That gives every guess a realistic anchor and makes the game feel fair. I shipped it a week after launch.",
      ],
    },
    {
      type: "text",
      heading: "Guardrails, not templates.",
      body: [
        "Five months in, the site was drifting. The game and charts sat in the website builder as pasted code. The sections Dustin added himself used different colors, type and layouts. The builder gave him freedom, but nothing to keep him consistent.",
        "So I rebuilt it in code. That's usually a mistake for a non-technical client, because it makes them depend on a developer. **The fix was to design the handover, not just the site.** With the content kit, Dustin describes what he wants to add, and what comes back already follows the system.",
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
    // TODO(Ehsan): add more of the off-brand website-builder posts here if you have them.
    // Design system: part of Key Design Moments, so it has no side-menu entry of its own.
    {
      type: "text",
      heading: "I made the design system strict on purpose, so it could survive without me.",
      body: [
        "The rebuild only works if new content can't drift. So I kept the system small: **8 text styles, 5 colors, 2 typefaces, square corners, no shadows.** Dustin will be adding content with AI prompts, and the fewer choices a prompt can make, the less the site can wander.",
        "I started from a few brand keywords and a moodboard, with three considerations in mind.",
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
            "**Color comes from the photography.** No accent color in the UI. The city does the work.",
            "**The audience is nervous about money.** First-time buyers need calm and clear, not a sales pitch.",
            "**The client will extend it himself.** Every rule has to be simple enough for a prompt to follow.",
          ],
        },
      ],
    },
    // TODO(Ehsan): replace with the moodboard.
    { type: "image", image: img("design-moodboard.webp", 2000, 1125, "Placeholder for the moodboard") },
    { type: "image", image: img("design-ui-sheet.webp", 1920, 1080, "UI sheet: typography, colors, buttons, form fields and logos") },
    {
      type: "text",
      body: [
        "The game is the one loud exception. It has its own condensed display type and a gold accent, so it reads as a break in the page, the way a game should. It keeps the same square, hairline-ruled structure, so it still feels like Dustin's.",
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

    // Impact
    {
      type: "text",
      id: "impact",
      eyebrow: "Impact",
      heading: "The game converted. Getting people to it was the hard part.",
      body: [
        "From April to September the site reached **about 1,700 unique visitors**. In June it hit about 610, 3.7 times its first month.",
      ],
    },
    {
      type: "columns",
      items: [
        { heading: "83%", body: ["of players who finished a game gave an email to save their score"] },
        { heading: "36 of 39", body: ["players who left an email came back and played again"] },
      ],
    },
    {
      type: "columns",
      items: [
        { heading: "2 in 3", body: ["players who answered said they weren't working with an agent yet"] },
        { heading: "3", body: ["phone numbers. The Saturday Shortlist text didn't land."] },
      ],
    },
    { type: "image", image: img("traffic.webp", 2000, 1000, "Monthly unique visitors from April to September 2026, peaking in June") },
    {
      type: "text",
      heading: "Distribution, not design, was the constraint.",
      body: [
        "Dustin posted on Instagram and TikTok every other day. It held the site at about 10 visits a day, but it didn't bring players. His flyers did, lifting flyer days to 30–45 visits.",
        "The biggest moment we still can't fully explain. **From June 1 to 4, 426 people visited, 85% of them directly**, mostly on iPhones. That points to QR codes and shared links, not social. June 2 alone brought 38 games. Two days later, traffic was back at baseline.",
        "People would trade an email for their score. They wouldn't trade a phone number for a list.",
      ],
    },

    // Reflection
    {
      type: "text",
      id: "reflection",
      eyebrow: "Reflection",
      heading: "What I'm taking with me.",
    },
    {
      type: "columns",
      items: [
        {
          heading: "Distribution is part of the design",
          body: ["I designed the game to spread, but it only moved when someone pushed it. Next time I'd plan the launch with the client, not hand it to him afterwards."],
        },
        {
          heading: "Tag everything",
          body: ["Our best week is a mystery because flyers and shared links all look like \"direct\" traffic. One QR code per flyer batch would have told us what worked."],
        },
      ],
    },
    {
      type: "columns",
      items: [
        {
          heading: "Ship the tool you'll outgrow",
          body: ["The website builder was the wrong long-term home and the right first step. It showed us what actually broke before I rebuilt anything."],
        },
        {
          heading: "Design the handover",
          body: ["A site for a solo client lives or dies after launch. The system he uses to grow it matters as much as the pages I designed."],
        },
      ],
    },
  ],
};
