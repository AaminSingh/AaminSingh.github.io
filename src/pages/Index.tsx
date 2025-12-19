import SpaceBackground from '@/components/SpaceBackground';
import Navigation from '@/components/Navigation';
import HeroOrbit from '@/components/HeroOrbit';
import CometSectionHeader from '@/components/CometSectionHeader';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Certifications from '@/components/Certifications';
import LeetCodeStats from '@/components/LeetCodeStats';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <SpaceBackground />
      <Navigation />
      
      <main className="relative z-10">
        <HeroOrbit />
        
        <section id="about" className="container mx-auto px-4 py-20">
          <CometSectionHeader title="About Me" />
          <About />
        </section>

        <section id="skills" className="container mx-auto px-4 py-20">
          <CometSectionHeader title="Skills & Expertise" />
          <Skills />
        </section>

        <section id="projects" className="container mx-auto px-4 py-20">
          <CometSectionHeader title="My Projects" />
          <Projects />
        </section>

        <section id="certifications" className="container mx-auto px-4 py-20">
          <CometSectionHeader title="Certifications" />
          <Certifications />
        </section>

        <section id="leetcode" className="container mx-auto px-4 py-20">
          <CometSectionHeader title="Coding Journey" />
          <LeetCodeStats />
        </section>

        <section id="contact" className="container mx-auto px-4 py-20">
          <CometSectionHeader title="Get In Touch" />
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default Index;
