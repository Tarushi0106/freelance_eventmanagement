const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

// REGISTER controller
const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
             qrCode,
        });

        await newUser.save();

          const qrData = `${newUser._id}`;
    const qrCode = await QRCode.toDataURL(qrData);

    res.status(201).json({ message: "User registered successfully", qrCode });

    
    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).json({ message: "Error registering user" });
    }
};

module.exports = { registerUser };
