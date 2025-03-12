
export const handleScrollAnimations = () => {
  // Basic fade-in-up animations
  const fadeElements = document.querySelectorAll('.appear-on-scroll');
  
  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in-up');
        fadeObserver.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  });
  
  fadeElements.forEach(element => {
    fadeObserver.observe(element);
  });
  
  // Scale-in animations
  const scaleElements = document.querySelectorAll('.scale-on-scroll');
  
  const scaleObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-scale-in');
        scaleObserver.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  });
  
  scaleElements.forEach(element => {
    scaleObserver.observe(element);
  });
  
  // Rotate-in animations
  const rotateElements = document.querySelectorAll('.rotate-on-scroll');
  
  const rotateObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-rotate-in');
        rotateObserver.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  });
  
  rotateElements.forEach(element => {
    rotateObserver.observe(element);
  });
  
  // Bounce-in animations
  const bounceElements = document.querySelectorAll('.bounce-on-scroll');
  
  const bounceObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-bounce-in');
        bounceObserver.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  });
  
  bounceElements.forEach(element => {
    bounceObserver.observe(element);
  });
  
  // Slider animations
  const sliderElements = document.querySelectorAll('.slider-on-scroll');
  
  const sliderObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Alternate between left and right slide animations based on index
        const elements = entry.target.querySelectorAll('.slide-item');
        elements.forEach((el, index) => {
          if (index % 2 === 0) {
            el.classList.add('animate-slide-in-left');
          } else {
            el.classList.add('animate-slide-in-right');
          }
        });
        sliderObserver.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  });
  
  sliderElements.forEach(element => {
    sliderObserver.observe(element);
  });
  
  // Stagger animations (add delay to children)
  const staggerElements = document.querySelectorAll('.stagger-on-scroll');
  
  const staggerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const children = entry.target.children;
        Array.from(children).forEach((child, index) => {
          // Add animation with increasing delay based on index
          setTimeout(() => {
            (child as HTMLElement).style.opacity = '1';
            (child as HTMLElement).style.transform = 'translateY(0)';
          }, 100 * index);
        });
        staggerObserver.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  });
  
  staggerElements.forEach(element => {
    // Set initial styles
    const children = element.children;
    Array.from(children).forEach(child => {
      (child as HTMLElement).style.opacity = '0';
      (child as HTMLElement).style.transform = 'translateY(20px)';
      (child as HTMLElement).style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    staggerObserver.observe(element);
  });
};
