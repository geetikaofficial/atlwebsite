const express = require('express');
const path = require('path');
const fs=require("fs");
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();
const PORT = 3000;


// Set the view engine to EJS
app.set('view engine', 'ejs');

// Set the views directory
app.set('views', path.join(__dirname, 'views'));

// Set the public directory for static files
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Define routes
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});
app.get('/testimonials', (req, res) => {
    res.render('testimonials');
});

app.get('/franchise', (req, res) => {
    res.render('franchise');
});

app.get('/privacy', (req, res) => {
    res.render('privacy');
});
app.get('/gallery', (req, res) => {
    res.render('gallery');
});
app.get('/termsandconditions', (req, res) => {
    res.render('termsandconditions');
});


app.get('/course1', (req, res) => {
    res.sendFile(__dirname + '/public/html/course1.html');
});
app.get('/course2', (req, res) => {
    res.sendFile(__dirname + '/public/html/course2.html');
});

app.get('/course3', (req, res) => {
    res.sendFile(__dirname + '/public/html/course3.html');
});
app.get('/course4', (req, res) => {
    res.sendFile(__dirname + '/public/html/course4.html');
});
app.get('/course5', (req, res) => {
    res.sendFile(__dirname + '/public/html/course5.html');
});

app.get('/course6', (req, res) => {
    res.sendFile(__dirname + '/public/html/course6.html');
});
app.get('/course7', (req, res) => {
    res.sendFile(__dirname + '/public/html/course7.html');
});
app.get('/course8', (req, res) => {
    res.sendFile(__dirname + '/public/html/course8.html');
});



// app.post('/submit', (req, res) => {
//     const { name, email, message } = req.body;
  
//     res.send('Form submitted successfully!');
// });
app.post('/submit', (req, res) => {
    const { fullName, emailAddress, phoneNumber, role } = req.body;
  
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'geetikaranga02@gmail.com', // replace with your email
        pass: 'vfxr noaj hfhy eese'   // replace with your email password
      }
    });
  
    const mailOptions = {
      from: emailAddress,  // replace with your email
      to: 'geetikaranga02@gmail.com', // replace with the destination email
      subject: 'New Registration',
      text: `Name: ${fullName}\nEmail: ${emailAddress}\nPhone: ${phoneNumber}\nRole: ${role}`
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.status(500).send('Error sending email');
      } else {
        console.log('Email sent: ' + info.response);
        res.status(200).send('Registration successful');
      }
    });
  });
  

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
