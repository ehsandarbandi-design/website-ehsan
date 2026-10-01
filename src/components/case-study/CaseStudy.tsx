import type { CaseStudy as CaseStudyData } from "@/content/case-studies/types";
import { CaseBlock } from "./Blocks";
import SiteNav from "../SiteNav";
import SectionMenu from "./SectionMenu";
import styles from "./CaseStudy.module.css";

/**
 * Case study layout from Figma (node 103:3150): a 600px content column centred at 50% − 150px,
 * with the section menu 60px to its right. The cursor takes the project's homepage color throughout.
 */
export default function CaseStudy({ study }: { study: CaseStudyData }) {
  return (
    <div className={styles.page} data-cursor-theme={study.color}>
      <SiteNav />
      <div className={styles.layout}>
        <article className={styles.content}>
          {study.blocks.map((block, i) => (
            <CaseBlock key={i} block={block} first={i === study.blocks.findIndex((b) => b.type === "image" || b.type === "video")} />
          ))}
        </article>
        <aside className={styles.aside}>
          <SectionMenu items={study.menu} color={study.color} />
        </aside>
      </div>
    </div>
  );
}
