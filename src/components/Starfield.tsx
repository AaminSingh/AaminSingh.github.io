import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  radius: number;
  speed: number;
  opacity: number;
}

const Starfield = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Create stars with different sizes for depth
    const stars: Star[] = [];
    const starCount = 300;

    for (let i = 0; i < starCount; i++) {
      // Larger stars move faster (closer), smaller stars move slower (farther)
      const radius = Math.random() * 2.5 + 0.5;
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: radius,
        speed: radius * 0.3, // Speed based on size for depth effect
        opacity: Math.random() * 0.5 + 0.5,
      });
    }

    let animationFrameId: number;

    const animate = () => {
      // Clear canvas with slight trail effect for smoother motion
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw and update stars
      stars.forEach((star) => {
        // Draw star with glow
        const gradient = ctx.createRadialGradient(
          star.x, star.y, 0,
          star.x, star.y, star.radius * 2
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`);
        gradient.addColorStop(0.5, `rgba(255, 255, 255, ${star.opacity * 0.5})`);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius * 2, 0, Math.PI * 2);
        ctx.fill();

        // Draw star core
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();

        // Move star from right to left
        star.x -= star.speed;

        // Add subtle twinkling effect
        star.opacity = 0.5 + Math.sin(Date.now() * 0.001 + star.x + star.y) * 0.3;

        // Reset star position when it goes off screen
        if (star.x < -star.radius * 2) {
          star.x = canvas.width + star.radius * 2;
          star.y = Math.random() * canvas.height;
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    // Initial fill
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Reset star positions on resize
      stars.forEach(star => {
        star.x = Math.random() * canvas.width;
        star.y = Math.random() * canvas.height;
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
      style={{ background: '#000000' }}
    />
  );
};

export default Starfield;