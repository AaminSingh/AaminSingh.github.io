import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, ExternalLink, Github } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

const Projects = () => {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.2 });

  const projects = [
    {
      title: 'VisionMeter',
      subtitle: 'Web-Based Eye Screening Tool',
      description: 'An interactive eye screening application that helps users evaluate different aspects of vision directly from their device screen — no external tools required.',
      features: [
        'Visual Acuity Test with voice input using Web Speech AI',
        'Color Vision Test with sensitivity detection',
        'Comprehensive suite including Astigmatism, Contrast Sensitivity, and Visual Field tests',
        'PDF Report Download using jsPDF'
      ],
      techStack: ['HTML', 'CSS', 'JavaScript', 'Web Speech API', 'jsPDF'],
      link: 'https://visionmeter.netlify.app/',
      type: 'live'
    },
    {
      title: 'RAG Chatbot',
      subtitle: 'AI-Powered Conversational Agent',
      description: 'An AI-powered conversational agent that utilizes Retrieval-Augmented Generation (RAG) to provide accurate and contextually relevant responses.',
      features: [
        'Retrieval-Augmented Generation combining document retrieval with generative models',
        'Interactive UI powered by Streamlit',
        'Modular architecture with clean separation of concerns',
        'Integration with Gemini API and LangChain'
      ],
      techStack: ['Python', 'Streamlit', 'LangChain', 'Gemini API'],
      link: 'https://github.com/AaminSingh/RAG',
      type: 'github'
    }
  ];

  return (
    <div 
      ref={elementRef as React.RefObject<HTMLDivElement>}
      className={`max-w-6xl mx-auto transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`glass p-6 hover-glow relative overflow-hidden transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Star decorations */}
              <div className="absolute top-4 right-4">
                <Star className="w-6 h-6 text-primary/30" fill="currentColor" />
              </div>
              <div className="absolute bottom-4 left-4">
                <Star className="w-4 h-4 text-primary/20" fill="currentColor" />
              </div>
              
              <div className="space-y-4 relative z-10">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-1">
                      {project.title}
                    </h3>
                    <p className="text-primary font-medium">{project.subtitle}</p>
                  </div>
                  <Star className="w-8 h-8 text-primary flex-shrink-0" fill="currentColor" />
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-foreground">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <Star className="w-3 h-3 text-primary mt-1 flex-shrink-0" fill="currentColor" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-foreground">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, idx) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className="border-primary/50 text-foreground hover:bg-primary/10"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  {project.type === 'live' ? (
                    <>
                      <ExternalLink className="w-4 h-4" />
                      View Live Demo
                    </>
                  ) : (
                    <>
                      <Github className="w-4 h-4" />
                      View on GitHub
                    </>
                  )}
                </a>
              </div>
            </Card>
          ))}
        </div>
    </div>
  );
};

export default Projects;
