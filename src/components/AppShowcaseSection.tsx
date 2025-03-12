
import React, { useEffect } from 'react';
import { Smartphone, Download, ArrowRight } from 'lucide-react';

const AppShowcaseSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-notify-darkgreen/40 via-notify-darker to-black"></div>
      
      {/* Animated background weaves */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-10 left-1/4 w-[800px] h-[800px] bg-notify-neon/5 rounded-full blur-3xl transform -translate-x-1/2 animate-pulse-light"></div>
        <div className="absolute bottom-20 right-1/4 w-[600px] h-[600px] bg-notify-green/5 rounded-full blur-3xl transform translate-x-1/2 animate-pulse-light animate-delay-300"></div>
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-notify-lime/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 animate-pulse-light animate-delay-700"></div>
      </div>
      
      {/* Animated grid lines */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="h-full w-full bg-[linear-gradient(to_right,#9eff0022_1px,transparent_1px),linear-gradient(to_bottom,#9eff0022_1px,transparent_1px)] bg-[size:30px_30px]"></div>
      </div>
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Content Column */}
          <div className="w-full lg:w-1/2 space-y-8 appear-on-scroll">
            <div className="inline-flex items-center space-x-2 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full border border-notify-neon/30">
              <Smartphone className="h-4 w-4 text-notify-neon" />
              <span className="text-sm font-medium">Mobile Experience</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Streamlined <span className="neon-text">Notifications</span> in Your Pocket
            </h2>
            
            <p className="text-lg text-white/80 max-w-lg">
              Notify puts the power of Discord role mentions right in your pocket, with a beautifully designed interface that makes staying updated effortless.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4 neo-glass p-4 rounded-xl scale-on-scroll">
                <div className="h-10 w-10 rounded-full bg-notify-neon/20 flex items-center justify-center flex-shrink-0">
                  <ArrowRight className="h-5 w-5 text-notify-neon" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Quick Access</h3>
                  <p className="text-white/70">Tap any notification to instantly open the message in Discord</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 neo-glass p-4 rounded-xl scale-on-scroll">
                <div className="h-10 w-10 rounded-full bg-notify-lime/20 flex items-center justify-center flex-shrink-0">
                  <Download className="h-5 w-5 text-notify-lime" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Available Everywhere</h3>
                  <p className="text-white/70">Download for both Android and iOS to stay connected on any device</p>
                </div>
              </div>
            </div>
            
            <div className="pt-4">
              <a 
                href="#download" 
                className="button-transition inline-flex items-center space-x-2 bg-gradient-to-r from-notify-neon/80 to-notify-lime/80 text-black font-semibold px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-notify-neon/20 hover:-translate-y-0.5"
              >
                <Download className="h-5 w-5" />
                <span>Download Now</span>
              </a>
            </div>
          </div>
          
          {/* App Showcase Column */}
          <div className="w-full lg:w-1/2 flex justify-center relative">
            <div className="relative z-10 rotate-on-scroll">
              {/* Phone Frame */}
              <div className="relative">
                {/* Main Phone */}
                <div className="w-64 h-[520px] md:w-72 md:h-[580px] rounded-[40px] p-4 neo-glass border-[3px] border-notify-neon/30 neon-shadow animate-float">
                  <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-black rounded-b-xl"></div>
                  <div className="w-full h-full bg-notify-darker/90 rounded-[32px] overflow-hidden">
                    <div className="w-full h-full flex flex-col">
                      {/* App Header */}
                      <div className="py-3 px-4 border-b border-notify-neon/20 flex items-center space-x-3">
                        <div className="h-5 w-5 rounded-full bg-notify-neon/80 flex items-center justify-center">
                          <span className="text-xs text-black font-bold">N</span>
                        </div>
                        <span className="font-medium">Notify</span>
                        <div className="ml-auto flex space-x-1">
                          <div className="h-2 w-2 rounded-full bg-notify-neon/50"></div>
                          <div className="h-2 w-2 rounded-full bg-notify-neon/30"></div>
                          <div className="h-2 w-2 rounded-full bg-notify-neon/20"></div>
                        </div>
                      </div>
                      
                      {/* App Content */}
                      <div className="flex-1 p-4 flex flex-col space-y-4 overflow-hidden stagger-animation">
                        {/* Notifications */}
                        <div className="neo-glass p-3 space-y-2">
                          <div className="flex items-center space-x-2">
                            <div className="h-4 w-4 rounded-full bg-notify-neon"></div>
                            <span className="text-xs">@developer role mentioned</span>
                          </div>
                          <p className="text-xs text-white/70">Urgent: New API updates available for testing...</p>
                          <div className="flex justify-between items-center pt-1">
                            <span className="text-[10px] text-white/40">5m ago</span>
                            <span className="text-[10px] text-notify-neon">#dev-channel</span>
                          </div>
                        </div>
                        
                        <div className="neo-glass p-3 space-y-2">
                          <div className="flex items-center space-x-2">
                            <div className="h-4 w-4 rounded-full bg-notify-lime"></div>
                            <span className="text-xs">@design role mentioned</span>
                          </div>
                          <p className="text-xs text-white/70">New UI designs ready for review in Figma...</p>
                          <div className="flex justify-between items-center pt-1">
                            <span className="text-[10px] text-white/40">27m ago</span>
                            <span className="text-[10px] text-notify-lime">#design-team</span>
                          </div>
                        </div>
                        
                        <div className="neo-glass p-3 space-y-2">
                          <div className="flex items-center space-x-2">
                            <div className="h-4 w-4 rounded-full bg-notify-green"></div>
                            <span className="text-xs">@moderator role mentioned</span>
                          </div>
                          <p className="text-xs text-white/70">Assistance needed in #support channel...</p>
                          <div className="flex justify-between items-center pt-1">
                            <span className="text-[10px] text-white/40">42m ago</span>
                            <span className="text-[10px] text-notify-green">#support</span>
                          </div>
                        </div>
                        
                        <div className="neo-glass p-3 space-y-2">
                          <div className="flex items-center space-x-2">
                            <div className="h-4 w-4 rounded-full bg-notify-blue"></div>
                            <span className="text-xs">@everyone mentioned</span>
                          </div>
                          <p className="text-xs text-white/70">Server maintenance scheduled for tomorrow...</p>
                          <div className="flex justify-between items-center pt-1">
                            <span className="text-[10px] text-white/40">1h ago</span>
                            <span className="text-[10px] text-notify-blue">#announcements</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Bottom Nav */}
                      <div className="p-2 border-t border-notify-neon/20 flex justify-around">
                        <div className="h-8 w-8 rounded-full bg-notify-neon/10 flex items-center justify-center">
                          <div className="h-3 w-3 bg-notify-neon rounded-full"></div>
                        </div>
                        <div className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center">
                          <div className="h-3 w-3 bg-white/30 rounded-sm"></div>
                        </div>
                        <div className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center">
                          <div className="h-3 w-3 bg-white/30 rounded-full ring-1 ring-white/30"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Secondary Phone (offset) */}
                <div className="absolute -right-10 top-20 w-48 h-[400px] rounded-[32px] p-3 neo-glass border-[2px] border-notify-neon/20 rotate-12 opacity-40 hidden md:block">
                  <div className="w-full h-full bg-notify-darker/90 rounded-[28px]"></div>
                </div>
                
                {/* Third Phone (offset) */}
                <div className="absolute -left-8 bottom-10 w-44 h-[380px] rounded-[32px] p-3 neo-glass border-[2px] border-notify-neon/20 -rotate-12 opacity-30 hidden md:block">
                  <div className="w-full h-full bg-notify-darker/90 rounded-[28px]"></div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-4 w-12 h-12 rounded-full bg-notify-neon/20 blur-md animate-pulse-light"></div>
              <div className="absolute -bottom-8 left-6 w-16 h-16 rounded-full bg-notify-lime/20 blur-md animate-pulse-light animate-delay-500"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute top-1/4 left-10 w-3 h-3 rounded-full bg-notify-neon/40 animate-float"></div>
      <div className="absolute bottom-1/4 right-20 w-2 h-2 rounded-full bg-notify-lime/40 animate-float animate-delay-300"></div>
      <div className="absolute top-1/2 right-1/3 w-4 h-4 rounded-full bg-notify-green/30 animate-float animate-delay-600"></div>
    </section>
  );
};

export default AppShowcaseSection;
