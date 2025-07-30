import { Laptop, Bot, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Smart Online Exam System",
    description: "A comprehensive online examination platform featuring AI-powered proctoring and live monitoring. Ensures fair and efficient remote testing with real-time security features.",
    icon: Laptop,
    tech: ["MySQL", "AI Proctoring", "Security"],
    status: "Ongoing",
    demoUrl: "#",
    githubUrl: "https://github.com/MdKashif05/smart-online-exam"
  },
  {
    title: "Smart Examination AI",
    description: "Advanced AI system for exam monitoring that detects cheating behavior using computer vision. Features face recognition and speech detection for enhanced security.",
    icon: Bot,
    tech: ["Python", "AI", "NLP", "Computer Vision"],
    status: "Completed",
    demoUrl: "#",
    githubUrl: "https://github.com/MdKashif05/smart-online-exam"
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="section bg-black/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-5xl font-bold text-center mb-12 text-emerald-400">
          Featured Projects
        </h2>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="project-card glass rounded-2xl p-6 lg:p-8">
              <div className="mb-6">
                <project.icon className="w-12 h-12 text-blue-500 mb-4" />
                <h3 className="text-xl lg:text-2xl font-bold text-emerald-400 mb-4">
                  {project.title}
                </h3>
                <p className="text-text-secondary mb-6">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-badge px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="btn-outline-glow"
                    onClick={() => window.open(project.demoUrl, "_blank")}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="btn-outline-glow"
                    onClick={() => window.open(project.githubUrl, "_blank")}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Source Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
