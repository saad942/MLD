const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 3002; 
const MONGODB_URI = "mongodb://localhost:27017/MLD_bd"; 

// Middleware
app.use(express.json()); // Parse JSON requests
app.use(cors()); 
app.use(express.static('uploads')); 

// MongoDB connection
mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log('Connected to database');
    })
    .catch((err) => {
        console.error('Failed to connect to database:', err.message);
        process.exit(1); // Exit the process if unable to connect
    });

// Routes
app.use('/user', require('./routes/Routes')); // Define user routes

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
