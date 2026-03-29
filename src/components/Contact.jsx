import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import portfolioData from '../data/portfolioData.json';

export default function Contact() {
  const { contact } = portfolioData;

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const fadeRight = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="contact" className="py-24 bg-white/50 dark:bg-gray-900/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">{contact.title}</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 max-w-2xl mx-auto text-gray-500 dark:text-gray-400">
            {contact.description}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          
          <motion.div 
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="lg:col-span-1 space-y-8"
          >
            <div className="flex items-start gap-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:-translate-y-1 transition-transform">
              <div className="p-3 bg-primary/10 rounded-full text-primary shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">Email</h3>
                <p className="text-gray-500 dark:text-gray-400">{contact.email}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:-translate-y-1 transition-transform">
              <div className="p-3 bg-green-500/10 rounded-full text-green-500 shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">Phone (WhatsApp)</h3>
                <p className="text-gray-500 dark:text-gray-400">{contact.phone}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:-translate-y-1 transition-transform">
              <div className="p-3 bg-orange-500/10 rounded-full text-orange-500 shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">Location</h3>
                <p className="text-gray-500 dark:text-gray-400">{contact.location}</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="nama@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="Topic of discussion"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Write your message here..."
                ></textarea>
              </div>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit" 
                className="w-full sm:w-auto px-8 py-3 bg-primary text-white font-medium rounded-lg hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30"
              >
                Send Message <Send size={18} />
              </motion.button>
            </form>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
