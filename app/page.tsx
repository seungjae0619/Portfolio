import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import HeroSection from "@/components/hero-section";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[url(/background.jpg)]">
      <header className="sticky top-0 z-40 w-full border-b border-gray-400 backdrop-blur ">
        <div className="container mx-auto flex h-16 items-center justify-between">
          {/* 왼쪽 - 이름 */}
          <div className="flex items-center">
            <span className="text-xl font-bold bg-clip-text text-[#2D3748]">
              SEUNGJAE PARK
            </span>
          </div>

          {/* 중앙 - 네비게이션 */}
          <nav className="hidden md:flex items-center gap-4 ">
            <Link
              href="#about"
              className="text-sm font-medium text-[#2D3748] hover:text-[#9a9da1] transition-colors"
            >
              About
            </Link>
            <Link
              href="#personal"
              className="text-sm font-medium text-[#2D3748] hover:text-[#9a9da1] transition-colors"
            >
              Personal
            </Link>
            <Link
              href="#projects"
              className="text-sm font-medium text-[#2D3748] hover:text-[#9a9da1] transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#skills"
              className="text-sm font-medium text-[#2D3748] hover:text-[#9a9da1] transition-colors"
            >
              Skills
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-[#2D3748] hover:text-[#9a9da1] transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto py-12 space-y-24">
        <section
          id="about"
          className="flex flex-col items-center justify-center h-screen"
        >
          <HeroSection />
        </section>
      </main>
    </div>
  );
}
