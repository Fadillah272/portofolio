import { useState } from 'react';
import { ExternalLink, Github, Building2, Sparkles, Lock, Layers, Globe, ShoppingBag, Apple, Briefcase } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import portfolioData from '../data/portfolioData.json';

export default function Projects() {
  const { projects } = portfolioData;
  const [activeFilter, setActiveFilter] = useState('all');

  const isValidUrl = (url) => {
    if (!url || typeof url !== 'string') return false;
    const trimmed = url.trim();
    return trimmed !== '' && trimmed !== '#';
  };

  const companyProjectsCount = projects.list.filter(p => p.type === 'company').length;
  const personalProjectsCount = projects.list.filter(p => p.type === 'personal').length;
  const freelanceProjectsCount = projects.list.filter(p => p.type === 'freelance').length;

  const filterTabs = [
    { id: 'all', label: 'All Projects', count: projects.list.length, icon: Layers },
    { id: 'company', label: 'Company Projects', count: companyProjectsCount, icon: Building2 },
    { id: 'freelance', label: 'Freelance Projects', count: freelanceProjectsCount, icon: Briefcase },
    { id: 'personal', label: 'Personal Projects', count: personalProjectsCount, icon: Sparkles },
  ];

  const filteredProjects = projects.list.filter(project => {
    if (activeFilter === 'all') return true;
    return project.type === activeFilter;
  });

  const containerVariant = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <section id="projects" className="py-20 sm:py-24 relative overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-primary/10 dark:bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-48 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">{projects.title}</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-sm sm:text-base">
            {projects.description}
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-10 sm:mb-14">
          {filterTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`relative flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? 'text-white shadow-md shadow-primary/25 bg-primary scale-105'
                    : 'text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700/80 border border-gray-200 dark:border-gray-700'
                }`}
              >
                <Icon size={15} className={isActive ? 'text-white' : 'text-primary'} />
                <span>{tab.label}</span>
                <span
                  className={`ml-1 px-2 py-0.5 text-[11px] rounded-full font-bold ${
                    isActive
                      ? 'bg-white/25 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeFilter}
            variants={containerVariant} 
            initial="hidden" 
            animate="visible"
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8"
          >
            {filteredProjects.map((project, idx) => {
              const hasLiveUrl = isValidUrl(project.liveUrl);
              const hasGithubUrl = isValidUrl(project.githubUrl);
              const hasWebsiteUrl = isValidUrl(project.websiteUrl);
              const hasPlayStoreUrl = isValidUrl(project.playStoreUrl);
              const hasAppStoreUrl = isValidUrl(project.appStoreUrl);
              const isCompany = project.type === 'company';
              const isFreelance = project.type === 'freelance';
              const hasAnyUrl = hasLiveUrl || hasGithubUrl || hasWebsiteUrl || hasPlayStoreUrl || hasAppStoreUrl;

              return (
                <motion.div 
                  key={idx} 
                  variants={itemVariant}
                  className="group rounded-2xl overflow-hidden bg-white dark:bg-gray-800 shadow-md hover:shadow-2xl border border-gray-100 dark:border-gray-700/80 hover:-translate-y-2 transition-all duration-300 flex flex-col"
                >
                  {/* Thumbnail Container */}
                  <div className="relative h-44 sm:h-52 overflow-hidden shrink-0 bg-gray-100 dark:bg-gray-900/60 flex items-center justify-center">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Dark gradient overlay for contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity"></div>

                    {/* Floating Subtitle Badge on top-left of image */}
                    {project.subtitle && (
                      <div className="absolute top-3 left-3 z-10">
                        <span 
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md shadow-sm ${
                            isCompany
                              ? 'bg-blue-600/90 text-white border border-blue-400/30'
                              : isFreelance
                              ? 'bg-amber-500/90 text-white border border-amber-400/30'
                              : 'bg-purple-600/90 text-white border border-purple-400/30'
                          }`}
                        >
                          {isCompany ? <Building2 size={12} /> : isFreelance ? <Briefcase size={12} /> : <Sparkles size={12} />}
                          <span>{project.subtitle}</span>
                        </span>
                      </div>
                    )}
                  </div>
                  
                  {/* Card Content */}
                  <div className="p-4 sm:p-6 flex flex-col flex-1 justify-between">
                    <div>
                      {/* Subtitle tag below image if not already shown or for extra context */}
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className={`text-[11px] font-bold uppercase tracking-wider ${
                          isCompany ? 'text-primary dark:text-blue-400'
                          : isFreelance ? 'text-amber-600 dark:text-amber-400'
                          : 'text-purple-600 dark:text-purple-400'
                        }`}>
                          {isCompany ? 'Corporate Application' : isFreelance ? 'Freelance Project' : 'Open Source / Personal'}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2.5 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-5">
                        {project.description}
                      </p>
                    </div>
                    
                    <div>
                      {/* Tech Stack Tags */}
                      {project.tags && project.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mb-6">
                          {project.tags.map(tag => (
                            <span 
                              key={tag} 
                              className="px-2.5 py-1 bg-gray-100 dark:bg-gray-700/70 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-lg border border-gray-200/50 dark:border-gray-600/50"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                      
                      {/* Action Links Footer */}
                      <div className="pt-3 sm:pt-4 border-t border-gray-100 dark:border-gray-700/70 min-h-[38px]">
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                          {/* Live Demo / View Project */}
                          {hasLiveUrl && (
                            <a 
                              href={project.liveUrl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                            >
                              <ExternalLink size={15} />
                              <span>{isCompany ? 'View Project' : 'Live Demo'}</span>
                            </a>
                          )}

                          {/* Website URL */}
                          {hasWebsiteUrl && (
                            <a 
                              href={project.websiteUrl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                            >
                              <Globe size={15} />
                              <span>Website</span>
                            </a>
                          )}

                          {/* GitHub / Source Code */}
                          {hasGithubUrl && (
                            <a 
                              href={project.githubUrl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                            >
                              <Github size={15} />
                              <span>Source Code</span>
                            </a>
                          )}

                          {/* Google Play Store */}
                          {hasPlayStoreUrl && (
                            <a 
                              href={project.playStoreUrl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
                            >
                              <ShoppingBag size={15} />
                              <span>Play Store</span>
                            </a>
                          )}

                          {/* Apple App Store */}
                          {hasAppStoreUrl && (
                            <a 
                              href={project.appStoreUrl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
                            >
                              <Apple size={15} />
                              <span>App Store</span>
                            </a>
                          )}
                        </div>

                        {/* Fallback if no public URLs are available */}
                        {!hasAnyUrl && (isCompany || isFreelance) && (
                          <span className="inline-flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 font-medium">
                            <Lock size={13} />
                            <span>{isCompany ? 'Internal Enterprise App' : 'Private Client Project'}</span>
                          </span>
                        )}
                      </div>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
