const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require(jsonwebtoken);
const User = require("../models/User");

require("dotenv").config();

const router = express.Router();

// user register

router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    user = new User({ name, email, password: hashedPassword });
    await user.save();

    res.json({ msg: "User registered successfully" });

    // user login
  } catch (error) {
    res.status(500).json({ msg: "Server Error" });
  }
});
