import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Linkedin, Send, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import DecorativeShapes from "./DecorativeShapes";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
  };

  return (
    <section id="contact" className="py-20 gradient-hero relative overflow-hidden">
      <DecorativeShapes variant="hero" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 text-white">
            <p className="text-white/90 font-bold uppercase tracking-wider text-sm mb-2">CONTACT</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Got A Project? Let's<br />Talk
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="shadow-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="First Name" required className="rounded-xl" />
                    <Input placeholder="Last Name" required className="rounded-xl" />
                  </div>
                  <Input type="email" placeholder="Email Address" required className="rounded-xl" />
                  <Input placeholder="Subject" required className="rounded-xl" />
                  <Textarea
                    placeholder="Your Message..."
                    required
                    rows={5}
                    className="rounded-xl resize-none"
                  />
                  <Button type="submit" className="w-full gradient-accent text-white rounded-full shadow-orange">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white shadow-card">
                <CardContent className="p-6">
                  <a
                    href="mailto:rahulyadav.kodi@gmail.com"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-colors">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm text-white/70 mb-1">Email Me</p>
                      <p className="font-bold">rahulyadav.kodi@gmail.com</p>
                    </div>
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white shadow-card">
                <CardContent className="p-6">
                  <a
                    href="tel:+918712117302"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-colors">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm text-white/70 mb-1">Call Me</p>
                      <p className="font-bold">+91 87121 17302</p>
                    </div>
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white shadow-card">
                <CardContent className="p-6">
                  <a
                    href="https://linkedin.com/in/rahul-yadav-kodi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-colors">
                      <Linkedin className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm text-white/70 mb-1">Connect on LinkedIn</p>
                      <p className="font-bold">rahul-yadav-kodi</p>
                    </div>
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm text-white/70 mb-1">Location</p>
                      <p className="font-bold">India</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
