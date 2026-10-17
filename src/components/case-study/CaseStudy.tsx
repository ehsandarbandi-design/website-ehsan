import type { Block, CaseStudy as CaseStudyData } from "@/content/case-studies/types";
import { CaseBlock } from "./Blocks";
import SiteNav from "../SiteNav";
import SectionMenu from "./SectionMenu";
import styles from "./CaseStudy.module.css";

/** A section starts at the title or at a standalone heading; the blocks after it (body, images, columns) belong to it. */
function startsSection(block: Block) {
  return block.type === "title" || (block.type === "text" && !!block.heading && !block.sub);
}

function groupSections(blocks: Block[]) {
  const sections: { block: Block; index: number }[][] = [];
  blocks.forEach((block, index) => {
    if (sections.length === 0 || startsSection(block)) sections.push([]);
    sections[sections.length - 1].push({ block, index });
  });
  return sections;
}

/**
 * Case study layout from Figma (node 103:3150): a 600px content column centred at 50% − 150px,
 * with the section menu 60px to its right. The cursor takes the project's homepage color throughout.
 */
export default function CaseStudy({ study }: { study: CaseStudyData }) {
  const firstMedia = study.blocks.findIndex((b) => b.type === "image" || b.type === "video");
  return (
    <div className={styles.page} data-cursor-theme={study.color}>
      <SiteNav />
      <div className={styles.layout}>
        <article className={study.paragraphSpacing ? `${styles.content} ${styles.paragraphSpacing}` : styles.content}>
          {groupSections(study.blocks).map((section) => (
            <section key={section[0].index} className={styles.section}>
              {section.map(({ block, index }) => (
                <CaseBlock key={index} block={block} first={index === firstMedia} />
              ))}
            </section>
          ))}
        </article>
        <aside className={styles.aside}>
          <SectionMenu items={study.menu} color={study.color} />
        </aside>
      </div>
    </div>
  );
}
