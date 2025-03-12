
import React from 'react';
import { ArrowRight } from 'lucide-react';

const DownloadSection = () => {
  return (
    <section id="download" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-notify-darker"></div>
      
      {/* Background glow effect */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-notify-purple/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-notify-blue/20 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-4xl mx-auto">
        <div className="glass-card p-8 sm:p-12 border-2 border-white/10 appear-on-scroll">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to <span className="gradient-text">Stay Connected</span>?</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Download Notify now and never miss an important mention again. Available for both iOS and Android.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="button-transition bg-black text-white border border-white/10 px-8 py-4 rounded-xl hover:border-white/30 w-full sm:w-auto flex items-center justify-center space-x-3">
              <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.5227 19.2978C16.9715 19.8846 16.38 19.8503 15.8038 19.6559C15.1924 19.4615 14.6411 19.4443 14.0297 19.6559C13.2565 19.9163 12.8328 19.8846 12.3351 19.2978C9.53154 16.0144 9.97302 10.9211 13.187 10.7095C13.9945 10.7437 14.5801 11.1036 15.0606 11.1378C15.7783 10.9605 16.462 10.5836 17.2181 10.6348C18.2133 10.7095 18.9654 11.0864 19.4631 11.7931C17.0478 13.2232 17.5627 16.213 19.7414 17.0397C19.348 17.8321 18.8675 18.625 17.5227 19.2978ZM15.0434 10.6177C14.9008 9.06098 16.1766 7.77382 17.6382 7.64223C17.85 9.49537 15.9903 10.8504 15.0434 10.6177Z" fill="white"/>
              </svg>
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="text-lg font-semibold -mt-1">App Store</div>
              </div>
            </button>
            
            <button className="button-transition bg-black text-white border border-white/10 px-8 py-4 rounded-xl hover:border-white/30 w-full sm:w-auto flex items-center justify-center space-x-3">
              <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.5234 12.0004C17.5117 11.6058 17.5938 11.2168 17.7622 10.8642C17.9296 10.5126 18.1778 10.2079 18.4848 9.97645L14.7543 7.57471L6.80493 11.9956L14.7484 16.4233L18.4848 14.0248C18.1769 13.7933 17.9278 13.4882 17.7594 13.1353C17.5909 12.7825 17.5097 12.3936 17.5234 12.0004Z" fill="white"/>
                <path d="M4.14844 8.10156V15.9004L11.1484 20.0004V12.0066L4.14844 8.10156Z" fill="white"/>
                <path d="M4.14844 8.10156L11.1484 4V12.0066L4.14844 8.10156Z" fill="white"/>
                <path d="M11.1484 12.0066V20.0004L18.1484 15.9004V8.10156L11.1484 12.0066Z" fill="white"/>
              </svg>
              <div className="text-left">
                <div className="text-xs">GET IT ON</div>
                <div className="text-lg font-semibold -mt-1">Google Play</div>
              </div>
            </button>
          </div>
          
          <div className="mt-12 text-center">
            <a 
              href="#"
              className="inline-flex items-center space-x-2 text-sm text-white/70 hover:text-white transition-colors"
            >
              <span>View Documentation</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
