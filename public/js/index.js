

window.addEventListener('load', () => {
    const marqueeContent = document.getElementById('marquee-content');
    const clone = marqueeContent.cloneNode(true);
    marqueeContent.parentNode.appendChild(clone);
});
document.getElementById('registration-form').addEventListener('submit', async (event) => {
    event.preventDefault();
 // Validation
 const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 if (!emailPattern.test(emailAddress)) {
   alert('Please enter a valid email address.');
   return;
 }

 if (fullName.trim() === '') {
   alert('Please enter your full name.');
   return;
 }

 const phonePattern = /^\d{10}$/;
 if (!phonePattern.test(phoneNumber)) {
   alert('Please enter a valid 10-digit phone number.');
   return;
 }

    const data = {
      fullName: document.getElementById('full-name').value,
      emailAddress: document.getElementById('email-address').value,
      phoneNumber: document.getElementById('phone-number').value,
      role: document.getElementById('role').value
    };

    const response = await fetch('http://localhost:3000/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      alert('Registration successful!');
    } else {
      alert('Registration failed. Please try again.');
    }
  });


function animate(obj, initVal, lastVal, duration) {
 let startTime = null;

//get the current timestamp and assign it to the currentTime variable
let currentTime = Date.now();

//pass the current timestamp to the step function
const step = (currentTime ) => {

//if the start time is null, assign the current time to startTime
if (!startTime) {
 startTime = currentTime ;
}

//calculate the value to be used in calculating the number to be displayed
const progress = Math.min((currentTime - startTime)/ duration, 1);

//calculate what to be displayed using the value gotten above
obj.innerHTML = Math.floor(progress * (lastVal - initVal) + initVal);

//checking to make sure the counter does not exceed the last value (lastVal)
if (progress < 1) {
 window.requestAnimationFrame(step);
} else {
    window.cancelAnimationFrame(window.requestAnimationFrame(step));
 }
};
//start animating
 window.requestAnimationFrame(step);
}
let text1 = document.getElementById('0101');
let text2 = document.getElementById('0102');
let text3 = document.getElementById('0103');
let text4=document.getElementById('0104');
const load = () => {
 animate(text1, 5000, 15000, 10000);
 animate(text3, 3000, 40000, 10000);
 animate(text4 ,0,30,10000);
}

