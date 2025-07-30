import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTypingEffect } from "@/hooks/use-typing-effect";
import profileImage from "@assets/20250626_130646_1753728360227.jpg";
import React from "react";

const typingStrings = [
  "CSE Student",
  "Web Developer",
  "Future Entrepreneur", 
  "Athlete",
  "Tech Enthusiast",
  "Problem Solver"
];

export default function HeroSection({ projectsRef }: { projectsRef: React.RefObject<HTMLDivElement> }) {
  const typedText = useTypingEffect(typingStrings, 100, 60, 2000);

  // ✅ Smooth scroll to Projects section
  const handleExploreWork = () => {
    if (projectsRef?.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 animate-float">
        <div className="absolute top-20 left-20 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-purple-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-green-500/10 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end order-first lg:order-last">
            <div className="relative w-72 h-72 lg:w-80 lg:h-80">
              <div className="profile-frame w-full h-full">
                <img
                  src={profileImage}
                  alt="Md Kashif"
                  className="profile-img w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold font-orbitron glow-text mb-4">
              Hi, I'm <span className="text-emerald-400">Md Kashif</span>
            </h1>

            <div className="h-12 mb-6">
              <span className="text-xl lg:text-2xl text-emerald-400 font-medium">
                {typedText}
              </span>
            </div>

            <p className="text-lg lg:text-xl text-text-secondary mb-8 max-w-2xl">
              CSE Diploma Student passionate about AI, Web Development, and Entrepreneurship. 
              Aspiring to become a tech entrepreneur by age 25.
            </p>

            {/* Explore Button */}
            <div className="flex justify-center lg:justify-start">
              <Button
                onClick={handleExploreWork}
                className="btn-primary-glow px-8 py-3 text-lg font-semibold rounded-full"
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                Explore My Work
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
