// server.js
import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import cors from 'cors'
import mongoose from 'mongoose';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3002;

// Middleware to parse JSON body
app.use(express.json());
app.use(cors()) 

// MongoDb database
let conn = await mongoose.connect("mongodb+srv://mothukuriavinash04:Stormbreaker%4004@cluster0.hx4sc.mongodb.net/")

const userDataSchema = mongoose.Schema({
  name:String,
  email:String,
  message:String
})

const Data = mongoose.model('UserInfo',userDataSchema)


app.post('/submit-form' , async(req,res)=>{
  const {name,email,message} = req.body;

  const newData = new Data({name,email,message})
  await newData.save();
  res.status(200).send("Completed")
})


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
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'mothukuriavinash04@gmail.com',
    subject: `Query from ${name}`,
    text: `Email from: ${email}\n${message}`,
    replyTo: email,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Failed to send email');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});