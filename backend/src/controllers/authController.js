const express = require('express');
const db = require('../db/authQueries');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { validateUser } = require('../models/authModel'); 


// exports.checkemail = async (req,res) => {
//     const { email} = req.body;   
    
// }
exports.createUser = async (req, res) => {
    const { email, firstName, lastName, password } = req.body;

    if (!email || !firstName || !password || !lastName) {
        return res.status(400).json({ message: "All fields are required" });
    }
    console.log(req.body);
    try {
        // Validate the user data
        const validatedUser = validateUser(req.body);
        console.log(validatedUser)

        //Check if user Exist
        const userExist = await db.checkUserExists(email);
        if (userExist.length > 0) {
            return res.status(400).json({ error: 'User already exists' });
        }

     
        // Hash the password
        const hashedPassword = await bcrypt.hash(validatedUser.password, 10);

        const newUser = {
            ...validatedUser,
            password: hashedPassword,
        };

        // Register the new user
        const registeredUser = await db.registerUser(newUser);
        res.status(201).json({ message: "User created successfully", registeredUser });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        const loginedUser = await db.loginUser(req.body); 
        if (!loginedUser || loginedUser.length === 0) {
            return res.status(404).json({ message: "Invalid Credentials" });
        }
        
        const user = loginedUser[0];
        //Password Hash Comparing
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(404).json({ message: "Invalid Email or Password" });
        }
        //Token
        const token = jwt.sign(
            { userId: user.id, email: user.email },
             process.env.JWT_SECRET || 'jwt-secret',
            { expiresIn: '1h' }
        );
        
        res.status(200).json({ 
            message: "Login Successful!", 
            token: token, 
            user: user 
        });
        

    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: "Server error" });
    }
};
