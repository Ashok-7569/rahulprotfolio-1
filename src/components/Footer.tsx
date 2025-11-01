import { Mail, Linkedin, Github, Heart } from "lucide-react";

const Footer = () => {
  const footerLinks = [
    { title: "Home", href: "#home" },
    { title: "About", href: "#about" },
    { title: "Services", href: "#services" },
    { title: "Projects", href: "#projects" },
    { title: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-foreground/5 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold mb-3">
                Kodi<span className="text-primary">.</span>
              </h3>
              <p className="text-foreground/70 text-sm">
                Java Full Stack Developer passionate about building innovative web solutions
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {footerLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-foreground/70 hover:text-primary transition-colors text-sm"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <div className="flex gap-3">
                <a
                  href="mailto:rahulyadav.kodi@gmail.com"
                  className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary hover:text-white transition-all flex items-center justify-center"
                >
                  <Mail className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com/in/rahul-yadav-kodi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary hover:text-white transition-all flex items-center justify-center"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary hover:text-white transition-all flex items-center justify-center"
                >
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-foreground/10 pt-8">
            <p className="text-center text-foreground/70 text-sm flex items-center justify-center gap-2 flex-wrap">
              Copyright © 2025 - All Rights Reserved by Kodi Rahul | 
              <span className="flex items-center gap-1">
                Made with <Heart className="h-4 w-4 text-red-500 fill-red-500 animate-pulse" /> and passion
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
