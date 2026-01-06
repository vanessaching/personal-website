import profileImage from '../../assets/profileImage.png';
import resumeImage from '../../assets/resume.pdf';
import { Github, Linkedin } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="min-h-screen flex items-center px-6">
      <div className="max-w-6xl w-full mx-auto">
        <h2 className="text-4xl mb-6 border-b-4 border-black pb-2 inline-block">About Me</h2>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Circular Image */}
          <div className="flex-shrink-0">
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-black">
              <img 
                src={profileImage} 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Description */}
          <div className="flex-1 space-y-6">
            <div>
              <p className="text-xl font-bold">Computer Science Student @ Johns Hopkins University</p>
            </div>
            
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                Hello! I’m a second-year student at Johns Hopkins University. I’m deeply 
                passionate about building accessible, user-focused applications that tackle 
                real social challenges, whether it’s improving educational tools, enhancing 
                accessibility for all users, or experimenting with human–AI interaction.
              </p>
              <p>
                Outside of class, I love working on personal projects that push the boundaries 
                of what I know, contributing to open-source projects, and thinking about how 
                software can create meaningful, positive impact in people’s lives. I’m always 
                excited to take on new challenges, learn from them, and turn ideas into tools 
                that genuinely help others.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/vanessaching"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group p-3 bg-card border-4 border-black hover:translate-x-1 hover:translate-y-1 transition-transform"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-black text-background text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  View GitHub
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/vanessa-ching-557796240"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group p-3 bg-card border-4 border-black hover:translate-x-1 hover:translate-y-1 transition-transform"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-black text-background text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  View LinkedIn
                </span>
              </a>
              <a
                href={resumeImage}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group px-4 py-3 bg-card border-4 border-black hover:translate-x-1 hover:translate-y-1 transition-transform"
                aria-label="Resume"
              >
                <span className="text-base font-medium">View Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}