const express = require("express");

const router = express.Router();
// bring in controllers
const {
  registerUser,
  loginUser,
  getMe,
} = require("../controllers/userController");

router.post("/", registerUser);

router.post("/login", loginUser);
// pass in the getMe function from controller

router.post("/me", getMe);
module.exports = router;
