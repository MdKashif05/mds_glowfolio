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
    <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-8 z-50">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-[#00FFA3] transition-all duration-300 hover:-translate-x-2 hover:scale-110"
          aria-label={link.label}
        >
          <link.icon className="w-8 h-8 drop-shadow-[0_0_8px_rgba(0,255,163,0.3)]" />
        </a>
      ))}
    </div>
  );
}
