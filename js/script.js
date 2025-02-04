// Global variables
let cart = [];
const products = [
    // Fashion (15 products)
    { id: 1, name: 'Classic T-Shirt', category: 'fashion', price: 299.99, description: 'Comfortable cotton t-shirt', image: 'images/fashion/tshirt.webp' },
    { id: 2, name: 'Denim Jeans', category: 'fashion', price: 799.99, description: 'Slim fit blue denim', image: 'images/fashion/Slimfitbluedenim.webp' },
    { id: 13, name: 'Summer Dress', category: 'fashion', price: 599.99, description: 'Flowy summer dress', image: 'images/fashion/Flowysummerdress.webp' },
    { id: 14, name: 'Formal Shirt', category: 'fashion', price: 499.99, description: 'Crisp cotton formal shirt', image: 'images/fashion/Crispcottonformalshirt.webp' },
    { id: 15, name: 'Leather Jacket', category: 'fashion', price: 1999.99, description: 'Classic black leather jacket', image: 'images/fashion/leatherjacket.jpg' },
    { id: 16, name: 'Hoodie', category: 'fashion', price: 449.99, description: 'Warm and comfortable hoodie', image: 'images/fashion/hoodie.jpg' },
    { id: 17, name: 'Cargo Pants', category: 'fashion', price: 699.99, description: 'Utility style cargo pants', image: 'images/fashion/cargoPants.jpeg' },
    { id: 18, name: 'Polo Shirt', category: 'fashion', price: 399.99, description: 'Classic polo shirt', image: 'images/fashion/polo-shirt.jpeg' },
    { id: 19, name: 'Sweater', category: 'fashion', price: 549.99, description: 'Knitted winter sweater', image: 'images/fashion/sweater.avif' },
    { id: 20, name: 'Blazer', category: 'fashion', price: 1299.99, description: 'Tailored slim-fit blazer', image: 'images/fashion/blazer.webp' },
    { id: 21, name: 'Shorts', category: 'fashion', price: 349.99, description: 'Casual summer shorts', image: 'images/fashion/shorts.avif' },
    { id: 22, name: 'Tracksuit', category: 'fashion', price: 899.99, description: 'Comfortable tracksuit set', image: 'images/fashion/trag-suit.webp' },
    { id: 63, name: 'Bomber Jacket', category: 'fashion', price: 1499.99, description: 'Classic bomber jacket', image: 'images/fashion/bomber-jacket.avif' },
    { id: 64, name: 'Chino Pants', category: 'fashion', price: 599.99, description: 'Versatile chino trousers', image: 'images/fashion/Versatilechinotrousers.avif' },
    { id: 65, name: 'Windbreaker', category: 'fashion', price: 799.99, description: 'Lightweight wind-resistant jacket', image: 'images/fashion/wind-resistant.jpg' },
    
    // Footwear (15 products)
    { id: 3, name: 'Running Shoes', category: 'footwear', price: 999.99, description: 'Lightweight athletic shoes', image: 'images/footwear/running-shoes.webp' },
    { id: 4, name: 'Casual Sneakers', category: 'footwear', price: 599.99, description: 'Comfortable everyday sneakers', image: 'images/footwear/sneakers.webp' },
    { id: 23, name: 'Formal Shoes', category: 'footwear', price: 1299.99, description: 'Elegant leather dress shoes', image: 'images/footwear/Elegantleatherdressshoes.webp' },
    { id: 24, name: 'Hiking Boots', category: 'footwear', price: 1499.99, description: 'Durable hiking boots', image: 'images/footwear/Durablehikingboots.webp' },
    { id: 25, name: 'Sandals', category: 'footwear', price: 399.99, description: 'Comfortable summer sandals', image: 'images/footwear/summersandals.avif' },
    { id: 26, name: 'Basketball Shoes', category: 'footwear', price: 1099.99, description: 'High-performance basketball shoes', image: 'images/footwear/High-performancebasketballshoes.avif' },
    { id: 27, name: 'Chelsea Boots', category: 'footwear', price: 899.99, description: 'Classic Chelsea ankle boots', image: 'images/footwear/ankleboots.jpg' },
    { id: 28, name: 'Slip-on Shoes', category: 'footwear', price: 499.99, description: 'Easy slip-on casual shoes', image: 'images/footwear/slip-on-shoes.jpg' },
    { id: 29, name: 'Winter Boots', category: 'footwear', price: 1199.99, description: 'Warm insulated winter boots', image: 'images/footwear/winter-boots.webp' },
    { id: 30, name: 'Loafers', category: 'footwear', price: 799.99, description: 'Comfortable leather loafers', image: 'images/footwear/Loafers.avif' },
    { id: 31, name: 'Training Shoes', category: 'footwear', price: 699.99, description: 'Versatile training shoes', image: 'images/footwear/training-shoes.jpeg' },
    { id: 32, name: 'Boat Shoes', category: 'footwear', price: 599.99, description: 'Classic nautical boat shoes', image: 'images/footwear/boat-shoes.jpeg' },
    { id: 66, name: 'Ballet Flats', category: 'footwear', price: 499.99, description: 'Comfortable women\'s ballet flats', image: 'images/footwear/ballet-flats.jpeg' },
    { id: 67, name: 'Climbing Shoes', category: 'footwear', price: 1299.99, description: 'Specialized rock climbing footwear', image: 'images/footwear/climbing-shoes.jpeg' },
    { id: 68, name: 'Orthopedic Shoes', category: 'footwear', price: 1599.99, description: 'Supportive orthopedic walking shoes', image: 'images/footwear/orthopedic-shoes.webp' },
    
    // Electronics (15 products)
    { id: 5, name: 'Wireless Earbuds', category: 'electronics', price: 1299.99, description: 'Noise-cancelling bluetooth earbuds', image: 'images/electronics/bluetooth_earbuds.jpeg' },
    { id: 6, name: 'Smart Watch', category: 'electronics', price: 1999.99, description: 'Fitness tracking smartwatch', image: 'images/electronics/Smart Watch.jpeg' },
    { id: 33, name: 'Laptop', category: 'electronics', price: 59999.99, description: 'High-performance laptop', image: 'images/electronics/Laptop.jpeg' },
    { id: 34, name: 'Tablet', category: 'electronics', price: 3499.99, description: 'Portable tablet device', image: 'images/electronics/Portabletabletdevice.jpeg' },
    { id: 35, name: 'Wireless Charger', category: 'electronics', price: 3999.99, description: 'Fast wireless charging pad', image: 'images/electronics/Wireless Charger.jpeg' },
    { id: 36, name: 'Bluetooth Speaker', category: 'electronics', price: 7999.99, description: 'Portable bluetooth speaker', image: 'images/electronics/Portable bluetooth speaker.jpeg' },
    { id: 37, name: 'Smartphone', category: 'electronics', price: 5999.99, description: 'Latest model smartphone', image: 'images/electronics/smartphone.avif' },
    { id: 38, name: 'Headphones', category: 'electronics', price: 2499.99, description: 'Premium headphones', image: 'images/electronics/Noise-CancellingHeadphones.jpeg' },
    { id: 39, name: 'Smart TV', category: 'electronics', price: 35999.99, description: '4K Smart Television', image: 'images/electronics/SmartTV.jpeg' },
    { id: 40, name: 'Digital Camera', category: 'electronics', price: 3999.99, description: 'High-resolution digital camera', image: 'images/electronics/DigitalCamera.jpeg' },
    { id: 41, name: 'Power Bank', category: 'electronics', price: 2599.99, description: 'High-capacity portable charger', image: 'images/electronics/power-bank.jpeg' },
    { id: 42, name: 'Gaming Console', category: 'electronics', price: 3999.99, description: 'Latest gaming console', image: 'images/electronics/gaming-console.jpeg' },
    { id: 69, name: 'E-Reader', category: 'electronics', price: 1299.99, description: 'Digital book reader with backlight', image: 'images/electronics/e-reader.jpeg' },
    { id: 70, name: 'Action Camera', category: 'electronics', price: 2499.99, description: 'Waterproof 4K action camera', image: 'images/electronics/action-camera.jpeg' },
    { id: 71, name: 'Smart Home Hub', category: 'electronics', price: 1499.99, description: 'Central smart home control device', image: 'images/electronics/smart-home-hub.jpeg' },
    
    // Home Essentials (15 products)
    { id: 7, name: 'Microfiber Bedsheet Set', category: 'home-essentials', price: 499.99, description: 'Soft and breathable bedsheets', image: 'images/homeEssentials/MicrofiberBedsheetSet.webp' },
    { id: 8, name: 'Kitchen Blender', category: 'home-essentials', price: 899.99, description: 'High-power blender for smoothies', image: 'images/homeEssentials/KitchenBlender.jpeg' },
    { id: 43, name: 'Coffee Maker', category: 'home-essentials', price: 799.99, description: 'Programmable coffee machine', image: 'images/homeEssentials/CoffeeMaker.jpeg' },
    { id: 44, name: 'Throw Pillows', category: 'home-essentials', price: 299.99, description: 'Decorative throw pillow set', image: 'images/homeEssentials/ThrowPillows.jpeg' },
    { id: 45, name: 'Cookware Set', category: 'home-essentials', price: 1999.99, description: 'Non-stick cookware set', image: 'images/homeEssentials/CookwareSet.jpeg' },
    { id: 46, name: 'Vacuum Cleaner', category: 'home-essentials', price: 1499.99, description: 'Powerful cordless vacuum', image: 'images/homeEssentials/VacuumCleaner.jpeg' },
    { id: 47, name: 'Bath Towel Set', category: 'home-essentials', price: 399.99, description: 'Soft and absorbent towel set', image: 'images/homeEssentials/BathTowelSet.jpeg' },
    { id: 48, name: 'Electric Kettle', category: 'home-essentials', price: 499.99, description: 'Quick-boil electric kettle', image: 'images/homeEssentials/ElectricKettle.jpeg' },
    { id: 49, name: 'Curtains', category: 'home-essentials', price: 699.99, description: 'Blackout window curtains', image: 'images/homeEssentials/curtains.jpeg' },
    { id: 50, name: 'Desk Lamp', category: 'home-essentials', price: 599.99, description: 'Adjustable LED desk lamp', image: 'images/homeEssentials/DeskLamp.jpeg' },
    { id: 51, name: 'Air Purifier', category: 'home-essentials', price: 1299.99, description: 'HEPA air purification system', image: 'images/homeEssentials/air-purifier.jpeg' },
    { id: 52, name: 'Kitchen Knife Set', category: 'home-essentials', price: 999.99, description: 'Professional kitchen knife set', image: 'images/homeEssentials/knife-set.jpeg' },
    { id: 72, name: 'Humidifier', category: 'home-essentials', price: 799.99, description: 'Ultrasonic room humidifier', image: 'images/homeEssentials/humidifier.jpeg' },
    { id: 73, name: 'Rice Cooker', category: 'home-essentials', price: 699.99, description: 'Multi-function rice cooker', image: 'images/homeEssentials/rice-cooker.jpeg' },
    { id: 74, name: 'Clothes Steamer', category: 'home-essentials', price: 599.99, description: 'Portable garment steamer', image: 'images/homeEssentials/clothes-steamer.jpeg' },
    
    // Accessories (15 products)
    { id: 9, name: 'Leather Wallet', category: 'accessories', price: 399.99, description: 'Genuine leather bifold wallet', image: 'images/accessories/LeatherWallet.jpeg' },
    { id: 10, name: 'Sunglasses', category: 'accessories', price: 699.99, description: 'Polarized UV protection sunglasses', image: 'images/accessories/Sunglasses.jpeg' },
    { id: 53, name: 'Watch', category: 'accessories', price: 1499.99, description: 'Classic analog wristwatch', image: 'images/accessories/Watch.jpeg' },
    { id: 54, name: 'Belt', category: 'accessories', price: 299.99, description: 'Genuine leather belt', image: 'images/accessories/belt.jpeg' },
    { id: 55, name: 'Backpack', category: 'accessories', price: 799.99, description: 'Durable laptop backpack', image: 'images/accessories/backpack.jpeg' },
    { id: 56, name: 'Baseball Cap', category: 'accessories', price: 249.99, description: 'Adjustable baseball cap', image: 'images/accessories/baseball.jpeg' },
    { id: 57, name: 'Phone Case', category: 'accessories', price: 199.99, description: 'Protective smartphone case', image: 'images/accessories/phone-case.jpeg' },
    { id: 58, name: 'Scarf', category: 'accessories', price: 349.99, description: 'Soft winter scarf', image: 'images/accessories/scarf.jpeg' },
    { id: 59, name: 'Tie', category: 'accessories', price: 299.99, description: 'Silk necktie', image: 'images/accessories/tie.jpeg' },
    { id: 60, name: 'Keychain', category: 'accessories', price: 149.99, description: 'Stylish metal keychain', image: 'images/accessories/keychain.jpeg' },
    { id: 61, name: 'Umbrella', category: 'accessories', price: 399.99, description: 'Compact folding umbrella', image: 'images/accessories/umbrella.jpeg' },
    { id: 62, name: 'Gloves', category: 'accessories', price: 299.99, description: 'Leather winter gloves', image: 'images/accessories/gloves.jpeg' },
    { id: 75, name: 'Travel Adapter', category: 'accessories', price: 349.99, description: 'Universal  power adapter', image: 'images/accessories/travel-adapter.jpeg' },
    { id: 76, name: 'Laptop Sleeve', category: 'accessories', price: 249.99, description: 'Protective laptop carrying sleeve', image: 'images/accessories/laptop-sleeve.webp' },
    { id: 77, name: 'Earphone Case', category: 'accessories', price: 199.99, description: 'case for wireless earphones', image: 'images/accessories/earphone-case.jpeg' }
];

