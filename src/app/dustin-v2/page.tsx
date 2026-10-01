import type { Metadata } from "next";
import CaseStudy from "@/components/case-study/CaseStudy";
import { dustinV2 } from "@/content/case-studies/dustin-v2";

export const metadata: Metadata = {
  title: `${dustinV2.title} — Ehsan Darbandi`,
  description: dustinV2.description,
};

export default function DustinV2Page() {
  return <CaseStudy study={dustinV2} />;
}
