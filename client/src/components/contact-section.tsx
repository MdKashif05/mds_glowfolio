import { useState } from "react";
import { Mail, Phone, MapPin, Lightbulb, Send, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const socialLinks = [
  { icon: Linkedin, url: "https://www.linkedin.com/in/md-kashif-9426b4357", label: "LinkedIn" },
  { icon: Github, url: "https://github.com/MdKashif05", label: "GitHub" },
  { icon: Mail, url: "mailto:mdkashif3300@gmail.com", label: "Email" },
  { icon: Phone, url: "tel:7033758217", label: "Phone" }
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
    <section id="contact" className="section bg-black/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-5xl font-bold font-orbitron text-center mb-12 bg-gradient-neon-text">
          Let's Connect
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* ✅ Contact Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Input name="name" placeholder="Your Name" value={formData.name} onChange={handleInputChange} required className="glass border-glass-border bg-glass-bg text-white placeholder:text-gray-400 focus:border-cyan-500" />
                  <Input name="email" type="email" placeholder="Your Email" value={formData.email} onChange={handleInputChange} required className="glass border-glass-border bg-glass-bg text-white placeholder:text-gray-400 focus:border-cyan-500" />
                </div>

                <Input name="subject" placeholder="Subject" value={formData.subject} onChange={handleInputChange} required className="glass border-glass-border bg-glass-bg text-white placeholder:text-gray-400 focus:border-cyan-500" />

                <Textarea name="message" placeholder="Your Message" rows={5} value={formData.message} onChange={handleInputChange} required className="glass border-glass-border bg-glass-bg text-white placeholder:text-gray-400 focus:border-cyan-500 resize-none" />

                <div className="text-center">
                  <Button type="submit" disabled={isSubmitting} className="btn-primary-glow px-8 py-3">
                    <Send className="mr-2 h-5 w-5" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </form>
            </div>

            {/* ✅ Contact Info */}
            <div className="space-y-6">
              <div className="glass rounded-2xl p-6">
                <h4 className="text-xl font-bold text-blue-500 mb-4 flex items-center"><Mail className="mr-2 h-5 w-5" />Get In Touch</h4>
                <div className="space-y-3">
                  <p className="flex items-center"><Mail className="mr-3 h-4 w-4 text-emerald-400" /><a href="mailto:mdkashif3300@gmail.com" className="text-white hover:text-blue-500 transition-colors">mdkashif3300@gmail.com</a></p>
                  <p className="flex items-center"><Phone className="mr-3 h-4 w-4 text-emerald-400" /><a href="tel:7033758217" className="text-white hover:text-blue-500 transition-colors">+91 7033758217</a></p>
                  <p className="flex items-center"><MapPin className="mr-3 h-4 w-4 text-emerald-400" /><span className="text-white">India</span></p>
                </div>
              </div>

              <div className="glass rounded-2xl p-6">
                <h4 className="text-xl font-bold text-purple-400 mb-4 flex items-center"><Lightbulb className="mr-2 h-5 w-5" />Let's Collaborate</h4>
                <p className="text-text-secondary">I'm always open to discussing new opportunities, innovative projects, and potential collaborations. Whether you're looking for a developer, have a project idea, or just want to connect, feel free to reach out!</p>
              </div>
            </div>
          </div>

          {/* ✅ Social Links */}
          <div className="flex justify-center gap-6">
            {socialLinks.map((link, index) => (
              <a key={index} href={link.url} target={link.url.startsWith('http') ? '_blank' : undefined} rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined} className="social-link" aria-label={link.label}>
                <link.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
