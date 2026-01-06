import { useEffect, useState } from 'react';

interface ScrollIndicatorProps {
  sections: string[];
  activeSection: string;
}

export function ScrollIndicator({ sections, activeSection }: ScrollIndicatorProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden md:block">
      <div className="flex flex-col gap-4">
        {sections.map((section) => (
          <button
            key={section}
            onClick={() => scrollToSection(section)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeSection === section 
                ? 'bg-primary h-12' 
                : 'bg-muted hover:bg-muted-foreground/50'
            }`}
            aria-label={`Scroll to ${section}`}
          />
        ))}
      </div>
    </div>
  );
}
