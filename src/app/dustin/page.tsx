import type { Metadata } from "next";
import CaseStudy from "@/components/case-study/CaseStudy";
import { dustin } from "@/content/case-studies/dustin";

export const metadata: Metadata = {
  title: `${dustin.title} — Ehsan Darbandi`,
  description: dustin.description,
};

export default function DustinPage() {
  return <CaseStudy study={dustin} />;
}
