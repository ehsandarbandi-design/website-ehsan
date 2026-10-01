"use client";

import { Eye } from "lucide-react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { unlockHoverSound } from "@/lib/hoverSound";
import { FINE_POINTER, useMediaQuery } from "@/lib/useMediaQuery";
import styles from "./CustomCursor.module.css";

type Mode = "dot" | "circle" | "pill";
type CursorState = {
  color: string;
  label: string | null;
  /** Last non-empty label, kept rendered while the pill collapses so the text fades instead of vanishing. */
  lastLabel: string;
  interactive: boolean;
};

const INITIAL: CursorState = { color: "#000000", label: null, lastLabel: "", interactive: false };
/** Fill opacity over clickable elements without a label — Figma "Cursor Hover" (node 84:2648). */
const INTERACTIVE_ALPHA = 0.7;

const DOT = 16;
const CIRCLE = 30;
const PILL_PAD = 10;
const ICON = 16;
const ICON_GAP = 8;

function withAlpha(hex: string, alpha: number) {
  const n = parseInt(hex.replace("#", ""), 16);
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${alpha})`;
}

/**
 * Pointer-following cursor, modelled on rachelchen.tech:
 * - dot: 16px, in the color of the last hovered row (`data-cursor-color`), kept after leaving it.
 *   Inside a `data-cursor-theme` element (case study pages) rows without their own color use the theme.
 * - circle: over clickable elements without a label — grows to 30px at 70% opacity.
 * - pill: over rows with `data-cursor-label` — solid color, eye icon, white label; grows to the right.
 * Shape changes are plain CSS transitions (0.2s ease-out); position follows the pointer directly.
 */
export default function CustomCursor() {
  const enabled = useMediaQuery(FINE_POINTER);
  const [state, setState] = useState<CursorState>(INITIAL);
  const [visible, setVisible] = useState(false);
  const [pressed, setPressed] = useState(false);

  const wrapRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!enabled) return;
    const root = document.documentElement;
    // Hover ticks are site-wide; audio unlocks on the visitor's first click or key press.
    const releaseSound = unlockHoverSound();

    let frame = 0;
    let px = -100;
    let py = -100;
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      px = e.clientX;
      py = e.clientY;
      if (!frame) {
        frame = requestAnimationFrame(() => {
          frame = 0;
          if (wrapRef.current) wrapRef.current.style.transform = `translate3d(${px}px, ${py}px, 0)`;
        });
      }
      setVisible(true);
    };
    const onOver = (e: PointerEvent) => {
      const target = e.target as Element | null;
      const row = target?.closest<HTMLElement>("[data-cursor-row]");
      setState((prev) => {
        const label = row?.dataset.cursorLabel ?? null;
        const next: CursorState = {
          color:
            row?.dataset.cursorColor ??
            target?.closest<HTMLElement>("[data-cursor-theme]")?.dataset.cursorTheme ??
            prev.color,
          label,
          lastLabel: label ?? prev.lastLabel,
          interactive: !!row?.hasAttribute("data-cursor-interactive") || !!target?.closest("a, button"),
        };
        return prev.color === next.color && prev.label === next.label && prev.interactive === next.interactive
          ? prev
          : next;
      });
    };
    const onLeave = () => setVisible(false);
    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerover", onOver, { passive: true });
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    root.addEventListener("pointerleave", onLeave);
    window.addEventListener("blur", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      releaseSound();
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      root.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("blur", onLeave);
    };
  }, [enabled]);

  const { color, label, lastLabel, interactive } = state;
  const mode: Mode = label ? "pill" : interactive ? "circle" : "dot";

  // Width needs an explicit px value for the CSS transition (can't transition to `auto`),
  // so measure the label and set it directly.
  useLayoutEffect(() => {
    const body = bodyRef.current;
    if (!body) return;
    const width =
      mode === "pill"
        ? PILL_PAD * 2 + ICON + ICON_GAP + (measureRef.current?.offsetWidth ?? 0)
        : mode === "circle"
          ? CIRCLE
          : DOT;
    body.style.width = `${width}px`;
  }, [mode, lastLabel, enabled]);

  if (!enabled) return null;

  return (
    <div ref={wrapRef} aria-hidden className={`${styles.cursor} ${visible ? styles.visible : ""}`}>
      <div
        ref={bodyRef}
        className={styles.body}
        data-mode={mode}
        data-pressed={pressed || undefined}
        style={{ backgroundColor: withAlpha(color, mode === "circle" ? INTERACTIVE_ALPHA : 1) }}
      >
        <span className={styles.icon}>
          <Eye size={ICON} strokeWidth={2} />
        </span>
        <span className={styles.label}>{lastLabel}</span>
      </div>
      <span ref={measureRef} className={`${styles.label} ${styles.measure}`}>
        {lastLabel}
      </span>
    </div>
  );
}
