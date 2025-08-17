/**
 * Modern E-Commerce Product Catalog
 * Main JavaScript File
 */

// Sample product data structure
// In a real application, this would come from a backend API
const productsData = {
    "kitchen-utensils": [
        {
            id: "k1",
            name: "Black Cast Iron Pot",
            price: 150.00,
            originalPrice: 199.99,
            image: "products/Kitchen Utensils and Accessories/Black Cast Iron Pot - $150/black-cast-iron-pot-$150.webp",
            category: "Kitchen Utensils",
            rating: 4.8,
            reviewCount: 156,
            description: "Premium black cast iron pot with excellent heat retention and even cooking. Perfect for slow cooking, braising, and making stews. Pre-seasoned and ready to use.",
            specs: ["5.5-quart capacity", "Pre-seasoned cast iron", "Lid included", "Oven safe up to 500°F", "Dishwasher safe (hand wash recommended)", "Lifetime warranty"],
            inStock: true,
            isNew: true,
            isOnSale: true
        },
        {
            id: "k2",
            name: "Blue Cast Iron Pot",
            price: 150.00,
            originalPrice: 199.99,
            image: "products/Kitchen Utensils and Accessories/Blue Cast Iron Pot - $150/blue-cast-iron-pot-$150.file",
            category: "Kitchen Utensils",
            rating: 4.7,
            reviewCount: 142,
            description: "Elegant blue cast iron pot with superior heat distribution. Ideal for slow cooking and braising. Pre-seasoned for immediate use.",
            specs: ["5.5-quart capacity", "Pre-seasoned cast iron", "Lid included", "Oven safe up to 500°F", "Dishwasher safe (hand wash recommended)", "Lifetime warranty"],
            inStock: true,
            isNew: true,
            isOnSale: false
        },
        {
            id: "k3",
            name: "Cream Cast Iron Pot",
            price: 150.00,
            originalPrice: 199.99,
            image: "products/Kitchen Utensils and Accessories/Cream Cast Iron Pot - $150/cream-cast-iron-pot-$150.file",
            category: "Kitchen Utensils",
            rating: 4.9,
            reviewCount: 198,
            description: "Beautiful cream-colored cast iron pot that combines style and functionality. Perfect for both stovetop and oven cooking.",
            specs: ["5.5-quart capacity", "Pre-seasoned cast iron", "Lid included", "Oven safe up to 500°F", "Dishwasher safe (hand wash recommended)", "Lifetime warranty"],
            inStock: true,
            isNew: true,
            isOnSale: false
        },
        {
            id: "k4",
            name: "Red Cast Iron Pot",
            price: 150.00,
            originalPrice: 199.99,
            image: "products/Kitchen Utensils and Accessories/Red Cast Iron Pot - $150/red-cast-iron-pot-set-$150.file",
            category: "Kitchen Utensils",
            rating: 4.8,
            reviewCount: 156,
            description: "Vibrant red cast iron pot with excellent heat retention. Perfect for slow cooking, braising, and making stews. Pre-seasoned and ready to use.",
            specs: ["5.5-quart capacity", "Pre-seasoned cast iron", "Lid included", "Oven safe up to 500°F", "Dishwasher safe (hand wash recommended)", "Lifetime warranty"],
            inStock: true,
            isNew: true,
            isOnSale: true
        }
    ],
    "fitness": [
        {
            id: "f1",
            name: "Premium Yoga Mat",
            price: 39.99,
            originalPrice: 49.99,
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
            category: "Fitness",
            rating: 4.9,
            reviewCount: 342,
            description: "Experience ultimate comfort and stability with our premium yoga mat. Made from eco-friendly materials with excellent grip and cushioning for all types of yoga practice.",
            specs: ["Eco-friendly material", "Non-slip surface", "6mm thickness", "72\" x 24\" dimensions", "Lightweight & portable", "Easy to clean"],
            inStock: true,
            isNew: true,
            isOnSale: true
        }
    ],
    "electronics": [
        {
            id: "e1",
            name: "Wireless Noise-Cancelling Headphones",
            price: 199.99,
            originalPrice: 249.99,
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
            category: "Electronics",
            rating: 4.8,
            reviewCount: 1245,
            description: "Immerse yourself in pure sound with our premium wireless headphones. Featuring active noise cancellation, 40-hour battery life, and crystal-clear audio quality.",
            specs: ["Active Noise Cancellation", "40h Playtime", "Bluetooth 5.0", "Built-in Mic", "Touch Controls", "Foldable Design"],
            inStock: true,
            isNew: true,
            isOnSale: true
        },
        {
            id: "e2",
            name: "Smart Watch Pro",
            price: 299.99,
            originalPrice: 349.99,
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
            category: "Electronics",
            rating: 4.7,
            reviewCount: 892,
            description: "Stay connected and track your fitness with our advanced smartwatch. Features include heart rate monitoring, GPS, sleep tracking, and smartphone notifications.",
            specs: ["Heart Rate Monitor", "GPS Tracking", "7-day Battery", "Water Resistant", "Sleep Tracking", "Smart Notifications"],
            inStock: true,
            isNew: true,
            isOnSale: false
        },
        {
            id: "e3",
            name: "Wireless Earbuds",
            price: 129.99,
            originalPrice: 159.99,
            image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
            category: "Electronics",
            rating: 4.6,
            reviewCount: 756,
            description: "True wireless earbuds with superior sound quality and comfortable fit. Perfect for workouts, calls, and music on the go.",
            specs: ["True Wireless", "24h Battery with Case", "Sweatproof", "Touch Controls", "Built-in Mic", "Bluetooth 5.0"],
            inStock: true,
            isNew: false,
            isOnSale: true
        }
    ],
    "clothing": [
        {
            id: "c1",
            name: "Premium Cotton T-Shirt",
            price: 29.99,
            originalPrice: 39.99,
            image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
            category: "Clothing",
            rating: 4.5,
            reviewCount: 432,
            description: "Classic fit t-shirt made from 100% organic cotton. Soft, breathable, and available in multiple colors.",
            specs: ["100% Organic Cotton", "Pre-shrunk Fabric", "Reinforced Seams", "Machine Washable", "S-XXL Sizes"],
            inStock: true,
            isNew: false,
            isOnSale: true
        },
        {
            id: "c2",
            name: "Slim Fit Jeans",
            price: 59.99,
            originalPrice: 79.99,
            image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
            category: "Clothing",
            rating: 4.6,
            reviewCount: 387,
            description: "Stylish slim fit jeans made from premium denim. Comfortable, durable, and perfect for any casual occasion.",
            specs: ["98% Cotton, 2% Elastane", "Slim Fit", "Mid-rise", "Five-pocket Style", "Machine Wash"],
            inStock: true,
            isNew: true,
            isOnSale: false
        }
    ],
    "home": [
        {
            id: "h1",
            name: "Ceramic Table Lamp",
            price: 49.99,
            originalPrice: 69.99,
            image: "https://images.unsplash.com/photo-1513506003901-1e6a229e622d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
            category: "Home & Living",
            rating: 4.7,
            reviewCount: 231,
            description: "Elegant ceramic table lamp that adds a touch of modern style to any room. Includes energy-efficient LED bulb.",
            specs: ["Ceramic Base", "Linen Shade", "LED Bulb Included", "On/Off Switch", "Height: 22\""],
            inStock: true,
            isNew: true,
            isOnSale: true
        }
    ]
};

