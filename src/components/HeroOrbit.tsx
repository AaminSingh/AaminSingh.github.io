import { motion } from "framer-motion";
import profileImage from "@/assets/profile.png";

const HeroOrbit = () => {
  const sections: { name: string; href: string; external?: boolean }[] = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
    { name: "LeetCode", href: "#leetcode" }
  ];

  // Calculate positions on orbit
  const getOrbitPosition = (index: number, total: number, radius: number) => {
    const angle = (index / total) * 2 * Math.PI - Math.PI / 2;
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
    };
  };

  const planetStyles: Record<string, string> = {
    About: "bg-gradient-to-br from-blue-400 to-green-400 shadow-[0_0_30px_rgba(59,130,246,0.6)]",
    Skills: "bg-gradient-to-br from-red-400 to-orange-500 shadow-[0_0_30px_rgba(249,115,22,0.6)]",
    Projects: "bg-gradient-to-br from-amber-300 to-yellow-600 shadow-[0_0_30px_rgba(234,179,8,0.6)]",
    Contact: "bg-gradient-to-br from-purple-400 to-indigo-500 shadow-[0_0_30px_rgba(168,85,247,0.6)]",
    LeetCode: "bg-gradient-to-br from-gray-600 to-orange-500 shadow-[0_0_30px_rgba(249,115,22,0.6)]",
  };

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4">
      <div className="relative w-[600px] h-[600px] flex items-center justify-center">
        {/* Orbit Rings */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute w-64 h-64 rounded-full border border-primary/30" />
          <div className="absolute w-96 h-96 rounded-full border border-primary/20" />
          <div className="absolute w-[32rem] h-[32rem] rounded-full border border-primary/10" />
        </div>

        {/* Central Profile Image (Sun) */}
        <motion.div
          className="relative z-10"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring" }}
        >
          <div className="absolute inset-0 bg-yellow-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="relative p-1 rounded-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
            <img
              src={profileImage}
              alt="Aamin Singh"
              className="relative w-40 h-40 rounded-full object-cover border-4 border-transparent"
            />
          </div>
        </motion.div>

        {/* Rotating Orbit Container */}
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {sections.map((section, index) => {
            const position = getOrbitPosition(index, sections.length, 240);
            return (
              <motion.div
                key={section.name}
                className="absolute top-1/2 left-1/2"
                style={{
                  x: position.x - 40,
                  y: position.y - 40,
                }}
                animate={{ rotate: -360 }}
                transition={{
                  duration: 40,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <a
                  href={section.href}
                  target={section.external ? "_blank" : undefined}
                  rel={section.external ? "noopener noreferrer" : undefined}
                  className="group flex flex-col items-center justify-center gap-2 transition-transform hover:scale-110"
                >
                  <div className={`w-16 h-16 rounded-full ${planetStyles[section.name]} relative overflow-hidden`}>
                    {/* Planet Texture/Shine */}
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/40 to-transparent opacity-50 rounded-full" />
                    <div className="absolute bottom-0 right-0 w-full h-full bg-black/20 rounded-full blur-sm" />
                  </div>
                  <span className="text-sm font-bold text-primary tracking-wider uppercase bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm border border-primary/20 group-hover:border-primary/50 transition-colors">
                    {section.name}
                  </span>
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Name and Title Below Orbit */}
      <motion.div
        className="text-center space-y-4 mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
          Aamin Singh
        </h1>
        <p className="text-2xl md:text-3xl text-secondary font-semibold">
          B.Tech CSE (IoT & Blockchain)
        </p>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Passionate learner exploring technology to solve real-world problems
        </p>
      </motion.div>
    </section>
  );
};

export default HeroOrbit;
