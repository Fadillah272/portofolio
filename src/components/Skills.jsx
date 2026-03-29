import { motion } from 'framer-motion';
import portfolioData from '../data/portfolioData.json';

export default function Skills() {
  const { skills } = portfolioData;

  const containerVariant = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">{skills.title}</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 max-w-2xl mx-auto text-gray-500 dark:text-gray-400">
            {skills.description}
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariant} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto"
        >
          {skills.list.map((skill, index) => (
            <motion.div 
              key={index}
              variants={itemVariant}
              whileHover={{ scale: 1.1 }}
              className="bg-white p-6 rounded-2xl dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 flex items-center justify-center w-24 h-24 sm:w-32 sm:h-32 group relative cursor-pointer hover:z-50"
              title={skill.name}
            >
              <img 
                src={skill.icon} 
                alt={skill.name} 
                className="w-12 h-12 sm:w-16 sm:h-16 object-contain group-hover:grayscale-0 transition-all duration-300"
              />
              
              {/* Tooltip for hover (visible on hover) */}
              <div className="absolute -bottom-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm py-1 px-3 rounded-md whitespace-nowrap pointer-events-none z-10">
                {skill.name}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
