document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.querySelectorAll('.cart-item');

    cartItems.forEach(item => {
        const btnMinus = item.querySelector('.btn-minus');
        const btnPlus = item.querySelector('.btn-plus');
        const btnDelete = item.querySelector('.btn-delete');
        const btnLike = item.querySelector('.btn-like');
        const quantitySpan = item.querySelector('.quantity');
        const itemTotalPrice = item.querySelector('.item-total-price');
        const itemPrice = parseFloat(item.dataset.price);

        btnMinus.addEventListener('click', () => {
            let quantity = parseInt(quantitySpan.textContent);
            if (quantity > 1) {
                quantity--;
                quantitySpan.textContent = quantity;
                itemTotalPrice.textContent = `$${(quantity * itemPrice).toFixed(2)}`;
                updateTotalPrice();
            }
        });

        btnPlus.addEventListener('click', () => {
            let quantity = parseInt(quantitySpan.textContent);
            quantity++;
            quantitySpan.textContent = quantity;
            itemTotalPrice.textContent = `$${(quantity * itemPrice).toFixed(2)}`;
            updateTotalPrice();
        });

        btnDelete.addEventListener('click', () => {
            item.remove();
            updateTotalPrice();
        });

        btnLike.addEventListener('click', () => {
            btnLike.classList.toggle('liked');
        });
    });

    function updateTotalPrice() {
        let totalPrice = 0;
        document.querySelectorAll('.cart-item').forEach(item => {
            const itemTotalPrice = item.querySelector('.item-total-price').textContent;
            totalPrice += parseFloat(itemTotalPrice.replace('$', ''));
        });
        document.getElementById('total-price').textContent = `$${totalPrice.toFixed(2)}`;
    }

    updateTotalPrice();
}); 
document.addEventListener('DOMContentLoaded', () => {
    const likeButtons = document.querySelectorAll('.btn-like');

    likeButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('liked');
        });
    });
});
