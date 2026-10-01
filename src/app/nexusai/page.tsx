import type { Metadata } from "next";
import CaseStudy from "@/components/case-study/CaseStudy";
import { nexus } from "@/content/case-studies/nexus";

export const metadata: Metadata = {
  title: `${nexus.title} — Ehsan Darbandi`,
  description: nexus.description,
};

export default function NexusAIPage() {
  return <CaseStudy study={nexus} />;
}
