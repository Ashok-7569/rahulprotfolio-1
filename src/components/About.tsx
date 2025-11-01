import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";
import DecorativeShapes from "./DecorativeShapes";

const About = () => {
  const strengths = [
    "Self-Motivated",
    "Leadership Skills",
    "Strong Communication",
    "Active Listener",
    "Hardworking & Dedicated",
    "Team Player",
  ];

  return (
    <section id="about" className="py-20 bg-muted/30 relative overflow-hidden">
      <DecorativeShapes variant="section" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary font-bold uppercase tracking-wider text-sm mb-2">ABOUT ME</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Designing Solutions, Not<br />Just Visuals
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <div className="flex justify-center relative">
              {/* Decorative orange circle */}
              <div className="absolute -z-10 w-72 h-72 rounded-full bg-gradient-accent opacity-20 blur-3xl"></div>
              
              {/* Triangle decorative */}
              <div className="absolute -bottom-10 -left-10 w-16 h-16 bg-secondary opacity-50" style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}></div>
              
              {/* Circle decorative */}
              <div className="absolute -top-5 -right-5 w-12 h-12 rounded-full border-4 border-primary/30"></div>
              
              <div className="relative">
                <img
                  src={profilePhoto}
                  alt="Kodi Rahul"
                  className="w-80 h-80 object-cover rounded-full border-8 border-white shadow-xl"
                />
                
                {/* Small decorative circles */}
                <div className="absolute top-0 left-0 w-4 h-4 bg-secondary rounded-full"></div>
                <div className="absolute bottom-10 right-0 w-6 h-6 bg-accent rounded-full"></div>
              </div>
            </div>

            {/* Content Side */}
            <div className="space-y-6">
              <p className="text-lg text-foreground/80 leading-relaxed">
                Hi, I'm <span className="font-bold text-primary">Kodi Rahul</span> — a dedicated and 
                self-motivated Java Full Stack Developer passionate about building efficient, scalable web 
                applications using technologies like Java, Spring Boot, React.js, Node.js, and MySQL.
              </p>
              
              <p className="text-foreground/70 leading-relaxed">
                I love solving problems through technology and constantly seek opportunities to grow and 
                contribute to impactful projects.
              </p>

              <Card className="border-l-4 border-l-primary shadow-card bg-primary/5">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg mb-2">My Career Objective</h4>
                      <p className="text-foreground/80 italic">
                        "To pursue a challenging and dynamic career in an innovative environment that values 
                        creativity and growth. I aim to leverage my Java development skills and contribute 
                        meaningfully to the success and progress of the organization."
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-accent shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg mb-3">Key Strengths</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {strengths.map((strength, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span className="text-sm font-medium">{strength}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Button className="gradient-accent text-white rounded-full px-8 shadow-orange hover:shadow-hover">
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
