import { Briefcase, GraduationCap, Calendar, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import portfolioData from '../data/portfolioData.json';

export default function ExperienceEducation() {
  const { experienceEducation } = portfolioData;

  const cardVariantLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  const cardVariantRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="experience" className="py-24 bg-gray-50 dark:bg-gray-900/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Pengalaman Kerja */}
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-10"
            >
              <div className="p-3 bg-primary/10 rounded-lg text-primary">
                <Briefcase size={28} />
              </div>
              <h2 className="text-3xl font-bold tracking-tight">{experienceEducation.experienceTitle}</h2>
            </motion.div>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 dark:before:via-gray-700 before:to-transparent">
              {experienceEducation.experiences.map((item, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <motion.div 
                    key={idx}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={isEven ? cardVariantLeft : cardVariantRight}
                    className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                  >
                    <div className="hidden md:block w-1/2"></div>
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white dark:border-gray-800 bg-primary/20 text-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform duration-300 group-hover:scale-110">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
                      <div className="flex items-center gap-2 text-sm text-primary font-medium mb-2">
                         <Calendar size={16}/>
                         <span>{item.period}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                      <p className="text-gray-500 dark:text-gray-400 font-medium mb-4">{item.company}</p>
                      <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Pendidikan */}
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-10"
            >
              <div className="p-3 bg-purple-500/10 rounded-lg text-purple-500">
                <GraduationCap size={28} />
              </div>
              <h2 className="text-3xl font-bold tracking-tight">{experienceEducation.educationTitle}</h2>
            </motion.div>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 dark:before:via-gray-700 before:to-transparent">
              {experienceEducation.education.map((item, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <motion.div 
                    key={idx}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={isEven ? cardVariantRight : cardVariantLeft}
                    className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                  >
                    <div className="hidden md:block w-1/2"></div>
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white dark:border-gray-800 bg-purple-500/20 text-purple-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform duration-300 group-hover:scale-110">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
                      <div className="flex items-center gap-2 text-sm text-purple-500 font-medium mb-2">
                         <Calendar size={16}/>
                         <span>{item.period}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                      <p className="text-gray-500 dark:text-gray-400 font-medium mb-4">{item.school}</p>
                      <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

        </div>

        {/* Pelatihan & Sertifikasi */}
        {experienceEducation.trainings && experienceEducation.trainings.length > 0 && (
          <div className="mt-24 lg:w-2/3 lg:mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center md:justify-center gap-3 mb-10"
            >
              <div className="p-3 bg-blue-500/10 rounded-lg text-blue-500">
                <Award size={28} />
              </div>
              <h2 className="text-3xl font-bold tracking-tight">{experienceEducation.trainingTitle}</h2>
            </motion.div>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 dark:before:via-gray-700 before:to-transparent">
              {experienceEducation.trainings.map((item, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <motion.div 
                    key={idx}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={isEven ? cardVariantLeft : cardVariantRight}
                    className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                  >
                    <div className="hidden md:block w-1/2"></div>
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white dark:border-gray-800 bg-blue-500/20 text-blue-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform duration-300 group-hover:scale-110">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
                      <div className="flex items-center gap-2 text-sm text-blue-500 font-medium mb-2">
                         <Calendar size={16}/>
                         <span>{item.period}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                      <p className="text-gray-500 dark:text-gray-400 font-medium mb-4">{item.school}</p>
                      <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
