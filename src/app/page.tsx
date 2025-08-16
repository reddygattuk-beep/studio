import Header from '@/components/header';
import Hero from '@/components/hero';
import Skills from '@/components/skills';
import Projects from '@/components/projects';
import Experience from '@/components/experience';
import Education from '@/components/education';
import Certifications from '@/components/certifications';
import Contact from '@/components/contact';
import BioGenerator from '@/components/bio-generator';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <BioGenerator />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
