import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollSpy } from "@/hooks/use-scroll-spy";
import KLogo from "@/components/k-logo";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useScrollSpy(navItems.map(item => item.href.slice(1)));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass backdrop-blur-md border-b border-white/5 bg-black/50' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a 
            href="#home" 
            className="text-4xl font-bold font-orbitron text-white hover:text-gray-300 transition-colors"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
          >
            {/* Custom "K" Logo - Scaled down version of Hero Logo - HIGH VISIBILITY */}
            <KLogo width="50" height="50" className="drop-shadow-[0_0_10px_rgba(0,163,255,0.5)]" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
             {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`text-sm font-medium tracking-wide transition-all duration-300 hover:text-[#00FFA3] relative group ${
                    activeSection === item.href.slice(1) ? 'text-[#00FFA3]' : 'text-gray-300'
                  }`}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 h-[2px] bg-[#00FFA3] transition-all duration-300 ${
                    activeSection === item.href.slice(1) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </a>
              ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-white hover:text-[#00FFA3] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-20 left-0 w-full bg-[#050505]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl p-6 flex flex-col gap-4 animate-in slide-in-from-top-5 duration-300">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`block px-4 py-3 rounded-lg text-lg font-medium transition-colors hover:bg-white/5 hover:text-[#00FFA3] ${
                  activeSection === item.href.slice(1) ? 'text-[#00FFA3] bg-white/5' : 'text-gray-300'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
