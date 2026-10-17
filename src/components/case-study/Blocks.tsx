import Image from "next/image";
import { Fragment, type ReactNode } from "react";
import type { Block, CaseImage, TextColumn } from "@/content/case-studies/types";
import styles from "./CaseStudy.module.css";

/** Renders `**bold**` spans with the Figma Text/Bold color; everything else stays Text/Body. */
function rich(text: string): ReactNode {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? <strong key={i}>{part.slice(2, -2)}</strong> : <Fragment key={i}>{part}</Fragment>,
  );
}

/**
 * Body paragraphs; consecutive items starting with "- " are grouped into one bulleted list,
 * and an empty string is a blank line (Figma's empty paragraphs around a bold line).
 */
function Paragraphs({ items }: { items: string[] }) {
  const groups: (string | string[])[] = [];
  for (const item of items) {
    if (!item.startsWith("- ")) groups.push(item);
    else if (Array.isArray(groups.at(-1))) (groups.at(-1) as string[]).push(item.slice(2));
    else groups.push([item.slice(2)]);
  }
  return groups.map((g, i) =>
    Array.isArray(g) ? (
      <ul key={i}>
        {g.map((li, j) => (
          <li key={j}>{rich(li)}</li>
        ))}
      </ul>
    ) : (
      <p key={i}>{g === "" ? "\u00a0" : rich(g)}</p>
    ),
  );
}

/**
 * Figma "Body". A standalone section uses the H2 heading; inside "Body 2/3 column" it uses H3.
 */
function Column({
  eyebrow,
  heading,
  body,
  id,
  sub = false,
  className,
}: TextColumn & { id?: string; sub?: boolean; className?: string }) {
  const Heading = sub ? "h3" : "h2";
  return (
    <div id={id} className={className ? `${styles.column} ${className}` : styles.column}>
      {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
      {heading && <Heading className={sub ? styles.subheading : styles.heading}>{heading}</Heading>}
      {body && body.length > 0 && (
        <div className={styles.body}>
          <Paragraphs items={body} />
        </div>
      )}
    </div>
  );
}

/** Figma "Image Free": 8px radius, no shadow. */
function ImageFree({
  image,
  sizes = "(max-width: 767px) 100vw, 600px",
  eager = false,
  stroke = false,
}: {
  image: CaseImage;
  sizes?: string;
  /** Above-the-fold images load immediately instead of lazily. */
  eager?: boolean;
  stroke?: boolean;
}) {
  return (
    <div className={stroke ? `${styles.image} ${styles.stroke}` : styles.image}>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        sizes={sizes}
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : undefined}
      />
    </div>
  );
}

export function CaseBlock({ block, first = false }: { block: Block; first?: boolean }) {
  switch (block.type) {
    case "title":
      return (
        <div id={block.id} className={styles.title}>
          <h1>{block.title}</h1>
          <p>{block.subtitle}</p>
        </div>
      );
    case "image":
      return <ImageFree image={block.image} eager={first} stroke={block.stroke} />;
    case "video":
      return (
        <div className={styles.image}>
          <video
            src={block.src}
            poster={block.image.src}
            width={block.image.width}
            height={block.image.height}
            aria-label={block.image.alt}
            autoPlay
            muted
            loop
            playsInline
            preload={first ? "auto" : "metadata"}
          />
        </div>
      );
    case "embed":
      // Not interactive: it loops like the videos, and the site's custom cursor keeps working over it.
      // The stroke keeps a white UI recording from melting into the page.
      return (
        <div className={`${styles.image} ${styles.stroke}`}>
          <iframe
            src={block.src}
            title={block.title}
            className={styles.embed}
            style={{ aspectRatio: `${block.width} / ${block.height}` }}
            loading="lazy"
            tabIndex={-1}
          />
        </div>
      );
    case "text":
      // A standalone H3 opens a subsection inside its section (e.g. "02 · Real Estate IQ", About timeline years).
      return <Column {...block} className={block.sub ? styles.subsection : undefined} />;
    case "columns":
      return (
        <div className={styles.columns} data-count={block.items.length}>
          {block.items.map((item, i) => (
            <Column key={i} {...item} sub />
          ))}
        </div>
      );
    case "gallery":
      return (
        <div
          className={block.contained ? `${styles.gallery} ${styles.contained}` : styles.gallery}
          role="region"
          aria-label={block.label ?? "Visual directions"}
          tabIndex={0}
        >
          {block.items.map((item) => (
            <figure key={item.src} className={styles.slide}>
              <ImageFree image={item} sizes="(max-width: 767px) 85vw, 510px" />
              <figcaption className={styles.eyebrow}>{item.caption}</figcaption>
            </figure>
          ))}
        </div>
      );
  }
}
