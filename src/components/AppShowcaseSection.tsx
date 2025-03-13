import React, { useEffect, useRef, useState } from "react";
import {
  Smartphone,
  Download,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const screenshots = [
  {
    image: "/lovable-uploads/19e1b0c3-891b-443a-8fa5-e924f0a956c0.png",
    title: "Welcome Screen",
    description: "Simple and intuitive login screen to get started",
  },
  {
    image: "/lovable-uploads/a211f27a-3975-4661-8ad0-ecce18f87fce.png",
    title: "Account Management",
    description: "Connect your social accounts with ease",
  },
  {
    image: "/lovable-uploads/8eae63e1-7b7d-45db-9a4e-513495d7d6de.png",
    title: "Recent Notifications",
    description: "View all your recent notifications in one place",
  },
  {
    image: "/lovable-uploads/f702fe7d-11da-44fa-affc-08246d57bf43.png",
    title: "Available Channels",
    description: "Monitor and manage Discord channels",
  },
  {
    image: "/lovable-uploads/1dda2ed3-626a-4d1d-a980-bc6b4d29d6b3.png",
    title: "Notification Settings",
    description: "Toggle notifications for each channel",
  },
];
const AppShowcaseSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = 4;
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === maxIndex ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? maxIndex : prevIndex - 1
    );
  };

  // Auto play functionality
  useEffect(() => {
    autoPlayRef.current = setTimeout(() => {
      nextSlide();
    }, 4000);

    return () => {
      if (autoPlayRef.current) {
        clearTimeout(autoPlayRef.current);
      }
    };
  }, [currentIndex]);

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
              Streamlined <span className="neon-text">Notifications</span> in
              Your Pocket
            </h2>

            <p className="text-lg text-white/80 max-w-lg">
              Notify puts the power of Discord role mentions right in your
              pocket, with a beautifully designed interface that makes staying
              updated effortless.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 neo-glass p-4 rounded-xl scale-on-scroll">
                <div className="h-10 w-10 rounded-full bg-notify-neon/20 flex items-center justify-center flex-shrink-0">
                  <ArrowRight className="h-5 w-5 text-notify-neon" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Quick Access</h3>
                  <p className="text-white/70">
                    Tap any notification to instantly open the message in
                    Discord
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 neo-glass p-4 rounded-xl scale-on-scroll">
                <div className="h-10 w-10 rounded-full bg-notify-lime/20 flex items-center justify-center flex-shrink-0">
                  <Download className="h-5 w-5 text-notify-lime" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">
                    Available Everywhere
                  </h3>
                  <p className="text-white/70">
                    Download for both Android and iOS to stay connected on any
                    device
                  </p>
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

          <div className=" w-full lg:w-1/2 order-1 lg:order-2 relative ">
            <div className="relative h-[600px] w-[300px] mx-auto">
              {/* Phone frame */}
              <div className="absolute inset-0 rounded-[40px] border-8 border-gray-800 bg-black z-10 pointer-events-none shadow-xl"></div>

              {/* Images */}
              <div className="h-full w-full overflow-hidden rounded-[32px]">
                <div className="relative h-full w-full">
                  {screenshots.map((screenshot, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-500 ${
                        index === currentIndex
                          ? "opacity-100"
                          : "opacity-0 pointer-events-none"
                      }`}
                    >
                      <img
                        src={screenshot.image}
                        alt={screenshot.title}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation */}
              <div className="absolute left-0 right-0 bottom-[calc(100%+20px)] flex justify-center gap-2 z-20">
                {screenshots.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 w-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-notify-lime w-4"
                        : "bg-white/30 hover:bg-white/50"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Caption */}
              <div className="absolute left-0 right-0 bottom-[calc(100%+40px)] text-center">
                <h4 className="text-lg font-medium text-white">
                  {screenshots[currentIndex].title}
                </h4>
                <p className="text-sm text-white/70">
                  {screenshots[currentIndex].description}
                </p>
              </div>

              {/* Arrow controls */}
              <button
                onClick={prevSlide}
                className="absolute left-[-60px] top-1/2 transform -translate-y-1/2 h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-20"
                aria-label="Previous screenshot"
              >
                <ChevronLeft className="h-6 w-6 text-white" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-[-60px] top-1/2 transform -translate-y-1/2 h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-20"
                aria-label="Next screenshot"
              >
                <ChevronRight className="h-6 w-6 text-white" />
              </button>
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
