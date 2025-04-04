
import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../components/ui/tooltip';

const Contact: React.FC = () => {
  return (
    <TooltipProvider>
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900/30 grid-bg">
        <div className="section-container">
          <h2 className="section-title">Get In Touch</h2>
          
          <div className="flex justify-center mt-12">
            <div className="reveal opacity-0 max-w-xl w-full" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
              <div className="glass-card p-8 flex flex-col items-center">
                <h3 className="text-2xl font-bold mb-6 text-center relative inline-block">
                  Contact Information
                  <span className="absolute -bottom-1 left-0 w-full h-1 bg-blue-400/30 rounded-full"></span>
                </h3>
                
                <div className="space-y-6 w-full max-w-md mx-auto">
                  <div className="flex items-center group">
                    <div className="contact-icon-container group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 group-hover:scale-110">
                      <Mail className="h-5 w-5 group-hover:text-blue-700 dark:group-hover:text-blue-300" />
                    </div>
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <a 
                        href="mailto:internet1explorer1@gmail.com" 
                        className="text-blue-600 hover:underline hover:text-blue-800 dark:hover:text-blue-400 transition-colors"
                      >
                        internet1explorer1@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center group">
                    <div className="contact-icon-container group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 group-hover:scale-110">
                      <Phone className="h-5 w-5 group-hover:text-blue-700 dark:group-hover:text-blue-300" />
                    </div>
                    <div>
                      <h4 className="font-medium">Phone</h4>
                      <a 
                        href="tel:+1234567890" 
                        className="text-blue-600 hover:underline hover:text-blue-800 dark:hover:text-blue-400 transition-colors"
                      >
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center group">
                    <div className="contact-icon-container group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 group-hover:scale-110">
                      <MapPin className="h-5 w-5 group-hover:text-blue-700 dark:group-hover:text-blue-300" />
                    </div>
                    <div>
                      <h4 className="font-medium">Location</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        City, State, Country
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <h4 className="font-medium mb-4">Connect with me</h4>
                  <div className="flex justify-center space-x-4">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <a 
                          href="#" 
                          className="social-icon"
                          aria-label="LinkedIn"
                        >
                          <Linkedin className="h-5 w-5" />
                        </a>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>LinkedIn Profile</p>
                      </TooltipContent>
                    </Tooltip>
                    
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <a 
                          href="#" 
                          className="social-icon"
                          aria-label="GitHub"
                        >
                          <Github className="h-5 w-5" />
                        </a>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub Profile</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </TooltipProvider>
  );
};

export default Contact;
