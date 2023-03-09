// putting the response logic here

//@desc Register a new user
//@route /api/users
//@access Public
const registerUser = (req, res) => {
  console.log(req.body);
  res.send("Register route from the controller");
};
//@desc Register a new user
//@route /api/users/login
//@access Public
const loginUser = (req, res) => {
  res.send("Login route from the controller");
};

module.exports = {
  registerUser,
  loginUser,
};
