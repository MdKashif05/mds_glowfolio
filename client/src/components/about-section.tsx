export default function AboutSection() {
  return (
    <section id="about" className="section">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-5xl font-bold font-orbitron text-center mb-12 bg-gradient-neon-text">
          About Me
        </h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="glass rounded-3xl p-8 lg:p-12 relative overflow-hidden">
            {/* Animated border effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 rounded-3xl p-0.5 animate-rotate">
              <div className="bg-gray-900/90 rounded-3xl w-full h-full"></div>
            </div>
            
            <div className="relative z-10">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                <div>
                  <h3 className="text-2xl font-bold text-emerald-400 mb-6">My Journey</h3>
                  <p className="text-lg mb-4">
                    I'm <strong className="text-white">Md Kashif</strong>, an 18-year-old CSE Diploma student in my 3rd year, 5th semester at 
                    <strong className="text-blue-500"> Kameshwar Narayan Singh Govt. Polytechnic College</strong>. I'm passionate about technology, 
                    innovation, and strong communication.
                  </p>
                  <p className="text-lg text-text-secondary">
                    My goal is ambitious yet achievable: to become a successful tech entrepreneur by the age of 25. 
                    I believe in the power of AI-driven applications and modern web technologies to solve real-world problems.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-blue-500 mb-6">Beyond Coding</h3>
                  <p className="text-lg mb-4">
                    When I'm not coding, you'll find me on the football field or basketball court, playing at the 
                    <strong className="text-emerald-400"> Khelo India level</strong>. I'm also a competitive chess player 
                    who enjoys strategic thinking.
                  </p>
                  <p className="text-lg text-text-secondary">
                    I have a passion for storytelling and writing. I love exploring new AI tools and 
                    staying updated with the latest tech innovations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
