import { useState } from 'react';
import { GraduationCap, Briefcase, FlaskConical } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import scaiLabImage from '../../assets/scaiLabImage.png';

interface Experience {
  id: string;
  title: string;
  organization: string;
  location?: string;
  date: string;
  subtitle?: string;
  icon: React.ReactNode;
  description: string;
  details: string[];
  activities?: { title: string; description: string }[];
  coursework?: { title: string; description: string[] }[];
  takeaway?: string;
  relatedProjects?: { name: string; id: string }[];
  image?: { src: string; caption: string };
}

const experiences: Experience[] = [
  {
    id: 'jhu',
    title: 'Undergraduate Student',
    organization: 'Johns Hopkins University, Whiting School of Engineering',
    location: 'Baltimore, MD',
    date: 'August 2024 - Present',
    subtitle: 'Second-Year Student',
    icon: <GraduationCap className="w-8 h-8" />,
    description: 'B.S. in Computer Science, Minor in Film and Media Studies',
    details: [
      'Focusing on algorithms, data structures, and system-level programming',
      'Developing strong technical skills in Python, C, C++, and x86-64 assembly',
      'Building foundations in programming, system-level thinking, and software design',
      'Exploring the intersection of technology and storytelling'
    ],
    activities: [
      {
        title: 'Matriculate Advising Fellow',
        description: 'Mentored high school students and guided them through the college application process, developing strong skills in communication and individualized problem-solving.'
      },
      {
        title: 'Pi Beta Phi Fraternity for Women',
        description: 'Fostered community, spirit, and leadership through collaboration and service initiatives.'
      },
      {
        title: 'Hopkins Student Organization for Programming (HOP)',
        description: 'Engaged in large-group events and teamwork, honing organizational and leadership skills.'
      },
      {
        title: 'SGA Programming Council',
        description: 'Contributed to planning and executing campus-wide events, strengthening project management and coordination capabilities.'
      }
    ],
    coursework: [
      {
        title: 'Computer Systems Fundamentals',
        description: [
          'Explored computer architecture, memory hierarchy, and instruction sets, gaining hands-on experience with low-level hardware operations',
          'Developed practical skills in x86-64 assembly programming, bridging theoretical concepts with real-world applications',
          'Learned to analyze system performance and optimize basic programs, fostering critical problem-solving abilities'
        ]
      },
      {
        title: 'Intermediate Programming',
        description: [
          'Expanded proficiency in C++ and object-oriented design through building structured, efficient programs',
          'Applied debugging and testing methodologies to ensure correctness and reliability of software',
          'Developed modular code and learned best practices in software engineering for maintainable projects'
        ]
      },
      {
        title: 'Gateway Computing: Python',
        description: [
          'Mastered Python syntax and core programming constructs for practical computational problem-solving',
          'Applied algorithms and data structures to real-world scenarios, developing both logical and creative thinking skills',
          'Gained experience in collaborative coding and project-based learning, integrating feedback and iterating effectively'
        ]
      }
    ],
    takeaway: 'Through my coursework, I developed strong technical skills in Python, C, C++, and x86-64 assembly, building a solid foundation in programming, system-level thinking, and software design. These courses provided the fundamentals necessary to approach complex problems with both precision and creativity. Beyond technical knowledge, my involvement in mentoring, programming organizations, and campus leadership cultivated skills in community-building, leadership, and large-group collaboration, preparing me to contribute meaningfully in both professional and academic settings.',
    relatedProjects: [
      { name: 'Multi-Client Chat Server', id: 'chat-server' },
      { name: 'Parallel Quicksort', id: 'parallel-quicksort' }
    ]
  },
  {
    id: 'internship',
    title: 'Readezzy Software Intern',
    organization: 'Frenalytics',
    location: 'Remote',
    date: 'May 2025 - August 2025',
    icon: <Briefcase className="w-8 h-8" />,
    description: 'Developed AI-powered reading assistant features to support personalized learning for users with cognitive disabilities',
    details: [
      'Spent initial month developing core skills in PHP, SQL, and WordPress while learning the Readezzy platform and backend architecture',
      'Completed practice projects including REST APIs and CRUD applications to prepare for team contributions',
      'Collaborated with a team of three software interns to develop the AI Reading Assistant feature',
      'Studied educational practices for individuals with cognitive disabilities, including individualized learning plans and accessibility considerations'
    ],
    activities: [
      {
        title: 'Technical Foundation',
        description: 'During my internship at Readezzy, I spent a month immersing myself in the technical foundations and educational context critical to the company\'s mission. I developed core skills in PHP, SQL, and WordPress, while gaining an in-depth understanding of the Readezzy platform and its backend architecture. To solidify my learning, I completed practice projects, including REST APIs and CRUD applications, which prepared me to contribute effectively to the team\'s projects.'
      },
      {
        title: 'AI Reading Assistant Development',
        description: 'After foundational training, I collaborated with a team of three software interns to develop the AI Reading Assistant, a feature designed to support personalized reading experiences for users. Alongside technical development, we studied educational practices for individuals with cognitive disabilities, including individualized learning plans, state-specific requirements, and accessibility considerations. This dual focus ensured that our technical solutions were grounded in real-world educational needs.'
      }
    ],
    takeaway: 'Education & Impact: Gained a deep appreciation for how technology can bridge educational gaps, particularly for learners with cognitive disabilities. I learned how thoughtful design and tailored digital tools can make learning more accessible, engaging, and personalized.\n\nTechnical Skills: Strengthened abilities in full-stack web development, including PHP, SQL, WordPress, REST APIs, and CRUD operations. Learned how to integrate backend systems with AI-powered features, building practical skills in software engineering and collaborative project development.',
    relatedProjects: [
      { name: 'AI Readezzy Reading Assistant', id: 'readezzy' }
    ]
  },
  {
    id: 'lab',
    title: 'Research Assistant',
    organization: 'SCAI Lab',
    location: 'Baltimore, MD',
    date: 'August 2025 - Present',
    icon: <FlaskConical className="w-8 h-8" />,
    description: 'Extending an Unreal Engine 5-based embodied AI simulator with Python APIs for procedural environment generation',
    details: [
      'Worked with SimWorld, an Unreal Engine 5–based simulator for creating photorealistic, dynamic environments',
      'Familiarized with Unreal Engine 5 by implementing basic agent behaviors such as footsteps, movement, and environmental sounds',
      'Developed Python scripts and Jupyter notebooks to procedurally generate maps and environments',
      'Tested human-AI interactions including obstacle avoidance, crowd navigation, and social cues in dynamic spaces'
    ],
    activities: [
      {
        title: 'SimWorld Introduction',
        description: 'In my research at the Social Cognitive AI Laboratory, I worked with SimWorld, an Unreal Engine 5–based simulator for creating photorealistic, dynamic environments to support embodied AI research. SimWorld enables large-scale outdoor simulations with realistic physical and social dynamics, and integrates seamlessly with Python, LLMs, and VLMs for AI experimentation.'
      },
      {
        title: 'Unreal Engine 5 Foundation',
        description: 'Initially, I familiarized myself with Unreal Engine 5, implementing basic agent behaviors such as footsteps, movement, and environmental sounds. This hands-on experience provided insight into the simulation\'s architecture and agent interaction mechanics.'
      },
      {
        title: 'Python API Development & Environment Generation',
        description: 'After gaining this foundation, I focused on SimWorld\'s Python APIs, developing Python scripts and Jupyter notebooks to procedurally generate maps and environments. These environments were used to test human-AI interactions, examining scenarios such as obstacle avoidance, crowd navigation, and how AI responds to social cues in dynamic spaces.'
      }
    ],
    takeaway: 'Social Intelligence in AI: Learned that for AI to be effective in real-world applications, it must navigate and interact in ways that mimic human behavior, highlighting the importance of social reasoning and ethical design in AI systems.\n\nTechnical Skills: Strengthened abilities in Python programming, procedural environment generation, and simulation-based experimentation. Gained practical experience integrating AI agents with complex, dynamic virtual environments, bridging software development with cutting-edge AI research.',
    relatedProjects: [
      { name: 'SimWorld Environment Generation', id: 'simworld' }
    ],
    image: {
      src: scaiLabImage,
      caption: 'This Python-generated simulation visualizes a scenario where an AI agent must navigate a narrow road, avoid incoming cars, and exit a parallel parking spot, testing real-world navigation and decision-making skills.'
    }
  }
];