document.addEventListener('DOMContentLoaded', () => {
    cart = loadCart();

    const currentPage = window.location.pathname.split('/').pop();

    switch(currentPage) {
        case 'products.html':
            initializeProductPage();
            break;
        case 'cart.html':
            initializeCartPage();
            break;
        case 'checkout.html':
            initializeCheckoutPage();
            break;
        case 'success.html':
            initializeSuccessPage();
            break;
    }
});

function initializeProductPage() {
    const productsGrid = document.querySelector('.products-grid');
    const categoryButtons = document.querySelectorAll('.category-btn');

    renderProducts(products);

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const category = button.dataset.category;
            const filteredProducts = category === 'all' 
                ? products 
                : products.filter(product => product.category === category);

            renderProducts(filteredProducts);
        });
    });
}

function renderProducts(productsToRender) {
    const productsGrid = document.querySelector('.products-grid');
    productsGrid.innerHTML = ''; 

    productsToRender.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-card-image">
            <div class="product-card-details">
                <div class="product-card-header">
                    <h3 class="product-card-name">${product.name}</h3>
                    <span class="product-card-price">₹${product.price.toFixed(2)}</span>
                </div>
                <p class="product-card-description">${product.description}</p>
                <button onclick="addToCart(${product.id})" class="product-card-add-btn">Add to Cart</button>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });
}

