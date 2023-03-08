const express = require("express");

const router = express.Router();
// bring in controller logic
const { registerUser, loginUser } = require("../controllers/userController");

// router.post("/", (req, res) => {
//   res.send("Register route");
// });
// becomes
router.post("/", registerUser);

router.post("/login", loginUser);
module.exports = router;
