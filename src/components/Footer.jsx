import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';
import portfolioData from '../data/portfolioData.json';

export default function Footer() {
  const { footer } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <span className="text-2xl font-bold tracking-tighter text-primary">{footer.logo}</span>
            <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm max-w-sm">
              {footer.description}
            </p>
          </div>

          <div className="flex gap-4">
            <a href={footer.social.github} target='_blank' className="p-2 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-all duration-300 hover:-translate-y-1">
              <Github size={20} />
            </a>
            {/* <a href={footer.social.twitter} className="p-2 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full hover:bg-blue-400 hover:text-white dark:hover:bg-blue-400 dark:hover:text-white transition-all duration-300 hover:-translate-y-1">
              <Twitter size={20} />
            </a> */}
            <a href={footer.social.linkedin} target='_blank' className="p-2 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full hover:bg-blue-700 hover:text-white dark:hover:bg-blue-700 dark:hover:text-white transition-all duration-300 hover:-translate-y-1">
              <Linkedin size={20} />
            </a>
            <a href={footer.social.instagram} target='_blank' className="p-2 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full hover:bg-pink-600 hover:text-white dark:hover:bg-pink-600 dark:hover:text-white transition-all duration-300 hover:-translate-y-1">
              <Instagram size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {currentYear} {footer.copyright}
          </p>
          {/* <div className="flex gap-6 mt-4 md:mt-0 text-sm font-medium text-gray-500 dark:text-gray-400 relative">
             <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
