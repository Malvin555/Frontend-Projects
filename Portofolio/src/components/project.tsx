import { useEffect, useState } from "react";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedSection } from "@/components/animated-section";

type Repo = {
  id: number;
  name: string;
  description: string;
  html_url: string;
  topics?: string[];
  language?: string;
  archived: boolean;
};

export default function ProjectsSection() {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/Malvin555/repos")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data
          .filter((repo: Repo) => !repo.archived)
          .slice(0, 4); // 👈 only keep the latest 4
        setRepos(filtered);
      });
  }, []);

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 gradient-text">
            Featured Projects
          </h2>
          <div className="w-32 h-1 bg-primary mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my work in web development and cybersecurity
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {repos.map((repo, i) => (
            <AnimatedSection key={repo.id} delay={i * 150}>
              <Card className="group overflow-hidden flex flex-col h-full">
                <CardHeader className="flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                        {repo.name}
                      </CardTitle>
                      <div className="flex items-center space-x-4 mt-2">
                        {repo.language && (
                          <Badge variant="outline">{repo.language}</Badge>
                        )}
                        <Badge variant="secondary" className="text-xs">
                          Public
                        </Badge>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="opacity-0 group-hover:opacity-100 transition-opacity hover:scale-110"
                      asChild
                    >
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </CardHeader>

                <CardContent className="flex flex-col flex-grow">
                  <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-3">
                    {repo.description || "No description provided."}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {repo.topics?.map((topic, j) => (
                      <Badge key={j} variant="secondary" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-primary  transition-colors"
                      asChild
                    >
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Project <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={600} className="text-center mt-16">
          <Button
            size="lg"
            variant="outline"
            className="px-8 py-4 hover:scale-105 transition-transform"
            asChild
          >
            <a
              href="https://github.com/Malvin555"
              target="_blank"
              rel="noopener noreferrer"
            >
              View All Projects <Github className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
