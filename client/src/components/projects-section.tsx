import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

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
    <section id="projects" className="section bg-gradient-to-b from-white to-gray-50 py-24 overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-[100px] opacity-30 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-100 rounded-full blur-[100px] opacity-30 pointer-events-none"></div>

      <div className="container mx-auto px-4 lg:px-20 relative z-10">
        <div className="flex justify-center mb-20 lg:mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-orbitron text-[#00A3FF] border-b-4 border-[#00A3FF] pb-4 px-4 text-center tracking-wider drop-shadow-sm"
          >
            Latest Works
          </motion.h2>
        </div>

        {/* Central Vertical Line */}
        <div className="absolute left-1/2 top-40 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-gray-200 to-transparent -translate-x-1/2 hidden lg:block"></div>

        <div className="space-y-24 md:space-y-40">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative flex flex-col lg:flex-row items-center justify-between w-full gap-16 lg:gap-24"
            >
              
              {/* Left Side */}
              <div className={`w-full lg:w-1/2 flex justify-center lg:justify-end lg:pr-20 ${
                index % 2 !== 0 ? "order-last lg:order-none" : ""
              }`}>
                {index % 2 === 0 ? (
                  /* Image on Left (Even Index) */
                  <div className="relative group w-full max-w-[300px] md:max-w-[550px]">
                     {/* Floating Title Tag */}
                     <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" 
                        className={`absolute -top-14 left-0 z-20 px-8 py-3 rounded-xl text-white font-bold flex items-center gap-2 shadow-2xl transform transition-all duration-300 hover:-translate-y-2 hover:scale-105 ${project.bgColor}`}>
                        {project.title} <ExternalLink className="w-5 h-5" />
                        {/* Triangle */}
                        <div className={`absolute -bottom-2 left-8 w-4 h-4 rotate-45 ${project.bgColor}`}></div>
                     </a>

                     {/* Laptop Container */}
                     <div className="relative border-gray-800 bg-gray-800 border-[4px] md:border-[10px] rounded-t-2xl w-full aspect-[512/294] shadow-[0_20px_50px_rgba(0,0,0,0.3)] mx-auto overflow-hidden transform transition-transform duration-500 group-hover:scale-[1.02]">
                        <div className="rounded-lg overflow-hidden w-full h-full bg-white dark:bg-gray-800">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        </div>
                     </div>
                     {/* Laptop Base */}
                     <div className="relative mx-auto bg-gray-900 rounded-b-xl rounded-t-sm h-[12px] md:h-[20px] w-[110%] -ml-[5%] mt-0 shadow-xl">
                        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[40%] h-[2px] md:h-[4px] bg-gray-700 rounded-b-lg"></div>
                     </div>
                  </div>
                ) : (
                  /* Text on Left (Odd Index) */
                  <div className="text-center lg:text-right w-full relative z-10">
                    <h3 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${project.color} drop-shadow-sm`}>
                      {project.title}
                    </h3>
                    <p className="text-[#FF5722] font-semibold text-xl md:text-2xl mb-8 tracking-wide">
                      {project.subtitle}
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-10 text-lg md:text-xl font-medium max-w-xl ml-auto">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-3 justify-center lg:justify-end">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="px-5 py-2.5 rounded-full bg-white text-gray-700 text-sm font-bold border border-gray-200 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Center Dot & Connector */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center z-10">
                 <div className={`w-6 h-6 rounded-full border-4 border-white shadow-[0_0_20px_rgba(0,0,0,0.2)] z-20 ${project.bgColor} transform transition-transform hover:scale-150 duration-300`}></div>
                 {/* Connector Line */}
                 <div className={`absolute h-[2px] bg-gray-300 w-24 top-1/2 -translate-y-1/2 -z-10 ${
                   index % 2 === 0 ? "right-full mr-6" : "left-full ml-6"
                 }`}></div>
              </div>

              {/* Right Side */}
              <div className={`w-full lg:w-1/2 flex justify-center lg:justify-start lg:pl-20 ${
                index % 2 !== 0 ? "order-first lg:order-none" : ""
              }`}>
                {index % 2 === 0 ? (
                  /* Text on Right (Even Index) */
                  <div className="text-center lg:text-left w-full relative z-10">
                    <h3 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${project.color} drop-shadow-sm`}>
                      {project.title}
                    </h3>
                    <p className="text-[#FF5722] font-semibold text-xl md:text-2xl mb-8 tracking-wide">
                      {project.subtitle}
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-10 text-lg md:text-xl font-medium max-w-xl mr-auto">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="px-5 py-2.5 rounded-full bg-white text-gray-700 text-sm font-bold border border-gray-200 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : (
                  /* Image on Right (Odd Index) */
                  <div className="relative group w-full max-w-[300px] md:max-w-[550px]">
                     {/* Floating Title Tag */}
                     <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" 
                        className={`absolute -top-14 right-0 z-20 px-8 py-3 rounded-xl text-white font-bold flex items-center gap-2 shadow-2xl transform transition-all duration-300 hover:-translate-y-2 hover:scale-105 ${project.bgColor}`}>
                        {project.title} <ExternalLink className="w-5 h-5" />
                        {/* Triangle */}
                        <div className={`absolute -bottom-2 right-8 w-4 h-4 rotate-45 ${project.bgColor}`}></div>
                     </a>

                     {/* Laptop Container */}
                     <div className="relative border-gray-800 bg-gray-800 border-[4px] md:border-[10px] rounded-t-2xl w-full aspect-[512/294] shadow-[0_20px_50px_rgba(0,0,0,0.3)] mx-auto overflow-hidden transform transition-transform duration-500 group-hover:scale-[1.02]">
                        <div className="rounded-lg overflow-hidden w-full h-full bg-white dark:bg-gray-800">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        </div>
                     </div>
                     {/* Laptop Base */}
                     <div className="relative mx-auto bg-gray-900 rounded-b-xl rounded-t-sm h-[12px] md:h-[20px] w-[110%] -ml-[5%] mt-0 shadow-xl">
                        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[40%] h-[2px] md:h-[4px] bg-gray-700 rounded-b-lg"></div>
                     </div>
                  </div>
                )}
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
