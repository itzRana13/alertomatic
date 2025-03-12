
import React from 'react';
import { Users, CheckCircle } from 'lucide-react';

const WhySection = () => {
  return (
    <section id="why-notify" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-notify-dark"></div>
      
      {/* Background glow */}
      <div className="absolute bottom-40 right-1/3 w-96 h-96 bg-notify-purple/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1 appear-on-scroll">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
              <Users className="h-4 w-4 text-notify-teal" />
              <span className="text-sm font-medium">Why Choose Notify</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
              The <span className="gradient-text">Perfect Companion</span> for Discord Power Users
            </h2>
            
            <p className="text-white/70">
              Notify was designed with community moderators, developers, and active Discord users in mind. Our app ensures you never miss critical information.
            </p>
            
            <div className="space-y-4 pt-4">
              <div className="flex items-start space-x-3">
                <div className="h-6 w-6 mt-0.5">
                  <CheckCircle className="h-6 w-6 text-notify-teal" />
                </div>
                <div>
                  <h3 className="font-medium">Never Miss a Critical Update</h3>
                  <p className="text-white/70 text-sm">
                    Stay informed about important mentions even when you're away from your computer.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="h-6 w-6 mt-0.5">
                  <CheckCircle className="h-6 w-6 text-notify-teal" />
                </div>
                <div>
                  <h3 className="font-medium">Stay Informed About Important Mentions</h3>
                  <p className="text-white/70 text-sm">
                    Filter out the noise and only receive notifications that matter to you.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="h-6 w-6 mt-0.5">
                  <CheckCircle className="h-6 w-6 text-notify-teal" />
                </div>
                <div>
                  <h3 className="font-medium">Designed for Seamless User Experience</h3>
                  <p className="text-white/70 text-sm">
                    Intuitive interface and smooth performance ensure a frustration-free experience.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="h-6 w-6 mt-0.5">
                  <CheckCircle className="h-6 w-6 text-notify-teal" />
                </div>
                <div>
                  <h3 className="font-medium">Battery-Friendly Operation</h3>
                  <p className="text-white/70 text-sm">
                    Optimized to provide alerts without draining your device's battery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="order-1 lg:order-2 relative flex justify-center appear-on-scroll">
          <div className="relative z-10">
            <div className="w-64 h-[500px] md:w-72 md:h-[560px] rounded-[40px] p-2 glass-card border-[3px] border-white/10 app-shadow rotate-3 transform hover:rotate-0 transition-all duration-500">
              <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-black rounded-b-xl"></div>
              <div className="w-full h-full bg-notify-darker/80 rounded-[38px] flex items-center justify-center overflow-hidden">
                <div className="w-full h-full flex flex-col">
                  <div className="py-3 px-4 border-b border-white/10 flex items-center justify-between">
                    <div className="text-sm font-medium">Settings</div>
                  </div>
                  
                  <div className="flex-1 p-4 flex flex-col space-y-6 overflow-y-auto">
                    <div className="glass p-4 space-y-4">
                      <h3 className="text-sm font-medium">Role Preferences</h3>
                      
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className="h-3 w-3 rounded-full bg-notify-purple"></div>
                            <span className="text-xs">@developer</span>
                          </div>
                          <div className="h-5 w-9 rounded-full bg-notify-purple flex items-center p-0.5">
                            <div className="h-4 w-4 rounded-full bg-white ml-auto"></div>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className="h-3 w-3 rounded-full bg-notify-blue"></div>
                            <span className="text-xs">@moderator</span>
                          </div>
                          <div className="h-5 w-9 rounded-full bg-notify-blue flex items-center p-0.5">
                            <div className="h-4 w-4 rounded-full bg-white ml-auto"></div>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className="h-3 w-3 rounded-full bg-notify-teal"></div>
                            <span className="text-xs">@design</span>
                          </div>
                          <div className="h-5 w-9 rounded-full bg-notify-teal flex items-center p-0.5">
                            <div className="h-4 w-4 rounded-full bg-white ml-auto"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="glass p-4 space-y-4">
                      <h3 className="text-sm font-medium">Notification Style</h3>
                      
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs">Sound</span>
                          <div className="h-5 w-9 rounded-full bg-notify-purple flex items-center p-0.5">
                            <div className="h-4 w-4 rounded-full bg-white ml-auto"></div>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-xs">Vibration</span>
                          <div className="h-5 w-9 rounded-full bg-notify-purple flex items-center p-0.5">
                            <div className="h-4 w-4 rounded-full bg-white ml-auto"></div>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-xs">Screen Wake</span>
                          <div className="h-5 w-9 rounded-full bg-white/20 flex items-center p-0.5">
                            <div className="h-4 w-4 rounded-full bg-white"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute -bottom-12 -left-12 w-40 h-40 rounded-full bg-notify-teal/20 filter blur-3xl"></div>
          <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-notify-purple/20 filter blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
