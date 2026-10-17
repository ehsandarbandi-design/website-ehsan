import type { Metadata } from "next";
import CaseStudy from "@/components/case-study/CaseStudy";
import { punchbird } from "@/content/case-studies/punchbird";

export const metadata: Metadata = {
  title: `${punchbird.title} — Ehsan Darbandi`,
  description: punchbird.description,
};

export default function PunchbirdPage() {
  return <CaseStudy study={punchbird} />;
}
