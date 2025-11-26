import { useState, useEffect } from 'react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0056b3]/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
              <span className="text-[#0056b3]">🎓</span>
            </div>
            <span className="text-white text-xl">HCMUT</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('career-hub')}
              className="text-white hover:text-[#00A8E8] transition-colors"
            >
              Công cụ AI
            </button>
            <button 
              onClick={() => scrollToSection('about-hcmut')}
              className="text-white hover:text-[#00A8E8] transition-colors"
            >
              Về HCMUT
            </button>
            <button 
              onClick={() => scrollToSection('admission')}
              className="text-white hover:text-[#00A8E8] transition-colors"
            >
              Tuyển sinh
            </button>
            <button className="text-white hover:text-[#00A8E8] transition-colors">
              Liên hệ
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
