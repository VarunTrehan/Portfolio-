import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Cpu, Lightbulb, Terminal, Library, Server, Globe, Brain, MessageSquare, Clock, GitBranch, FileCode2 } from 'lucide-react'; 
import type { SkillCategory } from '@/types/portfolio';

const skillsData: SkillCategory[] = [
  {
    title: 'Technical Skills',
    icon: Cpu,
    skills: [
      { name: 'C++' },
      { name: 'Python' },
      { name: 'Kotlin' },
      { name: 'SQL' },
      { name: 'Java' },
      { name: 'C' },
      { name: 'HTML5', icon: FileCode2 },
      { name: 'CSS3', icon: FileCode2 },
      { name: 'JavaScript (ES6+)', icon: FileCode2 },
    ],
  },
  {
    title: 'Developer Tools',
    icon: Terminal,
    skills: [
      { name: 'Visual Studio' },
      { name: 'Android Studio' },
      { name: 'GitHub', icon: GitBranch },
      { name: 'Postman' },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    icon: Library,
    skills: [
      { name: 'Firebase' },
      { name: 'SQLite' },
      { name: 'Node.js', icon: Server },
    ],
  },
  {
    title: 'Platforms',
    icon: Server,
    skills: [
      { name: 'Windows' },
      { name: 'Linux' },
      { name: 'Firebase Realtime Database' },
    ],
  },
  {
    title: 'Soft Skills',
    icon: Lightbulb, 
    skills: [
      { name: 'Problem-Solving', icon: Brain },
      { name: 'Attention to Detail' },
      { name: 'Team Collaboration' },
      { name: 'Communication', icon: MessageSquare },
      { name: 'Adaptability' },
      { name: 'Time Management', icon: Clock },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-16 text-primary">
          My Skills
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"> {/* Changed to lg:grid-cols-3 for better layout with more categories if needed */}
          {skillsData.map((category) => (
            <Card 
              key={category.title} 
              className="shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <category.icon className="h-8 w-8 text-accent" />
                  <CardTitle className="text-2xl font-semibold text-primary">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill.name} 
                      variant="outline" 
                      className="px-3 py-1 text-sm border-accent text-accent bg-accent/10 hover:bg-accent/20 transition-colors flex items-center gap-1.5"
                    >
                      {skill.icon && <skill.icon className="h-3.5 w-3.5" />} 
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

