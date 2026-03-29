import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import portfolioData from '../data/portfolioData.json';

export default function Projects() {
  const { projects } = portfolioData;

  const containerVariant = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">{projects.title}</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 max-w-2xl mx-auto text-gray-500 dark:text-gray-400">
            {projects.description}
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariant} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.list.map((project, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariant}
              className="group rounded-2xl overflow-hidden bg-white dark:bg-gray-800 shadow-lg border border-gray-100 dark:border-gray-700 hover:-translate-y-2 transition-all duration-300 flex flex-col"
            >
              <div className="relative h-48 overflow-hidden shrink-0">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent z-10 transition-colors duration-300"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm leading-relaxed flex-1">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs font-semibold rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <a href={project.liveUrl} className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors cursor-pointer">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                  <a href={project.githubUrl} className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors cursor-pointer">
                    <Github size={16} /> Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
