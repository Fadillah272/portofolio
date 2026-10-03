import { motion } from 'framer-motion';
import portfolioData from '../data/portfolioData.json';

export default function Skills() {
  const { skills } = portfolioData;

  const containerVariant = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
  };

  return (
    <section id="skills" className="py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            {skills.title}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 max-w-2xl mx-auto text-gray-500 dark:text-gray-400 text-sm sm:text-base px-2">
            {skills.description}
          </p>
        </motion.div>

        {/* Categories */}
        <div className="space-y-10 sm:space-y-12">
          {skills.categories.map((category, i) => (
            <div key={i}>
              
              {/* Category Title */}
              <h3 className="text-lg sm:text-xl font-semibold mb-5 sm:mb-6 text-center">
                {category.name}
              </h3>

              {/* Skills Grid */}
              <motion.div 
                variants={containerVariant} 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true, margin: "-50px" }}
                className="flex flex-wrap justify-center gap-3 sm:gap-5 lg:gap-6 max-w-4xl mx-auto"
              >
                {category.list.map((skill, index) => (
                  <motion.div 
                    key={index}
                    variants={itemVariant}
                    whileHover={{ scale: 1.08 }}
                    className="bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 rounded-2xl flex items-center justify-center w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 group relative cursor-pointer hover:z-50 hover:shadow-md transition-shadow duration-200"
                    title={skill.name}
                  >
                    {skill.icon && (
                      <img 
                        src={skill.icon} 
                        alt={skill.name} 
                        className="w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 object-contain transition-all duration-300"
                      />
                    )}

                    {/* Tooltip */}
                    <div className="absolute -bottom-9 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs sm:text-sm py-1 px-2.5 rounded-md whitespace-nowrap pointer-events-none z-10 shadow-lg">
                      {skill.name}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}