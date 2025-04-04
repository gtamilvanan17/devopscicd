
import React, { useEffect, useState, useRef } from 'react';
import { Wifi, Globe, Lock, Database, Server, Settings, Network, CheckCircle2, Cloud, CloudCog } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../components/ui/tooltip';

interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
  category: string;
}

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  const skillsData: Skill[] = [
    { name: 'Networking Protocols (TCP/IP, UDP)', level: 85, icon: <Network className="h-5 w-5" />, category: 'Protocols' },
    { name: 'Routing & Switching', level: 90, icon: <Wifi className="h-5 w-5" />, category: 'Infrastructure' },
    { name: 'Network Security', level: 80, icon: <Lock className="h-5 w-5" />, category: 'Security' },
    { name: 'Cisco Network Devices', level: 85, icon: <Server className="h-5 w-5" />, category: 'Hardware' },
    { name: 'LAN/WAN Design', level: 75, icon: <Globe className="h-5 w-5" />, category: 'Design' },
    { name: 'Network Troubleshooting', level: 90, icon: <Settings className="h-5 w-5" />, category: 'Maintenance' },
    { name: 'VLAN Configuration', level: 85, icon: <Database className="h-5 w-5" />, category: 'Configuration' },
    { name: 'Firewall Management', level: 75, icon: <Lock className="h-5 w-5" />, category: 'Security' },
    { name: 'Cloud Networking (AWS/Azure)', level: 80, icon: <Cloud className="h-5 w-5" />, category: 'Cloud' },
    { name: 'Cloud Infrastructure', level: 75, icon: <CloudCog className="h-5 w-5" />, category: 'Cloud' },
  ];
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entries[0].target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <TooltipProvider>
      <section id="skills" ref={sectionRef} className="py-20 bg-gray-50 dark:bg-gray-900/30 grid-bg">
        <div className="section-container">
          <h2 className="section-title mb-16">Technical Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
            {skillsData.map((skill, index) => (
              <div 
                key={skill.name} 
                className="reveal opacity-0 hover:transform hover:translate-y-[-5px] transition-all duration-300" 
                style={{ animationDelay: `${0.1 + index * 0.1}s`, animationFillMode: 'forwards' }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <div className="mr-3 p-2 rounded-md bg-blue-100 dark:bg-blue-900/30 text-blue-600 transition-all duration-300 hover:rotate-6 hover:scale-110 hover:bg-blue-200 dark:hover:bg-blue-800/50">
                      {skill.icon}
                    </div>
                    <div>
                      <h3 className="font-medium">{skill.name}</h3>
                      <span className="text-xs uppercase text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">{skill.category}</span>
                    </div>
                  </div>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="flex items-center group">
                        <span className="text-sm font-medium group-hover:text-blue-600 transition-colors duration-300">{skill.level}%</span>
                        {skill.level >= 80 && (
                          <CheckCircle2 className="ml-1 h-4 w-4 text-green-500" />
                        )}
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{skill.level >= 80 ? 'Advanced Proficiency' : 'Intermediate Proficiency'}</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <div className="skill-progress group">
                  <div 
                    className="skill-progress-bar" 
                    style={{ 
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${0.3 + index * 0.1}s`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="glass-card p-6 reveal opacity-0 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/10" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
              <h3 className="text-lg font-semibold mb-3 relative inline-block">
                Network Tools
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-blue-400/30 rounded-full"></span>
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                {['Cisco Packet Tracer', 'Wireshark', 'GNS3', 'SolarWinds', 'PRTG Network Monitor'].map(tool => (
                  <li key={tool} className="flex items-center py-1 group">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500 mr-2 group-hover:scale-150 transition-transform duration-300"></span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{tool}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="glass-card p-6 reveal opacity-0 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/10" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              <h3 className="text-lg font-semibold mb-3 relative inline-block">
                Protocols & Services
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-blue-400/30 rounded-full"></span>
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                {['DHCP / DNS', 'OSPF / EIGRP / BGP', 'VPN / IPsec', 'QoS Implementation', 'IPv4 / IPv6'].map(protocol => (
                  <li key={protocol} className="flex items-center py-1 group">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500 mr-2 group-hover:scale-150 transition-transform duration-300"></span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{protocol}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="glass-card p-6 reveal opacity-0 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/10" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
              <h3 className="text-lg font-semibold mb-3 relative inline-block">
                Cloud Skills
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-blue-400/30 rounded-full"></span>
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                {['AWS VPC Configuration', 'Azure Virtual Networks', 'Cloud Security Groups', 'Load Balancers', 'Content Delivery Networks (CDN)'].map(skill => (
                  <li key={skill} className="flex items-center py-1 group">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500 mr-2 group-hover:scale-150 transition-transform duration-300"></span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </TooltipProvider>
  );
};

export default Skills;
