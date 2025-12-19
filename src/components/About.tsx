import { Card } from '@/components/ui/card';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

const About = () => {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <div 
      ref={elementRef as React.RefObject<HTMLDivElement>}
      className={`max-w-4xl mx-auto transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <Card className="glass p-8 hover-glow">
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              👋 Hi there! I'm a passionate learner currently pursuing my <span className="text-primary font-semibold">B.Tech in Computer Science and Engineering (IoT & Blockchain)</span>. I completed my schooling from Army Public School with 87.8% in PCM, and coming from an army background has instilled in me a deep sense of <span className="text-secondary font-semibold">discipline, consistency, and focus</span> — qualities that guide me in every aspect of my learning journey.
            </p>
            
            <p>
              I love exploring how technology can solve real-world problems. Over time, I've participated in <span className="text-primary font-semibold">multiple hackathons (3–4)</span>, where I gained hands-on experience in idea generation, research, and frontend development. Collaborating with teams to bring ideas to life taught me not just about coding, but also about communication, problem-solving, and innovation.
            </p>
            
            <p>
              I've also built and exhibited my own projects, which helped me explore modern tools, frameworks, and libraries — and strengthened my passion for continuous learning.
            </p>
            
            <p className="text-primary font-semibold text-xl">
              I'm always curious, always building, and always looking for opportunities to grow — one project at a time 🚀
            </p>
          </div>
        </Card>
    </div>
  );
};

export default About;