// DOM Elements
const productsContainer = document.getElementById('products-container');
const categoryList = document.getElementById('category-list');
const currentCategoryElement = document.getElementById('current-category');
const modal = document.getElementById('product-modal');
const closeBtn = document.querySelector('.close');
const backToTopBtn = document.querySelector('.back-to-top');

// Modal elements
const modalImage = document.getElementById('modal-product-image');
const modalCategory = document.getElementById('modal-category');
const modalTitle = document.getElementById('modal-title');
const modalPrice = document.getElementById('modal-price');
const modalOriginalPrice = document.getElementById('modal-original-price');
const modalDescription = document.getElementById('modal-description');
const modalSpecs = document.getElementById('modal-specs');
const discountBadge = document.getElementById('discount-badge');

// Shopping cart
let cart = [];

// Initialize the application
function init() {
    loadCategories();
    loadProducts();
    setupEventListeners();
    updateCartCount();
}

// Load categories into navigation
function loadCategories() {
    const categories = Object.keys(productsData);
    
    // Add 'All' category
    const allCategory = document.createElement('a');
    allCategory.href = '#';
    allCategory.className = 'category-link active';
    allCategory.dataset.category = 'all';
    allCategory.textContent = 'All Products';
    categoryList.appendChild(allCategory);
    
    // Add other categories
    categories.forEach(category => {
        const categoryLink = document.createElement('a');
        categoryLink.href = '#';
        categoryLink.className = 'category-link';
        categoryLink.dataset.category = category.toLowerCase();
        categoryLink.textContent = category === 'home' ? 'Home & Living' : category.charAt(0).toUpperCase() + category.slice(1);
        categoryList.appendChild(categoryLink);
    });
}

