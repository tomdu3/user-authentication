const User = require("../models/Users");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
  try {
    // Check if the request body is valid
    if (!req.body.username || !req.body.email || !req.body.password) {
      // determine which is missing
      let missingFields = [];
      if (!req.body.username) missingFields.push("'username'");
      if (!req.body.email) missingFields.push("'email'");
      if (!req.body.password) missingFields.push("'password'");
      missingFields = missingFields.join(', ');

      return res.status(400).json({ message: `Required fields missing: ${missingFields}` });
    }
    const { username, email, password } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    // get user details without password
    const userDetails = newUser.toObject();
    delete userDetails.password; 

    res.status(201).json({
      message: 'User registered successfully',
      user: userDetails,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const login = async (req, res) => {
  try {
    const { username = '', email = '', password} = req.body;

    // Check if the user exists
    const user = await User.findOne({ $or: [{ username }, { email }] });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Verify the password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.status(200).json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  register,
  login,
};
