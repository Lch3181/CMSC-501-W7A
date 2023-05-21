function displayPrice() {
    // Get the selected service
    let selectedService = document.querySelector('input[name="service"]:checked');
  
    // If a service is selected, display its price, otherwise display a message
    if (selectedService) {
      document.getElementById('price-display').innerText = 'Price: $' + selectedService.value;
    } else {
      document.getElementById('price-display').innerText = 'Please select a service';
    }
  }
  