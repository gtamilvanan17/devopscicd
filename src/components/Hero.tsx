
import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

interface HeroProps {
  aboutRef: React.RefObject<HTMLDivElement>;
}

const Hero: React.FC<HeroProps> = ({ aboutRef }) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    if (!titleRef.current) return;
    
    const text = titleRef.current.innerText;
    titleRef.current.innerHTML = '';
    
    // Split and rebuild with span wrapped letters
    [...text].forEach((char, i) => {
      const span = document.createElement('span');
      span.innerText = char;
      span.style.opacity = '0';
      span.style.transform = 'translateY(20px)';
      span.style.display = 'inline-block';
      span.style.transition = `opacity 0.3s ease, transform 0.3s ease`;
      span.style.transitionDelay = `${i * 0.03}s`;
      
      setTimeout(() => {
        span.style.opacity = '1';
        span.style.transform = 'translateY(0)';
      }, 100);
      
      titleRef.current?.appendChild(span);
    });
  }, []);
  
  const scrollToAbout = () => {
    if (aboutRef.current) {
      const offsetTop = aboutRef.current.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full filter blur-3xl"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="flex justify-center mb-6">
          <Avatar className="h-32 w-32 border-4 border-blue-100 dark:border-blue-800 shadow-xl animate-fade-in opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            <AvatarImage src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=400&auto=format&fit=crop" alt="Network Engineer" />
            <AvatarFallback className="text-3xl font-bold text-blue-600 bg-blue-100 dark:bg-blue-900/30">NE</AvatarFallback>
          </Avatar>
        </div>
        
        <h2 className="text-blue-600 text-lg md:text-xl font-mono mb-3 animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          &lt;Network Engineer/&gt;
        </h2>
        
        <h1 
          ref={titleRef}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          I am Groot
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8 animate-fade-in opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          Specializing in network design, implementation, and troubleshooting for reliable and secure connections.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
          <button 
            onClick={scrollToAbout} 
            className="button-primary transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:scale-105"
          >
            Learn More
          </button>
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                const offsetTop = contactSection.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({
                  top: offsetTop - 80,
                  behavior: 'smooth'
                });
              }
            }}
            className="inline-flex items-center justify-center rounded-md h-10 px-4 py-2 border border-blue-200 dark:border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:scale-105"
          >
            Get In Touch
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 w-full flex justify-center">
        <button 
          onClick={scrollToAbout}
          className="w-10 h-10 rounded-full border border-blue-200 dark:border-blue-800 flex items-center justify-center animate-bounce hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors"
        >
          <ArrowDown className="h-5 w-5 text-blue-500" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
