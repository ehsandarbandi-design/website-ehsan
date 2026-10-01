import type { Metadata } from "next";
import CaseStudy from "@/components/case-study/CaseStudy";
import { about } from "@/content/about";

export const metadata: Metadata = {
  title: "About — Ehsan Darbandi",
  description: about.description,
};

export default function AboutPage() {
  return <CaseStudy study={about} />;
}
