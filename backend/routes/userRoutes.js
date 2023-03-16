const express = require("express");

const router = express.Router();
// bring in controllers
const {
  registerUser,
  loginUser,
  getMe,
} = require("../controllers/userController");
// bring in protect midleware
const { protect } = require("../middleware/authMiddleware");

router.post("/", registerUser);

router.post("/login", loginUser);
// pass in the getMe function from controller

router.get("/me", protect, getMe);
module.exports = router;
