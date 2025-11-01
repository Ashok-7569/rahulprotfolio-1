import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";
import DecorativeShapes from "./DecorativeShapes";

const Education = () => {
  const education = [
    {
      degree: "B.Tech in Electronics and Communication Engineering",
      institution: "Malla Reddy Institute of Engineering and Technology",
      period: "2021 - 2025",
      grade: "CGPA: 8.7",
    },
    {
      degree: "Intermediate (M.P.C)",
      institution: "Prathibha Junior College",
      period: "2018 - 2020",
      grade: "CGPA: 9.7",
    },
    {
      degree: "Secondary Schooling",
      institution: "Z.P.H.S Bakalwadi High School",
      period: "2017 - 2018",
      grade: "CGPA: 7.2",
    },
  ];

  const certifications = [
    {
      title: "Java Full Stack Development",
      issuer: "Tech Mahindra SMART Academy",
    },
    {
      title: "Python Programming",
      issuer: "NPTEL (IIT Platform)",
    },
    {
      title: "Artificial Intelligence Internship",
      issuer: "AICTE (Jan-Mar 2025)",
    },
    {
      title: "Tech Saksham",
      issuer: "Microsoft & SAP",
    },
  ];

  return (
    <section id="education" className="py-20 bg-muted/30 relative overflow-hidden">
      <DecorativeShapes variant="section" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary font-bold uppercase tracking-wider text-sm mb-2">ACADEMIC JOURNEY</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Education & Certifications
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                Education
              </h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <Card 
                    key={index} 
                    className="shadow-card hover:shadow-hover transition-all border-l-4 border-l-primary"
                  >
                    <CardContent className="p-6">
                      <h4 className="text-lg font-bold mb-2">{edu.degree}</h4>
                      <p className="text-foreground/70 mb-2">{edu.institution}</p>
                      <div className="flex flex-wrap gap-3 text-sm">
                        <span className="text-muted-foreground">📅 {edu.period}</span>
                        <span className="text-primary font-bold">🎓 {edu.grade}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Award className="h-6 w-6 text-accent" />
                </div>
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <Card 
                    key={index} 
                    className="shadow-card hover:shadow-hover transition-all border-l-4 border-l-accent"
                  >
                    <CardContent className="p-6">
                      <h4 className="text-lg font-bold mb-2 flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        {cert.title}
                      </h4>
                      <p className="text-foreground/70 text-sm">{cert.issuer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
