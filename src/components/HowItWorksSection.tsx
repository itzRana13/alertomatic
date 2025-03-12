
import React from 'react';
import { Sparkles, Check } from 'lucide-react';

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-notify-darker"></div>
      
      {/* Background glow */}
      <div className="absolute top-40 left-1/3 w-96 h-96 bg-notify-blue/20 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 appear-on-scroll">
          <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 mb-4">
            <Sparkles className="h-4 w-4 text-notify-amber" />
            <span className="text-sm font-medium">Simple Process</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">How <span className="gradient-text">Notify</span> Works</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Getting started with Notify is quick and easy, so you can start receiving important alerts in minutes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="relative appear-on-scroll">
            <div className="relative z-10">
              <div className="glass-card p-6 h-full">
                <div className="h-12 w-12 rounded-full flex items-center justify-center text-2xl font-bold bg-gradient-to-r from-notify-purple to-notify-blue text-white mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-3">Install the App</h3>
                <p className="text-white/70 mb-4">
                  Download Notify from the App Store or Google Play and create your account.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <Check className="h-5 w-5 text-notify-teal mt-0.5" />
                    <span className="text-white/70 text-sm">Available for iOS and Android</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check className="h-5 w-5 text-notify-teal mt-0.5" />
                    <span className="text-white/70 text-sm">Quick and easy setup process</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check className="h-5 w-5 text-notify-teal mt-0.5" />
                    <span className="text-white/70 text-sm">Secure authentication</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="absolute top-1/2 -right-6 hidden lg:block">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 0L40 20L20 40L0 20L20 0Z" fill="#6E56CF" fillOpacity="0.2" />
              </svg>
            </div>
          </div>
          
          <div className="relative appear-on-scroll animate-delay-200">
            <div className="relative z-10">
              <div className="glass-card p-6 h-full">
                <div className="h-12 w-12 rounded-full flex items-center justify-center text-2xl font-bold bg-gradient-to-r from-notify-purple to-notify-blue text-white mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-3">Configure Role IDs</h3>
                <p className="text-white/70 mb-4">
                  Add the specific Discord role IDs you want to monitor for mentions.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <Check className="h-5 w-5 text-notify-teal mt-0.5" />
                    <span className="text-white/70 text-sm">Easy to add multiple role IDs</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check className="h-5 w-5 text-notify-teal mt-0.5" />
                    <span className="text-white/70 text-sm">Prioritize alerts by importance</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check className="h-5 w-5 text-notify-teal mt-0.5" />
                    <span className="text-white/70 text-sm">Customize notification settings per role</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="absolute top-1/2 -right-6 hidden lg:block">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 0L40 20L20 40L0 20L20 0Z" fill="#3E63DD" fillOpacity="0.2" />
              </svg>
            </div>
          </div>
          
          <div className="appear-on-scroll animate-delay-400">
            <div className="glass-card p-6 h-full">
              <div className="h-12 w-12 rounded-full flex items-center justify-center text-2xl font-bold bg-gradient-to-r from-notify-purple to-notify-blue text-white mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Receive Notifications</h3>
              <p className="text-white/70 mb-4">
                Get instant alerts when your roles are mentioned in any Discord channel.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <Check className="h-5 w-5 text-notify-teal mt-0.5" />
                  <span className="text-white/70 text-sm">Real-time delivery to your device</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check className="h-5 w-5 text-notify-teal mt-0.5" />
                  <span className="text-white/70 text-sm">Preview message content</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check className="h-5 w-5 text-notify-teal mt-0.5" />
                  <span className="text-white/70 text-sm">One tap to open in Discord</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
