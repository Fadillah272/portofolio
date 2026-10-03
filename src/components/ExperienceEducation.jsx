import { useState } from 'react';
import { Briefcase, GraduationCap, Calendar, Award, CheckCircle2, Sparkles, Building2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import portfolioData from '../data/portfolioData.json';

export default function ExperienceEducation() {
  const { experienceEducation } = portfolioData;
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All Overview', icon: Sparkles },
    { id: 'experience', label: experienceEducation.experienceTitle, count: experienceEducation.experiences?.length, icon: Briefcase },
    { id: 'education', label: experienceEducation.educationTitle, count: experienceEducation.education?.length, icon: GraduationCap },
    { id: 'certifications', label: experienceEducation.trainingTitle, count: experienceEducation.trainings?.length, icon: Award },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <section id="experience" className="py-20 sm:py-24 bg-gray-50/70 dark:bg-gray-900/40 relative overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-primary/10 dark:bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Experience & Education
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-sm sm:text-base">
            A comprehensive look at my professional engineering journey, academic background, and technical certifications.
          </p>
        </motion.div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-10 sm:mb-14">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center gap-1.5 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? 'text-white shadow-md shadow-primary/25 bg-primary scale-105'
                    : 'text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700/80 border border-gray-200 dark:border-gray-700'
                }`}
              >
                <Icon size={16} className={isActive ? 'text-white' : 'text-primary'} />
                <span>{tab.label}</span>
                {tab.count !== undefined && (
                  <span
                    className={`ml-1 px-2 py-0.5 text-[11px] rounded-full font-bold ${
                      isActive
                        ? 'bg-white/25 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    {tab.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Animated Content Areas */}
        <AnimatePresence mode="wait">
          {/* VIEW: ALL OVERVIEW (Balanced 2-Column Desktop Layout) */}
          {activeTab === 'all' && (
            <motion.div
              key="all"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start"
            >
              {/* Left Column: Work Experience (lg:col-span-7) */}
              <div className="lg:col-span-7">
                <div className="flex items-center justify-between mb-8 pb-3 border-b border-gray-200/80 dark:border-gray-800">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-primary/10 text-primary rounded-xl">
                      <Briefcase size={22} />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {experienceEducation.experienceTitle}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                        Corporate & professional career timeline
                      </p>
                    </div>
                  </div>
                  <span className="hidden sm:inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">
                    {experienceEducation.experiences?.length} Roles
                  </span>
                </div>

                {/* Vertical Timeline Container */}
                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="relative pl-5 sm:pl-8 space-y-6 sm:space-y-8 before:absolute before:left-[9px] sm:before:left-[15px] before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-primary before:via-primary/40 before:to-primary/10"
                >
                  {experienceEducation.experiences.map((item, idx) => {
                    const isPresent = item.period.toLowerCase().includes('present');
                    return (
                      <motion.div 
                        key={idx}
                        variants={itemVariants}
                        className="relative group"
                      >
                        {/* Timeline Node Dot */}
                        <div className="absolute -left-[20px] sm:-left-[27px] top-4 flex items-center justify-center">
                          <div className={`w-6 h-6 rounded-full border-4 border-gray-50 dark:border-gray-900 transition-all duration-300 ${
                            isPresent 
                              ? 'bg-primary ring-4 ring-primary/20 scale-110' 
                              : 'bg-gray-300 dark:bg-gray-600 group-hover:bg-primary group-hover:ring-4 group-hover:ring-primary/20'
                          }`} />
                        </div>

                        {/* Experience Card */}
                        <div className="w-full bg-white dark:bg-gray-800/90 rounded-2xl p-4 sm:p-6 lg:p-7 shadow-sm hover:shadow-xl border border-gray-100 dark:border-gray-700/80 transition-all duration-300 group-hover:-translate-y-1">
                          
                          {/* Card Header */}
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                            <div>
                              <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                                {item.title}
                              </h4>
                              <div className="flex items-center gap-1.5 text-primary dark:text-blue-400 font-medium text-sm mt-0.5">
                                <Building2 size={16} />
                                <span>{item.company}</span>
                              </div>
                            </div>
                            
                            <div className="flex items-center gap-2 shrink-0">
                              {isPresent && (
                                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                  Current
                                </span>
                              )}
                              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 dark:bg-gray-700/80 text-gray-700 dark:text-gray-300">
                                <Calendar size={13} />
                                <span>{item.period}</span>
                              </span>
                            </div>
                          </div>

                          {/* Card Description */}
                          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-5">
                            {item.description}
                          </p>

                          {/* Technology Tags */}
                          {item.tags && item.tags.length > 0 && (
                            <div className="pt-3 border-t border-gray-100 dark:border-gray-700/60">
                              <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-2">
                                Technologies & Tools
                              </p>
                              <div className="flex flex-wrap gap-1.5">
                                {item.tags.map((tag, tIdx) => (
                                  <span 
                                    key={tIdx}
                                    className="px-2.5 py-1 rounded-lg text-xs font-medium bg-blue-50/80 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/50 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>

              {/* Right Column: Education & Certifications (lg:col-span-5) */}
              <div className="lg:col-span-5 space-y-12">
                
                {/* Education Section */}
                <div>
                  <div className="flex items-center justify-between mb-8 pb-3 border-b border-gray-200/80 dark:border-gray-800">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-xl">
                        <GraduationCap size={22} />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          {experienceEducation.educationTitle}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                          Academic degree & foundation
                        </p>
                      </div>
                    </div>
                  </div>

                  <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-6"
                  >
                    {experienceEducation.education.map((item, idx) => (
                      <motion.div
                        key={idx}
                        variants={itemVariants}
                        className="bg-white dark:bg-gray-800/90 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-xl border border-gray-100 dark:border-gray-700/80 transition-all duration-300 hover:-translate-y-1"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                          <div>
                            <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                              {item.title}
                            </h4>
                            <p className="text-purple-600 dark:text-purple-400 font-medium text-sm mt-0.5">
                              {item.school}
                            </p>
                          </div>
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 border border-purple-200/60 dark:border-purple-800/50 shrink-0 self-start sm:self-auto">
                            <Calendar size={13} />
                            <span>{item.period}</span>
                          </span>
                        </div>

                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                          {item.description}
                        </p>

                        {/* Education Tags / Highlights */}
                        {item.tags && item.tags.length > 0 && (
                          <div className="pt-3 border-t border-gray-100 dark:border-gray-700/60">
                            <div className="flex flex-wrap gap-1.5">
                              {item.tags.map((tag, tIdx) => (
                                <span 
                                  key={tIdx}
                                  className="px-2.5 py-1 rounded-lg text-xs font-medium bg-purple-50/80 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 border border-purple-200/60 dark:border-purple-800/50"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                {/* Trainings & Certifications Sub-Section */}
                {experienceEducation.trainings && experienceEducation.trainings.length > 0 && (
                  <div>
                    <div className="flex items-center justify-between mb-8 pb-3 border-b border-gray-200/80 dark:border-gray-800">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-xl">
                          <Award size={22} />
                        </div>
                        <div>
                          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {experienceEducation.trainingTitle}
                          </h3>
                          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                            Professional credentials & verified courses
                          </p>
                        </div>
                      </div>
                      <span className="hidden sm:inline-block px-3 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full text-xs font-semibold">
                        {experienceEducation.trainings.length} Credentials
                      </span>
                    </div>

                    <motion.div 
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      className="space-y-4"
                    >
                      {experienceEducation.trainings.map((item, idx) => (
                        <motion.div
                          key={idx}
                          variants={itemVariants}
                          className="bg-white dark:bg-gray-800/90 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-xl border border-gray-100 dark:border-gray-700/80 transition-all duration-300 hover:-translate-y-1"
                        >
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                            <div className="flex items-start gap-3">
                              <div className="mt-1 p-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg shrink-0">
                                <CheckCircle2 size={16} />
                              </div>
                              <div>
                                <h4 className="text-base font-bold text-gray-900 dark:text-white">
                                  {item.title}
                                </h4>
                                <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold">
                                  {item.school}
                                </p>
                              </div>
                            </div>
                            <span className="inline-flex items-center gap-1 text-[11px] font-medium text-gray-500 dark:text-gray-400 shrink-0 self-start sm:self-auto bg-gray-100 dark:bg-gray-700/60 px-2.5 py-0.5 rounded-full">
                              <Calendar size={11} />
                              <span>{item.period}</span>
                            </span>
                          </div>

                          <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed mb-3 pl-9">
                            {item.description}
                          </p>

                          {/* Certification Tags */}
                          {item.tags && item.tags.length > 0 && (
                            <div className="pl-9 flex flex-wrap gap-1.5">
                              {item.tags.map((tag, tIdx) => (
                                <span 
                                  key={tIdx}
                                  className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-gray-100 dark:bg-gray-700/70 text-gray-700 dark:text-gray-300 border border-gray-200/50 dark:border-gray-600/50"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                )}

              </div>
            </motion.div>
          )}

          {/* VIEW: WORK EXPERIENCE ONLY (Generous Full-Width Timeline) */}
          {activeTab === 'experience' && (
            <motion.div
              key="experience"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="max-w-4xl mx-auto"
            >
              <div className="relative pl-5 sm:pl-8 space-y-6 sm:space-y-8 before:absolute before:left-[9px] sm:before:left-[15px] before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-primary before:via-primary/40 before:to-primary/10">
                {experienceEducation.experiences.map((item, idx) => {
                  const isPresent = item.period.toLowerCase().includes('present');
                  return (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="relative group"
                    >
                      <div className="absolute -left-[20px] sm:-left-[27px] top-4 flex items-center justify-center">
                        <div className={`w-6 h-6 rounded-full border-4 border-gray-50 dark:border-gray-900 transition-all duration-300 ${
                          isPresent 
                            ? 'bg-primary ring-4 ring-primary/20 scale-110' 
                            : 'bg-gray-300 dark:bg-gray-600 group-hover:bg-primary group-hover:ring-4 group-hover:ring-primary/20'
                        }`} />
                      </div>

                      <div className="w-full bg-white dark:bg-gray-800/90 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm hover:shadow-xl border border-gray-100 dark:border-gray-700/80 transition-all duration-300 group-hover:-translate-y-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3 mb-4">
                          <div>
                            <h4 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                              {item.title}
                            </h4>
                            <div className="flex items-center gap-1.5 text-primary dark:text-blue-400 font-semibold text-base mt-1">
                              <Building2 size={18} />
                              <span>{item.company}</span>
                            </div>
                          </div>
                          
                          <div className="flex flex-wrap items-center gap-2 shrink-0">
                            {isPresent && (
                              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                Currently Employed
                              </span>
                            )}
                            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-gray-100 dark:bg-gray-700/80 text-gray-700 dark:text-gray-300">
                              <Calendar size={14} />
                              <span>{item.period}</span>
                            </span>
                          </div>
                        </div>

                        <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                          {item.description}
                        </p>

                        {item.tags && item.tags.length > 0 && (
                          <div className="pt-4 border-t border-gray-100 dark:border-gray-700/60">
                            <p className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-2.5">
                              Key Technologies & Core Skills
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {item.tags.map((tag, tIdx) => (
                                <span 
                                  key={tIdx}
                                  className="px-3 py-1.5 rounded-lg text-xs font-medium bg-blue-50/80 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/50 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* VIEW: EDUCATION ONLY */}
          {activeTab === 'education' && (
            <motion.div
              key="education"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="max-w-3xl mx-auto"
            >
              <div className="space-y-6">
                {experienceEducation.education.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white dark:bg-gray-800/90 rounded-2xl p-5 sm:p-7 lg:p-8 shadow-sm hover:shadow-xl border border-gray-100 dark:border-gray-700/80 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 text-purple-600 dark:text-purple-400 mb-4">
                      <div className="p-3 bg-purple-500/10 rounded-xl">
                        <GraduationCap size={28} />
                      </div>
                      <div>
                        <h4 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                          {item.title}
                        </h4>
                        <p className="text-purple-600 dark:text-purple-400 font-semibold text-base">
                          {item.school}
                        </p>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 border border-purple-200/60 dark:border-purple-800/50 mb-5">
                      <Calendar size={14} />
                      <span>{item.period}</span>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {item.tags && item.tags.length > 0 && (
                      <div className="pt-4 border-t border-gray-100 dark:border-gray-700/60">
                        <div className="flex flex-wrap gap-2">
                          {item.tags.map((tag, tIdx) => (
                            <span 
                              key={tIdx}
                              className="px-3 py-1 rounded-lg text-xs font-semibold bg-purple-50/80 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 border border-purple-200/60 dark:border-purple-800/50"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* VIEW: CERTIFICATIONS ONLY (Sleek Responsive Grid) */}
          {activeTab === 'certifications' && (
            <motion.div
              key="certifications"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="max-w-5xl mx-auto"
            >
              <div className="grid md:grid-cols-2 gap-6">
                {experienceEducation.trainings.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.08 }}
                    className="bg-white dark:bg-gray-800/90 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-xl border border-gray-100 dark:border-gray-700/80 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 group"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div className="p-2.5 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl group-hover:scale-110 transition-transform">
                          <Award size={22} />
                        </div>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 dark:bg-gray-700/80 text-gray-700 dark:text-gray-300">
                          <Calendar size={12} />
                          <span>{item.period}</span>
                        </span>
                      </div>

                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-primary transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 mb-3">
                        Issued by: {item.school}
                      </p>

                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-5">
                        {item.description}
                      </p>
                    </div>

                    {item.tags && item.tags.length > 0 && (
                      <div className="pt-3 border-t border-gray-100 dark:border-gray-700/60 flex flex-wrap gap-1.5">
                        {item.tags.map((tag, tIdx) => (
                          <span 
                            key={tIdx}
                            className="px-2.5 py-1 rounded-lg text-xs font-medium bg-gray-100 dark:bg-gray-700/70 text-gray-700 dark:text-gray-300 border border-gray-200/50 dark:border-gray-600/50"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
