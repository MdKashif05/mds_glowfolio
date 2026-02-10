import { 
  SiReact, 
  SiNodedotjs, 
  SiExpress, 
  SiMongodb, 
  SiJavascript, 
  SiTypescript, 
  SiHtml5, 
  SiCss3, 
  SiTailwindcss, 
  SiGit, 
  SiGithub, 
  SiPython, 
  SiCplusplus,
  SiMysql,
  SiBootstrap,
  SiSass,
  SiFigma,
  SiPostman,
  SiVercel,
  SiNetlify
} from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  { name: "React.js", icon: SiReact, color: "text-cyan-400" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
  { name: "Express.js", icon: SiExpress, color: "text-gray-300" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
  { name: "HTML5", icon: SiHtml5, color: "text-orange-500" },
  { name: "CSS3", icon: SiCss3, color: "text-blue-500" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-300" },
  { name: "Bootstrap", icon: SiBootstrap, color: "text-purple-600" },
  { name: "Sass", icon: SiSass, color: "text-pink-400" },
  { name: "MySQL", icon: SiMysql, color: "text-blue-300" },
  { name: "Python", icon: SiPython, color: "text-yellow-300" },
  { name: "C++", icon: SiCplusplus, color: "text-blue-600" },
  { name: "Git", icon: SiGit, color: "text-orange-600" },
  { name: "GitHub", icon: SiGithub, color: "text-white" },
  { name: "Figma", icon: SiFigma, color: "text-pink-500" },
  { name: "Postman", icon: SiPostman, color: "text-orange-400" },
  { name: "Vercel", icon: SiVercel, color: "text-white" },
  { name: "Netlify", icon: SiNetlify, color: "text-cyan-400" },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="section bg-black/40">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-5xl font-bold font-orbitron text-center mb-4 bg-gradient-neon-text">
          Tech Stack
        </h2>
        <p className="text-center text-text-secondary mb-12 max-w-2xl mx-auto">
          Technologies and tools that I use to create awesome websites and applications.
        </p>

        {/* MERN Stack Highlight */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-emerald-400">MERN STACK</h3>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="flex flex-col items-center gap-4 group">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full glass flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-green-500/30">
                <SiMongodb className="w-12 h-12 md:w-16 md:h-16 text-green-500" />
              </div>
              <span className="text-xl font-bold text-green-500">M</span>
              <span className="text-sm text-text-secondary">MongoDB</span>
            </div>
            <div className="flex flex-col items-center gap-4 group">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full glass flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-gray-500/30">
                <SiExpress className="w-12 h-12 md:w-16 md:h-16 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-300">E</span>
              <span className="text-sm text-text-secondary">Express.js</span>
            </div>
            <div className="flex flex-col items-center gap-4 group">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full glass flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-cyan-500/30">
                <SiReact className="w-12 h-12 md:w-16 md:h-16 text-cyan-400 animate-spin-slow" />
              </div>
              <span className="text-xl font-bold text-cyan-400">R</span>
              <span className="text-sm text-text-secondary">React.js</span>
            </div>
            <div className="flex flex-col items-center gap-4 group">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full glass flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-green-400/30">
                <SiNodedotjs className="w-12 h-12 md:w-16 md:h-16 text-green-500" />
              </div>
              <span className="text-xl font-bold text-green-500">N</span>
              <span className="text-sm text-text-secondary">Node.js</span>
            </div>
          </div>
        </div>
        
        {/* All Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="glass p-6 rounded-xl flex flex-col items-center justify-center gap-4 hover:bg-white/5 transition-all duration-300 group border border-transparent hover:border-blue-500/30"
            >
              <skill.icon className={`w-10 h-10 ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
              <span className="font-medium text-gray-200">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
