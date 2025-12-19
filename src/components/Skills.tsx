import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

const Skills = () => {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.2 });

  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: ['React', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'Responsive Design', 'Data Visualization'],
    },
    {
      title: 'Technologies',
      skills: ['Java', 'Machine Learning', 'Web3', 'Git', 'APIs'],
    },
    {
      title: 'Soft Skills',
      skills: ['Team Collaboration', 'Problem Solving', 'Communication', 'Research', 'Innovation'],
    },
    {
      title: 'Tools & Platforms',
      skills: ['GitHub', 'VS Code', 'Figma', 'Oracle', 'Google Cloud'],
    },
  ];

  return (
    <div 
      ref={elementRef as React.RefObject<HTMLDivElement>}
      className={`max-w-6xl mx-auto transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
        
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className={`glass p-6 hover-glow transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <h3 className="text-2xl font-bold text-primary mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className={`bg-secondary/20 text-secondary hover:bg-secondary/30 border border-secondary/30 transition-all duration-500 ${
                      isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                    }`}
                    style={{ transitionDelay: `${index * 150 + skillIndex * 50}ms` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
    </div>
  );
};

export default Skills;
