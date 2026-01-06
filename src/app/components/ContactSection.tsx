import { Mail } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="min-h-[60vh] flex items-center px-6 py-16">
      <div className="max-w-6xl w-full mx-auto">
        <h2 className="text-4xl mb-8 border-b-4 border-black pb-2 inline-block">Contact Me</h2>
        
        <div className="space-y-4">
          <div className="flex items-center gap-3 p-4 border-4 border-black bg-card w-fit">
            <Mail className="w-5 h-5" />
            <div>
              <p className="text-sm">Personal Email</p>
              <a 
                href="mailto:vanessazqching@gmail.com" 
                className="text-base hover:underline"
              >
                vanessazqching@gmail.com
              </a>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-4 border-4 border-black bg-card w-fit">
            <Mail className="w-5 h-5" />
            <div>
              <p className="text-sm">School Email</p>
              <a 
                href="mailto:vching1@jh.edu" 
                className="text-base hover:underline"
              >
                vching1@jh.edu
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}