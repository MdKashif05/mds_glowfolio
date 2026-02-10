import { Trophy, Target, Users, PenTool } from "lucide-react";

const achievements = [
  {
    title: "Football",
    subtitle: "Khelo India Level Player",
    icon: Trophy,
    color: "text-emerald-400"
  },
  {
    title: "Basketball", 
    subtitle: "Khelo India Level Player",
    icon: Target,
    color: "text-blue-500"
  },
  {
    title: "Chess",
    subtitle: "Competitive Player",
    icon: Users,
    color: "text-purple-400"
  },
  {
    title: "Storytelling",
    subtitle: "Technical Documentation",
    icon: PenTool,
    color: "text-emerald-400"
  }
];

export default function AchievementsSection() {
  return (
    <section id="achievements" className="section relative overflow-hidden">
      {/* Background Gradient Spot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00A3FF] rounded-full opacity-[0.03] blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl lg:text-5xl font-bold font-orbitron text-center mb-16 bg-gradient-to-r from-[#00A3FF] to-[#00FFA3] text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(0,163,255,0.3)]">
          Achievements & Sports
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="group relative bg-[#0a0a0a]/80 backdrop-blur-md border border-white/5 rounded-2xl p-8 text-center transition-all duration-300 hover:border-[#00FFA3]/30 hover:shadow-[0_0_20px_rgba(0,255,163,0.1)] hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#111] flex items-center justify-center border border-white/10 group-hover:border-[#00FFA3]/50 group-hover:shadow-[0_0_15px_rgba(0,255,163,0.3)] transition-all duration-300">
                  <achievement.icon className={`w-10 h-10 ${achievement.color} group-hover:text-[#00FFA3] transition-colors duration-300`} />
                </div>
                
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-[#00FFA3] transition-colors font-orbitron tracking-wide">
                  {achievement.title}
                </h4>
                <p className="text-gray-400 text-sm font-medium tracking-wide">
                  {achievement.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="max-w-3xl mx-auto text-center">
          <div className="relative bg-[#0a0a0a] border border-[#00A3FF]/20 rounded-2xl p-8 lg:p-12 overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00A3FF] to-transparent opacity-50"></div>
            
            <h4 className="text-2xl font-bold text-[#00A3FF] mb-6 font-orbitron tracking-widest uppercase">My Philosophy</h4>
            <p className="text-xl text-gray-300 leading-relaxed italic relative z-10">
              <span className="text-[#00A3FF] text-3xl font-serif mr-2">"</span>
              Technology, innovation, and strong communication drive my passion—I'm eager to contribute and grow!
              <span className="text-[#00A3FF] text-3xl font-serif ml-2">"</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
