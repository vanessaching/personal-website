import { Menu, X, Cat } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'progress', label: 'Journey' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact Me' }
];

export function NavigationBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-background border-b-4 border-black z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 relative">
          <div className="flex flex-col items-center gap-3">
            {/* Name */}
            <button 
              onClick={() => scrollToSection('about')}
              className="text-3xl hover:scale-105 transition-transform"
            >
              Vanessa Ching
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="hover:scale-110 transition-transform"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden absolute right-6 top-4"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[97px] bg-background z-30 md:hidden border-t-4 border-black">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-2xl hover:scale-110 transition-transform"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}