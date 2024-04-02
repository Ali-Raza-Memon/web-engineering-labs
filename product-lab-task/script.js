document.addEventListener("DOMContentLoaded", function() {
    const products = [
        { id: 1, name: "Product 1", price: 10.99 },
        { id: 2, name: "Product 2", price: 15.99 },
        { id: 3, name: "Product 3", price: 20.99 }
    ];

    const productList = document.getElementById("products");
    const cartItems = document.getElementById("cart-items");
    const totalPrice = document.getElementById("total-price");

    // Display products
    products.forEach(product => {
        const productItem = document.createElement("li");
        productItem.classList.add("product");
        productItem.innerHTML = `
            <span>${product.name} - $${product.price}</span>
            <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
        `;
        productList.appendChild(productItem);
    });

    // Add to cart event listener
    productList.addEventListener("click", function(event) {
        if (event.target.classList.contains("add-to-cart")) {
            const productId = parseInt(event.target.getAttribute("data-id"));
            const product = products.find(p => p.id === productId);
            if (product) {
                addToCart(product);
            }
        }
    });

    // Add item to cart function
    function addToCart(product) {
        const cartItem = document.createElement("li");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
            <span>${product.name}</span>
            <span>$${product.price}</span>
            <button class="remove-from-cart" data-id="${product.id}">Remove</button>
        `;
        cartItems.appendChild(cartItem);

        updateTotalPrice();
    }

    // Remove from cart event listener
    cartItems.addEventListener("click", function(event) {
        if (event.target.classList.contains("remove-from-cart")) {
            const productId = parseInt(event.target.getAttribute("data-id"));
            const cartItem = event.target.parentElement;
            cartItem.remove();

            updateTotalPrice();
        }
    });

  // Update total price function
function updateTotalPrice() {
    let total = 0;
    cartItems.querySelectorAll(".cart-item").forEach(cartItem => {
        const price = parseFloat(cartItem.querySelector("span:nth-child(2)").textContent.slice(1));
        total += price;
    });
    totalPrice.textContent = total.toFixed(2);
}

});
