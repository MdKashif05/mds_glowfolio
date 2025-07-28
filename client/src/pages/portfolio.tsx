import { useEffect } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import EducationSection from "@/components/education-section";
import SkillsSection from "@/components/skills-section";
import ProjectsSection from "@/components/projects-section";
import AchievementsSection from "@/components/achievements-section";
import ContactSection from "@/components/contact-section";
import ScrollToTop from "@/components/scroll-to-top";

export default function Portfolio() {
  useEffect(() => {
    document.title = "Md Kashif - Portfolio | CSE Student & Future Entrepreneur";
    
    const metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    metaDescription.content = "Md Kashif - CSE Diploma Student passionate about AI, Web Development, and Entrepreneurship. Explore my projects, skills, and achievements.";
    document.head.appendChild(metaDescription);

    return () => {
      document.head.removeChild(metaDescription);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-primary">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
        <AchievementsSection />
        <ContactSection />
      </main>
      <footer className="bg-dark-bg border-t border-glass-border py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-text-secondary">
            © 2024 <span className="text-blue-500">Md Kashif</span>. 
            Made with <span className="text-purple-400">❤</span> and lots of ☕
          </p>
        </div>
      </footer>
      <ScrollToTop />
    </div>
  );
}
