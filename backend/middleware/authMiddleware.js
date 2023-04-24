const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const protect = asyncHandler(async (req, res, next) => {
  //initialize a token var
  let token;
  // check for token in headers
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // get token from header
      // array split token is second element of array
      token = req.headers.authorization.split(" ")[1];
      // verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      // decoded token has user ID in it
      // Get user from token - exclude the password
      req.user = await User.findById(decoded.id).select("-password");
      // go on to next bit of middleware
      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("Not authorized ");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not  authorized no token");
  }
});
module.exports = { protect };
