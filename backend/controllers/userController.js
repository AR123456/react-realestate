// putting the response logic here

const registerUser = (req, res) => {
  res.send("Register route from the controller");
};
const loginUser = (req, res) => {
  res.send("Login route from the controller");
};

module.exports = {
  registerUser,
  loginUser,
};
