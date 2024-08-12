// JavaScript to handle filter changes and other dynamic actions

document.querySelectorAll('.book-now').forEach(button => {
    button.addEventListener('click', () => {
        alert('Booking this property!');
        // Implement booking logic here
    });
});

document.querySelector('#location-filter').addEventListener('change', function() {
    // Implement filtering logic based on selected location
});

// Repeat for other filters





let cartTotal = 0;

document.querySelectorAll('.book-now').forEach(button => {
    button.addEventListener('click', function() {
        const item = this.parentElement;
        const title = item.querySelector('h2').innerText;
        const price = parseInt(item.querySelector('p:nth-child(3)').innerText.replace('$', ''));

        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <h3>${title}</h3>
            <p>Booking Date: <input type="date"></p>
            <p>Price: $${price}/night</p>
            <button class="remove">Remove</button>
        `;

        document.querySelector('.cart-items').appendChild(cartItem);
        cartTotal += price;
        document.getElementById('cart-total').innerText = cartTotal;

        cartItem.querySelector('.remove').addEventListener('click', function() {
            cartTotal -= price;
            document.getElementById('cart-total').innerText = cartTotal;
            cartItem.remove();
        });
    });
});



document.getElementById('checkout-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const paymentMethod = document.getElementById('payment-method').value;

    alert(`Booking completed!\nName: ${name}\nEmail: ${email}\nPayment Method: ${paymentMethod}`);
    // Implement further checkout logic such as sending data to server
});
