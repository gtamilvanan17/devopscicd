
import React, { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import NetworkLines from '../components/NetworkLines';

const Index = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Add scroll reveal animation to elements with the reveal class
    const revealElements = document.querySelectorAll('.reveal');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            // Don't unobserve - this way elements will re-animate if they come back into view
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    
    revealElements.forEach((el) => {
      observer.observe(el);
    });
    
    return () => {
      revealElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <NetworkLines />
      <Navbar 
        aboutRef={aboutRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      <main>
        <Hero aboutRef={aboutRef} />
        <div id="about-section" ref={aboutRef}>
          <About />
        </div>
        <div id="skills-section" ref={skillsRef}>
          <Skills />
        </div>
        <div id="projects-section" ref={projectsRef}>
          <Projects />
        </div>
        <div id="contact-section" ref={contactRef}>
          <Contact />
        </div>
      </main>
      <Footer 
        aboutRef={aboutRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
    </div>
  );
};

export default Index;
