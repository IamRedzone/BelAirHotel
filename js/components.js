// Reusable components

// Create Navbar component
function createNavbar(currentPage = 'home') {
    const header = document.getElementById('main-header');
    
    const navbarHTML = `
      <div class="container mx-auto px-4 md:px-8">
        <div class="flex justify-between items-center h-16 md:h-20">
          <a href="index.html" class="text-white font-bold text-xl md:text-2xl animate-fade-in">
            <span class="text-lavender-400">BelAir</span> Hotels
          </a>
  
          <!-- Desktop Navigation -->
          <nav class="hidden md:flex space-x-8 animate-fade-in">
            <a href="index.html" class="nav-link text-white hover:text-lavender-300 transition-all py-2 ${currentPage === 'home' ? 'nav-active' : ''}">
              Home
            </a>
            <a href="restaurant.html" class="nav-link text-white hover:text-lavender-300 transition-all py-2 ${currentPage === 'restaurant' ? 'nav-active' : ''}">
              Restaurant
            </a>
            <a href="booking.html" class="nav-link text-white hover:text-lavender-300 transition-all py-2 ${currentPage === 'booking' ? 'nav-active' : ''}">
              Book Now
            </a>
            <a href="about.html" class="nav-link text-white hover:text-lavender-300 transition-all py-2 ${currentPage === 'about' ? 'nav-active' : ''}">
              About
            </a>
          </nav>
  
          <div class="hidden md:block animate-fade-in">
            <a href="auth.html" class="btn-primary">
              Sign In
            </a>
          </div>
  
          <!-- Mobile Menu Button -->
          <button 
            id="mobile-menu-btn"
            class="md:hidden text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
  
      <!-- Mobile Menu -->
      <div id="mobile-menu" class="mobile-menu hidden">
        <div class="flex justify-end p-6">
          <button 
            id="close-menu-btn"
            class="text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
  
        <nav class="flex flex-col items-center justify-center space-y-6 flex-grow text-xl ">
          <a href="index.html" class="${currentPage === 'home' ? 'text-lavender-400' : 'text-white hover:text-lavender-400'} transition-all">
            Home
          </a>
          <a href="restaurant.html" class="${currentPage === 'restaurant' ? 'text-lavender-400' : 'text-white hover:text-lavender-400'} transition-all">
            Restaurant
          </a>
          <a href="booking.html" class="${currentPage === 'booking' ? 'text-lavender-400' : 'text-white hover:text-lavender-400'} transition-all">
            Book Now
          </a>
          <a href="about.html" class="${currentPage === 'about' ? 'text-lavender-400' : 'text-white hover:text-lavender-400'} transition-all">
            About
          </a>
          <a href="auth.html" class="btn-primary mt-4">
            Sign In
          </a>
        </nav>
      </div>
    `;
    
    header.innerHTML = navbarHTML;
    
    // Add event listeners for mobile menu
    
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.remove('hidden');
      mobileMenu.classList.add('visible');
    });
    
    closeMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.remove('visible');
      mobileMenu.classList.add('hidden');
    });
    
    // Handle scroll effects for navbar
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        header.classList.add('bg-black/40', 'backdrop-blur-lg');
        header.classList.remove('bg-black/10', 'backdrop-blur-sm');
      } else {
        header.classList.remove('bg-black/40', 'backdrop-blur-lg');
        header.classList.add('bg-black/10', 'backdrop-blur-sm');
      }
    });
  }
  
  // Create Footer component
  function createFooter() {
    const footer = document.getElementById('main-footer');
    
    const footerHTML = `
      <div class="container mx-auto px-4 md:px-8 py-12 md:py-16">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div class="space-y-4">
            <h3 class="text-xl font-bold text-white">
              <span class="text-lavender-400">BelAir</span> Hotels
            </h3>
            <p class="text-gray-400 max-w-xs">
              Experience luxury redefined at BelAir Hotels and Suites, where elegance meets comfort and every stay becomes a cherished memory.
            </p>
            <div class="flex space-x-4 pt-2">
              <a href="#" class="text-gray-400 hover:text-lavender-400 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" class="text-gray-400 hover:text-lavender-400 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" class="text-gray-400 hover:text-lavender-400 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
            </div>
          </div>
  
          <div class="space-y-4">
            <h4 class="text-lg font-semibold text-white">Quick Links</h4>
            <ul class="space-y-3">
              <li>
                <a href="index.html" class="text-gray-400 hover:text-lavender-400 transition-all">
                  Home
                </a>
              </li>
              <li>
                <a href="restaurant.html" class="text-gray-400 hover:text-lavender-400 transition-all">
                  Restaurant
                </a>
              </li>
              <li>
                <a href="booking.html" class="text-gray-400 hover:text-lavender-400 transition-all">
                  Book Now
                </a>
              </li>
              <li>
                <a href="about.html" class="text-gray-400 hover:text-lavender-400 transition-all">
                  About
                </a>
              </li>
              <li>
                <a href="auth.html" class="text-gray-400 hover:text-lavender-400 transition-all">
                  Sign In
                </a>
              </li>
            </ul>
          </div>
  
          <div class="space-y-4">
            <h4 class="text-lg font-semibold text-white">Contact</h4>
            <ul class="space-y-3">
              <li class="flex items-start space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-lavender-400 flex-shrink-0 mt-1">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span class="text-gray-400">
                  1234 Luxury Avenue, Azure Bay, CA 90210
                </span>
              </li>
              <li class="flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-lavender-400 flex-shrink-0">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span class="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li class="flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-lavender-400 flex-shrink-0">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span class="text-gray-400">info@belairhotels.com</span>
              </li>
            </ul>
          </div>
  
          <div class="space-y-4">
            <h4 class="text-lg font-semibold text-white">Newsletter</h4>
            <p class="text-gray-400">
              Subscribe to receive updates on our latest offers.
            </p>
            <form class="mt-2">
              <div class="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  class="bg-white/5 border border-white/10 text-gray-300 rounded-l-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-lavender-500/30"
                />
                <button
                  type="submit"
                  class="bg-lavender-600 hover:bg-lavender-700 text-white rounded-r-lg px-4 py-2 transition-all"
                >
                  Join
                </button>
              </div>
            </form>
          </div>
        </div>
  
        <div class="border-t border-white/5 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; ${new Date().getFullYear()} BelAir Hotels and Suites. All rights reserved.</p>
        </div>
      </div>
    `;
    
    footer.innerHTML = footerHTML;
  }
  
  // Create FoodCard component
  function createFoodCard(title, description, price, image) {
    const cardHTML = `
      <div class="glass-card min-w-[280px] w-[280px] max-w-[320px] hover-scale">
        <div class="rounded-t-xl overflow-hidden h-48">
          <img 
            src="${image}" 
            alt="${title}" 
            class="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          />
        </div>
        <div class="p-5">
          <div class="flex justify-between items-start mb-2">
            <h3 class="text-xl font-semibold text-white">${title}</h3>
            <span class="text-lavender-400 font-semibold">$${price.toFixed(2)}</span>
          </div>
          <p class="text-gray-400 text-sm">${description}</p>
        </div>
      </div>
    `;
    
    const template = document.createElement('template');
    template.innerHTML = cardHTML.trim();
    return template.content.firstChild;
  }
  
  // Create RoomCard component
  function createRoomCard(title, description, price, image, capacity, size, amenities) {
    const amenitiesList = amenities.map(amenity => 
      `<span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-lavender-500/20 text-lavender-300">
        ${amenity}
      </span>`
    ).join('');
  
    const cardHTML = `
      <div class="glass-card overflow-hidden hover-scale">
        <div class="relative h-64 overflow-hidden">
          <img 
            src="${image}" 
            alt="${title}" 
            class="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          />
          <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <div class="flex justify-between items-center">
              <h3 class="text-xl font-semibold text-white">${title}</h3>
              <span class="text-lavender-400 font-bold">$${price}<span class="text-sm text-gray-300 font-normal">/night</span></span>
            </div>
          </div>
        </div>
        <div class="p-5 space-y-4">
          <p class="text-gray-400">${description}</p>
          
          <div class="flex flex-wrap gap-4">
            <div class="flex items-center space-x-2 text-sm text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-lavender-400">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              <span>${capacity} Guests</span>
            </div>
            <div class="flex items-center space-x-2 text-sm text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-lavender-400">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
              </svg>
              <span>${size} m²</span>
            </div>
          </div>
          
          <div class="flex flex-wrap gap-3 pt-1">
            ${amenitiesList}
          </div>
          
          <button class="btn-primary w-full mt-4">Book Now</button>
        </div>
      </div>
    `;
    
    const template = document.createElement('template');
    template.innerHTML = cardHTML.trim();
    return template.content.firstChild;
  }
  
  // Create animated section
  function createAnimatedSection(content, delay = 0, animation = "fade") {
    const sectionElement = document.createElement('div');
    sectionElement.className = `animated-section ${animation === "slide" ? "slide-animation" : "fade-animation"}`;
    sectionElement.style.transitionDelay = `${delay}ms`;
    sectionElement.innerHTML = content;
    
    return sectionElement;
  }
  
  // Initialize animation observers
  function initAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.animated-section').forEach(section => {
      observer.observe(section);
    });
  }
  