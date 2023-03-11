// putting the response logic here
const asyncHandler = require("express-async-handler");
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
