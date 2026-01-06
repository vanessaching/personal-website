import { useState } from 'react';
import { Github, ExternalLink, Code2 } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  details: string;
  features?: string[];
  contributions?: string[];
  github?: string;
  githubNote?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    id: 'readezzy',
    title: 'AI Readezzy Reading Assistant',
    description: 'AI-powered reading companion that personalizes literacy support through real-time voice interaction and adaptive user sessions',
    technologies: ['PHP', 'JavaScript', 'SQL', 'HTML/CSS', 'WordPress'],
    details: 'An intelligent reading assistant that uses AI to personalize literacy support. Built as a WordPress plugin, the chatbot is optimized to work effortlessly within WordPress-based reading platforms and digital libraries. It integrates perfectly with the Readezzy website, which hosts curated collections of books and reading materials.',
    features: [
      'Context-Aware Story Following: The chatbot\'s sophisticated AI technology follows along with users as they progress through stories, maintaining awareness of only the content up to the reader\'s current position. This ensures spoiler-free guidance and support that\'s perfectly aligned with where the user is in their reading journey.',
      'Dual Communication Modes: The chatbot offers both voice-to-text and traditional text-based features, allowing users to engage with their reading material in whatever way feels most natural and accessible. The real-time voice interaction provides conversational support that makes reading assistance feel intuitive and engaging.',
      'Customized Avatars: Users can select and personalize their own unique avatars for the chatbot, creating a more engaging and individualized experience. These customization options are powered by a robust REST API that handles avatar saving and management.',
      'Comprehensive Evaluation Database: The plugin includes a sophisticated database of responses and questions specifically designed for assessment purposes. This allows educators, parents, and learners to track reading comprehension, measure progress over time, and identify areas where additional support may be needed.'
    ],
    contributions: [
      'Avatar Management System: Developed the REST API endpoints and database architecture for the avatar saving functionality. Designed and implemented RESTful API endpoints for avatar creation, retrieval, updating, and deletion. Built the database schema to efficiently store user avatar preferences and customization data.',
      'Question & Response Evaluation System: Developed the REST API infrastructure and database architecture for Readezzy\'s comprehensive evaluation system. Designed and implemented REST API endpoints for saving, retrieving, and managing questions and responses. Built the database structure to store evaluation data, including user responses, question sets, and assessment results.'
    ],
    github: 'https://github.com/GuerrerioKat/KidBot-LLM-Functionality',
    githubNote: 'Clarification: This was created as a repository on a team member\'s GitHub.',
    demo: undefined
  },
  {
    id: 'chat-server',
    title: 'Multi-Client Chat Server',
    description: 'High-performance concurrent chat server enabling real-time room-based communication over a custom TCP/IP protocol',
    technologies: ['C++'],
    details: 'A concurrent chat server built with C++ that enables real-time room-based communication. Implements a custom TCP/IP protocol and handles multiple clients simultaneously with efficient concurrency management.',
    github: 'https://github.com/vanessaching/school-projects/tree/main/chat-server',
    demo: undefined
  },
  {
    id: 'parallel-quicksort',
    title: 'Parallel Quicksort',
    description: 'Parallel sorting engine leveraging multi-process execution and shared memory to accelerate large-scale data processing',
    technologies: ['C++'],
    details: 'A high-performance sorting implementation using parallel processing techniques. Leverages multi-process execution and shared memory to significantly accelerate the sorting of large datasets.',
    github: 'https://github.com/vanessaching/school-projects/tree/main/parallel-quicksort',
    demo: undefined
  }
];

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Expose function to open project modal from outside
  const openProject = (projectId: string) => {
    const project = projects.find(p => p.id === projectId);
    if (project) {
      setSelectedProject(project);
    }
  };

  // Make the function available globally
  if (typeof window !== 'undefined') {
    (window as any).openProject = openProject;
  }

  return (
    <section id="projects" className="min-h-screen flex items-center px-6 py-16">
      <div className="max-w-6xl w-full mx-auto">
        <h2 className="text-4xl mb-8 border-b-4 border-black pb-2 inline-block">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              id={project.id}
              className="bg-card p-6 border-4 border-black text-left hover:translate-x-1 hover:translate-y-1 transition-transform"
            >
              <div className="mb-4">
                <Code2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl mb-3">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span 
                    key={tech} 
                    className="text-xs px-2 py-1 bg-muted border-2 border-black"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="text-xs px-2 py-1 bg-muted border-2 border-black">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>
              <button
                onClick={() => setSelectedProject(project)}
                className="text-sm border-2 border-black px-4 py-2 bg-accent hover:translate-x-0.5 hover:translate-y-0.5 transition-transform"
              >
                View more details →
              </button>
            </div>
          ))}
        </div>

        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-2xl border-4 border-black max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <div className="flex items-center gap-4 mb-4">
                <div>
                  <Code2 className="w-8 h-8" />
                </div>
                <DialogTitle className="text-2xl">{selectedProject?.title}</DialogTitle>
              </div>
            </DialogHeader>
            <div className="space-y-4 pr-2">
              <p className="text-base text-muted-foreground">{selectedProject?.details}</p>
              
              {selectedProject?.features && selectedProject.features.length > 0 && (
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-3">Features:</h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="text-sm flex items-start gap-2 text-muted-foreground">
                        <span className="mt-1">★</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedProject?.contributions && selectedProject.contributions.length > 0 && (
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-3">My Contributions:</h4>
                  <ul className="space-y-2">
                    {selectedProject.contributions.map((contribution, index) => (
                      <li key={index} className="text-sm flex items-start gap-2 text-muted-foreground">
                        <span className="mt-1">★</span>
                        <span>{contribution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div>
                <h4 className="text-sm font-medium text-foreground mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject?.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-xs px-3 py-1 bg-muted border-2 border-black"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                {selectedProject?.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group flex items-center gap-2 px-4 py-2 bg-black text-white border-4 border-black hover:translate-x-0.5 hover:translate-y-0.5 transition-transform"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm">View Code</span>
                    {selectedProject.githubNote && (
                      <span className="absolute bottom-full left-0 mb-2 px-3 py-2 bg-foreground text-background text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border-2 border-black max-w-[250px] z-50">
                        {selectedProject.githubNote}
                      </span>
                    )}
                  </a>
                )}
                {selectedProject?.demo && (
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border-4 border-black bg-card hover:translate-x-0.5 hover:translate-y-0.5 transition-transform"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}