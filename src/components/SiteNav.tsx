"use client";

import Link from "next/link";
import { nameRow } from "@/content/site";
import Logo from "./Logo";
import styles from "./SiteNav.module.css";

/**
 * Figma "Navbar" (node 103:3287): fixed to the top with a progressive blur; logo + the name row,
 * which links home. `cursorColor` sets the cursor over the name; omit it to use the page theme.
 */
export default function SiteNav({ cursorColor }: { cursorColor?: string }) {
  return (
    <header className={styles.nav}>
      <div className={styles.navInner}>
        <Logo />
        <Link
          href="/"
          className={styles.nameRow}
          data-cursor-row=""
          data-cursor-color={cursorColor}
          data-cursor-interactive=""
          style={{ "--dot": nameRow.color } as React.CSSProperties}
        >
          <span className={styles.status} aria-hidden>
            <span className={styles.hoverDot} />
          </span>
          <span className={styles.nameText}>
            <span className={styles.nameTitle}>{nameRow.title}</span>
            <span className={styles.nameSub}>
              Product Design <span className={styles.build}>+ Build</span>
            </span>
          </span>
        </Link>
      </div>
    </header>
  );
}
