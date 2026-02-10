import { useEffect, useRef } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ProjectsSection from "@/components/projects-section";
import AchievementsSection from "@/components/achievements-section";
import TestimonialsSection from "@/components/testimonials-section";
import ContactSection from "@/components/contact-section";
import ScrollToTop from "@/components/scroll-to-top";
import SocialSidebar from "@/components/social-sidebar";
import KLogo from "@/components/k-logo";

export default function Portfolio() {
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = "Md Kashif - Portfolio | Data Scientist";
    
    const metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    metaDescription.content = "Md Kashif - Data Scientist & CSE Diploma Student. Explore my projects, skills, and client reviews.";
    document.head.appendChild(metaDescription);

    return () => {
      document.head.removeChild(metaDescription);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#111111]">
      <Navigation />
      <main>
        <HeroSection projectsRef={projectsRef} />
        <div ref={projectsRef}>
          <ProjectsSection />
        </div>
        <TestimonialsSection />
        <AchievementsSection />
        <ContactSection />
      </main>
      <footer className="bg-[#050505] border-t border-white/5 py-12 relative overflow-hidden">
        {/* Footer Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[100px] bg-[#00A3FF] rounded-full opacity-[0.1] blur-[80px] pointer-events-none"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <p className="text-gray-500 font-medium">
            © 2024 <span className="text-[#00A3FF] font-orbitron tracking-wider">Md Kashif</span>. 
          </p>
          <p className="text-gray-600 text-sm mt-2">
            Made with <span className="text-[#00FFA3]">❤</span> and lots of ☕
          </p>
        </div>
      </footer>
      <ScrollToTop />
    </div>
  );
}
