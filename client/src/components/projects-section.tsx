import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    title: "KNSGP Student Portal",
    subtitle: "Student Management System",
    description: "A centralized student portal for managing academic resources, student profiles, and institutional communication. Features real-time notifications, result tracking, and seamless faculty-student interaction.",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=2070",
    tech: ["React.js", "Node.js", "MongoDB", "Express.js", "Material UI"],
    demoUrl: "https://knsgp-student-portral-1.onrender.com/",
    githubUrl: "https://github.com/MdKashif05/KNSGP.student_portral",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/20"
  },
  {
    title: "Smart Online Exam System",
    subtitle: "AI Proctoring Platform",
    description: "A comprehensive online examination platform featuring AI-powered proctoring and live monitoring. Ensures fair and efficient remote testing with real-time security features and automated grading.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=2070",
    tech: ["Python", "Django", "OpenCV", "TensorFlow", "MySQL"],
    demoUrl: "#",
    githubUrl: "https://github.com/MdKashif05/smart-online-exam",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20"
  },
  {
    title: "Portfolio Website",
    subtitle: "Personal Brand",
    description: "A modern, responsive portfolio website showcasing my skills, projects, and professional journey. Built with cutting-edge web technologies and designed for optimal user experience and visual appeal.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=2070",
    tech: ["React", "TailwindCSS", "Framer Motion", "Vite"],
    demoUrl: "#",
    githubUrl: "https://github.com/MdKashif05/mds_glowfolio",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20"
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="section bg-gradient-to-b from-white to-gray-50 py-24 overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-[100px] opacity-30 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-100 rounded-full blur-[100px] opacity-30 pointer-events-none"></div>

      <div className="container mx-auto px-4 lg:px-20 relative z-10">
        <div className="flex flex-col items-center mb-20 lg:mb-32 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-orbitron text-[#00A3FF] border-b-4 border-[#00A3FF] pb-4 px-4 tracking-wider drop-shadow-sm inline-block"
          >
            Latest Works
          </motion.h2>
          <p className="mt-4 text-gray-500 text-lg max-w-2xl">
            A selection of projects that demonstrate my passion for building robust and scalable web applications.
          </p>
        </div>

        <div className="space-y-24 md:space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group relative flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
            >

              {/* Image Side */}
              <div className={`w-full lg:w-1/2 ${index % 2 === 1 ? 'lg:order-last' : ''}`}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-white transform transition-transform duration-500 hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${project.bgColor.replace('/10', '/30')}`}></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full aspect-video object-cover transform transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Overlay Actions */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-[2px]">
                    <Button asChild variant="secondary" className="rounded-full font-bold shadow-lg hover:scale-105 transition-transform">
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="rounded-full bg-white/10 text-white border-white/20 hover:bg-white/20 font-bold backdrop-blur-sm shadow-lg hover:scale-105 transition-transform">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" /> Source Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium mb-4 ${project.bgColor} ${project.color}`}>
                    {project.subtitle}
                  </div>

                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100 tracking-tight">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="px-3 py-1 text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 lg:hidden">
                    <a href={project.demoUrl} className={`flex items-center gap-1 font-semibold ${project.color} hover:underline`}>
                      View Project <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
