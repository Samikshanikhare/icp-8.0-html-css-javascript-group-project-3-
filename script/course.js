document.addEventListener('DOMContentLoaded', function () {
    const cartIcon = document.querySelector('.cart');
    const cartItemsContainer = document.querySelector('.items');
    const cartItems = [];

    cartIcon.addEventListener('click', function () {
        cartItemsContainer.style.display = cartItemsContainer.style.display === 'none' ? 'block' : 'none';
    });

    window.addToCart = function (course) {
        cartItems.push(course);
        alert(`${course.name} has been added to the cart`);
        updateCartDisplay();
    }

    function updateCartDisplay() {
        if (cartItems.length === 0) {
            cartItemsContainer.innerHTML = '<span>No items in the cart</span>';
        } else {
            cartItemsContainer.innerHTML = '<ul>' + cartItems.map(item => `<li>${item.name} - ${item.price}</li>`).join('') + '</ul>';
        }
    }

    updateCartDisplay();
});
