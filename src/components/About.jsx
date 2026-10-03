import { motion } from 'framer-motion';
import portfolioData from '../data/portfolioData.json';

export default function About() {
  const { about } = portfolioData;

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="py-20 sm:py-28 bg-white/40 dark:bg-gray-900/40 relative overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-primary/10 dark:bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl mb-5">{about.title}</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative"
          >
            {/* Soft decorative background behind text */}
            <div className="absolute -inset-6 bg-gradient-to-br from-gray-100 to-transparent dark:from-gray-800/40 dark:to-transparent rounded-3xl opacity-60 -z-10 blur-2xl"></div>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700/80 text-primary font-bold text-sm mb-8"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                {about.subtitle}
              </span>
            </motion.div>
            
            <div className="space-y-6">
              {about.paragraphs.map((text, idx) => (
                <motion.p 
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + (idx * 0.15) }}
                  className="leading-relaxed text-[15px] sm:text-lg text-gray-600 dark:text-gray-300 font-medium tracking-wide"
                >
                  {text}
                </motion.p>
              ))}
            </div>
          </motion.div>

          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {about.stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.4 + (idx * 0.1),
                  type: "spring",
                  stiffness: 100
                }}
                className="relative group p-5 sm:p-7 bg-white dark:bg-gray-800/90 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700/60 hover:shadow-2xl hover:border-primary/30 hover:-translate-y-2 transition-all duration-500 overflow-hidden backdrop-blur-sm flex flex-col justify-center min-h-[120px] sm:min-h-[140px]"
              >
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                <div className="absolute top-0 right-0 w-1.5 h-full bg-gradient-to-b from-primary to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <h4 className="text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600 mb-3 drop-shadow-sm">
                    {stat.value}
                  </h4>
                  <p className="text-xs sm:text-sm font-bold text-gray-500 dark:text-gray-400 leading-snug uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