function updateProductCardTotal(productId) {
    const productCard = document.querySelector(`.product-card[data-product-id="${productId}"]`);
    if (productCard) {
        const quantityInput = productCard.querySelector('.quantity-input');
        const totalSpan = productCard.querySelector('.product-card-total');
        const priceSpan = productCard.querySelector('.product-card-price');
        
        const quantity = parseInt(quantityInput.value);
        const price = parseFloat(priceSpan.textContent.replace('₹', ''));
        
        totalSpan.textContent = `Total: ₹${(quantity * price).toFixed(2)}`;
    }
}

function incrementQuantity(productId) {
    const cartItem = cart.find(item => item.id === productId);
    
    if (cartItem) {
        cartItem.quantity++;
        saveCart();
        updateCartDisplay();
    }
}

function decrementQuantity(productId) {
    const cartItem = cart.find(item => item.id === productId);
    
    if (cartItem) {
        // Remove item if quantity would go below 1
        if (cartItem.quantity > 1) {
            cartItem.quantity--;
        } else {
            removeFromCart(productId);
            return;
        }
        
        saveCart();
        updateCartDisplay();
    }
}

function updateQuantity(productId, newQuantity) {
    const cartItem = cart.find(item => item.id === productId);
    
    if (cartItem) {
        // Ensure quantity is at least 1
        cartItem.quantity = Math.max(1, newQuantity);
        
        saveCart();
        updateCartDisplay();
    }
}

