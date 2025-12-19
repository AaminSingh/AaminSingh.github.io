import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Award } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

const Certifications = () => {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.2 });

  const certifications = [
    {
      title: 'Google Skills Badge',
      issuer: 'Google',
      link: 'https://www.skills.google/public_profiles/04bdd642-287d-418a-90f1-45c47c278fe7/badges/17834928',
      description: 'Demonstrated proficiency in Google Cloud technologies',
    },
    {
      title: 'Professional Certification',
      issuer: 'Credly',
      link: 'https://www.credly.com/badges/577f3f6a-4494-47b5-8431-e379cc4ee412',
      description: 'Recognized professional achievement and expertise',
    },
    {
      title: 'Oracle Certification',
      issuer: 'Oracle',
      link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=B93C36CB5B7DE59BB7CAA3EE6726114A09FF28B6CCFFA348406E1CD042FCED92',
      description: 'Oracle database and technology certification',
    },
  ];

  return (
    <div 
      ref={elementRef as React.RefObject<HTMLDivElement>}
      className={`max-w-5xl mx-auto transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Professional certifications and achievements
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="glass p-6 hover-glow space-y-4 flex flex-col"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-center">
                <div className="p-4 rounded-full glass bg-primary/10">
                  <Award className="w-8 h-8 text-primary" />
                </div>
              </div>
              
              <div className="flex-grow space-y-2">
                <h3 className="text-xl font-bold text-foreground text-center">
                  {cert.title}
                </h3>
                <p className="text-secondary font-semibold text-center">
                  {cert.issuer}
                </p>
                <p className="text-muted-foreground text-center text-sm">
                  {cert.description}
                </p>
              </div>
              
              <Button
                variant="outline"
                className="w-full glass border-primary/30 hover:border-primary hover-glow"
                asChild
              >
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  View Credential
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </Card>
          ))}
        </div>
    </div>
  );
};

export default Certifications;
