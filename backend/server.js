//common js syntax ( not ES2015 import)
const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();

connectDB();

const { errorHandler } = require("./middleware/errorMiddleware");
const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// setting up routes
app.get("/", (req, res) => {
  // res.send("Hello");
  res.status(200).json({ message: "Hello support desk" });
});
// bring in routes
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/users/login", require("./routes/userRoutes"));

app.use(errorHandler);

app.listen(PORT, () =>
  console.log(`Server started on port http://localhost:${PORT}`)
);
