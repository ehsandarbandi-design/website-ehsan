import type { Metadata } from "next";
import CaseStudy from "@/components/case-study/CaseStudy";
import { allaround } from "@/content/case-studies/allaround";

export const metadata: Metadata = {
  title: `${allaround.title} — Ehsan Darbandi`,
  description: allaround.description,
};

export default function AllAroundPage() {
  return <CaseStudy study={allaround} />;
}
