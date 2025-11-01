import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Shield, Lock, Database, ArrowRight } from "lucide-react";
import DecorativeShapes from "./DecorativeShapes";

const Projects = () => {
  const categories = ["All Projects", "Web Design", "Mobile Apps", "Blockchain"];

  const projects = [
    {
      title: "Blockchain Notarization System",
      description: "Secure document verification using blockchain and National eID",
      category: "Blockchain",
      icon: Shield,
      gradient: "from-primary to-purple-600",
    },
    {
      title: "Full Stack E-Commerce",
      description: "Modern shopping platform with Spring Boot & React",
      category: "Web Design",
      icon: Database,
      gradient: "from-accent to-orange-600",
    },
    {
      title: "Authentication Platform",
      description: "JWT-based secure auth with role management",
      category: "Web Design",
      icon: Lock,
      gradient: "from-secondary to-yellow-500",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30 relative overflow-hidden">
      <DecorativeShapes variant="section" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary font-bold uppercase tracking-wider text-sm mb-2">PORTFOLIO</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured Project Showcases
            </h2>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat, idx) => (
              <Button
                key={idx}
                variant={idx === 0 ? "default" : "outline"}
                className={idx === 0 ? "gradient-primary text-white rounded-full" : "rounded-full"}
              >
                {cat}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="shadow-card hover:shadow-hover transition-all hover:scale-105 overflow-hidden group"
              >
                <div className={`h-48 bg-gradient-to-br ${project.gradient} relative flex items-center justify-center`}>
                  <project.icon className="h-20 w-20 text-white/90" />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button variant="secondary" className="rounded-full">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Project
                    </Button>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-foreground/70 mb-4 text-sm">{project.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="rounded-full px-8 border-2">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
