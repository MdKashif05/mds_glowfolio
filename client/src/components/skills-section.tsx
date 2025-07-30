import { Code, Globe, Brain} from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    color: "text-blue-500",
    skills: [
      { name: "C++", level: 63 },
      { name: "Python", level: 85 },
    ]
  },
  {
    title: "Web Development",
    icon: Globe,
    color: "text-emerald-400",
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 82 },
      { name: "MySQL", level: 75 },
    ]
  },
  {
    title: "CS Fundamentals",
    icon: Brain,
    color: "text-purple-500",
    skills: [
      { name: "Data Structures & Algorithms", level: 80 },
      { name: "DBMS", level: 85 },
      { name: "Operating Systems", level: 72 },
      { name: "Computer Graphics", level: 54 },
    ]
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="section">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-5xl font-bold font-orbitron text-center mb-12 bg-gradient-neon-text">
          Technical Skills
        </h2>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="glass rounded-2xl p-6 lg:p-8 h-full">
              <div className="text-center mb-8">
                <category.icon className={`w-12 h-12 ${category.color} mx-auto mb-4`} />
                <h4 className={`text-xl font-bold ${category.color}`}>
                  {category.title}
                </h4>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-white">{skill.name}</span>
                      <span className="text-text-secondary">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
