"use client";

import Image from "next/image";
import Link from "next/link";
import {
  LayoutGroup,
  MotionConfig,
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
} from "motion/react";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { introRow, links, nameRow, projects, type Row } from "@/content/site";
import { playHoverTick } from "@/lib/hoverSound";
import { DESKTOP_HOVER, useMediaQuery } from "@/lib/useMediaQuery";
import SiteNav from "./SiteNav";
import styles from "./Portfolio.module.css";

const spring = { type: "spring", stiffness: 520, damping: 46, mass: 1 } as const;
const allRows = [introRow, ...projects, ...links];

/** Sum offsetTop up to `root` — ignores in-flight layout transforms, so it reads the final position. */
function offsetWithin(el: HTMLElement, root: HTMLElement) {
  let y = 0;
  let node: HTMLElement | null = el;
  while (node && node !== root) {
    y += node.offsetTop;
    node = node.offsetParent as HTMLElement | null;
  }
  return y;
}

export default function Portfolio() {
  const canHover = useMediaQuery(DESKTOP_HOVER);
  const reduceMotion = useReducedMotion();
  const [hovered, setHovered] = useState<string | null>(null);
  // Rows without their own color (the links) keep the last hovered color.
  const [lastColor, setLastColor] = useState("#000000");
  const active = canHover ? hovered : null;
  const activeRow = allRows.find((r) => r.id === active);

  const rootRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef(new Map<string, HTMLElement>());
  const dotY = useMotionValue(0);
  const dotVisible = useRef(false);

  const registerRow = useCallback((id: string, el: HTMLElement | null) => {
    if (el) rowRefs.current.set(id, el);
    else rowRefs.current.delete(id);
  }, []);

  // One shared dot that slides to whichever row is active.
  useLayoutEffect(() => {
    const root = rootRef.current;
    const row = active ? rowRefs.current.get(active) : null;
    if (!root || !row) {
      dotVisible.current = false;
      return;
    }
    const target = offsetWithin(row, root);
    if (!dotVisible.current || reduceMotion) dotY.jump(target);
    else animate(dotY, target, spring);
    dotVisible.current = true;
  }, [active, dotY, reduceMotion]);

  useEffect(() => {
    if (active) playHoverTick();
  }, [active]);

  const rowProps = (row: Row) => ({
    row,
    active: active === row.id,
    expandable: canHover,
    register: registerRow,
    onActivate: () => {
      setHovered(row.id);
      if (row.color) setLastColor(row.color);
    },
    onDeactivate: () => setHovered((id) => (id === row.id ? null : id)),
  });

  return (
    <MotionConfig transition={spring} reducedMotion="user">
      <div ref={rootRef} className={styles.page}>
        <motion.span
          aria-hidden
          className={styles.dot}
          style={{ y: dotY }}
          initial={false}
          animate={{
            opacity: activeRow ? 1 : 0,
            scale: activeRow ? 1 : 0.4,
            backgroundColor: activeRow?.color ?? lastColor,
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        />

        <SiteNav cursorColor={nameRow.color} />

        <LayoutGroup>
          <main className={styles.main}>
            <motion.section layout="position" className={styles.intro}>
              <RowItem {...rowProps(introRow)} />
            </motion.section>

            <motion.section layout="position" className={styles.projects} aria-label="Selected work">
              {projects.map((p) => (
                <RowItem key={p.id} {...rowProps(p)} />
              ))}
            </motion.section>

            <motion.nav layout="position" className={styles.links} aria-label="Contact">
              {links.map((l) => (
                <RowItem key={l.id} {...rowProps(l)} />
              ))}
            </motion.nav>
          </main>
        </LayoutGroup>
      </div>
    </MotionConfig>
  );
}

type RowItemProps = {
  row: Row;
  active: boolean;
  expandable: boolean;
  register: (id: string, el: HTMLElement | null) => void;
  onActivate: () => void;
  onDeactivate: () => void;
};

/** The row's text block — a link when the row has an `href` (internal via next/link, external in a new tab). */
function RowText({ row, children }: { row: Row; children: React.ReactNode }) {
  if (!row.href) return <div className={styles.text}>{children}</div>;
  if (row.href.startsWith("/")) {
    return (
      <Link href={row.href} className={`${styles.text} ${styles.link}`}>
        {children}
      </Link>
    );
  }
  const external = row.href.startsWith("http");
  return (
    <a
      href={row.href}
      className={`${styles.text} ${styles.link}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

/** Looping, muted preview that only plays while its row is hovered (restarts from the top each time). */
function PreviewVideo({ src, poster, label, playing }: { src: string; poster: string; label: string; playing: boolean }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (playing) {
      video.currentTime = 0;
      void video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [playing]);

  return (
    <video
      ref={ref}
      className={styles.video}
      src={src}
      poster={poster}
      aria-label={label}
      muted
      loop
      playsInline
      preload="auto"
    />
  );
}

function RowItem({ row, active, expandable, register, onActivate, onDeactivate }: RowItemProps) {
  const expanded = active && expandable;
  const focusable = !row.href && (row.description || row.image);

  return (
    <motion.div
      layout="position"
      ref={(el) => register(row.id, el)}
      className={styles.row}
      data-cursor-row=""
      data-cursor-color={row.color}
      data-cursor-label={row.cursorLabel}
      data-cursor-interactive={row.href || row.cursorLabel ? "" : undefined}
      data-expanded={expanded && row.image ? "" : undefined}
      tabIndex={focusable ? 0 : undefined}
      onPointerEnter={onActivate}
      // Collapse as soon as the pointer leaves the row. Moving straight to the next row fires
      // leave + enter in the same event, so the dot slides across without flickering.
      onPointerLeave={onDeactivate}
      onFocus={onActivate}
      onBlur={onDeactivate}
    >
      <span className={styles.status} aria-hidden />
      <RowText row={row}>
        <p className={styles.title}>{row.title}</p>
        {row.subtitle && <p className={styles.subtitle}>{row.subtitle}</p>}
        {expanded && row.description && (
          <motion.p
            className={styles.description}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.05 }}
          >
            {row.description}
          </motion.p>
        )}
      </RowText>

      {/* Kept mounted (hidden) on desktop so the image is loaded before the first hover. */}
      {expandable && row.image && (
        <motion.div
          className={styles.preview}
          aria-hidden={!expanded}
          initial={false}
          animate={expanded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
          transition={{ duration: expanded ? 0.3 : 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          {row.video ? (
            <PreviewVideo src={row.video} poster={row.image.src} label={row.image.alt} playing={expanded} />
          ) : (
            <Image src={row.image.src} alt={row.image.alt} fill sizes="619px" loading="eager" />
          )}
        </motion.div>
      )}
    </motion.div>
  );
}
