
import React from 'react';
import { Bell, Zap, Smartphone, MessageSquare, ArrowRight } from 'lucide-react';
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  animationClass?: string;
}

const FeatureCard = ({ icon, title, description, className, animationClass = "animate-fade-in-up" }: FeatureCardProps) => (
  <div className={cn("neo-glass-card p-6 appear-on-scroll", animationClass, className)}>
    <div className="h-12 w-12 rounded-full bg-black/40 flex items-center justify-center mb-4 border border-notify-neon/30">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-white/70">{description}</p>
  </div>
);

const FeaturesSection = () => {
  return (
    <section id="features" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-notify-darker"></div>
      
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-notify-neon/10 rounded-full blur-3xl -z-10 animate-pulse-light"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-notify-green/10 rounded-full blur-3xl -z-10 animate-pulse-light animate-delay-400"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 appear-on-scroll">
          <div className="inline-flex items-center space-x-2 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full border border-notify-neon/30 mb-4 animate-bounce-in">
            <Zap className="h-4 w-4 text-notify-neon" />
            <span className="text-sm font-medium">Powerful Features</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Everything You Need to <span className="neon-text animate-neon-pulse">Stay Connected</span></h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Notify combines powerful alerting capabilities with an intuitive interface to keep you informed about what matters.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-animation">
          <FeatureCard
            icon={<Bell className="h-6 w-6 text-notify-neon" />}
            title="Real-Time Alerts"
            description="Get instant mobile notifications when your roles are mentioned, without any delay."
            className="lg:col-span-2"
            animationClass="animate-scale-in"
          />
          <FeatureCard
            icon={<MessageSquare className="h-6 w-6 text-notify-lime" />}
            title="Custom Role IDs"
            description="Set specific role IDs to monitor, so you only receive the alerts that matter to you."
            className="lg:col-span-2"
            animationClass="animate-scale-in animate-delay-200"
          />
          <FeatureCard
            icon={<Smartphone className="h-6 w-6 text-notify-neon" />}
            title="Cross-Platform"
            description="Available on both Android & iOS devices to fit your personal preference."
            animationClass="animate-rotate-in"
          />
          <FeatureCard
            icon={<Zap className="h-6 w-6 text-notify-lime" />}
            title="Efficient Organization"
            description="Automatically sorts & stores messages for easy access and reference."
            animationClass="animate-rotate-in animate-delay-200"
          />
          <FeatureCard
            icon={<ArrowRight className="h-6 w-6 text-notify-neon" />}
            title="Quick Message Access"
            description="Tap to open messages directly in Discord with seamless integration."
            animationClass="animate-bounce-in"
          />
          <FeatureCard
            icon={<Bell className="h-6 w-6 text-notify-lime" />}
            title="Customizable Alerts"
            description="Control notification sounds, vibrations, and visual alerts to suit your preferences."
            animationClass="animate-bounce-in animate-delay-200"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
