// putting the response logic here
const asyncHandler = require("express-async-handler");
// bcrypt to hash pass
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");
//@desc Register a new user
//@route /api/users
//@access Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  // validation - did client send all the stuff
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Missing data ");
  }
  // does user email exist ?
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error(
      "User already exists or some message less valuable to scammers"
    );
  }
  // this user doesent exist so hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  // create the user
  const user = await User.create({
    // use what we got from body to create
    name,
    email,
    password: hashedPassword,
  });
  // if the user was created return the id and token
  if (user) {
    // 201 all good something created
    res.status(201).json({
      // send this data back to the db
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new error("Invalid user data ");
  }

  res.send("Register route from the controller");
});
//@desc Register a new user
//@route /api/users/login
//@access Public
const loginUser = asyncHandler(async (req, res) => {
  res.send("Login route from the controller");
});

module.exports = {
  registerUser,
  loginUser,
};
