"use client";

import Projects from "@/components/project";
import RootLayout from "@/components/RootLayout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";
import { AnimatedSection } from "@/components/animated-section";
import {
  Github,
  Linkedin,
  Mail,
  Code,
  Shield,
  Database,
  Terminal,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Download,
  MapPin,
  Briefcase,
} from "lucide-react";
import { SiFedora, SiLaravel, SiReact, SiTailwindcss } from "react-icons/si";

import { useState, useEffect } from "react";

const SECTIONS = ["home", "about", "skills", "projects", "contact"];

const SKILLS = [
  { name: "React", icon: SiReact, category: "Frontend", level: 50 },
  { name: "Next.js", icon: Code, category: "FullStack", level: 45 },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    category: "Frontend",
    level: 80,
  },
  { name: "Linux", icon: SiFedora, category: "Security", level: 85 },
  { name: "Cybersecurity", icon: Shield, category: "Security", level: 50 },
  { name: "Laravel", icon: SiLaravel, category: "FullStack", level: 70 },
  { name: "Database Design", icon: Database, category: "Backend", level: 75 },
  { name: "Terminal/CLI", icon: Terminal, category: "Tools", level: 80 },
];

const SERVICES = [
  {
    icon: Code,
    title: "Development",
    description: "Building modern applications",
    details:
      "Specializing in React Native, React.js, and modern JavaScript frameworks with focus on performance and UX.",
  },
  {
    icon: Shield,
    title: "Security",
    description: "Protecting digital assets",
    details:
      "Learning penetration testing, vulnerability assessment, and secure coding practices for robust applications.",
  },
  {
    icon: Briefcase,
    title: "Consulting",
    description: "Strategic technology guidance",
    details:
      "Helping businesses implement secure development practices and choose the right technology stack.",
  },
];

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      for (const section of SECTIONS) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const NavButton = ({ item }: { item: string }) => (
    <button
      onClick={() => scrollToSection(item)}
      className={`capitalize transition-all duration-200 hover:text-foreground hover:scale-105 ${
        activeSection === item
          ? "text-foreground font-medium border-b-2 border-foreground pb-1"
          : "text-muted-foreground"
      }`}
    >
      {item}
    </button>
  );

  return (
    <RootLayout>
      <div className="min-h-screen bg-background  text-foreground">
        {/* Navigation */}
        <nav
          className="fixed top-0 w-full z-50
          backdrop-filter backdrop-blur-lg
          "
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="text-2xl font-bold hover:scale-105 transition-transform cursor-pointer">
                <span className="gradient-text">MalGround</span>
                <span className="text-muted-foreground">.dev</span>
              </div>

              <div className="hidden md:flex items-center space-x-8">
                {SECTIONS.map((item) => (
                  <NavButton key={item} item={item} />
                ))}
                <ThemeToggle />
              </div>

              <div className="md:hidden flex items-center space-x-2">
                <ThemeToggle />
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="hover:scale-110 transition-transform"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>

            {isMenuOpen && (
              <div className="md:hidden py-4 border-t border-border animate-in slide-in-from-top duration-200">
                {SECTIONS.map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block w-full text-left py-3 capitalize text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Hero Section */}
        <section
          id="home"
          className="min-h-screen pt-35 pb-26 flex items-center justify-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background" />

          <AnimatedSection className="relative z-10 text-center max-w-5xl mx-auto px-4">
            <div className="w-40 h-40 mx-auto mb-12 rounded-full bg-gradient-to-br from-primary to-muted-foreground flex items-center justify-center float-animation pulse-glow">
              <Code size={64} className="text-primary-foreground" />
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              Hi, I'm <span className="gradient-text">Malvin</span>
            </h1>

            <p className="text-2xl md:text-3xl text-muted-foreground mb-8 font-light">
              Web Developer & Cybersecurity Enthusiast
            </p>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
              Crafting secure, modern applications with React Native while
              exploring cybersecurity. Building technology that works
              beautifully and protects users.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              {[
                {
                  text: "View My Work",
                  icon: ArrowRight,
                  action: () => scrollToSection("projects"),
                },
                {
                  text: "Get In Touch",
                  variant: "outline",
                  action: () => scrollToSection("contact"),
                },
                { text: "Resume", icon: Download, variant: "ghost" },
              ].map((btn, i) => (
                <Button
                  key={i}
                  size="lg"
                  className="px-8 py-4 text-lg hover:scale-105 transition-transform"
                  onClick={btn.action}
                >
                  {btn.icon && <btn.icon className="mr-2 h-5 w-5" />}
                  {btn.text}
                  {btn.text === "View My Work" && (
                    <ArrowRight className="ml-2 h-5 w-5" />
                  )}
                </Button>
              ))}
            </div>

            <div className="flex justify-center space-x-8">
              {[
                { icon: Github, link: "https://github.com/malvin555" },
                { icon: Linkedin, link: "https://linkedin.com/in/malvin555" },
                { icon: Mail, link: "mailto:malvinbrine555@gmail.com" },
              ].map(({ icon: Icon, link }, i) => (
                <a
                  key={i}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-125"
                >
                  <Icon size={28} />
                </a>
              ))}
            </div>
          </AnimatedSection>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={32} className="text-muted-foreground" />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold mb-8 gradient-text">
                About Me
              </h2>
              <div className="w-32 h-1 bg-primary mx-auto mb-8" />
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Passionate about the intersection of development and security
              </p>
            </AnimatedSection>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <AnimatedSection delay={200} className="space-y-8">
                <div>
                  <h3 className="text-3xl font-bold mb-6">
                    Developer & Security Researcher
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    I'm a dedicated web developer focused on React Native and
                    modern web technologies. Currently expanding into
                    cybersecurity, building secure, scalable applications.
                  </p>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    My journey combines creative problem-solving with
                    security-first thinking. Clean code meets emerging security
                    best practices.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  {[
                    { label: "Years Experience", value: "1+" },
                    { label: "Projects Completed", value: "5+" },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className="text-center p-6 rounded-xl bg-card border hover:scale-105 transition-transform"
                    >
                      <div className="text-3xl font-bold text-primary mb-2">
                        {stat.value}
                      </div>
                      <div className="text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center space-x-4 text-muted-foreground">
                  <MapPin size={20} />
                  <span>Available for remote work worldwide</span>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={400} className="space-y-6">
                {SERVICES.map((service, i) => (
                  <Card key={i} className="group">
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <service.icon className="w-8 h-8 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">
                            {service.title}
                          </CardTitle>
                          <CardDescription>
                            {service.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{service.details}</p>
                    </CardContent>
                  </Card>
                ))}
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold mb-8 gradient-text">
                Skills & Technologies
              </h2>
              <div className="w-32 h-1 bg-primary mx-auto mb-8" />
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A comprehensive toolkit for building secure, modern applications
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {SKILLS.map((skill, i) => (
                <AnimatedSection key={i} delay={i * 100}>
                  <Card className="group text-center">
                    <CardContent className="p-8">
                      <skill.icon className="w-16 h-16 mx-auto mb-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                      <h3 className="text-xl font-semibold mb-3">
                        {skill.name}
                      </h3>
                      <Badge variant="outline" className="mb-4">
                        {skill.category}
                      </Badge>
                      <div className="w-full bg-muted rounded-full h-2 mb-2">
                        <div
                          className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {skill.level}% Proficiency
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <Projects />

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-muted/30">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold mb-8 gradient-text">
                Let's Connect
              </h2>
              <div className="w-32 h-1 bg-primary mx-auto mb-8" />
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Ready to collaborate on your next project or discuss
                cybersecurity? Let's talk!
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: Mail,
                  title: "Email",
                  info: "malvinbrine555@gmail.com",
                  action: "Send Email",
                  link: "mailto:malvinbrine555@gmail.com",
                },
                {
                  icon: Github,
                  title: "GitHub",
                  info: "github.com/malvin555",
                  action: "View Profile",
                  link: "https://github.com/malvin555",
                },
                {
                  icon: Linkedin,
                  title: "LinkedIn",
                  info: "linkedin.com/in/malvin555",
                  action: "Connect",
                  link: "https://linkedin.com/in/malvin555",
                },
              ].map((contact, i) => (
                <AnimatedSection key={i} delay={i * 100}>
                  <Card className="text-center group">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <contact.icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">
                        {contact.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {contact.info}
                      </p>
                      <a
                        href={contact.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block"
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          className="hover:scale-105 transition-transform"
                        >
                          {contact.action}
                        </Button>
                      </a>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection delay={400} className="text-center">
              <Button
                size="lg"
                className="px-12 py-4 text-lg hover:scale-105 transition-transform"
              >
                <Mail className="w-5 h-5 mr-2" />
                Start a Conversation
              </Button>
            </AnimatedSection>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-muted-foreground mb-4 md:mb-0">
                © 2025 Malvin. Crafted with passion and security in mind.
              </div>
              <div className="flex space-x-6">
                {[
                  { icon: Github, link: "https://github.com/malvin555" },
                  { icon: Linkedin, link: "https://linkedin.com/in/malvin555" },
                  { icon: Mail, link: "mailto:malvinbrine555@gmail.com" },
                ].map(({ icon: Icon, link }, i) => (
                  <a
                    key={i}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-110"
                  >
                    <Icon size={24} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </div>
    </RootLayout>
  );
}