export function ProgressSection() {
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);

  return (
    <section id="progress" className="min-h-screen flex items-center px-6 py-16">
      <div className="max-w-6xl w-full mx-auto">
        <h2 className="text-4xl mb-8 border-b-4 border-black pb-2 inline-block">My Journey</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-card p-8 border-4 border-black text-left hover:translate-x-1 hover:translate-y-1 transition-transform"
            >
              <div className="mb-4">
                {exp.icon}
              </div>
              <h3 className="text-xl mb-2">{exp.title}</h3>
              <p className="text-muted-foreground mb-3">{exp.organization}</p>
              <p className="text-sm text-muted-foreground mb-4">{exp.date}</p>
              <p className="text-sm mb-6">{exp.description}</p>
              <button
                onClick={() => setSelectedExperience(exp)}
                className="text-sm border-2 border-black px-4 py-2 bg-accent hover:translate-x-0.5 hover:translate-y-0.5 transition-transform"
              >
                View more details →
              </button>
            </div>
          ))}
        </div>

        <Dialog open={!!selectedExperience} onOpenChange={() => setSelectedExperience(null)}>
          <DialogContent className="max-w-2xl border-4 border-black max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <div className="flex items-center gap-4 mb-4">
                <div>
                  {selectedExperience?.icon}
                </div>
                <div>
                  <DialogTitle className="text-2xl">{selectedExperience?.title}</DialogTitle>
                  <p className="text-muted-foreground">{selectedExperience?.organization}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{selectedExperience?.date}</p>
              {selectedExperience?.subtitle && (
                <p className="text-sm text-muted-foreground">{selectedExperience?.subtitle}</p>
              )}
            </DialogHeader>
            <div className="space-y-4 pr-2">
              <p className="text-base text-muted-foreground">{selectedExperience?.description}</p>
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-foreground">Key Highlights:</h4>
                <ul className="space-y-2">
                  {selectedExperience?.details.map((detail, index) => (
                    <li key={index} className="text-sm flex items-start gap-2 text-muted-foreground">
                      <span className="mt-1">★</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {selectedExperience?.activities && (
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-foreground">Relevant Activities:</h4>
                  <ul className="space-y-2">
                    {selectedExperience?.activities.map((activity, index) => (
                      <li key={index} className="text-sm text-muted-foreground">
                        <div className="flex items-start gap-2">
                          <span className="mt-1">★</span>
                          <div>
                            <span className="font-medium text-foreground">{activity.title}</span>
                            <span> – {activity.description}</span>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {selectedExperience?.coursework && (
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-foreground">Relevant Coursework:</h4>
                  <div className="space-y-3">
                    {selectedExperience?.coursework.map((course, index) => (
                      <div key={index} className="text-sm">
                        <div className="flex items-start gap-2 mb-1">
                          <span className="mt-1">★</span>
                          <span className="font-medium text-foreground">{course.title}</span>
                        </div>
                        <ul className="ml-6 space-y-1">
                          {course.description.map((desc, descIndex) => (
                            <li key={descIndex} className="text-muted-foreground flex items-start gap-2">
                              <span>•</span>
                              <span>{desc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {selectedExperience?.takeaway && (
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-foreground">Overall Takeaways:</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">{selectedExperience?.takeaway}</p>
                </div>
              )}
              {selectedExperience?.image && (
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-foreground">Related Image:</h4>
                  <div className="grid grid-cols-1 gap-3">
                    <img
                      src={selectedExperience.image.src}
                      alt={selectedExperience.image.caption}
                      className="w-full h-auto"
                    />
                    <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">{selectedExperience.image.caption}</p>
                  </div>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}