// Cart Management Functions
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingCartItem = cart.find(item => item.id === productId);

    if (existingCartItem) {
        existingCartItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    saveCart();
    updateCartDisplay();
    showCartNotification(product.name);
}

function showCartNotification(productName) {
    const notification = document.createElement('div');
    notification.classList.add('cart-notification');
    notification.textContent = `${productName} added to cart!`;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 2000);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartDisplay();
}

function saveCart() {
    localStorage.setItem('SJBRANDS-cart', JSON.stringify(cart));
}

function loadCart() {
    const savedCart = localStorage.getItem('SJBRANDS-cart');
    return savedCart ? JSON.parse(savedCart) : [];
}

function initializeCartPage() {
    updateCartDisplay();
    
    // Add event listener for checkout button
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (cart.length > 0) {
                window.location.href = 'checkout.html';
            } else {
                alert('Your cart is empty. Please add items to proceed.');
            }
        });
    }
}

function updateCartDisplay() {
    const currentPage = window.location.pathname.split('/').pop();

    if (currentPage === 'cart.html') {
        const cartItemsContainer = document.querySelector('.cart-items');
        const totalItemsSpan = document.getElementById('total-items');
        const totalPriceSpan = document.getElementById('total-price');

        if (cartItemsContainer && totalItemsSpan && totalPriceSpan) {
            cartItemsContainer.innerHTML = '';
            let totalItems = 0;
            let totalPrice = 0;

            cart.forEach(item => {
                const cartItemElement = document.createElement('div');
                cartItemElement.classList.add('cart-item');
                cartItemElement.innerHTML = `
                    <div class="cart-item-details">
                        <h3>Item name :<br>${item.name}</h3>
                        <img src="${item.image}" alt="${item.name}" class="product-card-image">
                        <span class="cart-item-price">₹${item.price.toFixed(2)}</span>
                        <div class="quantity-control">
                            <button onclick="decrementQuantity(${item.id})" class="quantity-btn">-</button>
                            <input type="number" min="1" value="${item.quantity}" 
                                    onchange="updateQuantity(${item.id}, parseInt(this.value))">
                            <button onclick="incrementQuantity(${item.id})" class="quantity-btn">+</button>
                        </div>
                        <h4>Remove Product:<button onclick="removeFromCart(${item.id})" class="remove-btn"><i class="fa-solid fa-trash"></i></button></h4>
                        <span class="item-total">Total Price: ₹${(item.price * item.quantity).toFixed(2)} Quantity:${item.quantity}</span>
                    </div>
                `;
                cartItemsContainer.appendChild(cartItemElement);

                totalItems += item.quantity;
                totalPrice += item.price * item.quantity;
            });

            totalItemsSpan.textContent = totalItems;
            totalPriceSpan.textContent = totalPrice.toFixed(2);
        }
    }
}

