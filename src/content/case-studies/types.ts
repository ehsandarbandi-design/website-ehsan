/** Case study and About pages are assembled from the Figma "Components library" (node 110:3901). */

export type CaseImage = { src: string; width: number; height: number; alt: string };

/** Figma "Body 1 column" — optional eyebrow (monospace), heading, and body paragraphs. `**text**` renders bold; consecutive `- ` items render as a bulleted list; `""` is a blank line. */
export type TextColumn = { eyebrow?: string; heading?: string; body?: string[] };

export type Block =
  /** Figma "Title" */
  | { type: "title"; title: string; subtitle: string; /** Lets the side menu jump to the top (e.g. "Overview"). */ id?: string }
  /** Figma "Image Free" */
  | {
      type: "image";
      image: CaseImage;
      /** 1px stroke, for images with a white or very light background. */
      stroke?: boolean;
    }
  /** Same frame as "Image Free", with a muted looping video; `image` is its poster frame. */
  | { type: "video"; src: string; image: CaseImage }
  /** Same frame as "Image Free", showing a self-playing HTML page (e.g. an animated walkthrough) as if it were a video. */
  | { type: "embed"; src: string; title: string; width: number; height: number }
  /**
   * Figma "Body" (H2 heading) or, with `sub`, "Body 1 column" (H3 heading, e.g. About timeline years).
   * `id` makes it a section the side menu can jump to.
   */
  | ({ type: "text"; id?: string; sub?: boolean } & TextColumn)
  /** Figma "Body 2 column" / "Body 3 column", chosen by the number of items. */
  | { type: "columns"; items: TextColumn[] }
  /** Horizontal set of "Image Free" slides with monospace captions. */
  | {
      type: "gallery";
      items: (CaseImage & { caption: string })[];
      /** Accessible name for the slider. */
      label?: string;
      /** Keeps the slider inside the 600px column instead of running past its edges. */
      contained?: boolean;
    };

export type CaseStudy = {
  slug: string;
  title: string;
  description: string;
  /** The project's homepage color; the cursor uses it across the whole page. */
  color: string;
  /** Side menu entries; each `id` matches a text block's `id`. */
  menu: { id: string; label: string }[];
  /** Figma paragraph spacing: 16px between body paragraphs and list items (otherwise they sit flush). */
  paragraphSpacing?: boolean;
  blocks: Block[];
};
