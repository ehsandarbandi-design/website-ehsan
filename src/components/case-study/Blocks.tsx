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
 * Figma "Body". A standalone section uses the H2 heading; inside "Body 2/3 column" it uses H3.
 */
function Column({ eyebrow, heading, body, id, sub = false }: TextColumn & { id?: string; sub?: boolean }) {
  const Heading = sub ? "h3" : "h2";
  return (
    <div id={id} className={styles.column}>
      {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
      {heading && <Heading className={sub ? styles.subheading : styles.heading}>{heading}</Heading>}
      {body && body.length > 0 && (
        <div className={styles.body}>
          {body.map((p, i) => (
            <p key={i}>{rich(p)}</p>
          ))}
        </div>
      )}
    </div>
  );
}

/** Figma "Image Free": 8px radius with the soft offset shadow. */
function ImageFree({
  image,
  sizes = "(max-width: 767px) 100vw, 600px",
  eager = false,
}: {
  image: CaseImage;
  sizes?: string;
  /** Above-the-fold images load immediately instead of lazily. */
  eager?: boolean;
}) {
  return (
    <div className={styles.image}>
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
        <div className={styles.title}>
          <h1>{block.title}</h1>
          <p>{block.subtitle}</p>
        </div>
      );
    case "image":
      return <ImageFree image={block.image} eager={first} />;
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
    case "text":
      return <Column {...block} />;
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
        <div className={styles.gallery} role="region" aria-label="Visual directions" tabIndex={0}>
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
