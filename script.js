// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Example of adding a click event to "Buy Now" buttons
    const buttons = document.querySelectorAll('.buy-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Thank you for your purchase!');
        });
    });
});
