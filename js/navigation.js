// Navigation handling

document.addEventListener('DOMContentLoaded', () => {
    // Get current page
    const currentPath = window.location.pathname;
    let currentPage = 'home';
    
    if (currentPath.includes('restaurant')) {
      currentPage = 'restaurant';
    } else if (currentPath.includes('booking')) {
      currentPage = 'booking';
    } else if (currentPath.includes('about')) {
      currentPage = 'about';
    } else if (currentPath.includes('auth')) {
      currentPage = 'auth';
    }
    
    // Initialize navbar with correct active state
    createNavbar(currentPage);
    
    // Initialize footer
    createFooter();
    
    // Initialize animations
    window.addEventListener('load', () => {
      initAnimations();
      
      // Initialize GSAP if available
      if (typeof gsap !== 'undefined') {
        initGSAPAnimations();
      }
    });
  });
  
  // Initialize GSAP animations
  function initGSAPAnimations() {
    // Register ScrollTrigger plugin if available
    if (typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }
    
    // Hero section animations
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroButtons = document.querySelector('.hero-buttons');
    
    if (heroTitle && heroSubtitle && heroButtons) {
      const heroTimeline = gsap.timeline();
      
      heroTimeline
        .from(heroTitle, { opacity: 0, y: 30, duration: 0.8, ease: 'power3.out' })
        .from(heroSubtitle, { opacity: 0, y: 20, duration: 0.8, ease: 'power3.out' }, '-=0.4')
        .fromTo(heroButtons, { opacity: 0, y: 20, duration: 0.8, ease: 'power3.out' },{opacity:1,y:0}, '-=0.2');
    }
    
    // Animate sections on scroll
    gsap.utils.toArray('.gsap-section').forEach(section => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out'
      });
    });
  }
  