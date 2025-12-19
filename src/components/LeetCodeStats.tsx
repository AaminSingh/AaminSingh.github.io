import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { Rocket, Trophy, Target, Flame, Quote } from "lucide-react";

const LeetCodeStats = () => {
  const [stats, setStats] = useState({
    solved: 0,
    total: 500, // Your goal
    easy: 0,
    medium: 0,
    hard: 0,
    streak: 0,
    isLoading: true
  });

  // TODO: Replace with your actual LeetCode username
  const username = "ZGevYVsJez"; 

  useEffect(() => {
    const fetchLeetCodeStats = async () => {
      try {
        const response = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`);
        const data = await response.json();
        
        if (data.status === "success") {
          setStats({
            solved: data.totalSolved,
            total: 500, // You can adjust this goal
            easy: data.easySolved,
            medium: data.mediumSolved,
            hard: data.hardSolved,
            streak: 0, // API doesn't provide streak, defaulting to 0 or you can hardcode/fetch elsewhere
            isLoading: false
          });
        } else {
          console.error("Failed to fetch LeetCode stats:", data.message);
          setStats(prev => ({ ...prev, isLoading: false }));
        }
      } catch (error) {
        console.error("Error fetching LeetCode stats:", error);
        setStats(prev => ({ ...prev, isLoading: false }));
      }
    };

    fetchLeetCodeStats();
  }, []);

  const progressPercentage = Math.min((stats.solved / stats.total) * 100, 100);

  if (stats.isLoading) {
    return (
      <div className="w-full max-w-4xl mx-auto p-6 flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  const quotes = [
    "Code is like humor. When you have to explain it, it’s bad. – Cory House",
    "First, solve the problem. Then, write the code. – John Johnson",
    "Experience is the name everyone gives to their mistakes. – Oscar Wilde",
    "Knowledge is power. – Francis Bacon",
    "Simplicity is the soul of efficiency. – Austin Freeman",
    "Fix the cause, not the symptom. – Steve Maguire"
  ];
  
  // Use a stable random quote based on date or just random (using random for now)
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative bg-black/40 backdrop-blur-md border border-primary/20 rounded-2xl p-8 overflow-hidden group hover:border-primary/40 transition-colors"
      >
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors duration-500" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 group-hover:bg-blue-500/10 transition-colors duration-500" />

        <div className="relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                <Rocket className="text-orange-500 animate-pulse" />
                Mission Progress
              </h3>
              <p className="text-gray-400 mt-1">Journey to Mastery</p>
            </div>
            <div className="flex items-center gap-2 bg-orange-500/10 px-4 py-2 rounded-full border border-orange-500/20">
              <Flame className="text-orange-500 w-5 h-5" />
              <span className="text-orange-400 font-bold">{stats.streak} Day Streak</span>
            </div>
          </div>

          {/* Quote Section */}
          <div className="mb-10 text-center relative py-8 px-8 bg-white/5 rounded-xl border border-white/10">
            <Quote className="absolute top-4 left-4 w-8 h-8 text-primary/20 rotate-180" />
            <p className="text-xl text-gray-200 italic font-light leading-relaxed">
              "{randomQuote}"
            </p>
            <Quote className="absolute bottom-4 right-4 w-8 h-8 text-primary/20" />
          </div>

          {/* Main Progress Bar */}
          <div className="mb-10 space-y-4">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-300 font-medium">Total Problems Solved</span>
              <span className="text-primary font-bold text-lg">{stats.solved} <span className="text-gray-500 text-sm font-normal">/ {stats.total}</span></span>
            </div>
            <div className="relative pt-2">
              <Progress value={progressPercentage} className="h-3 bg-gray-800 border border-gray-700" />
              
              {/* Rocket Indicator */}
              <motion.div 
                className="absolute top-0 -translate-y-1/2 z-20"
                style={{ left: `${progressPercentage}%` }}
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <div className="relative -ml-3 -mt-2">
                  <Rocket className="w-8 h-8 text-primary rotate-45 drop-shadow-[0_0_15px_rgba(255,165,0,0.8)]" />
                  {/* Engine trail */}
                  <div className="absolute top-full right-full w-12 h-1 bg-gradient-to-r from-transparent to-orange-500/80 blur-[2px] -rotate-45 origin-right transform translate-x-2 -translate-y-2" />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Detailed Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900/50 p-4 rounded-xl border border-green-500/20 flex items-center gap-3 hover:border-green-500/50 transition-colors"
            >
              <div className="p-3 bg-green-500/10 rounded-lg">
                <Target className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <div className="text-sm text-gray-400">Easy</div>
                <div className="text-2xl font-bold text-green-400">{stats.easy}</div>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900/50 p-4 rounded-xl border border-yellow-500/20 flex items-center gap-3 hover:border-yellow-500/50 transition-colors"
            >
              <div className="p-3 bg-yellow-500/10 rounded-lg">
                <Target className="w-6 h-6 text-yellow-500" />
              </div>
              <div>
                <div className="text-sm text-gray-400">Medium</div>
                <div className="text-2xl font-bold text-yellow-400">{stats.medium}</div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900/50 p-4 rounded-xl border border-red-500/20 flex items-center gap-3 hover:border-red-500/50 transition-colors"
            >
              <div className="p-3 bg-red-500/10 rounded-lg">
                <Target className="w-6 h-6 text-red-500" />
              </div>
              <div>
                <div className="text-sm text-gray-400">Hard</div>
                <div className="text-2xl font-bold text-red-400">{stats.hard}</div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LeetCodeStats;