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
    <section id="achievements" className="section">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-5xl font-bold font-orbitron text-center mb-12 bg-gradient-neon-text">
          Achievements & Sports
        </h2>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-item glass rounded-2xl p-6 text-center">
              <achievement.icon className={`w-12 h-12 ${achievement.color} mx-auto mb-4`} />
              <h4 className={`text-lg font-bold ${achievement.color} mb-2`}>
                {achievement.title}
              </h4>
              <p className="text-text-secondary text-sm">
                {achievement.subtitle}
              </p>
            </div>
          ))}
        </div>
        
        <div className="max-w-2xl mx-auto text-center">
          <div className="glass rounded-2xl p-6 lg:p-8">
            <h4 className="text-xl lg:text-2xl font-bold text-blue-500 mb-4">My Philosophy</h4>
            <p className="text-lg italic text-text-secondary">
              "Technology, innovation, and strong communication drive my passion—I'm eager to contribute and grow!"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
