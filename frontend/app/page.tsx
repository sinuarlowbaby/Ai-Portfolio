"use client";

import Navbar from "@/app/components/Navbar";
import HeroSection from "@/app/components/HeroSection";
import AboutSection from "@/app/components/AboutSection";
import SkillsSection from "@/app/components/SkillsSection";
import AIPhilosophySection from "@/app/components/AIPhilosophySection";
import ExperienceEducationSection from "@/app/components/ExperienceEducationSection";
import ProjectsPreviewSection from "@/app/components/ProjectsPreviewSection";
import ContactSection from "@/app/components/ContactSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#030014] overflow-hidden">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <AIPhilosophySection />
        <ExperienceEducationSection />
        <ProjectsPreviewSection />
        <ContactSection />
      </main>
    </>
  );
}
