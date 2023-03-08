//common js syntax ( not ES2015 import)
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 8000;

const app = express();
app.use(bodyParser.json());
// setting up routes
app.get("/", (req, res) => {
  // res.send("Hello");
  res.status(200).json({ message: "Hello support desk" });
});
// using route from another file
app.use("/api/users", require("./routes/userRoutes"));

app.listen(PORT, () =>
  console.log(`Server started on port http://localhost:${PORT}`)
);
