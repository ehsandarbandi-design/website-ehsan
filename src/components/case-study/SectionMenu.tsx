"use client";

import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import styles from "./CaseStudy.module.css";

/** Menu rows are 24px tall with a 12px gap. */
const ROW_PITCH = 36;

/**
 * Sticky table of contents. The dot slides to the section currently in view
 * (the last one whose top has passed 35% of the viewport); clicking scrolls to it.
 */
/** The active-section dot uses the case study's color, matching the cursor. */
export default function SectionMenu({ items, color }: { items: { id: string; label: string }[]; color: string }) {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const line = window.innerHeight * 0.35;
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      let current = items[0]?.id;
      for (const { id } of items) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      setActive(atBottom ? items[items.length - 1]?.id : current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [items]);

  const index = Math.max(0, items.findIndex((item) => item.id === active));

  return (
    <nav className={styles.menu} aria-label="Sections">
      <motion.span
        aria-hidden
        className={styles.menuDot}
        style={{ backgroundColor: color }}
        initial={false}
        animate={{ y: index * ROW_PITCH }}
        transition={reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 520, damping: 46 }}
      />
      {items.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={styles.menuItem}
          aria-current={item.id === active ? "location" : undefined}
          data-cursor-row=""
          data-cursor-interactive=""
          onClick={(e) => {
            const el = document.getElementById(item.id);
            if (!el) return;
            e.preventDefault();
            el.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
            history.replaceState(null, "", `#${item.id}`);
          }}
        >
          <span className={styles.status} aria-hidden />
          {item.label}
        </a>
      ))}
    </nav>
  );
}
