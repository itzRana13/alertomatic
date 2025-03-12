
import React from 'react';
import { Bell, Github, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-notify-dark border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Bell className="h-5 w-5 text-notify-purple" />
              <span className="text-xl font-bold">Notify</span>
            </div>
            <p className="text-white/60 text-sm mb-6">
              Stay updated in real time with Notify, the mobile app for Discord role mentions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-white/60 hover:text-white transition-colors text-sm">Features</a>
              </li>
              <li>
                <a href="#how-it-works" className="text-white/60 hover:text-white transition-colors text-sm">How It Works</a>
              </li>
              <li>
                <a href="#why-notify" className="text-white/60 hover:text-white transition-colors text-sm">Why Notify</a>
              </li>
              <li>
                <a href="#download" className="text-white/60 hover:text-white transition-colors text-sm">Download</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Documentation</a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 mt-12 pt-6 text-center">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Notify. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
