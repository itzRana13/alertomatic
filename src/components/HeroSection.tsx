
import React, { useEffect } from 'react';
import { Bell, Smartphone, ArrowDown } from 'lucide-react';

const HeroSection = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.appear-on-scroll');
      
      elements.forEach(element => {
        const position = element.getBoundingClientRect();
        
        // If element is in viewport
        if(position.top < window.innerHeight) {
          element.classList.add('animate-fade-in-up');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger once on load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen pt-24 pb-16 px-6 flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-notify-muted via-notify-dark to-notify-darker"></div>
      
      {/* Purple glow */}
      <div className="absolute -top-20 left-1/4 w-96 h-96 bg-notify-purple/20 rounded-full blur-3xl -z-10"></div>
      
      {/* Blue glow */}
      <div className="absolute top-60 right-1/4 w-96 h-96 bg-notify-blue/20 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6 items-center">
        <div className="space-y-6 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
            <Bell className="h-4 w-4 text-notify-purple" />
            <span className="text-sm font-medium">Stay Updated in Real Time!</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Never Miss an <span className="gradient-text">Important</span> Update Again
          </h1>
          
          <p className="text-lg text-white/80 max-w-lg">
            Notify delivers instant alerts when specific role IDs are mentioned in Discord, keeping you informed no matter where you are.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
            <a 
              href="#download" 
              className="button-transition bg-gradient-to-r from-notify-purple to-notify-blue text-white px-8 py-3 rounded-lg hover:shadow-lg hover:-translate-y-0.5 w-full sm:w-auto text-center"
            >
              Download Now
            </a>
            <a 
              href="#how-it-works" 
              className="button-transition group border border-white/10 bg-white/5 backdrop-blur-sm text-white px-8 py-3 rounded-lg hover:bg-white/10 w-full sm:w-auto text-center flex items-center justify-center space-x-2"
            >
              <span>How It Works</span>
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
            </a>
          </div>
        </div>
        
        <div className="relative flex justify-center">
          <div className="relative z-10 animate-float">
            <div className="w-64 h-[500px] md:w-72 md:h-[560px] rounded-[40px] p-4 glass-card border-[3px] border-white/10 app-shadow">
              <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-black rounded-b-xl"></div>
              <div className="w-full h-full bg-notify-darker/50 rounded-[32px] flex items-center justify-center overflow-hidden">
                <div className="w-full h-full flex flex-col">
                  <div className="py-3 px-4 border-b border-white/10 flex items-center space-x-3">
                    <Bell className="h-5 w-5 text-notify-purple" />
                    <span className="font-medium">Notify</span>
                  </div>
                  
                  <div className="flex-1 p-4 flex flex-col space-y-4 overflow-hidden">
                    <div className="glass p-3 space-y-2 animate-pulse-light">
                      <div className="flex items-center space-x-2">
                        <div className="h-4 w-4 rounded-full bg-notify-purple"></div>
                        <span className="text-xs">@developer role mentioned</span>
                      </div>
                      <p className="text-xs text-white/70">Urgent: New API updates available...</p>
                    </div>
                    
                    <div className="glass p-3 space-y-2 animate-pulse-light animate-delay-300">
                      <div className="flex items-center space-x-2">
                        <div className="h-4 w-4 rounded-full bg-notify-teal"></div>
                        <span className="text-xs">@design role mentioned</span>
                      </div>
                      <p className="text-xs text-white/70">New UI designs ready for review...</p>
                    </div>
                    
                    <div className="glass p-3 space-y-2 animate-pulse-light animate-delay-600">
                      <div className="flex items-center space-x-2">
                        <div className="h-4 w-4 rounded-full bg-notify-amber"></div>
                        <span className="text-xs">@moderator role mentioned</span>
                      </div>
                      <p className="text-xs text-white/70">Assistance needed in #support...</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute -bottom-12 -left-12 w-40 h-40 rounded-full bg-notify-purple/20 filter blur-3xl"></div>
          <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-notify-blue/20 filter blur-3xl"></div>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-white/60" />
      </div>
    </section>
  );
};

export default HeroSection;
