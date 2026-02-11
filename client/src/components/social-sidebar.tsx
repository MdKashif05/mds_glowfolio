import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

const socialLinks = [
  { icon: Linkedin, url: "https://www.linkedin.com/in/md-kashif-9426b4357", label: "LinkedIn" },
  { icon: FaXTwitter, url: "https://x.com/__mdka_shif_321", label: "X" },
  { icon: Instagram, url: "https://www.instagram.com/m.kashif_05", label: "Instagram" },
  { icon: Mail, url: "mailto:mdkashif3300@gmail.com", label: "Email" },
  { icon: Github, url: "https://github.com/MdKashif05", label: "GitHub" },
];

export default function SocialSidebar() {
  return (
    <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-50">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-[#00FFA3] transition-all duration-300 hover:-translate-x-2 hover:scale-110 p-2 bg-black/20 backdrop-blur-sm rounded-full border border-white/5 lg:bg-transparent lg:border-none lg:p-0"
          aria-label={link.label}
        >
          <link.icon className="w-5 h-5 lg:w-8 lg:h-8 drop-shadow-[0_0_8px_rgba(0,255,163,0.3)]" />
        </a>
      ))}
    </div>
  );
}
