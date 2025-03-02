document.addEventListener("DOMContentLoaded", function () {
    let cart = JSON.parse(localStorage.getItem("cart")) || {}; // Load cart from LocalStorage

    // Function to update cart UI
    function updateCartUI() {
        let cartContainer = document.querySelector(".cart-items");
        let cartTotal = document.querySelector(".cart-total");
        cartContainer.innerHTML = "";

        let total = 0;
        Object.keys(cart).forEach(productId => {
            let item = cart[productId];
            let itemTotal = item.price * item.quantity;
            total += itemTotal;

            cartContainer.innerHTML += `
                <div class="cart-item" data-id="${productId}">
                    <span>${item.name}</span>
                    <input type="number" class="cart-quantity" value="${item.quantity}" data-id="${productId}">
                    <span>£${itemTotal.toFixed(2)}</span>
                    <button class="remove-cart-item" data-id="${productId}">Remove</button>
                </div>
            `;
        });

        cartTotal.innerHTML = `Total: £${total.toFixed(2)}`;
        localStorage.setItem("cart", JSON.stringify(cart)); // Save cart to LocalStorage
    }

    // Add to Cart
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function () {
            let productId = this.dataset.id;
            let productName = this.dataset.name;
            let productPrice = parseFloat(this.dataset.price);

            if (cart[productId]) {
                cart[productId].quantity++;
            } else {
                cart[productId] = { name: productName, price: productPrice, quantity: 1 };
            }
            updateCartUI();
        });
    });

    // Update Cart Quantity
    document.addEventListener("change", function (event) {
        if (event.target.classList.contains("cart-quantity")) {
            let productId = event.target.dataset.id;
            cart[productId].quantity = parseInt(event.target.value);
            updateCartUI();
        }
    });

    // Remove Cart Item
    document.addEventListener("click", function (event) {
        if (event.target.classList.contains("remove-cart-item")) {
            let productId = event.target.dataset.id;
            delete cart[productId];
            updateCartUI();
        }
    });

    // Initialize cart UI
    updateCartUI();
});
