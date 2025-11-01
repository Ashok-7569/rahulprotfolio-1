import { Button } from "@/components/ui/button";
import { Download, Mail, Linkedin, Github, MapPin } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
import DecorativeShapes from "./DecorativeShapes";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen gradient-hero pt-20 flex items-center relative overflow-hidden">
      <DecorativeShapes variant="hero" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in-up text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <span className="text-sm font-medium">Hello, I'm</span>
            </div>
            
            <div className="space-y-3">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Kodi Rahul<br />
                <span className="text-white/90">A Java Full Stack</span><br />
                <span className="text-white/90">Developer</span>
              </h1>
            </div>
            
            <p className="text-lg text-white/80 leading-relaxed max-w-lg">
              Building reliable, modern, and scalable web solutions. Passionate about creating 
              efficient applications with clean code and great user experiences.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="gradient-accent text-white rounded-full px-8 shadow-orange hover:shadow-hover transition-all">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
              <Button 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 rounded-full px-8 backdrop-blur-sm"
                asChild
              >
                <a href="#contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Let's Talk
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-6">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-2xl border border-white/20">
                <div className="text-3xl font-bold">8.7</div>
                <div className="text-sm text-white/70">CGPA</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-2xl border border-white/20">
                <div className="text-3xl font-bold">5+</div>
                <div className="text-sm text-white/70">Projects</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-2xl border border-white/20">
                <div className="text-3xl font-bold">4</div>
                <div className="text-sm text-white/70">Certifications</div>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center md:justify-end animate-fade-in-up relative">
            {/* Large orange decorative circle behind */}
            <div className="absolute -right-10 -top-10 w-96 h-96 rounded-full bg-gradient-accent opacity-80 blur-2xl"></div>
            
            {/* Profile container */}
            <div className="relative">
              {/* Floating badges */}
              <div className="absolute -top-5 -left-5 bg-white px-4 py-2 rounded-full shadow-lg animate-float flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm font-semibold text-foreground">Available for work</span>
              </div>
              
              <div className="absolute -bottom-5 -right-5 bg-white px-4 py-2 rounded-full shadow-lg" style={{ animationDelay: "0.5s" }}>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-foreground">India</span>
                </div>
              </div>
              
              {/* Main image */}
              <div className="relative z-10">
                <img
                  src={profilePhoto}
                  alt="Kodi Rahul"
                  className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Social Links - Bottom */}
        <div className="flex gap-4 pt-12 justify-center md:justify-start animate-fade-in-up">
          <a
            href="https://linkedin.com/in/rahul-yadav-kodi"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all text-white"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all text-white"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="mailto:rahulyadav.kodi@gmail.com"
            className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all text-white"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
