
import React from 'react';
import { Heart, Mail, Github, Linkedin } from 'lucide-react';

interface FooterProps {
  aboutRef: React.RefObject<HTMLDivElement>;
  skillsRef: React.RefObject<HTMLDivElement>;
  projectsRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
}

const Footer: React.FC<FooterProps> = ({ aboutRef, skillsRef, projectsRef, contactRef }) => {
  const currentYear = new Date().getFullYear();
  
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      const offsetTop = ref.current.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <footer className="py-10 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-6">
            <span className="text-xl font-bold text-blue-600 hover:scale-110 transition-transform duration-300 inline-block">
              <span className="font-mono">Network</span>Portfolio
            </span>
          </div>
          
          <nav className="flex flex-wrap justify-center space-x-4 md:space-x-8 mb-8">
            <button 
              onClick={() => scrollToSection(aboutRef)} 
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm relative after:content-[''] after:block after:h-0.5 after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full py-2"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection(skillsRef)} 
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm relative after:content-[''] after:block after:h-0.5 after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full py-2"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection(projectsRef)} 
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm relative after:content-[''] after:block after:h-0.5 after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full py-2"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection(contactRef)} 
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm relative after:content-[''] after:block after:h-0.5 after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full py-2"
            >
              Contact
            </button>
          </nav>
          
          <div className="flex justify-center space-x-5 mb-6">
            <a 
              href="mailto:abc123def@gmail.com" 
              className="social-icon-footer group"
              aria-label="Email"
            >
              <Mail className="h-5 w-5 group-hover:text-blue-500 transition-colors duration-300" />
            </a>
            <a 
              href="#" 
              className="social-icon-footer group"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 group-hover:text-blue-500 transition-colors duration-300" />
            </a>
            <a 
              href="#" 
              className="social-icon-footer group"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5 group-hover:text-blue-500 transition-colors duration-300" />
            </a>
          </div>
          
          <div className="text-gray-500 dark:text-gray-400 text-sm">
            <p className="flex items-center justify-center">
              © {currentYear} NetworkPortfolio. Made with 
              <Heart className="h-4 w-4 mx-1 text-red-500 animate-pulse" /> 
              and passion.
            </p>
            <p className="mt-1 hover:text-blue-500 transition-colors duration-300 cursor-default">
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent hover:from-purple-500 hover:to-blue-500 transition-all duration-500">
                Connecting networks, building futures.
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
