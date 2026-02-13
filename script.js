// Select all elements with the class 'item'
const items = document.querySelectorAll('.item');

// Set up the observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // If the item has entered the screen
        if (entry.isIntersecting) {
            // Add the 'show' class to trigger the CSS animation
            entry.target.classList.add('show');
        } 
    });
}, {
    // Triggers when 15% of the element is visible in the viewport
    threshold: 0.15 
});

// Tell the observer to keep an eye on each item
items.forEach((item) => {
    observer.observe(item);
});
