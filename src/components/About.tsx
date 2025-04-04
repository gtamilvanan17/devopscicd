
import React, { useEffect, useRef } from 'react';
import { Server, Share2, Shield, Cpu, Cloud } from 'lucide-react';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            // Don't unobserve to allow re-animation when scrolling back
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    
    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  
  return (
    <section id="about" ref={sectionRef} className="py-20 section-container">
      <div className="max-w-3xl mx-auto text-center mb-16 reveal opacity-0" style={{ animationFillMode: 'forwards' }}>
        <h2 className="section-title">About Me</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          I'm a dedicated network engineer with a passion for building robust and efficient network infrastructures.
          With a fresh perspective and strong technical foundation, I'm eager to tackle complex networking challenges.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="glass-card p-8 reveal opacity-0" style={{ transitionDelay: '0.1s', animationFillMode: 'forwards' }}>
          <h3 className="text-xl font-bold mb-4">Education & Background</h3>
          <ul className="space-y-4">
            <li className="flex">
              <div className="mr-4 flex-shrink-0">
                <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <Cpu className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div>
                <h4 className="font-medium">Bachelor of Technology</h4>
                <p className="text-gray-600 dark:text-gray-300">Computer Science with specialization in Network Engineering</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">2019 - 2023</p>
              </div>
            </li>
            <li className="flex">
              <div className="mr-4 flex-shrink-0">
                <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div>
                <h4 className="font-medium">CCNA Certification</h4>
                <p className="text-gray-600 dark:text-gray-300">Cisco Certified Network Associate</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">2023</p>
              </div>
            </li>
            <li className="flex">
              <div className="mr-4 flex-shrink-0">
                <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <Cloud className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div>
                <h4 className="font-medium">Cloud Certification</h4>
                <p className="text-gray-600 dark:text-gray-300">AWS Solutions Architect Associate</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">2023</p>
              </div>
            </li>
          </ul>
        </div>
        
        <div className="glass-card p-8 reveal opacity-0" style={{ transitionDelay: '0.2s', animationFillMode: 'forwards' }}>
          <h3 className="text-xl font-bold mb-4">My Approach</h3>
          <ul className="space-y-4">
            <li className="flex">
              <div className="mr-4 flex-shrink-0">
                <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <Server className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div>
                <h4 className="font-medium">Infrastructure Design</h4>
                <p className="text-gray-600 dark:text-gray-300">Creating scalable network architectures that adapt to business needs</p>
              </div>
            </li>
            <li className="flex">
              <div className="mr-4 flex-shrink-0">
                <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <Share2 className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div>
                <h4 className="font-medium">Problem Solving</h4>
                <p className="text-gray-600 dark:text-gray-300">Systematic approach to troubleshooting network issues and optimization</p>
              </div>
            </li>
            <li className="flex">
              <div className="mr-4 flex-shrink-0">
                <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <Cloud className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div>
                <h4 className="font-medium">Cloud Infrastructure</h4>
                <p className="text-gray-600 dark:text-gray-300">Designing and implementing hybrid cloud network solutions</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="mt-16 text-center reveal opacity-0" style={{ transitionDelay: '0.3s', animationFillMode: 'forwards' }}>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          I'm currently seeking opportunities to apply my knowledge in a professional setting 
          where I can contribute to building robust network and cloud solutions while continuing to grow as a network engineer.
        </p>
      </div>
    </section>
  );
};

export default About;
