import { motion } from "framer-motion";

interface CometSectionHeaderProps {
  title: string;
}

const CometSectionHeader = ({ title }: CometSectionHeaderProps) => {
  return (
    <motion.div
      className="relative mb-16 overflow-hidden py-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Comet Trail Effect */}
      <motion.div
        className="absolute top-1/2 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
        variants={{
          hidden: { x: "-100%", opacity: 0 },
          visible: { x: "100%", opacity: 1 },
        }}
        transition={{ duration: 2, ease: "easeInOut" }}
        style={{
          boxShadow: "0 0 10px #06b6d4, 0 0 20px #06b6d4",
        }}
      />

      {/* Title with Fade In */}
      <motion.h2
        className="text-4xl md:text-6xl font-bold text-center relative z-10"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.8, delay: 0.5 }}
        style={{
          fontFamily: "'Orbitron', 'Rajdhani', 'Space Mono', monospace",
          textShadow: "0 0 20px rgba(6, 182, 212, 0.5)",
        }}
      >
        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
          {title}
        </span>
      </motion.h2>

      {/* Glowing particles */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: "50%",
              boxShadow: "0 0 10px #06b6d4",
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 2,
              delay: 0.5 + i * 0.1,
              repeat: Infinity,
              repeatDelay: 3,
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default CometSectionHeader;
