const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const blackListTokenModel = require("../models/blackListToken.model");
const captainModel = require("../models/captain.model");

module.exports.authUser = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  console.log("AUTH HEADER:", req.headers.authorization);
  console.log("TOKEN EXISTS:", !!token);
  console.log("JWT SECRET EXISTS:", !!process.env.JWT_SECRET);

  if (!token) {
    return res.status(401).json({
      message: "Unauthorized",
      reason: "Token not found",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    console.log("DECODED:", decoded);

    const user = await userModel.findById(decoded._id);

    console.log("USER FOUND:", !!user);

    if (!user) {
      return res.status(401).json({
        message: "Unauthorized",
        reason: "User not found",
      });
    }

    req.user = user;

    next();
  } catch (err) {
    console.log("AUTH ERROR:", err.message);

    return res.status(401).json({
      message: "Unauthorized",
      reason: err.message,
    });
  }
};

module.exports.authCaptain = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const isBlacklisted = await blackListTokenModel.findOne({ token: token });

  if (isBlacklisted) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const captain = await captainModel.findById(decoded._id);
    req.captain = captain;

    return next();
  } catch (err) {
    console.log(err);

    res.status(401).json({ message: "Unauthorized" });
  }
};
