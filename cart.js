 function handlePaymentSelection(event) {
    const paymentSection = document.querySelector('#payment-section');

    if (event.target.value === 'visa' && event.target.checked) {
        if (!document.querySelector('.visa-details')) {
            const visaDiv = document.createElement('div');
            visaDiv.className = 'visa-details'; 
            const visaNumber = document.createElement('input');
            visaNumber.placeholder = "Enter Your Card Number"
            visaNumber.type = 'text';
            visaNumber.className = 'visa-number';
            const cvv = document.createElement('input');
            cvv.placeholder = "CVV";
            cvv.type = 'text';
            cvv.className = 'visa-cvv';
            visaDiv.appendChild(visaNumber);
            visaDiv.appendChild(cvv);
            paymentSection.appendChild(visaDiv);
        }
    } else {
        const existingVisaDiv = document.querySelector('.visa-details');
        if (existingVisaDiv) {
            existingVisaDiv.remove();
        }
    }
}

const radioButtons = document.querySelectorAll('.radio');
radioButtons.forEach((radio) => {
    radio.addEventListener('change', handlePaymentSelection);
}
);
function handleClick() {
    const paymentChoice = document.querySelector('input[type="radio"]:checked');
    const orderMessage = document.createElement('h1');
    orderMessage.textContent = "Order has been Placed Succesfully !";
    orderMessage.id = "order-message"
    if (paymentChoice.value == "cash" || (paymentChoice.value == "visa" && visaNumber && cvv)){
        document.getElementById("cart-content").remove();
        document.getElementById("cart").appendChild(orderMessage);
    }
}
