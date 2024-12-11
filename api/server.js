// server.js
import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3002;

// Middleware to parse JSON body
app.use(express.json());
app.use(cors());

// MongoDB database connection
// let conn =  mongoose.connect('mongodb://localhost:27019/mydatabase', )
//   .then(() => console.log('Connected to MongoDB'))
//   .catch(err => console.error('Could not connect to MongoDB...', err));

 // let conn =  mongoose.connect('mongodb+srv://mothukuriavinash04:Stormbreaker%4004@cluster0.hx4sc.mongodb.net/mydatabase')
 // .then(() => console.log('Connected to MongoDB'))
 // .catch(err => console.error('Could not connect to MongoDB...', err));

// Schema and model for storing user data
//const userDataSchema = mongoose.Schema({
//  name: String,
//  email: String,
//  message: String,
//});

//const Data = mongoose.model('UserInfo', userDataSchema, 'userinfos');

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
 service: 'gmail',
  auth: {
   user: process.env.EMAIL_USER, // From .env
    pass: process.env.EMAIL_PASS, // From .env
  },
  pool: true,
  rateLimit: 1,
 maxConnections: 5,
});

// Email sending route
app.post('/api/server', async (req, res) => {
  console.log("Received info ", req.body);
  
  const { name, email, message } = req.body;

  try {
    // Save the user data to MongoDB
    const newData = new Data({ name, email, message });
    await newData.save();

    // Set up mail options
    const mailOptions = {
      from: email,
      to: 'mothukuriavinash04@gmail.com',
      subject: `Query from ${name}`,
      text: `Email from: ${email}\n${message}`,
     replyTo: email,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);

    // Respond with success after both actions are complete
    res.status(200).send('Email sent successfy and user saved to database');
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Error occurred');
  }
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
