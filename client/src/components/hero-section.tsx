import { Button } from "@/components/ui/button";
import React, { useEffect, useMemo, memo } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useTypingEffect } from "@/hooks/use-typing-effect";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { SiMysql, SiPython, SiPandas, SiReact } from "react-icons/si";
import SocialSidebar from "@/components/social-sidebar";

// Generate clustered shapes for the "dark hive" look
const generateShapes = (count: number) => {
  return Array.from({ length: count }).map((_, i) => {
    // VORTEX / TUNNEL GENERATION
    // We want a spiral/tunnel effect originating from top-left/center
    const iNorm = i / count; // 0 to 1
    const r = Math.pow(iNorm, 0.5) * 100; // Radius expands with index
    const angle = iNorm * Math.PI * 10; // Spiral
    
    // Convert polar to cartesian (percentage based)
    // Center point roughly at 30% x, 30% y (behind text/logo area)
    const centerX = 30;
    const centerY = 30;
    
    const x = centerX + Math.cos(angle) * (r * 0.8);
    const y = centerY + Math.sin(angle) * r;
    
    const size = Math.random() * 40 + 10 + (iNorm * 30); // Larger shapes at edges

    const isTeal = Math.random() > 0.92; 
    const isDark = Math.random() > 0.6; 

    return {
      id: i,
      type: Math.random() > 0.7 ? 'square' : Math.random() > 0.5 ? 'pentagon' : 'hexagon',
      size,
      x,
      y,
      opacity: isTeal ? 0.6 : isDark ? 0.8 : 0.1, // Higher opacity for dark shapes for "depth"
      rotation: Math.random() * 360,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
      isTeal,
      isDark,
      fill: isTeal ? '#00FFA3' : isDark ? '#0a0a0a' : 'transparent',
      borderColor: isTeal ? 'transparent' : isDark ? '#1a1a1a' : 'rgba(255,255,255,0.05)',
    };
  });
};

const HeroShape = memo(({ shape, springX, springY }: { shape: any, springX: any, springY: any }) => {
  // Create individual parallax depth for each shape
  const depth = shape.size / 20; 
  const moveX = useTransform(springX, (v: number) => v * 40 * depth);
  const moveY = useTransform(springY, (v: number) => v * 40 * depth);

  return (
    <motion.div
      className="absolute will-change-transform"
      style={{
        left: `${shape.x}%`,
        top: `${shape.y}%`,
        width: `${shape.size}px`,
        height: `${shape.size}px`,
        zIndex: shape.isDark ? 1 : 0,
        x: moveX,
        y: moveY,
        rotate: shape.rotation,
      }}
    >
      {/* Inner div for independent floating animation */}
      <motion.div 
        className="w-full h-full"
        animate={{
          y: [0, -15, 0],
          rotate: [0, 5, -5, 0]
        }}
        transition={{
          duration: shape.duration,
          repeat: Infinity,
          ease: "easeInOut",
          delay: shape.delay,
        }}
        style={{
          backgroundColor: shape.fill,
          border: `1px solid ${shape.borderColor}`,
          clipPath: shape.type === 'hexagon' ? 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' : 
                    shape.type === 'pentagon' ? 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' : 
                    'none',
          borderRadius: shape.type === 'square' ? '2px' : '0',
          boxShadow: shape.isTeal ? '0 0 20px rgba(0, 255, 163, 0.5)' : 'none',
          opacity: shape.opacity,
        }}
      />
    </motion.div>
  );
});

