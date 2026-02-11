import { useState } from "react";
import { Mail, Phone, MapPin, Lightbulb, Send, Linkedin, Github, Instagram } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import KLogo from "@/components/k-logo";

const socialLinks = [
  { icon: Linkedin, url: "https://www.linkedin.com/in/md-kashif-9426b4357", label: "LinkedIn" },
  { icon: Github, url: "https://github.com/MdKashif05", label: "GitHub" },
  { icon: Mail, url: "mailto:mdkashif3300@gmail.com", label: "Email" },
  { icon: FaXTwitter, url: "https://x.com/__mdka_shif_321", label: "X" },
  { icon: Instagram, url: "https://www.instagram.com/m.kashif_05", label: "Instagram" }
];

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // ✅ UPDATED handleSubmit to send message via backend
    const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData), // sends name, email, subject, message
    });

    const data = await res.json();

    if (data.success) {
      toast({
        title: "✅ Message Sent!",
        description: "Your message was sent successfully. I'll reply soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } else {
      toast({
        title: "❌ Error",
        description: data.error || "Failed to send message",
        variant: "destructive",
      });
    }
  } catch (error) {
    toast({
      title: "❌ Network Error",
      description: "Unable to send message. Try again later.",
      variant: "destructive",
    });
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <section id="contact" className="section bg-black/20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#00FFA3] rounded-full opacity-[0.03] blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl lg:text-5xl font-bold font-orbitron text-center mb-16 bg-gradient-to-r from-[#00A3FF] to-[#00FFA3] text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(0,163,255,0.3)]">
          Let's Connect
        </h2>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* ✅ Contact Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6 bg-[#0a0a0a]/80 backdrop-blur-md border border-white/5 rounded-2xl p-6 md:p-8 shadow-2xl">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-gray-400 text-xs uppercase tracking-widest font-bold ml-1">Your Name</label>
                    <Input 
                      name="name" 
                      placeholder="Enter your name" 
                      value={formData.name} 
                      onChange={handleInputChange} 
                      required 
                      className="bg-[#111] border-white/10 text-white placeholder:text-gray-600 focus:border-[#00A3FF] focus:ring-1 focus:ring-[#00A3FF] h-12 rounded-lg transition-all" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-gray-400 text-xs uppercase tracking-widest font-bold ml-1">Your Email</label>
                    <Input 
                      name="email" 
                      type="email" 
                      placeholder="Enter your email" 
                      value={formData.email} 
                      onChange={handleInputChange} 
                      required 
                      className="bg-[#111] border-white/10 text-white placeholder:text-gray-600 focus:border-[#00A3FF] focus:ring-1 focus:ring-[#00A3FF] h-12 rounded-lg transition-all" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-gray-400 text-xs uppercase tracking-widest font-bold ml-1">Subject</label>
                  <Input 
                    name="subject" 
                    placeholder="What's this about?" 
                    value={formData.subject} 
                    onChange={handleInputChange} 
                    required 
                    className="bg-[#111] border-white/10 text-white placeholder:text-gray-600 focus:border-[#00A3FF] focus:ring-1 focus:ring-[#00A3FF] h-12 rounded-lg transition-all" 
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-gray-400 text-xs uppercase tracking-widest font-bold ml-1">Your Message</label>
                  <Textarea 
                    name="message" 
                    placeholder="Tell me about your project..." 
                    rows={6} 
                    value={formData.message} 
                    onChange={handleInputChange} 
                    required 
                    className="bg-[#111] border-white/10 text-white placeholder:text-gray-600 focus:border-[#00A3FF] focus:ring-1 focus:ring-[#00A3FF] resize-none rounded-lg transition-all" 
                  />
                </div>

                <div className="pt-4">
                  <Button 
                    type="submit" 
                    disabled={isSubmitting} 
                    className="w-full bg-gradient-to-r from-[#00A3FF] to-[#00FFA3] text-black font-bold text-lg py-6 rounded-lg shadow-[0_0_20px_rgba(0,163,255,0.3)] hover:shadow-[0_0_30px_rgba(0,163,255,0.5)] hover:scale-[1.02] transition-all duration-300"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </form>
            </div>

            {/* ✅ Contact Info */}
            <div className="space-y-6">
              <div className="bg-[#0a0a0a]/80 backdrop-blur-md border border-white/5 rounded-2xl p-6 md:p-8 hover:border-[#00A3FF]/30 transition-colors duration-300 group">
                <h4 className="text-xl font-bold text-white mb-6 flex items-center font-orbitron">
                  <span className="w-10 h-10 rounded-full bg-[#00A3FF]/10 flex items-center justify-center mr-3 group-hover:bg-[#00A3FF]/20 transition-colors">
                    <Mail className="h-5 w-5 text-[#00A3FF]" />
                  </span>
                  Get In Touch
                </h4>
                <div className="space-y-4">
                  <div className="group/link">
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Email</p>
                    <a href="mailto:mdkashif3300@gmail.com" className="text-gray-300 hover:text-[#00FFA3] transition-colors flex items-center gap-2 text-sm md:text-base">
                      mdkashif3300@gmail.com
                    </a>
                  </div>
                  <div className="group/link">
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Phone</p>
                    <a href="tel:7033758217" className="text-gray-300 hover:text-[#00FFA3] transition-colors flex items-center gap-2 text-sm md:text-base">
                      +91 7033758217
                    </a>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Location</p>
                    <p className="text-gray-300 flex items-center gap-2 text-sm md:text-base">
                      India
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#0a0a0a]/80 backdrop-blur-md border border-white/5 rounded-2xl p-6 md:p-8 hover:border-[#00A3FF]/30 transition-colors duration-300 group h-fit">
                <h4 className="text-xl font-bold text-white mb-6 flex items-center font-orbitron">
                  <span className="w-10 h-10 rounded-full bg-[#00FFA3]/10 flex items-center justify-center mr-3 group-hover:bg-[#00FFA3]/20 transition-colors">
                    <Lightbulb className="h-5 w-5 text-[#00FFA3]" />
                  </span>
                  Let's Collaborate
                </h4>
                <p className="text-gray-400 leading-relaxed text-sm">
                  I'm always open to discussing new opportunities, innovative projects, and potential collaborations. Whether you're looking for a developer, have a project idea, or just want to connect, feel free to reach out!
                </p>
              </div>
            </div>
          </div>

          {/* ✅ Social Links & K Logo */}
          <div className="flex flex-col items-center gap-8">
            {/* K Logo - Placed above social links */}
            <div className="p-4 rounded-full bg-[#111] border border-white/5 shadow-[0_0_30px_rgba(0,163,255,0.1)] group hover:border-[#00FFA3]/30 transition-all duration-300 animate-pulse-slow">
              <KLogo width="60" height="60" className="group-hover:drop-shadow-[0_0_15px_rgba(0,255,163,0.5)] transition-all duration-300" />
            </div>

            <div className="flex justify-center gap-4 md:gap-8 flex-wrap">
              {socialLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.url} 
                  target={link.url.startsWith('http') ? '_blank' : undefined} 
                  rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined} 
                  className="group relative p-3 md:p-4 bg-[#111] rounded-full border border-white/10 hover:border-[#00FFA3]/50 hover:bg-[#00FFA3]/10 transition-all duration-300 hover:-translate-y-2"
                  aria-label={link.label}
                >
                  <link.icon className="h-5 w-5 md:h-6 md:w-6 text-gray-400 group-hover:text-[#00FFA3] transition-colors" />
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-[#00FFA3] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    {link.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
