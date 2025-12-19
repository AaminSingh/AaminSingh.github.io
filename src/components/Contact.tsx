import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

const Contact = () => {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <div 
      ref={elementRef as React.RefObject<HTMLDivElement>}
      className={`max-w-4xl mx-auto transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <Card className="glass p-8 hover-glow">
        <div className="space-y-6">
            <p className="text-center text-lg text-foreground">
              I'm always open to discussing new projects, opportunities, and collaborations. 
              Feel free to reach out through any of these channels:
            </p>
            
            <div className="grid md:grid-cols-3 gap-4">
              <Button
                variant="outline"
                size="lg"
                className="glass border-primary/30 hover:border-primary hover-glow h-auto py-4"
                asChild
              >
                <a
                  href="mailto:aamin@example.com"
                  className="flex flex-col items-center gap-2"
                >
                  <Mail className="w-6 h-6 text-primary" />
                  <span className="text-sm">Email Me</span>
                </a>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="glass border-primary/30 hover:border-primary hover-glow h-auto py-4"
                asChild
              >
                <a
                  href="https://linkedin.com/in/aaminsimmisingh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2"
                >
                  <Linkedin className="w-6 h-6 text-primary" />
                  <span className="text-sm">LinkedIn</span>
                </a>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="glass border-primary/30 hover:border-primary hover-glow h-auto py-4"
                asChild
              >
                <a
                  href="https://github.com/aaminsingh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2"
                >
                  <Github className="w-6 h-6 text-primary" />
                  <span className="text-sm">GitHub</span>
                </a>
              </Button>
            </div>

            <div className="text-center pt-6">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground hover-glow"
                asChild
              >
                <a href="mailto:aamin@example.com" className="flex items-center gap-2">
              <Send className="w-5 h-5" />
              Send a Message
            </a>
          </Button>
        </div>
      </div>
    </Card>

    <footer className="mt-16 text-center text-muted-foreground">
      <p className="mb-2">© 2025 Aamin Singh. All rights reserved.</p>
      <p className="text-sm">
        Built with React, TypeScript, and a passion for innovation 🚀
      </p>
    </footer>
  </div>
);
};

export default Contact;