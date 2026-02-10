import { SiMysql, SiPython, SiPandas, SiReact } from "react-icons/si";
import { Laptop } from "lucide-react";
import { useTypingEffect } from "@/hooks/use-typing-effect";

export default function AboutSection() {
  const skills = [
    "#html", "#css", "#python", "#mysql", "#numpy", "#pandas", 
    "#matplotlib", "#seaborn", "#machinelearning", "#ml", 
    "#deeplearning", "#llm", "#ai", "#datascience", 
    "#git", "#github", "#sql", "#terminal"
  ];

  // Dynamic Text for "MERN STACK" replacement
  const titles = [
    "DATA SCIENTIST",
    "WEBSITE BUILDER",
    "DEVELOPER"
  ];
  const typingText = useTypingEffect(titles, 100, 50, 2000);

  return (
    <section id="about" className="section bg-[#111111] hidden">
      <div className="container mx-auto px-4 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Text & Skills */}
          <div>
            <h2 className="text-4xl font-bold text-[#00A3FF] mb-8 font-orbitron tracking-wide">
              ABOUT ME
            </h2>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I help individuals and organizations turn data and ideas into powerful, real-world solutions. I’m a Developer and Data Scientist who enjoys building intelligent systems, clean interfaces, and data-driven applications that are both practical and impactful.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I work across web development and data science—combining strong programming fundamentals with analytical thinking. From designing responsive front-end layouts to analyzing data, training models, and working with modern AI tools, I focus on creating solutions that are efficient, scalable, and easy to use.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              I’m passionate about continuous learning, problem-solving, and using data and machine learning to uncover insights and drive smarter decisions.
            </p>

            {/* Skills Pills */}
            <div className="flex flex-wrap gap-3 mb-12">
              {skills.map((skill, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 rounded-full border border-gray-700 text-gray-400 text-sm font-medium hover:border-[#00A3FF] hover:text-[#00A3FF] transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Dynamic Role Stack Icons */}
            <div>
              <h3 className="text-xl font-bold text-[#00A3FF] mb-6 font-orbitron min-h-[1.5em]">
                {typingText}<span className="animate-pulse">|</span>
              </h3>
              <div className="flex items-center gap-8">
                <div className="flex flex-col items-center gap-2">
                  <SiMysql className="w-10 h-10 text-[#00758F]" />
                  <span className="text-[#00758F] font-bold">SQL</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <SiPython className="w-10 h-10 text-[#3776AB]" />
                  <span className="text-[#3776AB] font-bold">Py</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10 flex items-center justify-center">
                    {/* Matplotlib doesn't have a standard SiIcon, using a custom SVG or similar representation */}
                    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="#11557c" strokeWidth="8">
                       <path d="M10 90 L90 90 M10 10 L10 90 M10 90 L30 40 L50 70 L70 20 L90 60" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-[#11557c] font-bold">Mat</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <SiPandas className="w-10 h-10 text-[#150458]" />
                  <span className="text-[#150458] font-bold">Pd</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <SiReact className="w-10 h-10 text-[#61DAFB] animate-spin-slow" />
                  <span className="text-[#61DAFB] font-bold">Re</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Illustration */}
          <div className="hidden lg:flex justify-center relative">
            {/* Card UI Illustration */}
            <div className="relative w-full max-w-lg">
              {/* Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
              
              {/* Floating Cards */}
              <div className="relative z-10 flex flex-col gap-6">
                <div className="bg-[#1A1A1A] p-6 rounded-2xl border border-gray-800 shadow-2xl transform hover:-translate-y-2 transition-transform duration-300">
                  <div className="flex gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <Laptop className="text-[#00A3FF]" />
                    </div>
                    <div>
                      <div className="h-2 w-24 bg-gray-700 rounded mb-2"></div>
                      <div className="h-2 w-16 bg-gray-800 rounded"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 w-full bg-gray-800 rounded"></div>
                    <div className="h-2 w-5/6 bg-gray-800 rounded"></div>
                  </div>
                </div>

                <div className="bg-[#1A1A1A] p-6 rounded-2xl border border-gray-800 shadow-2xl ml-12 transform hover:-translate-y-2 transition-transform duration-300">
                  <div className="flex justify-between items-center mb-4">
                    <div className="h-8 w-24 bg-gray-700 rounded"></div>
                    <div className="h-8 w-8 bg-green-500/20 rounded-full"></div>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="h-16 bg-gray-800 rounded-lg"></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
