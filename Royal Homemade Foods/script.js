// script.js - Unified Master Script with Filters

// 1. MOBILE HAMBURGER MENU TOGGLE
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  if (menu) {
    menu.style.display = (menu.style.display === 'flex') ? 'none' : 'flex';
  }
}

// 2. HERO AUTOMATED SLIDESHOW (Runs safely on index.html)
document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.hero-slideshow .slide');
  if (slides.length > 0) {
    let currentSlideIndex = 0;
    function autoCrossFade() {
      slides[currentSlideIndex].classList.remove('active');
      currentSlideIndex = (currentSlideIndex + 1) % slides.length;
      slides[currentSlideIndex].classList.add('active');
    }
    setInterval(autoCrossFade, 3500);
  }
});

// 3. 3D CARD FLIP MECHANIC (Runs safely on product.html)
function toggleCardFlip(cardId) {
  const cardInner = document.getElementById(`card-inner-${cardId}`);
  if (cardInner) {
    cardInner.classList.toggle('is-flipped');
  }
}

// 4. SMOOTH SCROLL TO TOP FOR HOME LINKS
document.addEventListener('DOMContentLoaded', () => {
  const homeLinks = document.querySelectorAll('a[href="index.html"], a[href="index.html#home"]');
  
  homeLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    });
  });
});

// 5. DYNAMIC PRODUCT CATALOG RENDERER & FILTER
function filterProducts(category) {
  // Update active button classes
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => {
    const btnText = btn.textContent.toUpperCase();
    if ((category === 'ALL' && btnText.includes('ALL')) || btnText.includes(category)) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  const container = document.getElementById('products-container');
  if (!container || typeof productsData === 'undefined') return;

  // Filter dataset based on category selection
  const filteredData = (category === 'ALL') 
    ? productsData 
    : productsData.filter(product => product.category && product.category.toUpperCase() === category);

  container.innerHTML = filteredData.map(product => {
    const isNonVeg = product.tag.toUpperCase() === 'NON-VEG';
    const tagClass = isNonVeg ? 'nonveg-tag' : 'veg-tag';
    
    const usageItems = product.usage.map(item => `<li>${item}</li>`).join('');

    return `
      <div class="product-card">
        <div class="flip-card-container">
          <div class="flip-card-inner" id="card-inner-${product.id}" onclick="toggleCardFlip(${product.id})">
            
            <!-- Front -->
            <div class="flip-card-front">
              <img src="${product.image}" alt="${product.name}" class="product-img" />
              <span class="${tagClass}">${product.tag}</span>
              <div class="flip-hint-badge"><span>🔄 Tap for Care & Pairings</span></div>
            </div>

            <!-- Back -->
            <div class="flip-card-back">
              <div class="back-content">
                <div class="back-header">
                  <h4>💡 Care & Usage</h4>
                  <button class="back-flip-btn">Back ↺</button>
                </div>
                <ul class="usage-list">
                  ${usageItems}
                </ul>
                <div class="pairings-box">
                  <h5>🍱 Best Pairings</h5>
                  <p>${product.pairings}</p>
                </div>
                <div class="ingredients-box">
                  <h5>🌿 Key Ingredients</h5>
                  <p>${product.ingredients}</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        <!-- Static Card Footer -->
        <div class="static-card-body">
          <div class="title-row">
            <div class="names">
              <h3 class="product-title">${product.name}</h3>
              <span class="tamil-title">${product.tamilName}</span>
            </div>
            <div class="price-box">
              <span class="price">₹${product.price}</span>
              <span class="weight-label">${product.weight}</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Automatically load all products when product.html opens
document.addEventListener('DOMContentLoaded', () => {
  filterProducts('ALL');
});