const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose); // Pass mongoose instance to mongoose-sequence

// Define the user schema
const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    // Other fields...
});

// Apply the AutoIncrement plugin to auto-increment the 'userId' field
userSchema.plugin(AutoIncrement, { inc_field: 'userId' });

const User = mongoose.model('User', userSchema);

module.exports = User;
