import { Card, CardContent } from "@/components/ui/card";
import { Code2, Database, Layers, Wrench } from "lucide-react";
import DecorativeShapes from "./DecorativeShapes";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Programming",
      color: "primary",
      skills: [
        { name: "Java", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "C", level: 75 },
        { name: "HTML & CSS", level: 90 },
      ],
    },
    {
      icon: Layers,
      title: "Frameworks",
      color: "accent",
      skills: [
        { name: "Spring Boot", level: 85 },
        { name: "React.js", level: 80 },
        { name: "Node.js", level: 70 },
        { name: "Express.js", level: 65 },
      ],
    },
    {
      icon: Database,
      title: "Databases",
      color: "secondary",
      skills: [
        { name: "MySQL", level: 85 },
        { name: "MongoDB", level: 70 },
      ],
    },
    {
      icon: Wrench,
      title: "Tools",
      color: "primary",
      skills: [
        { name: "Git & GitHub", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "MS Office", level: 80 },
      ],
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return "bg-primary/10 text-primary";
      case "accent":
        return "bg-accent/10 text-accent";
      case "secondary":
        return "bg-secondary/10 text-secondary";
      default:
        return "bg-primary/10 text-primary";
    }
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <DecorativeShapes variant="section" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary font-bold uppercase tracking-wider text-sm mb-2">EXPERTISE</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Technical Skills & Technologies
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive skill set across full-stack development with modern frameworks and tools
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="shadow-card hover:shadow-hover transition-all border-2 hover:scale-105">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 rounded-2xl ${getColorClasses(category.color)} flex items-center justify-center mb-4`}>
                    <category.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                  <div className="space-y-3">
                    {category.skills.map((skill, idx) => (
                      <div key={idx}>
                        <div className="flex justify-between mb-1.5">
                          <span className="font-medium text-sm">{skill.name}</span>
                          <span className="text-xs text-muted-foreground font-bold">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all duration-1000 ${
                              category.color === "primary" ? "bg-primary" :
                              category.color === "accent" ? "bg-accent" :
                              "bg-secondary"
                            }`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