export default function HeroSection({ projectsRef }: { projectsRef: React.RefObject<HTMLDivElement> }) {
  // Memoize shapes to prevent regeneration on re-renders
  const shapes = useMemo(() => generateShapes(80), []);
  
  // Dynamic Text Effect
  const titles = [
    "TECH ENTHUSIAST", 
    "DATA SCIENTIST", 
    "ATHLETE", 
    "WEBSITE DEVELOPER"
  ];
  const typingText = useTypingEffect(titles, 100, 50, 2000);

  // About Modal Data
  const aboutSkills = [
    "#html", "#css", "#python", "#mysql", "#numpy", "#pandas", 
    "#matplotlib", "#seaborn", "#machinelearning", "#ml", 
    "#deeplearning", "#llm", "#ai", "#datascience", 
    "#git", "#github", "#sql", "#terminal"
  ];
  const aboutTitles = ["DATA SCIENTIST", "WEBSITE BUILDER", "DEVELOPER"];
  const aboutTypingText = useTypingEffect(aboutTitles, 100, 50, 2000);
  
  // Framer Motion for smooth mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring physics for the parallax effect - SOFTER & SMOOTHER
  const springConfig = { damping: 50, stiffness: 100, mass: 1 }; // Increased damping/mass for "heavy" smooth feel
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized mouse position (-1 to 1)
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / (innerWidth / 2);
      const y = (e.clientY - innerHeight / 2) / (innerHeight / 2);
      
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // ✅ Smooth scroll to Projects section
  const handleExploreWork = () => {
    if (projectsRef?.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-[#050505] flex items-center justify-center">
      
      {/* Background Layer - The "Hive" Cluster with Motion */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {shapes.map((shape) => (
          <HeroShape key={shape.id} shape={shape} springX={springX} springY={springY} />
        ))}
      </div>

      <SocialSidebar />

      {/* Main Content Layer - Overlapping Layout */}
      <div className="container mx-auto px-6 relative z-20 h-full flex items-center justify-center pb-24 lg:pb-0">
        <div className="w-full max-w-7xl relative flex flex-col lg:flex-row items-center justify-center">
          
          {/* Right Side - Giant Complex K Logo (Placed behind/alongside text) */}
          {/* Using absolute positioning on desktop to allow overlap - FIXED POSITION */}
          <motion.div 
            className="relative lg:absolute lg:right-[5%] lg:top-1/2 lg:-translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] lg:w-[700px] lg:h-[700px] select-none pointer-events-none z-10 opacity-80 lg:opacity-100"
          >
             <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-2xl">
               <defs>
                 <linearGradient id="kFill" x1="0%" y1="0%" x2="100%" y2="100%">
                   <stop offset="0%" stopColor="#0a0a0a" />
                   <stop offset="100%" stopColor="#000000" />
                 </linearGradient>
                 <linearGradient id="kStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                   <stop offset="0%" stopColor="#222" />
                   <stop offset="50%" stopColor="#444" />
                   <stop offset="100%" stopColor="#222" />
                 </linearGradient>
                 <linearGradient id="kAccent" x1="0%" y1="0%" x2="100%" y2="0%">
                   <stop offset="0%" stopColor="#00FFA3" />
                   <stop offset="100%" stopColor="#00A3FF" />
                 </linearGradient>
                 <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
                   <feGaussianBlur stdDeviation="6" result="blur" />
                   <feComposite in="SourceGraphic" in2="blur" operator="over" />
                 </filter>
                 <filter id="strong-glow" x="-50%" y="-50%" width="200%" height="200%">
                   <feGaussianBlur stdDeviation="12" result="blur" />
                   <feComposite in="SourceGraphic" in2="blur" operator="over" />
                 </filter>
               </defs>

               {/* ULTRA-MODERN K LOGO DESIGN */}
               
               {/* 1. The Spine (Vertical Block) - Split into two tech segments */}
               <path 
                 d="M80 40 L80 140 L110 130 L110 40 L80 40 Z" 
                 fill="url(#kFill)" 
                 stroke="url(#kStroke)" 
                 strokeWidth="2"
               />
               <path 
                 d="M80 150 L80 260 L110 260 L110 160 L80 150 Z" 
                 fill="url(#kFill)" 
                 stroke="url(#kStroke)" 
                 strokeWidth="2"
               />

               {/* 2. The Upper Wing (Futuristic Chevron) */}
               <path 
                 d="M110 130 L180 50 L240 50 L140 150 L110 130 Z" 
                 fill="url(#kFill)" 
                 stroke="url(#kStroke)" 
                 strokeWidth="2"
               />

               {/* 3. The Lower Kick (Heavy Base) */}
               <path 
                 d="M130 160 L200 260 L250 260 L160 140 L130 160 Z" 
                 fill="url(#kFill)" 
                 stroke="url(#kStroke)" 
                 strokeWidth="2"
               />
               
               {/* 4. NEON CIRCUITRY - The "Awesome" Factor */}
               
               {/* Main Energy Line - Spine */}
               <motion.path 
                 d="M95 50 L95 250" 
                 stroke="url(#kAccent)" 
                 strokeWidth="3" 
                 strokeLinecap="round"
                 filter="url(#neon-glow)"
                 strokeOpacity="0.8"
                 animate={{ strokeOpacity: [0.5, 1, 0.5], strokeWidth: [3, 5, 3] }}
                 transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
               />

               {/* Main Energy Line - Upper Wing */}
               <motion.path 
                 d="M190 65 L125 140" 
                 stroke="url(#kAccent)" 
                 strokeWidth="3" 
                 strokeLinecap="round"
                 filter="url(#neon-glow)"
                 strokeOpacity="0.8"
                 animate={{ strokeOpacity: [0.5, 1, 0.5], strokeWidth: [3, 5, 3] }}
                 transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
               />

               {/* Main Energy Line - Lower Kick */}
               <motion.path 
                 d="M145 170 L215 250" 
                 stroke="url(#kAccent)" 
                 strokeWidth="3" 
                 strokeLinecap="round"
                 filter="url(#neon-glow)"
                 strokeOpacity="0.8"
                 animate={{ strokeOpacity: [0.5, 1, 0.5], strokeWidth: [3, 5, 3] }}
                 transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
               />
               
               {/* 5. GLOWING NODES (Tech joints) */}
               <motion.circle cx="95" cy="50" r="5" fill="#00FFA3" filter="url(#strong-glow)" animate={{ r: [4, 6, 4], opacity: [0.7, 1, 0.7] }} transition={{ duration: 1.5, repeat: Infinity }} />
               <motion.circle cx="95" cy="145" r="4" fill="#00A3FF" filter="url(#strong-glow)" animate={{ r: [3, 5, 3], opacity: [0.7, 1, 0.7] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }} />
               <motion.circle cx="95" cy="250" r="5" fill="#00A3FF" filter="url(#strong-glow)" animate={{ r: [4, 6, 4], opacity: [0.7, 1, 0.7] }} transition={{ duration: 1.5, repeat: Infinity, delay: 1 }} />
               
               <motion.circle cx="190" cy="65" r="5" fill="#00FFA3" filter="url(#strong-glow)" animate={{ r: [4, 6, 4], opacity: [0.7, 1, 0.7] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }} />
               <motion.circle cx="215" cy="250" r="5" fill="#00A3FF" filter="url(#strong-glow)" animate={{ r: [4, 6, 4], opacity: [0.7, 1, 0.7] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.7 }} />
               
               {/* Center Intersection Glow */}
               <circle cx="120" cy="150" r="15" fill="url(#kAccent)" filter="url(#strong-glow)" opacity="0.3" className="animate-pulse-glow" />

               {/* Decorative Tech Bits */}
               <rect x="65" y="100" width="4" height="20" fill="#333" />
               <rect x="65" y="180" width="4" height="20" fill="#333" />
               <path d="M200 50 L220 50 L210 60 Z" fill="#333" />

             </svg>
          </motion.div>

          {/* Text Content - Positioned Left but allowing overlap */}
          <div className="w-full lg:w-3/5 text-center lg:text-left space-y-6 pt-10 lg:pt-0 relative z-30 pointer-events-none">
            {/* Pointer events auto for interactive elements */}
            <div className="pointer-events-auto relative z-40">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h1 className="text-5xl md:text-7xl lg:text-[10rem] font-bold text-white tracking-tighter leading-[0.9] mix-blend-normal">
                  <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">Md</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">Kashif</span>
                </h1>
              </motion.div>
              
              <motion.div 
                className="flex items-center justify-center lg:justify-start gap-4 mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                 <motion.div 
                   className="h-[2px] w-12 bg-[#00FFA3]"
                   initial={{ width: 0 }}
                   animate={{ width: 48 }}
                   transition={{ delay: 0.5, duration: 0.5 }}
                 ></motion.div>
                 <h2 className="text-lg md:text-xl font-medium tracking-[0.2em] text-[#00FFA3] uppercase font-orbitron min-h-[1.5em]">
                   {typingText}<span className="animate-pulse">|</span>
                 </h2>
              </motion.div>

              <motion.div 
                className="pt-12 flex items-center justify-center lg:justify-start gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                 <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      className="relative px-8 py-6 bg-gradient-to-r from-[#00A3FF] to-[#00FFA3] text-black font-bold tracking-widest text-sm md:text-base rounded-full shadow-[0_0_20px_rgba(0,163,255,0.5)] hover:shadow-[0_0_30px_rgba(0,163,255,0.8)] hover:scale-105 transition-all duration-300"
                    >
                      ABOUT ME <span className="ml-2">→</span>
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-6xl w-[95vw] bg-[#111111] border-gray-800 text-white p-0 overflow-y-auto max-h-[90vh]">
                    <DialogTitle className="sr-only">About Me</DialogTitle>
                    <div className="p-8 lg:p-12 h-full flex items-center">
                      <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
                        {/* Left Column */}
                        <div>
                           <h2 className="text-4xl font-bold text-[#00A3FF] mb-8 font-orbitron tracking-wide">
                             ABOUT ME
                           </h2>
                           <p className="text-gray-300 text-lg leading-relaxed mb-8">
                             I’m a Developer and Data Scientist who builds scalable applications and intelligent, data-driven systems. I specialize in combining clean development practices with analytics and machine learning to deliver practical, high-impact solutions.
                           </p>
                           
                           {/* Skills */}
                           <div className="flex flex-wrap gap-3 mb-12">
                             {aboutSkills.map((skill, index) => (
                               <span key={index} className="px-4 py-2 rounded-full border border-gray-700 text-gray-400 text-sm font-medium hover:border-[#00A3FF] hover:text-[#00A3FF] transition-colors cursor-default">
                                 {skill}
                               </span>
                             ))}
                           </div>

                           {/* Tech Stack */}
                           <div>
                             <h3 className="text-xl font-bold text-[#00FFA3] mb-6 font-orbitron min-h-[1.5em]">
                               {aboutTypingText}<span className="animate-pulse text-[#00FFA3]">|</span>
                             </h3>
                             <div className="flex items-center gap-10 flex-wrap justify-start">
                               <div className="group flex flex-col items-center gap-3 transition-transform hover:scale-110 cursor-pointer relative">
                                 {/* MySQL */}
                                 <SiMysql className="w-16 h-16 text-[#00E5FF] drop-shadow-[0_0_8px_rgba(0,229,255,0.5)]" />
                                 <span className="text-[#00E5FF] font-bold drop-shadow-[0_0_5px_rgba(0,229,255,0.3)] opacity-0 group-hover:opacity-100 transition-opacity absolute top-20 w-max pointer-events-none">MySQL</span>
                               </div>
                               <div className="group flex flex-col items-center gap-3 transition-transform hover:scale-110 cursor-pointer relative">
                                 {/* Matplotlib */}
                                 <div className="w-16 h-16 flex items-center justify-center bg-white/10 rounded-full p-1 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                                   <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" strokeWidth="8">
                                      <path d="M50 50 L80 20" stroke="#FF6B6B" strokeLinecap="round" />
                                      <path d="M50 50 L80 80" stroke="#4D96FF" strokeLinecap="round" />
                                      <path d="M50 50 L20 60" stroke="#6BCB77" strokeLinecap="round" />
                                      <circle cx="50" cy="50" r="40" stroke="#A0E7E5" strokeWidth="2" fill="none" />
                                   </svg>
                                 </div>
                                 <span className="text-[#FF6B6B] font-bold drop-shadow-[0_0_5px_rgba(255,107,107,0.5)] opacity-0 group-hover:opacity-100 transition-opacity absolute top-20 w-max pointer-events-none">Matplotlib</span>
                               </div>
                               <div className="group flex flex-col items-center gap-3 transition-transform hover:scale-110 cursor-pointer relative">
                                 {/* Pandas */}
                                 <div className="relative drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                                    <SiPandas className="w-16 h-16 text-white" />
                                 </div>
                                 <span className="text-white font-bold drop-shadow-[0_0_5px_rgba(255,255,255,0.5)] opacity-0 group-hover:opacity-100 transition-opacity absolute top-20 w-max pointer-events-none">Pandas</span>
                               </div>
                               <div className="group flex flex-col items-center gap-3 transition-transform hover:scale-110 cursor-pointer relative">
                                 {/* React */}
                                 <SiReact className="w-16 h-16 text-[#00FFFF] drop-shadow-[0_0_8px_rgba(0,255,255,0.6)]" />
                                 <span className="text-[#00FFFF] font-bold drop-shadow-[0_0_5px_rgba(0,255,255,0.4)] opacity-0 group-hover:opacity-100 transition-opacity absolute top-20 w-max pointer-events-none">React</span>
                               </div>
                             </div>
                           </div>
                        </div>

                        {/* Right Column - Illustration */}
                        <div className="hidden lg:flex justify-center items-center relative">
                          <div className="relative w-full max-w-lg">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
                            {/* Exact Image from Reference */}
                            <img 
                              src="https://anuragsinghbam.com/images/coder.svg" 
                              alt="Developer at Desk" 
                              className="w-full h-auto drop-shadow-2xl z-10 relative"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-30 pointer-events-auto" 
        onClick={handleExploreWork}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="text-xs tracking-[0.3em] uppercase text-white font-bold mb-2 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">Scroll Down</span>
        <div className="h-16 w-[2px] bg-white/20 relative overflow-hidden rounded-full">
             <div className="absolute top-0 left-0 w-full h-1/2 bg-[#00A3FF] animate-slide-down shadow-[0_0_15px_#00A3FF]"></div>
        </div>
      </motion.div>
    </section>
  );
}
