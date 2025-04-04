
import React, { useEffect, useRef } from 'react';
import { ExternalLink, Server, Shield, Network, Laptop, ArrowRight } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../components/ui/tooltip';

interface Project {
  title: string;
  description: string;
  tags: string[];
  icon: React.ReactNode;
}

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  const projects: Project[] = [
    {
      title: 'Campus Network Redesign',
      description: 'Simulated redesign of a campus network with VLANs, routing protocols, and security implementation using Cisco Packet Tracer.',
      tags: ['VLAN', 'OSPF', 'Security', 'Cisco', 'Simulation'],
      icon: <Server className="h-6 w-6" />,
    },
    {
      title: 'Home Network Lab',
      description: 'Built a comprehensive home lab with multiple subnets, firewall, VPN, and monitoring system for hands-on network experience.',
      tags: ['Home Lab', 'Firewall', 'VPN', 'Monitoring'],
      icon: <Network className="h-6 w-6" />,
    },
    {
      title: 'Network Security Assessment',
      description: 'Performed vulnerability assessment on a test network environment, identified security flaws and implemented fixes.',
      tags: ['Security', 'Assessment', 'Vulnerability', 'Remediation'],
      icon: <Shield className="h-6 w-6" />,
    },
    {
      title: 'WAN Optimization Project',
      description: 'Designed and simulated WAN optimization techniques for improving network performance across remote sites.',
      tags: ['WAN', 'Optimization', 'QoS', 'Latency', 'Simulation'],
      icon: <Laptop className="h-6 w-6" />,
    }
  ];
  
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
    
    const elements = document.querySelectorAll('.project-reveal');
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  
  return (
    <TooltipProvider>
      <section id="projects" ref={sectionRef} className="py-20 section-container">
        <h2 className="section-title">Projects & Experience</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="glass-card overflow-hidden transition-all project-reveal opacity-0 project-card-hover" 
              style={{ animationDelay: `${0.1 * index}s`, animationFillMode: 'forwards' }}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded-md bg-blue-100 dark:bg-blue-900/30 text-blue-600 transition-all duration-300 hover:scale-110 hover:rotate-3 hover:bg-blue-200 dark:hover:bg-blue-800/50">
                    {project.icon}
                  </div>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button className="h-8 w-8 rounded-full flex items-center justify-center text-gray-400 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300">
                        <ExternalLink className="h-5 w-5" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>View Project Details</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                
                <h3 className="text-xl font-bold mb-2 group">
                  <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-[length:0%_2px] bg-no-repeat bg-left-bottom group-hover:bg-[length:100%_2px] transition-all duration-500">
                    {project.title}
                  </span>
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-xs px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800/40 transition-colors duration-300 hover:scale-105 transform"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center project-reveal opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
          <h3 className="text-xl font-bold mb-4">Looking for More Opportunities</h3>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            As a fresher in the field, I'm actively seeking projects and opportunities to apply my 
            networking skills in real-world scenarios and continue building my portfolio.
          </p>
          <a href="#contact" className="button-primary group transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:scale-105">
            Get In Touch
            <ArrowRight className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>
    </TooltipProvider>
  );
};

export default Projects;
