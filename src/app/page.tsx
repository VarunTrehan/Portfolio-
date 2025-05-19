import IntroductionSection from '@/components/sections/introduction';
import SkillsSection from '@/components/sections/skills';
import CertificationsSection from '@/components/sections/certifications';
import ProjectsSection from '@/components/sections/projects';
import ContactSection from '@/components/sections/contact';

export default function HomePage() {
  return (
    <>
      <IntroductionSection />
      <SkillsSection />
      <CertificationsSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