// Checkout Page Functions
function initializeCheckoutPage() {
    cart = loadCart();
    const checkoutCartItems = document.getElementById('checkout-cart-items');
    const checkoutTotalPrice = document.getElementById('checkout-total-price');
    let totalPrice = 0;

    checkoutCartItems.innerHTML = '';
    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('checkout-item');
        itemElement.innerHTML = `
            <p>${item.name} x ${item.quantity} - ₹${(item.price * item.quantity).toFixed(2)}</p>
        `;
        checkoutCartItems.appendChild(itemElement);
        totalPrice += item.price * item.quantity;
    });

    checkoutTotalPrice.textContent = totalPrice.toFixed(2);

    const checkoutForm = document.getElementById('checkout-form');
    checkoutForm.addEventListener('submit', handleCheckout);
}

function handleCheckout(event) {
    event.preventDefault();
    // In a real application, you would send this data to a backend server
    const formData = new FormData(event.target);
    const orderDetails = Object.fromEntries(formData.entries());

    // Generate a mock order number and delivery date
    const orderNumber = Math.floor(Math.random() * 1000000);
    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 5);

    // Store order details in localStorage for success page
    localStorage.setItem('SJBRANDS-order', JSON.stringify({
        ...orderDetails,
        orderNumber,
        deliveryDate: deliveryDate.toDateString(),
        cart
    }));

    // Clear the cart
    localStorage.removeItem('SJBRANDS-cart');

    // Redirect to success page
    window.location.href = 'success.html';
}

// Success Page Functions
function initializeSuccessPage() {
    const orderData = JSON.parse(localStorage.getItem('SJBRANDS-order'));
    
    if (orderData) {
        document.getElementById('order-number').textContent = orderData.orderNumber;
        document.getElementById('delivery-date').textContent = orderData.deliveryDate;
        
        // Optional: Clear order data after displaying
        localStorage.removeItem('SJBRANDS-order');
    }
}

// Responsive Navigation
function toggleMobileMenu() {
    const navMenu = document.querySelector('nav ul');
    navMenu.classList.toggle('active');
}
