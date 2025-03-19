const User = require("../models/Users");

const register = async (req, res) => {
  return res.status(400).json({
    message: "Registration initiated",
  });
};

const login = async (req, res) => {
  return res.status(400).json({
    message: "Login initiated",
  });
};

module.exports = {
  register,
  login,
};
