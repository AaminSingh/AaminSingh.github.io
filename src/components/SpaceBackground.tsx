import { useMemo } from "react";

const SpaceBackground = () => {
  // Generate random stars for box-shadow
  const [smallStars, mediumStars, largeStars] = useMemo(() => {
    const generateStars = (count: number) => {
      let value = "";
      for (let i = 0; i < count; i++) {
        const x = Math.floor(Math.random() * 2000);
        const y = Math.floor(Math.random() * 2000);
        value += `${x}px ${y}px #FFF${i < count - 1 ? ", " : ""}`;
      }
      return value;
    };

    return [
      generateStars(700), // Small stars
      generateStars(200), // Medium stars
      generateStars(100)  // Large stars
    ];
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-0 bg-[#090A0F]">
      {/* Deep Space Gradient */}
      <div 
        className="absolute inset-0 opacity-80"
        style={{
          background: 'radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%)',
        }}
      />

      {/* Small Stars */}
      <div 
        className="stars absolute w-[1px] h-[1px] bg-transparent"
        style={{ boxShadow: smallStars }}
      />
      <div 
        className="stars absolute w-[1px] h-[1px] bg-transparent"
        style={{ boxShadow: smallStars, top: '2000px' }} // Duplicate for seamless loop
      />

      {/* Medium Stars */}
      <div 
        className="stars2 absolute w-[2px] h-[2px] bg-transparent"
        style={{ boxShadow: mediumStars }}
      />
      <div 
        className="stars2 absolute w-[2px] h-[2px] bg-transparent"
        style={{ boxShadow: mediumStars, top: '2000px' }}
      />

      {/* Large Stars */}
      <div 
        className="stars3 absolute w-[3px] h-[3px] bg-transparent"
        style={{ boxShadow: largeStars }}
      />
      <div 
        className="stars3 absolute w-[3px] h-[3px] bg-transparent"
        style={{ boxShadow: largeStars, top: '2000px' }}
      />
      
      {/* Nebula Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] animate-pulse delay-1000" />
    </div>
  );
};

export default SpaceBackground;