// Load products based on category
function loadProducts(category = 'all') {
    // Show loading state
    productsContainer.innerHTML = `
        <div class="loading">
            <div class="loading-spinner"></div>
        </div>
    `;
    
    // Simulate API delay
    setTimeout(() => {
        productsContainer.innerHTML = '';
        let productsToShow = [];
        
        if (category === 'all') {
            // Show all products from all categories
            productsToShow = Object.values(productsData).flat();
            currentCategoryElement.textContent = 'All Products';
        } else if (productsData[category]) {
            // Show products from specific category
            productsToShow = productsData[category];
            const displayName = category === 'home' ? 'Home & Living' : 
                             category.charAt(0).toUpperCase() + category.slice(1);
            currentCategoryElement.textContent = displayName;
        } else {
            // No products in this category
            showEmptyState();
            return;
        }
        
        if (productsToShow.length === 0) {
            showEmptyState();
            return;
        }
        
        // Create product cards
        productsToShow.forEach(product => {
            createProductCard(product);
        });
    }, 500);
}

// Show empty state
function showEmptyState() {
    productsContainer.innerHTML = `
        <div class="empty-state">
            <i class="fas fa-box-open"></i>
            <h3>No products found</h3>
            <p>There are no products in this category yet.</p>
        </div>
    `;
}

// Create product card element
function createProductCard(product) {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.setAttribute('data-id', product.id);
    
    // Calculate discount percentage if on sale
    const discountPercentage = product.isOnSale 
        ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
        : 0;
    
    // Create stars for rating
    const stars = Array(5).fill('').map((_, i) => {
        return i < Math.floor(product.rating) 
            ? '<i class="fas fa-star"></i>'
            : i < Math.ceil(product.rating)
                ? '<i class="fas fa-star-half-alt"></i>'
                : '<i class="far fa-star"></i>';
    }).join('');
    
    productCard.innerHTML = `
        <div class="product-card-inner">
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="product-actions">
                    <button class="btn-icon wishlist-btn" aria-label="Add to wishlist">
                        <i class="far fa-heart"></i>
                    </button>
                    <button class="btn-icon quick-view-btn" aria-label="Quick view">
                        <i class="far fa-eye"></i>
                    </button>
                </div>
                ${product.isOnSale ? `<span class="sale-badge">-${discountPercentage}%</span>` : ''}
                ${product.isNew ? '<span class="new-badge">New</span>' : ''}
            </div>
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h3 class="product-title">${product.name}</h3>
                <div class="product-rating">
                    <div class="stars">
                        ${stars}
                        <span class="rating-value">${product.rating}</span>
                        <span class="review-count">(${product.reviewCount})</span>
                    </div>
                </div>
                <div class="product-price">
                    $${product.price.toFixed(2)}
                    ${product.isOnSale 
                        ? `<span class="original-price">$${product.originalPrice.toFixed(2)}</span>` 
                        : ''}
                </div>
            </div>
            <div class="product-card-footer">
                <button class="btn btn-outline add-to-cart-btn">
                    <i class="fas fa-shopping-cart"></i> Add to Cart
                </button>
            </div>
        </div>
    `;
    
    // Add event listeners
    productCard.querySelector('.quick-view-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        showProductDetails(product);
    });
    
    productCard.querySelector('.add-to-cart-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        addToCart(product);
    });
    
    productCard.addEventListener('click', () => showProductDetails(product));
    productsContainer.appendChild(productCard);
}

