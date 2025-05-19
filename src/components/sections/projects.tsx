
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink } from 'lucide-react';
import type { Project } from '@/types/portfolio';

const projectsData: Project[] = [
  {
    id: 'project-campus-crave',
    title: 'Campus Crave',
    description: 'Developed a food ordering app using Android Studio to streamline meal ordering for college students (May 2024 – July 2024). Integrated a secure payment gateway and collaborated with backend developers for efficient data management and real-time order processing.',
    technologies: ['Kotlin', 'Firebase', 'XML', 'Figma'],
    imageUrl: '/campus-crave-app.jpg', 
    dataAiHint: 'food ordering',
    // githubLink: undefined, // Not provided
    // liveDemoLink: undefined, // Not provided
  },
  {
    id: 'project-jarvis-assistant',
    title: 'J.A.R.V.I.S - Assistant',
    description: 'Built a Python-based virtual assistant (February 2024 – April 2024) capable of handling user queries and automating tasks. Integrated APIs for real-time data retrieval (weather, news) and developed NLP capabilities for natural communication. Implemented machine learning for personalized experiences.',
    technologies: ['Python', 'React', 'Node.js', 'OpenAI API'],
    imageUrl: '/jarvis-interface.jpg', 
    dataAiHint: 'virtual assistant',
    githubLink: 'https://github.com/VarunTrehan/J.A.R.V.I.S.git',
    // liveDemoLink: undefined, // Not provided
  },
  {
    id: 'project-ai-code-assistant',
    title: 'AI-Powered Code Assistant',
    description: 'A smart coding tool that uses Google’s Gemini API to debug, correct, and generate code across multiple programming languages. Key features include debugging/fixing code, generating code from natural language, multi-language support, and real-time API integration with Gemini AI.',
    technologies: ['React', 'Material-UI', 'FastAPI', 'Python', 'JavaScript', 'TypeScript', 'Java', 'C++', 'Rust', 'Go', 'Gemini API'],
    imageUrl: '/ai-code-tool.jpg', 
    dataAiHint: 'code assistant',
    githubLink: 'https://github.com/VarunTrehan/AiBot-Code-Generator.git',
    // liveDemoLink: undefined, // Not provided
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-16 text-primary">
          My Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <Card key={project.id} className="flex flex-col overflow-hidden shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group hover:scale-[1.01]">
              {project.imageUrl && (
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="transition-transform duration-500 group-hover:scale-105 object-cover"
                    data-ai-hint={project.dataAiHint || "project image"}
                  />
                </div>
              )}
              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-semibold text-primary">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground h-24 overflow-y-auto text-ellipsis">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-foreground mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-accent text-accent bg-accent/10 hover:bg-accent/20 transition-colors">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-start gap-3 pt-0">
                {project.githubLink && (
                  <Button variant="outline" size="sm" asChild className="group transition-colors hover:bg-primary hover:text-primary-foreground">
                    <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> GitHub
                    </Link>
                  </Button>
                )}
                {project.liveDemoLink && (
                  <Button variant="default" size="sm" asChild className="group bg-accent text-accent-foreground hover:bg-accent/90">
                    <Link href={project.liveDemoLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </Link>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

