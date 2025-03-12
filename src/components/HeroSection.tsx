
import React, { useEffect } from 'react';
import { Bell, Smartphone, ArrowDown } from 'lucide-react';
import login from '../assets/login.jpg';

const HeroSection = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.appear-on-scroll');

      elements.forEach(element => {
        const position = element.getBoundingClientRect();

        // If element is in viewport
        if (position.top < window.innerHeight) {
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
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-notify-darkgreen via-notify-darker to-black"></div>

      {/* Enhanced background weaves */}
      <div className="absolute -top-20 left-1/4 w-96 h-96 bg-notify-neon/10 rounded-full blur-3xl -z-10 animate-pulse-light"></div>
      <div className="absolute top-60 right-1/4 w-96 h-96 bg-notify-green/10 rounded-full blur-3xl -z-10 animate-pulse-light animate-delay-500"></div>

      {/* New animated background elements */}
      <div className="absolute top-1/3 right-10 w-64 h-64 bg-notify-lime/5 rounded-full blur-2xl -z-10 animate-float animate-delay-300"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-notify-neon/5 rounded-full blur-2xl -z-10 animate-pulse-light animate-delay-700"></div>

      {/* Animated grid lines */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="h-full w-full bg-[linear-gradient(to_right,#9eff0022_1px,transparent_1px),linear-gradient(to_bottom,#9eff0022_1px,transparent_1px)] bg-[size:30px_30px]"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute top-1/4 left-10 w-3 h-3 rounded-full bg-notify-neon/40 animate-float"></div>
      <div className="absolute bottom-1/4 right-20 w-2 h-2 rounded-full bg-notify-lime/40 animate-float animate-delay-300"></div>
      <div className="absolute top-1/2 right-1/3 w-4 h-4 rounded-full bg-notify-green/30 animate-float animate-delay-600"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6 items-center">
        <div className="space-y-6 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full border border-notify-neon/30 animate-bounce-in">
            <Bell className="h-4 w-4 text-notify-neon" />
            <span className="text-sm font-medium">Stay Updated in Real Time!</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Never Miss an <span className="neon-text animate-neon-pulse">Important</span> Update Again
          </h1>

          <p className="text-lg text-white/80 max-w-lg animate-fade-in animate-delay-200">
            Notify delivers instant alerts when specific role IDs are mentioned in Discord, keeping you informed no matter where you are.
          </p>

          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4 stagger-animation">
            <a
              href="#download"
              className="button-transition bg-gradient-to-r from-notify-neon/80 to-notify-lime/80 text-black font-semibold px-8 py-3 rounded-lg hover:shadow-lg hover:shadow-notify-neon/20 hover:-translate-y-0.5 w-full sm:w-auto text-center animate-fade-in"
            >
              Download Now
            </a>
            <a
              href="#how-it-works"
              className="button-transition group border border-notify-neon/50 bg-black/40 backdrop-blur-sm text-white px-8 py-3 rounded-lg hover:border-notify-neon hover:bg-black/60 w-full sm:w-auto text-center flex items-center justify-center space-x-2 animate-fade-in"
            >
              <span>How It Works</span>
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
            </a>
          </div>
        </div>

        <div className="relative flex justify-center">
          {/* Animated decorative elements behind the phone */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-72 h-72 border border-notify-neon/10 rounded-full animate-[spin_30s_linear_infinite]"></div>
            <div className="absolute w-96 h-96 border border-notify-lime/10 rounded-full animate-[spin_40s_linear_infinite_reverse]"></div>
            <div className="absolute w-[500px] h-[500px] border border-notify-green/10 rounded-full animate-[spin_50s_linear_infinite]"></div>
          </div>

          <div className="relative z-10 animate-float">
            <div className="w-64 h-[500px] md:w-72 md:h-[560px] rounded-[40px] p-4 neo-glass border-[3px] border-notify-neon/30 neon-shadow">
              <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-black rounded-b-xl"></div>
              <div className="w-full h-full bg-notify-darker/90 rounded-[32px] flex items-center justify-center overflow-hidden">
                <img src={login} alt="login Image" />
                {/* <div className="w-full h-full flex flex-col">
                  <div className="py-3 px-4 border-b border-notify-neon/20 flex items-center space-x-3">
                    <Bell className="h-5 w-5 text-notify-neon animate-pulse-light" />
                    <span className="font-medium">Notify</span>
                  </div>
                  
                  <div className="flex-1 p-4 flex flex-col space-y-4 overflow-hidden">
                    <div className="neo-glass p-3 space-y-2 animate-pulse-light">
                      <div className="flex items-center space-x-2">
                        <div className="h-4 w-4 rounded-full bg-notify-neon"></div>
                        <span className="text-xs">@developer role mentioned</span>
                      </div>
                      <p className="text-xs text-white/70">Urgent: New API updates available...</p>
                    </div>
                    
                    <div className="neo-glass p-3 space-y-2 animate-pulse-light animate-delay-300">
                      <div className="flex items-center space-x-2">
                        <div className="h-4 w-4 rounded-full bg-notify-lime"></div>
                        <span className="text-xs">@design role mentioned</span>
                      </div>
                      <p className="text-xs text-white/70">New UI designs ready for review...</p>
                    </div>
                    
                    <div className="neo-glass p-3 space-y-2 animate-pulse-light animate-delay-600">
                      <div className="flex items-center space-x-2">
                        <div className="h-4 w-4 rounded-full bg-notify-green"></div>
                        <span className="text-xs">@moderator role mentioned</span>
                      </div>
                      <p className="text-xs text-white/70">Assistance needed in #support...</p>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>

          <div className="absolute -bottom-12 -left-12 w-40 h-40 rounded-full bg-notify-neon/10 filter blur-3xl animate-pulse-light"></div>
          <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-notify-lime/10 filter blur-3xl animate-pulse-light animate-delay-400"></div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-notify-neon/60" />
      </div>
    </section>
  );
};

export default HeroSection;
