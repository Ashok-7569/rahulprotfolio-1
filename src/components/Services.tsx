import { Card, CardContent } from "@/components/ui/card";
import { Code, Smartphone, Database, Globe } from "lucide-react";
import DecorativeShapes from "./DecorativeShapes";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Full Stack Development",
      description: "Building robust web applications with Java Spring Boot and modern frontend frameworks",
      color: "primary",
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Creating responsive, performant websites with cutting-edge technologies and best practices",
      color: "accent",
    },
    {
      icon: Smartphone,
      title: "UI/UX Design",
      description: "Designing beautiful, intuitive interfaces that provide exceptional user experiences",
      color: "secondary",
    },
    {
      icon: Database,
      title: "API Integration",
      description: "Seamless database integration and RESTful API development for scalable applications",
      color: "primary",
    },
  ];

  const getGradient = (color: string) => {
    switch (color) {
      case "primary":
        return "from-primary to-purple-600";
      case "accent":
        return "from-accent to-orange-600";
      case "secondary":
        return "from-secondary to-yellow-500";
      default:
        return "from-primary to-purple-600";
    }
  };

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      <DecorativeShapes variant="section" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary font-bold uppercase tracking-wider text-sm mb-2">SERVICES</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What I Offer
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive development services to bring your ideas to life with quality and precision
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="shadow-card hover:shadow-hover transition-all hover:scale-105 overflow-hidden group"
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${getGradient(service.color)} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <service.icon className="h-10 w-10 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                      <p className="text-foreground/70 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
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

export default Services;
