
// Task 2: Add Event Listener for Product Selection

const productSelector = document.getElementById('product-selector');// Display Product Selector
const quantityInput = document.getElementById('quantity'); // Display Quantity Input
const totalPriceElement = document.getElementById('total-price'); // Display Total Price
const placeOrderButton = document.getElementById('place-order'); // Display Place Order Button
const orderSummary = document.getElementById('order-summary'); // Display Order Summar


// Task 3: Calculate Total Price Dynamically

function updateTotalPrice() {
    const productPrice= parseFloat(productSelector.value); // Converting a non float value to a float(with decimal)
    const quantity = parseInt(quantityInput.value); // Converting a on integer number to an integer
    const totalPrice = productPrice * quantity; // Calculating total price

    totalPriceElement.textContent = totalPrice.toFixed(2); // Updating total price
}

productSelector.addEventListener('change', updateTotalPrice); //Task 2: Update price when product is selected 
quantityInput.addEventListener('input', updateTotalPrice); // Task 2: Update total price according to input quanity


// Task 4: Handle Order Submission

placeOrderButton.addEventListener('Click', function(){
    const selectedProduct = productSelector.options[productSelector.selectedIndex].text; // Display Select Product text
    const quantity = quantityInput.value; // Display quantity input value
    const totalPrice = totalPriceElement.textContent; // Display total Price

    orderSummary.textContent = `You order ${quantity} of ${slectedProduct}. Total price: $${totalPrice}`;  // Display order Summary
});