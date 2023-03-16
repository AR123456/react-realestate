// putting the response logic here
const asyncHandler = require("express-async-handler");
// bcrypt to hash pass
const bcrypt = require("bcryptjs");
// bring in the user model
const User = require("../models/userModel");
// give the user a jwt
const jwt = require("jsonwebtoken");

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

      // send the jwt too
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new error("Invalid user data ");
  }
  // make sure to update connect string to point at db
});
//@desc Register a new user
//@route /api/users/login
//@access Public
const loginUser = asyncHandler(async (req, res) => {
  // get the email and pw from body
  const { email, password } = req.body;
  // look to db for matching email
  const user = await User.findOne({ email });
  // if there is a user check password- brypt compare
  if (user && (await bcrypt.compare(password, user.password))) {
    //yes its a match
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      //  jwt
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error(
      "Invalid credentials or something less useful to scammers "
    );
  }
});
//@desc Get Current  user
//@route /api/users/me
//@access Private
// a protected route
const getMe = asyncHandler(async (req, res) => {
  // use middleware for protected routes
  res.send("me");
});

// creating the generate password function = this could be in another file
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};
module.exports = {
  registerUser,
  loginUser,
  getMe,
};
