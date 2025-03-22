// FoodCard component as a JavaScript function
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
  
  // Export the function for use in other files
  export { createFoodCard };