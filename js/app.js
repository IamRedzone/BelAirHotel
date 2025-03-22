// Main application file

document.addEventListener('DOMContentLoaded', () => {
    // Initialize the site
    initSite();
  });
  
  // Initialize site based on current page
  function initSite() {
    const path = window.location.pathname;
    
    if (path.endsWith('restaurant.html')) {
      initRestaurantPage();
    } else if (path.endsWith('booking.html')) {
      initBookingPage();
    } else if (path.endsWith('about.html')) {
      initAboutPage();
    } else if (path.endsWith('auth.html')) {
      initAuthPage();
    } else {
      // Default to home page
      initHomePage();
    }
  }
  
  // Initialize home page
  function initHomePage() {
    console.log('Initializing home page...');
    
    // Load home page content
    const mainContent = document.getElementById('page-content');
    
    // Hero Section
    const heroSection = document.createElement('section');
    heroSection.className = 'relative min-h-screen flex items-center justify-center overflow-hidden';
    heroSection.innerHTML = `
      <div class="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-background z-10"></div>
      <div class="absolute inset-0 z-0">
        <video
          autoplay
          muted
          loop
          playsinline
          class="hero-video"
        >
          <source src="https://videos.pexels.com/video-files/3116716/3116716-hd_1920_1080_25fps.mp4" type="video/mp4" />
        </video>
      </div>
      
      <div class="container mx-auto px-4 md:px-6 relative z-10 mt-20">
        <div class="max-w-3xl mx-auto text-center">
          <div class="animated-section">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 hero-title">
              Experience Luxury at <span class="text-lavender-400">BelAir Hotels</span>
            </h1>
          </div>
          
          <div class="animated-section" style="transition-delay: 300ms;">
            <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto hero-subtitle">
              Indulge in the pinnacle of hospitality where every detail is crafted for your comfort and delight.
            </p>
          </div>
          
          <div class="animated-section hero-buttons" style="transition-delay: 200ms;">
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="booking.html" class="btn-primary">
                Book Your Stay
              </a>
              <a href="restaurant.html" class="btn-secondary">
                Explore Dining
              </a>
              
            </div>
          </div>
        </div>
      </div>
  
      <div class="absolute bottom-10 left-0 right-0 flex justify-center">
        <div class="animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white rotate-90">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </div>
      </div>
    `;
    
    // Features Section
    const featuresSection = document.createElement('section');
    featuresSection.className = 'py-20 md:py-28 relative overflow-hidden gsap-section';
    featuresSection.innerHTML = `
      <div class="container mx-auto px-4 md:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16 animated-section">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">
            An Extraordinary <span class="text-lavender-400">Experience</span>
          </h2>
          <p class="text-gray-400">
            At BelAir Hotels, we believe luxury is in the details. From our carefully designed spaces to our personalized service, every aspect of your stay is handled with meticulous care.
          </p>
        </div>
  
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="animated-section glass-card p-8 text-center h-full" style="transition-delay: 300ms;">
            <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-lavender-500/20 text-lavender-400 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-4">Premium Rooms</h3>
            <p class="text-gray-400">
              Luxurious spaces designed for comfort and elegance, equipped with state-of-the-art amenities and breathtaking views.
            </p>
          </div>
  
          <div class="animated-section glass-card p-8 text-center h-full" style="transition-delay: 500ms;">
            <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-lavender-500/20 text-lavender-400 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                <line x1="6" y1="1" x2="6" y2="4"></line>
                <line x1="10" y1="1" x2="10" y2="4"></line>
                <line x1="14" y1="1" x2="14" y2="4"></line>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-4">Exquisite Dining</h3>
            <p class="text-gray-400">
              Savor culinary masterpieces created by our renowned chefs using the finest local and international ingredients.
            </p>
          </div>
  
          <div class="animated-section glass-card p-8 text-center h-full" style="transition-delay: 700ms;">
            <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-lavender-500/20 text-lavender-400 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-4">24/7 Service</h3>
            <p class="text-gray-400">
              Our attentive staff is always available to ensure your needs are met promptly, no matter the hour.
            </p>
          </div>
        </div>
      </div>
    `;
    
    // CTA Section
    const ctaSection = document.createElement('section');
    ctaSection.className = 'py-20 relative overflow-hidden gsap-section';
    ctaSection.innerHTML = `
      <div class="absolute inset-0 z-0 opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070" 
          alt="Luxury Hotel" 
          class="w-full h-full object-cover"
        />
      </div>
      <div class="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/80 z-0"></div>
      
      <div class="container mx-auto px-4 md:px-8 relative z-10">
        <div class="max-w-3xl mx-auto text-center animated-section">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">
            Ready for an Unforgettable Stay?
          </h2>
          <p class="text-xl text-gray-400 mb-8">
            Book your room now and experience luxury redefined at BelAir Hotels and Suites.
          </p>
          <a href="booking.html" class="btn-primary inline-flex items-center">
            Reserve Your Room 
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-2">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </div>
    `;
    
    // Testimonials Section
    const testimonialsSection = document.createElement('section');
    testimonialsSection.className = 'py-20 md:py-28 gsap-section';
    testimonialsSection.innerHTML = `
      <div class="container mx-auto px-4 md:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16 animated-section">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">
            Guest <span class="text-lavender-400">Experiences</span>
          </h2>
          <p class="text-gray-400">
            Don't just take our word for it. See what our guests have to say about their stay at BelAir Hotels and Suites.
          </p>
        </div>
  
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="animated-section glass-card p-8 relative" style="transition-delay: 300ms;">
            <div class="mb-6 text-lavender-400 flex">
              ${Array(5).fill().map(() => `
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              `).join('')}
            </div>
            <p class="text-gray-300 mb-6">
              "An absolute dream stay! The attention to detail in service and design made our anniversary celebration truly special."
            </p>
            <div class="flex items-center">
              <div class="w-12 h-12 rounded-full overflow-hidden mr-4">
                <img 
                  src="https://i.pravatar.cc/300?img=1" 
                  alt="Guest" 
                  class="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 class="font-semibold">Emily Johnson</h4>
                <p class="text-sm text-gray-400">New York, USA</p>
              </div>
            </div>
          </div>
  
          <div class="animated-section glass-card p-8 relative" style="transition-delay: 500ms;">
            <div class="mb-6 text-lavender-400 flex">
              ${Array(5).fill().map(() => `
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              `).join('')}
            </div>
            <p class="text-gray-300 mb-6">
              "The restaurant alone is worth the stay. We were blown away by the culinary experience and impeccable service."
            </p>
            <div class="flex items-center">
              <div class="w-12 h-12 rounded-full overflow-hidden mr-4">
                <img 
                  src="https://i.pravatar.cc/300?img=3" 
                  alt="Guest" 
                  class="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 class="font-semibold">James Wilson</h4>
                <p class="text-sm text-gray-400">London, UK</p>
              </div>
            </div>
          </div>
  
          <div class="animated-section glass-card p-8 relative" style="transition-delay: 700ms;">
            <div class="mb-6 text-lavender-400 flex">
              ${Array(5).fill().map(() => `
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              `).join('')}
            </div>
            <p class="text-gray-300 mb-6">
              "The most comfortable bed I've ever slept in! Every aspect of our stay was perfect from check-in to check-out."
            </p>
            <div class="flex items-center">
              <div class="w-12 h-12 rounded-full overflow-hidden mr-4">
                <img 
                  src="https://i.pravatar.cc/300?img=5" 
                  alt="Guest" 
                  class="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 class="font-semibold">Sophia Chen</h4>
                <p class="text-sm text-gray-400">Toronto, Canada</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    
    // Append all sections
    mainContent.appendChild(heroSection);
    mainContent.appendChild(featuresSection);
    mainContent.appendChild(ctaSection);
    mainContent.appendChild(testimonialsSection);
  }
  
  // Initialize restaurant page
  function initRestaurantPage() {
    console.log('Initializing restaurant page...');
    
    // Load restaurant page content
    const mainContent = document.getElementById('page-content');
    
    // Create restaurant hero section
    const heroSection = document.createElement('section');
    heroSection.className = 'relative min-h-[70vh] flex items-center justify-center overflow-hidden';
    heroSection.innerHTML = `
      <div class="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-background z-10"></div>
      <div class="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1621517014078-cedc19d0950d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Luxury Restaurant"
          class="w-full h-full object-cover"
        />
      </div>
      
      <div class="container mx-auto px-4 md:px-6 relative z-10">
        <div class="max-w-3xl mx-auto text-center">
          <div class="animated-section">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Culinary <span class="text-lavender-400">Excellence</span>
            </h1>
          </div>
          
          <div class="animated-section" style="transition-delay: 300ms;">
            <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Indulge in an extraordinary dining experience with flavors that tell a story.
            </p>
          </div>
        </div>
      </div>
    `;
    
    // Create food menu section
    const menuSection = document.createElement('section');
    menuSection.className = 'py-20 md:py-28 relative overflow-hidden';
    menuSection.innerHTML = `
      <div class="container mx-auto px-4 md:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16 animated-section">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">
            Our <span class="text-lavender-400">Signature</span> Menu
          </h2>
          <p class="text-gray-400">
            Explore our chef's selection of exquisite dishes, carefully prepared with the finest ingredients.
          </p>
        </div>
  
        <div class="mb-16">
          <h3 class="text-2xl font-semibold mb-8 text-center">Appetizers</h3>
          <div id="appetizers-container" class="food-scroll horizontal-scroll">
            <!-- Appetizers will be added here -->
          </div>
        </div>
  
        <div class="mb-16">
          <h3 class="text-2xl font-semibold mb-8 text-center">Main Courses</h3>
          <div id="mains-container" class="food-scroll horizontal-scroll">
            <!-- Main courses will be added here -->
          </div>
        </div>
  
        <div>
          <h3 class="text-2xl font-semibold mb-8 text-center">Desserts</h3>
          <div id="desserts-container" class="food-scroll horizontal-scroll">
            <!-- Desserts will be added here -->
          </div>
        </div>
      </div>
    `;
    
    // Create chef's section
    const chefSection = document.createElement('section');
    chefSection.className = 'py-20 bg-black/20 gsap-section';
    chefSection.innerHTML = `
      <div class="container mx-auto px-4 md:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div class="animated-section">
            <img 
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1974" 
              alt="Head Chef" 
              class="rounded-xl w-full h-auto glass-card p-2"
            />
          </div>
          <div class="animated-section" style="transition-delay: 300ms;">
            <h2 class="text-3xl md:text-4xl font-bold mb-6">
              Meet Our <span class="text-lavender-400">Executive Chef</span>
            </h2>
            <p class="text-gray-300 mb-6">
              Chef Michael Rodriguez brings over 15 years of culinary expertise from around the world to BelAir Hotels. His passion for blending international techniques with local ingredients creates unforgettable dining experiences.
            </p>
            <p class="text-gray-400 mb-8">
              "My philosophy is simple: respect the ingredients, honor tradition, but never fear innovation. Every dish tells a story of culture, passion, and craftsmanship."
            </p>
            <div class="flex items-center">
              <div class="text-xl font-semibold">Michael Rodriguez</div>
              <div class="h-px bg-lavender-400 w-12 mx-4"></div>
              <div class="text-gray-400">Executive Chef</div>
            </div>
          </div>
        </div>
      </div>
    `;
    
    // Reservation callout section
    const reservationSection = document.createElement('section');
    reservationSection.className = 'py-16 md:py-24 gsap-section';
    reservationSection.innerHTML = `
      <div class="container mx-auto px-4 md:px-8">
        <div class="glass-card p-8 md:p-12 text-center max-w-3xl mx-auto animated-section">
          <h2 class="text-2xl md:text-3xl font-bold mb-6">
            Reserve Your <span class="text-lavender-400">Table</span>
          </h2>
          <p class="text-gray-300 mb-8">
            Secure your dining experience at BelAir Hotels Restaurant. For special occasions, please mention your celebration in the notes.
          </p>
          <a href="tel:+15551234567" class="btn-primary mb-4 inline-block">
            Call for Reservations: (555) 123-4567
          </a>
          <p class="text-sm text-gray-400">
            Dinner: 5:30 PM - 10:30 PM, daily <br>
            Breakfast: 6:30 AM - 10:30 AM <br>
            Lunch: 12:00 PM - 3:00 PM
          </p>
        </div>
      </div>
    `;
    
    // Append all sections
    mainContent.appendChild(heroSection);
    mainContent.appendChild(menuSection);
    mainContent.appendChild(chefSection);
    mainContent.appendChild(reservationSection);
    
    // Add food items
    const appetizers = [
      { title: "Truffle Arancini", description: "Crispy risotto balls with black truffle and mozzarella", price: 18, image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=2080" },
      { title: "Tuna Tartare", description: "Fresh tuna with avocado, citrus, and crispy wonton", price: 22, image: "https://images.unsplash.com/photo-1722012988794-196d72bd12aa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { title: "Burrata Salad", description: "Creamy burrata with heirloom tomatoes and basil oil", price: 19, image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { title: "Lobster Bisque", description: "Creamy soup with lobster medallions and cognac", price: 24, image: "https://images.unsplash.com/photo-1707995546408-9815c70dd5c4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
    ];
    
    const mainCourses = [
      { title: "Wagyu Ribeye", description: "Prime cut with truffle butter and red wine jus", price: 68, image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=2070" },
      { title: "Chilean Sea Bass", description: "Pan-seared with champagne sauce and caviar", price: 52, image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=2070" },
      { title: "Duck Confit", description: "Slow-cooked duck leg with cherry reduction", price: 46, image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069" },
      { title: "Mushroom Risotto", description: "Arborio rice with wild mushrooms and white truffle oil", price: 38, image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?q=80&w=2070" }
    ];
    
    const desserts = [
      { title: "Chocolate Soufflé", description: "Warm dark chocolate soufflé with vanilla ice cream", price: 16, image: "https://images.unsplash.com/photo-1660652378762-5c791ceb2f6f?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { title: "Crème Brûlée", description: "Classic vanilla bean custard with caramelized sugar", price: 14, image: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?q=80&w=2070" },
      { title: "Berry Pavlova", description: "Meringue with fresh berries and Chantilly cream", price: 15, image: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?q=80&w=2070" },
      { title: "Tiramisu", description: "Italian classic with espresso-soaked ladyfingers", price: 13, image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=1974" }
    ];
    
    const appetizersContainer = document.getElementById('appetizers-container');
    const mainsContainer = document.getElementById('mains-container');
    const dessertsContainer = document.getElementById('desserts-container');
    
    appetizers.forEach(item => {
      appetizersContainer.appendChild(createFoodCard(item.title, item.description, item.price, item.image));
    });
    
    mainCourses.forEach(item => {
      mainsContainer.appendChild(createFoodCard(item.title, item.description, item.price, item.image));
    });
    
    desserts.forEach(item => {
      dessertsContainer.appendChild(createFoodCard(item.title, item.description, item.price, item.image));
    });
  }
  
  // Initialize booking page
  function initBookingPage() {
    console.log('Initializing booking page...');
    
    // Load booking page content
    const mainContent = document.getElementById('page-content');
    
    // Create booking hero section
    const heroSection = document.createElement('section');
    heroSection.className = 'relative min-h-[50vh] flex items-center justify-center overflow-hidden';
    heroSection.innerHTML = `
      <div class="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-background z-10"></div>
      <div class="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070"
          alt="Luxury Hotel Room"
          class="w-full h-full object-cover"
        />
      </div>
      
      <div class="container mx-auto px-4 md:px-6 relative z-10">
        <div class="max-w-3xl mx-auto text-center">
          <div class="animated-section">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Book Your <span class="text-lavender-400">Dream Stay</span>
            </h1>
          </div>
          
          <div class="animated-section" style="transition-delay: 300ms;">
            <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Select from our premium rooms and suites for an unforgettable experience.
            </p>
          </div>
        </div>
      </div>
    `;
    
    // Create booking form section
    const bookingFormSection = document.createElement('section');
    bookingFormSection.className = 'py-16 md:py-24 relative overflow-hidden';
    bookingFormSection.innerHTML = `
      <div class="container mx-auto px-4 md:px-8">
        <div class="glass-card p-8 md:p-12 max-w-5xl mx-auto animated-section">
          <h2 class="text-2xl md:text-3xl font-bold mb-8 text-center">
            Make Your Reservation
          </h2>
          
          <form id="booking-form" class="space-y-8">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label for="check-in" class="block text-white mb-2">Check-in Date</label>
                <input 
                  type="date" 
                  id="check-in" 
                  required 
                  class="w-full bg-white/5 border border-white/10 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-lavender-500/30 focus:outline-none"
                >
              </div>
              <div>
                <label for="check-out" class="block text-white mb-2">Check-out Date</label>
                <input 
                  type="date" 
                  id="check-out" 
                  required 
                  class="w-full bg-white/5 border border-white/10 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-lavender-500/30 focus:outline-none"
                >
              </div>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label for="guests" class="block text-white mb-2">Number of Guests</label>
                <select 
                  id="guests" 
                  required 
                  class="w-full bg-white/5 border border-white/10 text-gray-500 rounded-lg px-4 py-3 focus:ring-2 focus:ring-lavender-500/30 focus:outline-none"
                >
                  <option value="1">1 Guest</option>
                  <option value="2" selected>2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5">5+ Guests</option>
                </select>
              </div>
              <div>
                <label for="rooms" class="block text-white mb-2">Number of Rooms</label>
                <select 
                  id="rooms" 
                  required 
                  class="w-full bg-white/5 border border-white/10 text-gray-500  rounded-lg px-4 py-3 focus:ring-2 focus:ring-lavender-500/30 focus:outline-none"
                >
                  <option value="1" selected>1 Room</option>
                  <option value="2">2 Rooms</option>
                  <option value="3">3 Rooms</option>
                  <option value="4">4+ Rooms</option>
                </select>
              </div>
              <div>
                <label for="room-type" class="block text-white mb-2">Room Type</label>
                <select 
                  id="room-type" 
                  required 
                  class="w-full bg-white/5 border border-white/10 text-gray-500  rounded-lg px-4 py-3 focus:ring-2 focus:ring-lavender-500/30 focus:outline-none"
                >
                  <option value="standard">Standard Room</option>
                  <option value="deluxe" selected>Deluxe Room</option>
                  <option value="suite">Executive Suite</option>
                  <option value="penthouse">Penthouse Suite</option>
                </select>
              </div>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label for="name" class="block text-white mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  required 
                  placeholder="Enter your full name" 
                  class="w-full bg-white/5 border border-white/10 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-lavender-500/30 focus:outline-none"
                >
              </div>
              <div>
                <label for="email" class="block text-white mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  required 
                  placeholder="Enter your email address" 
                  class="w-full bg-white/5 border border-white/10 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-lavender-500/30 focus:outline-none"
                >
              </div>
            </div>
            
            <div>
              <label for="special-requests" class="block text-white mb-2">Special Requests</label>
              <textarea 
                id="special-requests" 
                rows="4" 
                placeholder="Any special requests or preferences?" 
                class="w-full bg-white/5 border border-white/10 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-lavender-500/30 focus:outline-none"
              ></textarea>
            </div>
            
            <div class="flex justify-center">
              <button type="submit" class="btn-primary px-8 py-3">
                Check Availability
              </button>
            </div>
          </form>
        </div>
      </div>
    `;
    
    // Create room options section
    const roomsSection = document.createElement('section');
    roomsSection.className = 'py-16 md:py-24 gsap-section';
    roomsSection.innerHTML = `
      <div class="container mx-auto px-4 md:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16 animated-section">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">
            Our <span class="text-lavender-400">Luxurious</span> Rooms
          </h2>
          <p class="text-gray-400">
            Experience comfort and elegance in our meticulously designed accommodations.
          </p>
        </div>
        
        <div id="rooms-container" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Room cards will be added here -->
        </div>
      </div>
    `;
    
    // Create amenities section
    const amenitiesSection = document.createElement('section');
    amenitiesSection.className = 'py-16 md:py-24 bg-black/20 gsap-section';
    amenitiesSection.innerHTML = `
      <div class="container mx-auto px-4 md:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16 animated-section">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">
            Hotel <span class="text-lavender-400">Amenities</span>
          </h2>
          <p class="text-gray-400">
            Enjoy our premium facilities designed for your ultimate comfort and convenience.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div class="animated-section glass-card p-6" style="transition-delay: 100ms;">
            <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-lavender-500/20 text-lavender-400 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M2 12h20"></path>
                <path d="M7 12v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-5"></path>
                <path d="M5 12V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v5"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Swimming Pool</h3>
            <p class="text-gray-400">Heated infinity pool with panoramic views</p>
          </div>
          
          <div class="animated-section glass-card p-6" style="transition-delay: 200ms;">
            <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-lavender-500/20 text-lavender-400 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5.6 17.8a9 9 0 1 1 12.8 0"></path>
                <circle cx="12" cy="13" r="2"></circle>
                <path d="M12 20v-2"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Spa & Wellness</h3>
            <p class="text-gray-400">Full-service spa with signature treatments</p>
          </div>
          
          <div class="animated-section glass-card p-6" style="transition-delay: 300ms;">
            <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-lavender-500/20 text-lavender-400 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polygon points="10 8 16 12 10 16 10 8"></polygon>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Entertainment</h3>
            <p class="text-gray-400">Cinema room and live music performances</p>
          </div>
          
          <div class="animated-section glass-card p-6" style="transition-delay: 400ms;">
            <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-lavender-500/20 text-lavender-400 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path>
                <polygon points="12 15 17 21 7 21 12 15"></polygon>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Business Center</h3>
            <p class="text-gray-400">Fully equipped meeting rooms and services</p>
          </div>
          
          <div class="animated-section glass-card p-6" style="transition-delay: 500ms;">
            <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-lavender-500/20 text-lavender-400 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Concierge</h3>
            <p class="text-gray-400">24/7 personalized concierge services</p>
          </div>
          
          <div class="animated-section glass-card p-6" style="transition-delay: 600ms;">
            <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-lavender-500/20 text-lavender-400 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M8 22h8"></path>
                <rect x="2" y="6" width="20" height="12" rx="2"></rect>
                <path d="M6 2h12v4H6z"></path>
                <path d="M12 10v4"></path>
                <path d="M2 10h20"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Fitness Center</h3>
            <p class="text-gray-400">State-of-the-art equipment and trainers</p>
          </div>
          
          <div class="animated-section glass-card p-6" style="transition-delay: 700ms;">
            <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-lavender-500/20 text-lavender-400 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Local Tours</h3>
            <p class="text-gray-400">Curated experiences of the surrounding area</p>
          </div>
          
          <div class="animated-section glass-card p-6" style="transition-delay: 800ms;">
            <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-lavender-500/20 text-lavender-400 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M9 18l6-6-6-6"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">And More</h3>
            <p class="text-gray-400">Discover all our exclusive services</p>
          </div>
        </div>
      </div>
    `;
    
    // Append all sections
    mainContent.appendChild(heroSection);
    mainContent.appendChild(bookingFormSection);
    mainContent.appendChild(roomsSection);
    mainContent.appendChild(amenitiesSection);
    
    // Initialize date inputs with tomorrow and day after tomorrow
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dayAfterTomorrow = new Date(today);
    dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 2);
    
    document.getElementById('check-in').valueAsDate = tomorrow;
    document.getElementById('check-out').valueAsDate = dayAfterTomorrow;
    
    // Add room cards
    const roomsData = [
      {
        title: "Deluxe King Room",
        description: "Elegant room with king-size bed, city views, and premium amenities for a luxurious stay.",
        price: 350,
        image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2074",
        capacity: 2,
        size: 45,
        amenities: ["King Bed", "City View", "Smart TV", "Mini Bar", "Rain Shower"]
      },
      {
        title: "Executive Suite",
        description: "Spacious suite with separate living area, luxury bathroom, and panoramic views of the city.",
        price: 550,
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070",
        capacity: 3,
        size: 75,
        amenities: ["King Bed", "Living Area", "Bathtub", "Lounge Access", "Espresso Machine"]
      },
      {
        title: "Penthouse Suite",
        description: "Ultimate luxury with private terrace, jacuzzi, and breathtaking 360° views of the cityscape.",
        price: 1200,
        image: "https://images.unsplash.com/photo-1605346434674-a440ca4dc4c0?q=80&w=2070",
        capacity: 4,
        size: 120,
        amenities: ["King Bed", "Terrace", "Jacuzzi", "Butler Service", "Private Bar"]
      }
    ];
    
    const roomsContainer = document.getElementById('rooms-container');
    roomsData.forEach(room => {
      roomsContainer.appendChild(createRoomCard(
        room.title, 
        room.description, 
        room.price, 
        room.image, 
        room.capacity, 
        room.size, 
        room.amenities
      ));
    });
    
    // Set up booking form submission
    const bookingForm = document.getElementById('booking-form');
    bookingForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for your booking request! We will contact you shortly to confirm your reservation.');
    });
  }
  
  // Initialize about page
  function initAboutPage() {
    console.log('Initializing about page...');
    
    // Load about page content
    const mainContent = document.getElementById('page-content');
    
    // Create about hero section
    const heroSection = document.createElement('section');
    heroSection.className = 'relative min-h-[50vh] flex items-center justify-center overflow-hidden';
    heroSection.innerHTML = `
      <div class="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-background z-10"></div>
      <div class="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070"
          alt="Luxury Hotel Exterior"
          class="w-full h-full object-cover"
        />
      </div>
      
      <div class="container mx-auto px-4 md:px-6 relative z-10">
        <div class="max-w-3xl mx-auto text-center">
          <div class="animated-section">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              About <span class="text-lavender-400">BelAir Hotels</span>
            </h1>
          </div>
          
          <div class="animated-section" style="transition-delay: 300ms;">
            <p class="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Discover the story behind our commitment to luxury and exceptional hospitality.
            </p>
          </div>
        </div>
      </div>
    `;
    
    // Create story section
    const storySection = document.createElement('section');
    storySection.className = 'py-20 md:py-28 relative overflow-hidden';
    storySection.innerHTML = `
      <div class="container mx-auto px-4 md:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div class="animated-section">
            <h2 class="text-3xl md:text-4xl font-bold mb-6">
              Our <span class="text-lavender-400">Story</span>
            </h2>
            <p class="text-gray-300 mb-6">
              Founded in 2010, BelAir Hotels and Suites was born from a vision to create a sanctuary of luxury and comfort in the heart of the city. What began as a boutique hotel has evolved into a landmark destination known for its impeccable service and attention to detail.
            </p>
            <p class="text-gray-400 mb-8">
              Our founders, the Richardson family, brought decades of hospitality experience and a passion for creating memorable guest experiences. Today, we continue their legacy of excellence, blending timeless elegance with modern innovation.
            </p>
            <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-lavender-400 mr-4">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
              <p class="text-lg font-medium text-white">Over 100,000 guests served</p>
            </div>
          </div>
          <div class="animated-section" style="transition-delay: 300ms;">
            <img 
              src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?q=80&w=2071" 
              alt="Hotel History" 
              class="rounded-xl w-full h-auto glass-card p-2"
            />
          </div>
        </div>
      </div>
    `;
    
    // Create values section
    const valuesSection = document.createElement('section');
    valuesSection.className = 'py-20 bg-black/20 gsap-section';
    valuesSection.innerHTML = `
      <div class="container mx-auto px-4 md:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16 animated-section">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">
            Our <span class="text-lavender-400">Values</span>
          </h2>
          <p class="text-gray-400">
            The principles that guide every interaction and experience at BelAir Hotels and Suites.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="animated-section glass-card p-8 text-center" style="transition-delay: 100ms;">
            <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-lavender-500/20 text-lavender-400 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path>
                <path d="M12 8v-2"></path>
                <path d="M12 18v-2"></path>
                <path d="M16 12h-2"></path>
                <path d="M10 12H8"></path>
                <path d="m15.7 15.7-.7-.7"></path>
                <path d="m9 9-.7-.7"></path>
                <path d="m15.7 8.3-.7.7"></path>
                <path d="m9 15-.7.7"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-4">Excellence</h3>
            <p class="text-gray-400">
              We strive for excellence in every detail, from the thread count of our linens to the warmth of our welcome.
            </p>
          </div>
          
          <div class="animated-section glass-card p-8 text-center" style="transition-delay: 300ms;">
            <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-lavender-500/20 text-lavender-400 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2"></path>
                <rect x="3" y="4" width="18" height="18" rx="2"></rect>
                <circle cx="12" cy="10" r="2"></circle>
                <line x1="8" y1="2" x2="8" y2="4"></line>
                <line x1="16" y1="2" x2="16" y2="4"></line>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-4">Personalization</h3>
            <p class="text-gray-400">
              We believe in creating bespoke experiences that reflect the unique preferences of each guest.
            </p>
          </div>
          
          <div class="animated-section glass-card p-8 text-center" style="transition-delay: 500ms;">
            <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-lavender-500/20 text-lavender-400 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3Z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-4">Innovation</h3>
            <p class="text-gray-400">
              We continuously evolve, embracing new technologies and approaches to enhance the guest experience.
            </p>
          </div>
        </div>
      </div>
    `;
    
    // Create team section
    const teamSection = document.createElement('section');
    teamSection.className = 'py-20 md:py-28 gsap-section';
    teamSection.innerHTML = `
      <div class="container mx-auto px-4 md:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16 animated-section">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">
            Meet Our <span class="text-lavender-400">Team</span>
          </h2>
          <p class="text-gray-400">
            The dedicated professionals who make every BelAir Hotels experience exceptional.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="animated-section glass-card overflow-hidden" style="transition-delay: 100ms;">
            <div class="aspect-square overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974" 
                alt="Team Member" 
                class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div class="p-6 text-center">
              <h3 class="text-xl font-semibold mb-1">Jonathan Richardson</h3>
              <p class="text-lavender-400 mb-4">General Manager</p>
              <p class="text-gray-400 text-sm">
                With 20+ years in luxury hospitality, Jonathan ensures every aspect of BelAir Hotels meets our exacting standards.
              </p>
            </div>
          </div>
          
          <div class="animated-section glass-card overflow-hidden" style="transition-delay: 200ms;">
            <div class="aspect-square overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976" 
                alt="Team Member" 
                class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div class="p-6 text-center">
              <h3 class="text-xl font-semibold mb-1">Sophia Chen</h3>
              <p class="text-lavender-400 mb-4">Guest Relations Director</p>
              <p class="text-gray-400 text-sm">
                Sophia's attention to detail and warm personality ensure every guest feels truly welcomed and valued.
              </p>
            </div>
          </div>
          
          <div class="animated-section glass-card overflow-hidden" style="transition-delay: 300ms;">
            <div class="aspect-square overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=1974" 
                alt="Team Member" 
                class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div class="p-6 text-center">
              <h3 class="text-xl font-semibold mb-1">Michael Rodriguez</h3>
              <p class="text-lavender-400 mb-4">Executive Chef</p>
              <p class="text-gray-400 text-sm">
                Michael brings global culinary expertise to create unforgettable dining experiences for our guests.
              </p>
            </div>
          </div>
          
          <div class="animated-section glass-card overflow-hidden" style="transition-delay: 400ms;">
            <div class="aspect-square overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961" 
                alt="Team Member" 
                class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div class="p-6 text-center">
              <h3 class="text-xl font-semibold mb-1">Emily Johnson</h3>
              <p class="text-lavender-400 mb-4">Spa Director</p>
              <p class="text-gray-400 text-sm">
                Emily's innovative wellness programs have made our spa a destination for relaxation and rejuvenation.
              </p>
            </div>
          </div>
        </div>
      </div>
    `;
    
    // Create contact section
    const contactSection = document.createElement('section');
    contactSection.className = 'py-20 bg-black/20 gsap-section';
    contactSection.innerHTML = `
      <div class="container mx-auto px-4 md:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div class="animated-section">
            <h2 class="text-3xl md:text-4xl font-bold mb-6">
              Get in <span class="text-lavender-400">Touch</span>
            </h2>
            <p class="text-gray-300 mb-8">
              We're always here to answer your questions and assist with reservations or special requests.
            </p>
            
            <div class="space-y-6">
              <div class="flex items-start space-x-4">
                <div class="text-lavender-400 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-white">Address</h4>
                  <p class="text-gray-400">1234 Luxury Avenue, Azure Bay, CA 90210</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-4">
                <div class="text-lavender-400 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-white">Phone</h4>
                  <p class="text-gray-400">Front Desk: +1 (555) 123-4567</p>
                  <p class="text-gray-400">Reservations: +1 (555) 987-6543</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-4">
                <div class="text-lavender-400 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-white">Email</h4>
                  <p class="text-gray-400">info@belair.com</p>
                  <p class="text-gray-400">reservations@belairhotels.com</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-4">
                <div class="text-lavender-400 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-white">Hours</h4>
                  <p class="text-gray-400">Front Desk: 24/7</p>
                  <p class="text-gray-400">Reservations: 8:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="animated-section" style="transition-delay: 300ms;">
            <div class="glass-card p-8">
              <h3 class="text-2xl font-semibold mb-6">Send Us a Message</h3>
              <form id="contact-form" class="space-y-6">
                <div>
                  <label for="contact-name" class="block text-white mb-2">Name</label>
                  <input 
                    type="text" 
                    id="contact-name" 
                    required 
                    placeholder="Your name" 
                    class="w-full bg-white/5 border border-white/10 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-lavender-500/30 focus:outline-none"
                  >
                </div>
                
                <div>
                  <label for="contact-email" class="block text-white mb-2">Email</label>
                  <input 
                    type="email" 
                    id="contact-email" 
                    required 
                    placeholder="Your email address" 
                    class="w-full bg-white/5 border border-white/10 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-lavender-500/30 focus:outline-none"
                  >
                </div>
                
                <div>
                  <label for="contact-subject" class="block text-white mb-2">Subject</label>
                  <select 
                    id="contact-subject" 
                    required 
                    class="w-full bg-white/5 border border-white/10 text-gray-500 rounded-lg px-4 py-3 focus:ring-2 focus:ring-lavender-500/30 focus:outline-none"
                  >
                    <option value="" disabled selected>Select a subject</option>
                    <option value="reservation">Reservation Inquiry</option>
                    <option value="feedback">Feedback</option>
                    <option value="careers">Careers</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label for="contact-message" class="block text-white mb-2">Message</label>
                  <textarea 
                    id="contact-message" 
                    rows="4" 
                    required 
                    placeholder="Your message" 
                    class="w-full bg-white/5 border border-white/10 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-lavender-500/30 focus:outline-none"
                  ></textarea>
                </div>
                
                <button type="submit" class="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    `;
    
    // Append all sections
    mainContent.appendChild(heroSection);
    mainContent.appendChild(storySection);
    mainContent.appendChild(valuesSection);
    mainContent.appendChild(teamSection);
    mainContent.appendChild(contactSection);
    
    // Set up contact form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for your message! We will get back to you as soon as possible.');
      contactForm.reset();
    });
  }
  
  // Initialize auth page
  function initAuthPage() {
    console.log('Initializing auth page...');
    
    // Load auth page content
    const mainContent = document.getElementById('page-content');
    mainContent.className = 'page-transition min-h-screen pt-20 flex items-center justify-center';
    
    // Create auth container
    const authContainer = document.createElement('div');
    authContainer.className = 'container mx-auto px-4 md:px-8 py-8 md:py-16';
    authContainer.innerHTML = `
      <div class="flex flex-col lg:flex-row w-full max-w-5xl mx-auto overflow-hidden rounded-xl shadow-2xl">
        <!-- Image Section -->
        <div class="lg:w-1/2 relative">
          <div class="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070" 
            alt="Luxury Hotel Room" 
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 flex flex-col justify-center p-8 md:p-12 z-20">
            <div class="animated-section">
              <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
                <span id="auth-title">Welcome Back</span>
              </h2>
              <p class="text-gray-300 max-w-md">
                <span id="auth-description">Sign in to access your account and manage your bookings and preferences.</span>
              </p>
            </div>
          </div>
        </div>
  
        <!-- Form Section -->
        <div class="lg:w-1/2 bg-secondary p-8 md:p-12">
          <div class="animated-section slide-in">
            <div class="mb-8">
              <h3 class="text-2xl font-bold mb-2">
                <span id="form-title">Sign In</span>
              </h3>
              <p class="text-gray-400">
                <span id="form-description">Enter your credentials to access your account</span>
              </p>
            </div>
  
            <form id="auth-form" class="space-y-6">
              <div id="name-field" class="hidden">
                <label class="block text-gray-300 mb-2">Full Name</label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-400">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <input 
                    type="text" 
                    id="full-name"
                    placeholder="Enter your full name" 
                    class="bg-white/5 border border-white/10 text-white rounded-lg w-full pl-10 pr-4 py-3 focus:ring-2 focus:ring-lavender-500/30 focus:outline-none"
                  >
                </div>
              </div>
              
              <div>
                <label class="block text-gray-300 mb-2">Email Address</label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-400">
                      <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                  </div>
                  <input 
                    type="email" 
                    id="email"
                    required
                    placeholder="Enter your email address" 
                    class="bg-white/5 border border-white/10 text-white rounded-lg w-full pl-10 pr-4 py-3 focus:ring-2 focus:ring-lavender-500/30 focus:outline-none"
                  >
                </div>
              </div>
              
              <div>
                <label class="block text-gray-300 mb-2">Password</label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-400">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                  </div>
                  <input 
                    type="password" 
                    id="password"
                    required
                    placeholder="Enter your password" 
                    class="bg-white/5 border border-white/10 text-white rounded-lg w-full pl-10 pr-10 py-3 focus:ring-2 focus:ring-lavender-500/30 focus:outline-none"
                  >
                  <button 
                    type="button" 
                    id="toggle-password"
                    class="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-400" id="password-icon">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  </button>
                </div>
              </div>
              
              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <input
                    type="checkbox"
                    id="remember-me"
                    class="bg-white/5 border border-white/10 rounded text-lavender-500 focus:ring-lavender-500/30 focus:ring-offset-0"
                  >
                  <label for="remember-me" class="ml-2 text-sm text-gray-400">
                    Remember me
                  </label>
                </div>
                <a href="#" class="text-sm text-lavender-400 hover:text-lavender-300">
                  Forgot password?
                </a>
              </div>
              
              <button type="submit" class="btn-primary w-full">
                <span id="submit-button">Sign In</span>
              </button>
              
              <div class="text-center mt-6">
                <p class="text-gray-400">
                  <span id="toggle-prompt">Don't have an account?</span> 
                  <a href="#" id="toggle-auth" class="text-lavender-400 hover:text-lavender-300 ml-1">
                    Sign Up
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    `;
    
    mainContent.appendChild(authContainer);
    
    // Handle auth toggle between login and sign up
    const toggleAuth = document.getElementById('toggle-auth');
    const nameField = document.getElementById('name-field');
    const authTitle = document.getElementById('auth-title');
    const authDescription = document.getElementById('auth-description');
    const formTitle = document.getElementById('form-title');
    const formDescription = document.getElementById('form-description');
    const submitButton = document.getElementById('submit-button');
    const togglePrompt = document.getElementById('toggle-prompt');
    
    let isLogin = true;
    
    toggleAuth.addEventListener('click', (e) => {
      e.preventDefault();
      isLogin = !isLogin;
      
      if (isLogin) {
        nameField.classList.add('hidden');
        authTitle.textContent = 'Welcome Back';
        authDescription.textContent = 'Sign in to access your account and manage your bookings and preferences.';
        formTitle.textContent = 'Sign In';
        formDescription.textContent = 'Enter your credentials to access your account';
        submitButton.textContent = 'Sign In';
        togglePrompt.textContent = "Don't have an account?";
        toggleAuth.textContent = 'Sign Up';
      } else {
        nameField.classList.remove('hidden');
        authTitle.textContent = 'Join BelAir Hotels';
        authDescription.textContent = 'Create an account to enjoy exclusive benefits, faster booking, and personalized experiences.';
        formTitle.textContent = 'Create Account';
        formDescription.textContent = 'Fill in your details to create a new account';
        submitButton.textContent = 'Sign Up';
        togglePrompt.textContent = 'Already have an account?';
        toggleAuth.textContent = 'Sign In';
      }
    });
    
    // Handle password visibility toggle
    const togglePassword = document.getElementById('toggle-password');
    const passwordInput = document.getElementById('password');
    const passwordIcon = document.getElementById('password-icon');
    
    togglePassword.addEventListener('click', () => {
      if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        passwordIcon.innerHTML = `
          <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
          <line x1="1" y1="1" x2="23" y2="23"></line>
        `;
      } else {
        passwordInput.type = 'password';
        passwordIcon.innerHTML = `
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
          <circle cx="12" cy="12" r="3"></circle>
        `;
      }
    });
    
    // Handle form submission
    const authForm = document.getElementById('auth-form');
    authForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const email = document.getElementById('email').value;
      
      if (isLogin) {
        alert(`Welcome back! You've been signed in with ${email}`);
      } else {
        const name = document.getElementById('full-name').value;
        alert(`Welcome to BelAir Hotels and Suites, ${name}! Your account has been created.`);
      }
    });
  }