import { useState, useEffect } from 'react';
import { Github, Linkedin } from 'lucide-react';
import resumeImage from '../assets/resume.pdf';
import { NavigationBar } from './components/NavigationBar';
import { ScrollIndicator } from './components/ScrollIndicator';
import { AboutSection } from './components/AboutSection';
import { ProgressSection } from './components/ProgressSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';

const sections = ['about', 'progress', 'projects', 'skills', 'contact'];

export default function App() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <NavigationBar />
      
      <main className="pt-[80px]">
        <AboutSection />
        <ProgressSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="border-t-4 border-black py-8 px-6 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-center md:text-left">© 2026 Vanessa Ching. Built with React & Tailwind CSS.</p>
            
            <div className="flex gap-4">
              <a
                href="https://github.com/vanessaching"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group p-2 bg-background border-4 border-black hover:translate-x-1 hover:translate-y-1 transition-transform"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-black text-background text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  View GitHub
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/vanessa-ching-557796240"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group p-2 bg-background border-4 border-black hover:translate-x-1 hover:translate-y-1 transition-transform"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-black text-background text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  View LinkedIn
                </span>
              </a>
              <a
                href={resumeImage}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group px-3 py-2 bg-background border-4 border-black hover:translate-x-1 hover:translate-y-1 transition-transform"
                aria-label="Resume"
              >
                <span className="text-sm font-medium">View Resume</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}