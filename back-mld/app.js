const express = require('express');
const mongoose = require ('mongoose');
require('dotenv').config();
const cors = require('cors');
const app = express();
const PORT =process.env.PORT || 3002;
const MONGODB_URI =process.env.MONGODB_URI || "mongodb://localhost:27017/MLD_bd"

app.use(express.json());
app.use(cors());
app.use(express.static('uploads'))

mongoose.connect(MONGODB_URI)
    .then(()=>{
        console.log('connected to database');
    })
    .catch((err)=>{
        console.error('Failed to connect to database', err.message);
        process.exit(1);
    });

    



app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})