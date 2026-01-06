export function SkillsSection() {
  return (
    <section id="skills" className="min-h-screen flex items-center px-[24px] py-[10px]">
      <div className="max-w-6xl w-full mx-auto">
        <h2 className="text-4xl mb-8 border-b-4 border-black pb-2 inline-block">Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Languages */}
          <div className="bg-card p-6 border-4 border-black">
            <h3 className="text-xl mb-4 border-b-2 border-black pb-2">Languages</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span>★</span>
                <span>Python</span>
              </li>
              <li className="flex items-center gap-2">
                <span>★</span>
                <span>C</span>
              </li>
              <li className="flex items-center gap-2">
                <span>★</span>
                <span>C++</span>
              </li>
              <li className="flex items-center gap-2">
                <span>★</span>
                <span>Java</span>
              </li>
              <li className="flex items-center gap-2">
                <span>★</span>
                <span>PHP</span>
              </li>
              <li className="flex items-center gap-2">
                <span>★</span>
                <span>SQL</span>
              </li>
              <li className="flex items-center gap-2">
                <span>★</span>
                <span>HTML</span>
              </li>
              <li className="flex items-center gap-2">
                <span>★</span>
                <span>CSS</span>
              </li>
              <li className="flex items-center gap-2">
                <span>★</span>
                <span>x86-64</span>
              </li>
            </ul>
          </div>

          {/* Libraries and Frameworks */}
          <div className="bg-card p-6 border-4 border-black">
            <h3 className="text-xl mb-4 border-b-2 border-black pb-2">Libraries & Frameworks</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span>★</span>
                <span>NumPy</span>
              </li>
              <li className="flex items-center gap-2">
                <span>★</span>
                <span>Matplotlib</span>
              </li>
              <li className="flex items-center gap-2">
                <span>★</span>
                <span>Pygame</span>
              </li>
              <li className="flex items-center gap-2">
                <span>★</span>
                <span>PyTorch</span>
              </li>
              <li className="flex items-center gap-2">
                <span>★</span>
                <span>TensorFlow</span>
              </li>
              <li className="flex items-center gap-2">
                <span>★</span>
                <span>Unreal Engine 5</span>
              </li>
              <li className="flex items-center gap-2">
                <span>★</span>
                <span>REST APIs</span>
              </li>
            </ul>
          </div>

          {/* Development Tools */}
          <div className="bg-card p-6 border-4 border-black">
            <h3 className="text-xl mb-4 border-b-2 border-black pb-2">Development Tools</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span>★</span>
                <span>WordPress</span>
              </li>
              <li className="flex items-center gap-2">
                <span>★</span>
                <span>XAMPP</span>
              </li>
              <li className="flex items-center gap-2">
                <span>★</span>
                <span>Git</span>
              </li>
              <li className="flex items-center gap-2">
                <span>★</span>
                <span>GitHub</span>
              </li>
              <li className="flex items-center gap-2">
                <span>★</span>
                <span>VS Code</span>
              </li>
              <li className="flex items-center gap-2">
                <span>★</span>
                <span>Linux</span>
              </li>
              <li className="flex items-center gap-2">
                <span>★</span>
                <span>Multithreading (pthreads/RAII)</span>
              </li>
              <li className="flex items-center gap-2">
                <span>★</span>
                <span>POSIX Processes & Shared Memory</span>
              </li>
              <li className="flex items-center gap-2">
                <span>★</span>
                <span>TCP/IP Networking</span>
              </li>
              <li className="flex items-center gap-2">
                <span>★</span>
                <span>Text-to-Speech/Voice APIs</span>
              </li>
              <li className="flex items-center gap-2">
                <span>★</span>
                <span>Browser Audio APIs</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}