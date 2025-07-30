import { GraduationCap, School, BookOpen } from "lucide-react";

export default function EducationSection() {
  return (
    <section id="education" className="section bg-black/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-5xl font-bold font-orbitron text-center mb-12 bg-gradient-neon-text">
          Education
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="timeline">
            {/* Current Education - CSE Diploma */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 mb-16">
              <div className="w-full lg:w-5/12 lg:text-right">
                <div className="glass rounded-2xl p-6 lg:p-8">
                  <h4 className="text-xl lg:text-2xl font-bold text-emerald-400 mb-2">
                    Diploma in Computer Science Engineering
                  </h4>
                  <h5 className="text-lg font-semibold text-blue-500 mb-3">
                    Kameshwar Narayan Singh Govt. Polytechnic College (KNSGP)
                  </h5>
                  <p className="text-purple-400 mb-4 font-medium">September 2023 – July 2026</p>
                  <p className="text-text-secondary">
                    Currently pursuing CSE Diploma with focus on programming languages, database management, 
                    and modern web technologies. Actively involved in coding competitions and tech events.
                  </p>
                </div>
              </div>
              
              <div className="flex-shrink-0">
                <div className="timeline-icon">
                  <GraduationCap className="w-6 h-6" />
                </div>
              </div>
              
              <div className="w-full lg:w-5/12">
                {/* Empty space for timeline balance */}
              </div>
            </div>

            {/* Secondary Education - Kendriya Vidyalaya */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 mb-16">
              <div className="w-full lg:w-5/12 lg:text-right">
                {/* Empty space for timeline balance */}
              </div>
              
              <div className="flex-shrink-0">
                <div className="timeline-icon">
                  <School className="w-6 h-6" />
                </div>
              </div>
              
              <div className="w-full lg:w-5/12">
                <div className="glass rounded-2xl p-6 lg:p-8">
                  <h4 className="text-xl lg:text-2xl font-bold text-emerald-400 mb-2">
                    Secondary Education
                  </h4>
                  <h5 className="text-lg font-semibold text-blue-500 mb-3">
                    Kendriya Vidyalaya
                  </h5>
                  <p className="text-purple-400 mb-4 font-medium">Jul 2017 – Aug 2023</p>
                  <p className="text-text-secondary">
                    Completed secondary education with achievements in sports, cultural events, and academic awards. 
                    Developed foundational skills in mathematics, science, and communication.
                  </p>
                </div>
              </div>
            </div>

            {/* Primary Education - St. Augustine High School */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
              <div className="w-full lg:w-5/12 lg:text-right">
                <div className="glass rounded-2xl p-6 lg:p-8">
                  <h4 className="text-xl lg:text-2xl font-bold text-emerald-400 mb-2">
                    Primary Education
                  </h4>
                  <h5 className="text-lg font-semibold text-blue-500 mb-3">
                    St. Augustine High School
                  </h5>
                  <p className="text-purple-400 mb-4 font-medium">Apr 2010 – Mar 2016</p>
                  <p className="text-text-secondary">
                    Completed basic foundational education with focus on core subjects and early 
                    development of academic and personal skills.
                  </p>
                </div>
              </div>
              
              <div className="flex-shrink-0">
                <div className="timeline-icon">
                  <BookOpen className="w-6 h-6" />
                </div>
              </div>
              
              <div className="w-full lg:w-5/12">
                {/* Empty space for timeline balance */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
