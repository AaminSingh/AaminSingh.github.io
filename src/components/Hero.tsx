import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/profile.png';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [showContent, setShowContent] = useState(false);
  const [hideImage, setHideImage] = useState(false);

  useEffect(() => {
    // Show content after comet animation
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 2000);
    
    // Roll away image after it appears
    const imageTimer = setTimeout(() => {
      setHideImage(true);
    }, 4000);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(imageTimer);
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Comet Animation */}
      <div className="comet-container">
        <div className="comet">
          <div className="comet-tail"></div>
        </div>
      </div>

      <div className={`text-center space-y-8 max-w-4xl mx-auto transition-all duration-1000 ${showContent ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
        <div className={`relative inline-block transition-all duration-1000 ${hideImage ? 'opacity-0 translate-x-[200%] rotate-[720deg] scale-0' : 'opacity-100'}`}>
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <img
            src={profileImage}
            alt="Aamin Singh"
            className="relative w-48 h-48 rounded-full object-cover border-4 border-primary/50 shadow-2xl mx-auto hover-glow"
            style={{ animation: 'float 6s ease-in-out infinite' }}
          />
        </div>

        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold glow-text">
            Aamin Singh
          </h1>
          <p className="text-2xl md:text-3xl text-secondary font-semibold">
            B.Tech CSE (IoT & Blockchain)
          </p>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Passionate learner exploring technology to solve real-world problems
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <Button
            variant="default"
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground hover-glow"
            asChild
          >
            <a href="#about">
              Learn More
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="glass border-primary/30 text-foreground hover:border-primary hover-glow"
            asChild
          >
            <a href="#contact">
              Get in Touch
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="glass border-primary/30 text-foreground hover:border-primary hover-glow"
            asChild
          >
            <a href="Resume.pdf" target="_blank" rel="noopener noreferrer">
              <FileText className="mr-2 h-4 w-4" /> Resume
            </a>
          </Button>
        </div>

        <div className="flex gap-6 justify-center pt-8">
          <a
            href="https://github.com/aaminsingh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors hover-glow p-3 rounded-full glass"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/aaminsimmisingh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors hover-glow p-3 rounded-full glass"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:aamin@example.com"
            className="text-muted-foreground hover:text-primary transition-colors hover-glow p-3 rounded-full glass"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
