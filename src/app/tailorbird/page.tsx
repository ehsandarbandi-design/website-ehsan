import type { Metadata } from "next";
import CaseStudy from "@/components/case-study/CaseStudy";
import { tailorbird } from "@/content/case-studies/tailorbird";

export const metadata: Metadata = {
  title: `${tailorbird.title} — Ehsan Darbandi`,
  description: tailorbird.description,
};

export default function TailorbirdPage() {
  return <CaseStudy study={tailorbird} />;
}
