/** Case study and About pages are assembled from the Figma "Components library" (node 110:3901). */

export type CaseImage = { src: string; width: number; height: number; alt: string };

/** Figma "Body 1 column" — optional eyebrow (monospace), heading, and body paragraphs. `**text**` renders bold. */
export type TextColumn = { eyebrow?: string; heading?: string; body?: string[] };

export type Block =
  /** Figma "Title" */
  | { type: "title"; title: string; subtitle: string }
  /** Figma "Image Free" */
  | { type: "image"; image: CaseImage }
  /** Same frame as "Image Free", with a muted looping video; `image` is its poster frame. */
  | { type: "video"; src: string; image: CaseImage }
  /**
   * Figma "Body" (H2 heading) or, with `sub`, "Body 1 column" (H3 heading, e.g. About timeline years).
   * `id` makes it a section the side menu can jump to.
   */
  | ({ type: "text"; id?: string; sub?: boolean } & TextColumn)
  /** Figma "Body 2 column" / "Body 3 column", chosen by the number of items. */
  | { type: "columns"; items: TextColumn[] }
  /** Horizontal set of "Image Free" slides with monospace captions. */
  | { type: "gallery"; items: (CaseImage & { caption: string })[] };

export type CaseStudy = {
  slug: string;
  title: string;
  description: string;
  /** The project's homepage color; the cursor uses it across the whole page. */
  color: string;
  /** Side menu entries; each `id` matches a text block's `id`. */
  menu: { id: string; label: string }[];
  blocks: Block[];
};
