const User = require('../models/models-Usr')
const express = require('express');

const Login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find user by email
        const user = await User.findOne({ email });
        
        // Check if the user exists
        if (!user) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        // Directly compare password
        if (user.password !== password) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        // Successful login, return user data
        return res.status(200).json({
            status: 'success',
            message: 'Login successful',
            data: {
                username: user.username,
                email: user.email,
                // Add other user details as needed
            },
        });
    } catch (error) {
        console.error('Error logging in:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};


const CreateUser = async(req,res)=>{
    const { username , email, password } = req.body;
    // if(!username || !email || !password){
    //     return res.status(401).json({ message: 'Invalid username or password or email' });

    // }
    try{
    const user = new User({ username,email,password});
    await user.save();
    res.status(201).json({ status: 'success', user });
    
    
} catch (error) {
    console.error('Error create user in:', error);
    res.status(500).json({ error: 'Internal server error' });
}
}

const deleteUser =async(req,res)=>{
    const id =req.params.id
   try{
    const user =await User.findOneAndDelete({user_id:id})
    if (user) {
        res.send('User deleted successfully');
    } else {
        res.status(404).send('User not found');
    }
   }catch(error){
    console.error('Error deleting User:', error);
    res.status(500).send('Error deleting User');

   }
}


const getUserById =async(req,res)=>{
    const userid =req.params.userid
   try{
    const user =await User.findOne({user_id:userid})
    if (user) {
        res.send(' successfully');
    } else {
        res.status(404).send('user not found');
    }
   }catch(error){
    console.error('Error deleting user:', error);
    res.status(500).send('Error deleting user');

   }
}

module.exports = { Login, CreateUser ,getUserById ,deleteUser};