// Show product details in modal
function showProductDetails(product) {
    // Calculate discount percentage if on sale
    const discountPercentage = product.isOnSale 
        ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
        : 0;
    
    // Update modal content
    modalImage.src = product.image;
    modalImage.alt = product.name;
    modalCategory.textContent = product.category;
    modalTitle.textContent = product.name;
    modalPrice.textContent = product.price.toFixed(2);
    
    // Handle original price and discount badge
    if (product.isOnSale) {
        modalOriginalPrice.textContent = `$${product.originalPrice.toFixed(2)}`;
        modalOriginalPrice.style.display = 'inline';
        discountBadge.textContent = `-${discountPercentage}%`;
        discountBadge.style.display = 'inline-block';
    } else {
        modalOriginalPrice.style.display = 'none';
        discountBadge.style.display = 'none';
    }
    
    // Update description and specs
    modalDescription.textContent = product.description;
    
    // Create specs list
    modalSpecs.innerHTML = product.specs.map(spec => 
        `<li><i class="fas fa-check"></i> ${spec}</li>`
    ).join('');
    
    // Update add to cart button
    const addToCartBtn = document.getElementById('add-to-cart');
    addToCartBtn.onclick = () => addToCart(product);
    
    // Show modal
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    // Add animation class
    setTimeout(() => {
        document.querySelector('.modal-content').classList.add('show');
    }, 10);
}

// Add product to cart
function addToCart(product) {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCartCount();
    showToast(`${product.name} added to cart`);
}

// Update cart count in header
function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    const cartCount = document.querySelector('.cart-count');
    
    if (count > 0) {
        cartCount.textContent = count;
        cartCount.style.display = 'flex';
    } else {
        cartCount.style.display = 'none';
    }
}

// Show toast notification
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    // Add show class after a small delay to trigger animation
    setTimeout(() => {
        toast.classList.add('show');
    }, 10);
    
    // Remove toast after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
}

// Close modal
function closeModal() {
    document.querySelector('.modal-content').classList.remove('show');
    
    // Wait for animation to complete before hiding modal
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 300);
}

// Setup event listeners
function setupEventListeners() {
    // Category navigation
    categoryList.addEventListener('click', (e) => {
        e.preventDefault();
        const link = e.target.closest('.category-link');
        
        if (link) {
            // Update active state
            document.querySelectorAll('.category-link').forEach(a => a.classList.remove('active'));
            link.classList.add('active');
            
            // Load products for selected category
            const category = link.dataset.category;
            loadProducts(category);
            
            // Scroll to products section
            document.querySelector('.main-content').scrollIntoView({ behavior: 'smooth' });
        }
    });
    
    // Close modal when clicking the X or outside the modal
    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            closeModal();
        }
    });
    
    // Back to top button
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'auto';
        });
    }
    
    // Search functionality
    const searchBtn = document.querySelector('.search-btn');
    const searchBar = document.createElement('div');
    searchBar.className = 'search-bar';
    searchBar.innerHTML = `
        <form class="search-form">
            <input type="text" class="search-input" placeholder="Search for products..." required>
            <button type="submit" class="search-submit">
                <i class="fas fa-search"></i> Search
            </button>
        </form>
    `;
    
    document.querySelector('header').appendChild(searchBar);
    
    searchBtn.addEventListener('click', (e) => {
        e.preventDefault();
        searchBar.classList.toggle('active');
        
        if (searchBar.classList.contains('active')) {
            searchBar.querySelector('.search-input').focus();
        }
    });
    
    // Close search when clicking outside
    document.addEventListener('click', (e) => {
        if (!searchBar.contains(e.target) && e.target !== searchBtn) {
            searchBar.classList.remove('active');
        }
    });
    
    // Handle search form submission
    const searchForm = searchBar.querySelector('.search-form');
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const searchTerm = searchForm.querySelector('.search-input').value.trim();
        
        if (searchTerm) {
            // In a real app, this would be an API call
            console.log('Searching for:', searchTerm);
            searchBar.classList.remove('active');
            searchForm.reset();
            
            // Show search results
            showSearchResults(searchTerm);
        }
    });
}

// Show search results
function showSearchResults(searchTerm) {
    const searchResults = [];
    const searchLower = searchTerm.toLowerCase();
    
    // Search in product names and descriptions
    Object.values(productsData).flat().forEach(product => {
        if (product.name.toLowerCase().includes(searchLower) || 
            product.description.toLowerCase().includes(searchLower)) {
            searchResults.push(product);
        }
    });
    
    // Update UI with search results
    currentCategoryElement.textContent = `Search Results for "${searchTerm}"`;
    productsContainer.innerHTML = '';
    
    if (searchResults.length === 0) {
        productsContainer.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-search"></i>
                <h3>No results found</h3>
                <p>We couldn't find any products matching "${searchTerm}"</p>
            </div>
        `;
    } else {
        searchResults.forEach(product => {
            createProductCard(product);
        });
    }
    
    // Scroll to results
    document.querySelector('.main-content').scrollIntoView({ behavior: 'smooth' });
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
