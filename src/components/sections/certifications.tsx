import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Award, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import type { Certification } from '@/types/portfolio';

const certificationsData: Certification[] = [
  {
    title: 'Android Developer Certification',
    issuingOrganization: 'Coursera',
    description: 'Demonstrates expertise in Android app development principles and practices.',
    icon: Award,
    // url: undefined, // URL not provided
  },
  {
    title: 'C++ Programming Bootcamp',
    issuingOrganization: 'Udemy',
    description: 'Covers advanced C++ concepts, object-oriented programming, and modern best practices.',
    icon: Award,
    // url: undefined, // URL not provided
  },
  {
    title: 'Introduction to Databases',
    issuingOrganization: 'Coursera (Meta)',
    description: 'Focuses on SQL fundamentals, relational database design, data modeling, and database management.',
    icon: Award,
    // url: undefined, // URL not provided
  },
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-16 text-primary">
          Certifications
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificationsData.map((cert) => (
            <Card key={cert.title} className="flex flex-col shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  {cert.icon ? <cert.icon className="h-10 w-10 text-accent mt-1" /> : <Award className="h-10 w-10 text-accent mt-1" />}
                  <div>
                    <CardTitle className="text-xl font-semibold text-primary">{cert.title}</CardTitle>
                    <CardDescription className="text-muted-foreground mt-1">
                      {cert.issuingOrganization}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow pt-0">
                {cert.description && (
                  <p className="text-sm text-foreground/80 mb-4">{cert.description}</p>
                )}
                {cert.url && (
                  <Button variant="outline" size="sm" asChild className="mt-auto w-full sm:w-auto group transition-colors hover:bg-accent hover:text-accent-foreground">
                    <Link href={cert.url} target="_blank" rel="noopener noreferrer">
                      View Certificate <ExternalLink className="ml-2 h-4 w-4 group-hover:text-accent-foreground" />
                    </Link>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
