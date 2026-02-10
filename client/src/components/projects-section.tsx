import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "KNSGP Student Portal",
    subtitle: "(Student Management System)",
    description: "A centralized student portal for managing academic resources, student profiles, and institutional communication. Features real-time notifications, result tracking, and seamless faculty-student interaction.",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=2070",
    tech: ["#react.js", "#node.js", "#mongodb", "#express.js", "#material-ui"],
    demoUrl: "https://knsgp-student-portral-1.onrender.com/",
    githubUrl: "https://github.com/MdKashif05/KNSGP.student_portral",
    color: "text-[#FF5722]", // Orange
    bgColor: "bg-[#FF5722]",
    borderColor: "border-[#FF5722]"
  },
  {
    title: "Smart Online Exam System",
    subtitle: "(AI Proctoring Platform)",
    description: "A comprehensive online examination platform featuring AI-powered proctoring and live monitoring. Ensures fair and efficient remote testing with real-time security features and automated grading.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=2070",
    tech: ["#python", "#django", "#opencv", "#tensorflow", "#mysql"],
    demoUrl: "#",
    githubUrl: "https://github.com/MdKashif05/smart-online-exam",
    color: "text-[#9C27B0]", // Purple
    bgColor: "bg-[#9C27B0]",
    borderColor: "border-[#9C27B0]"
  },
  {
    title: "Portfolio Website",
    subtitle: "(Personal Brand)",
    description: "A modern, responsive portfolio website showcasing my skills, projects, and professional journey. Built with cutting-edge web technologies and designed for optimal user experience and visual appeal.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=2070",
    tech: ["#react", "#tailwindcss", "#framer-motion", "#vite"],
    demoUrl: "#",
    githubUrl: "https://github.com/MdKashif05/mds_glowfolio",
    color: "text-[#00A3FF]", // Blue
    bgColor: "bg-[#00A3FF]",
    borderColor: "border-[#00A3FF]"
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="section bg-white py-20 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-20 relative">
        <div className="flex justify-center mb-16 lg:mb-24">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-orbitron text-[#00A3FF] border-2 border-[#00A3FF] px-6 py-3 lg:px-8 lg:py-4 rounded-xl text-center">
            Latest Works
          </h2>
        </div>

        {/* Central Vertical Line */}
        <div className="absolute left-1/2 top-32 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2 hidden lg:block"></div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <div key={index} className="relative flex flex-col lg:flex-row items-center justify-between w-full gap-12 lg:gap-0">
              
              {/* Left Side */}
              <div className={`w-full lg:w-1/2 flex ${
                index % 2 === 0 ? "justify-end pr-16" : "justify-start pl-16 order-last"
              }`}>
                {index % 2 === 0 ? (
                  /* Image on Left (Even Index) */
                  <div className="relative group">
                     {/* Floating Title Tag */}
                     <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" 
                        className={`absolute -top-12 left-0 z-20 px-6 py-2 rounded-lg text-white font-bold flex items-center gap-2 shadow-xl transform transition-transform hover:-translate-y-1 ${project.bgColor}`}>
                        {project.title} <ExternalLink className="w-4 h-4" />
                        {/* Triangle */}
                        <div className={`absolute -bottom-2 left-6 w-4 h-4 rotate-45 ${project.bgColor}`}></div>
                     </a>

                     {/* Laptop Container - Responsive Fix */}
                     <div className="relative border-gray-800 bg-gray-800 border-[4px] md:border-[8px] rounded-t-xl w-full max-w-[300px] md:max-w-[512px] aspect-[512/294] shadow-2xl mx-auto">
                        <div className="rounded-lg overflow-hidden w-full h-full bg-white dark:bg-gray-800 group-hover:brightness-110 transition-all">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                        </div>
                     </div>
                     {/* Laptop Base */}
                     <div className="relative mx-auto bg-gray-900 rounded-b-xl rounded-t-sm h-[10px] md:h-[17px] w-[115%] max-w-[350px] md:max-w-[597px] -ml-[7.5%] md:-ml-[42px] mt-0">
                        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[40%] h-[2px] md:h-[4px] bg-gray-700 rounded-b-lg"></div>
                     </div>
                  </div>
                ) : (
                  /* Text on Left (Odd Index) */
                  <div className="text-right">
                    <h3 className={`text-4xl font-bold mb-3 ${project.color}`}>
                      {project.title}
                    </h3>
                    <p className="text-[#FF5722] font-medium text-xl mb-6">
                      {project.subtitle}
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-3 justify-end">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="px-4 py-2 rounded-full bg-gray-50 text-gray-600 text-sm font-medium border border-gray-200 shadow-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Center Dot & Connector */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center">
                 <div className={`w-5 h-5 rounded-full border-4 border-white shadow-md z-20 ${project.bgColor}`}></div>
                 {/* Connector Line */}
                 <div className={`absolute h-0.5 bg-gray-300 w-16 top-1/2 -translate-y-1/2 -z-10 ${
                   index % 2 === 0 ? "right-full mr-4" : "left-full ml-4"
                 }`}></div>
              </div>

              {/* Right Side */}
              <div className={`w-full lg:w-1/2 flex ${
                index % 2 === 0 ? "justify-start pl-16" : "justify-end pr-16 order-first"
              }`}>
                {index % 2 === 0 ? (
                  /* Text on Right (Even Index) */
                  <div className="text-left">
                    <h3 className={`text-4xl font-bold mb-3 ${project.color}`}>
                      {project.title}
                    </h3>
                    <p className="text-[#FF5722] font-medium text-xl mb-6">
                      {project.subtitle}
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="px-4 py-2 rounded-full bg-gray-50 text-gray-600 text-sm font-medium border border-gray-200 shadow-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : (
                  /* Image on Right (Odd Index) */
                  <div className="relative group">
                     {/* Floating Title Tag */}
                     <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" 
                        className={`absolute -top-12 right-0 z-20 px-6 py-2 rounded-lg text-white font-bold flex items-center gap-2 shadow-xl transform transition-transform hover:-translate-y-1 ${project.bgColor}`}>
                        {project.title} <ExternalLink className="w-4 h-4" />
                        {/* Triangle */}
                        <div className={`absolute -bottom-2 right-6 w-4 h-4 rotate-45 ${project.bgColor}`}></div>
                     </a>

                     {/* Laptop Container - Responsive Fix */}
                     <div className="relative border-gray-800 bg-gray-800 border-[4px] md:border-[8px] rounded-t-xl w-full max-w-[300px] md:max-w-[512px] aspect-[512/294] shadow-2xl mx-auto">
                        <div className="rounded-lg overflow-hidden w-full h-full bg-white dark:bg-gray-800 group-hover:brightness-110 transition-all">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                        </div>
                     </div>
                     {/* Laptop Base */}
                     <div className="relative mx-auto bg-gray-900 rounded-b-xl rounded-t-sm h-[10px] md:h-[17px] w-[115%] max-w-[350px] md:max-w-[597px] -ml-[7.5%] md:-ml-[42px] mt-0">
                        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[40%] h-[2px] md:h-[4px] bg-gray-700 rounded-b-lg"></div>
                     </div>
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
