document.getElementById('contact-form').addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const message = document.getElementById('message').value;
  
    // Validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
  
    if (firstName.trim() === '') {
      alert('Please enter your first name.');
      return;
    }
  
    if (lastName.trim() === '') {
      alert('Please enter your last name.');
      return;
    }
  
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phoneNumber)) {
      alert('Please enter a valid 10-digit phone number.');
      return;
    }
  
    if (message.trim() === '') {
      alert('Please enter your message.');
      return;
    }
  
    const data = {
      firstName,
      lastName,
      email,
      phoneNumber,
      message
    };
  
    // Here, you'll replace 'http://localhost:3000/submit' with your actual backend URL
    const response = await fetch('http://localhost:3000/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
  
    if (response.ok) {
      alert('Message sent successfully!');
    } else {
      alert('Failed to send message. Please try again later.');
    }
  });
  