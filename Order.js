document.getElementById('payment-method').addEventListener('change', function () {
  var cardDetailsContainer = document.getElementById('card-details-container');
  if (this.value === 'card') {
    cardDetailsContainer.style.display = 'block';
    document.getElementById('card-number').setAttribute('required', true);
    document.getElementById('card-pin').setAttribute('required', true);
    document.getElementById('amount').setAttribute('required', true);
  } else {
    cardDetailsContainer.style.display = 'none';
    document.getElementById('card-number').removeAttribute('required');
    document.getElementById('card-pin').removeAttribute('required');
    document.getElementById('amount').removeAttribute('required');
  }
});

document.getElementById('payment-form').addEventListener('submit', function (event) {
  // Validate name
  var name = document.getElementById('name').value;
  if (name.trim() === '') {
    alert('Please enter your name.');
    event.preventDefault();
    return;
  }

  // Validate email
  var email = document.getElementById('email').value;
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(email)) {
    alert('Please enter a valid email address.');
    event.preventDefault();
    return;
  }

  // Validate phone number
  var phone = document.getElementById('phone').value;
  if (phone.length !== 10 || isNaN(phone)) {
    alert('Please enter a valid 10-digit phone number.');
    event.preventDefault();
    return;
  }

  // If payment method is card, validate card details
  if (document.getElementById('payment-method').value === 'card') {
    var cardNumber = document.getElementById('card-number').value;
    var cardPin = document.getElementById('card-pin').value;
    var amount = document.getElementById('amount').value;

    if (cardNumber.length !== 16 || isNaN(cardNumber)) {
      alert('Please enter a valid 16-digit card number.');
      event.preventDefault();
      return;
    }

    if (cardPin.length !== 4 || isNaN(cardPin)) {
      alert('Please enter a valid 4-digit card PIN.');
      event.preventDefault();
      return;
    }

    if (amount <= 0) {
      alert('Please enter a valid amount.');
      event.preventDefault();
      return;
    }
  }
});