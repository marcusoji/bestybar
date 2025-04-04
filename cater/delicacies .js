
// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Order Functionality
function orderItem(itemName, price) {
    const phone = "2348037117424";
    const message = `I want to order ${itemName} for ₦${price} from Besty Bar`;
    const encodedMessage = encodeURIComponent(message);
    
    window.open(`https://wa.me/${phone}?text=${encodedMessage}`, '_blank');
    
    // Optional: Add to cart logic can be added here
    console.log(`Ordered: ${itemName} - ₦${price}`);
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('nav') && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
    }
});
