import { ArrowRight, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import portfolioData from '../data/portfolioData.json';

export default function Hero() {
  const { hero } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        
        {/* Text Content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="md:w-1/2 flex flex-col justify-center space-y-6 text-center md:text-left z-10"
        >
          <motion.p variants={itemVariants} className="text-primary font-medium tracking-wide uppercase">
            {hero.greeting}
          </motion.p>
          <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight">
            I am <span className="text-primary">{hero.name}</span>
            <br />
            <span className="text-2xl sm:text-3xl md:text-5xl text-gray-600 dark:text-gray-400">{hero.role}</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto md:mx-0 leading-relaxed">
            {hero.description}
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start pt-4">
            <a href="#projects" className="group flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-blue-500/30">
              {hero.cta1}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#" className="flex items-center gap-2 px-8 py-3 rounded-full font-medium border border-gray-300 dark:border-gray-700 hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary transition-all duration-300">
              <Download size={18} />
              {hero.cta2}
            </a>
          </motion.div>
        </motion.div>

        {/* Image/Visual Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="md:w-1/2 mt-16 md:mt-0 flex justify-center relative"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-purple-500/20 rounded-full blur-3xl scale-150 -z-10 animate-pulse"></div>
          <div className="w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl relative">
            <img 
              src={hero.profileImage} 
              alt={`Profile ${hero.name}`} 
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
