//common js syntax ( not ES2015 import)
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 8000;

const app = express();
app.use(bodyParser.json());
// setting up routes
app.get("/", (req, res) => {
  res.send("Hello");
});
//  doing some testing of the VS Code REST extension
app.post("/", (req, res) => {
  if (Object.keys(req.body).length > 0) {
    res.json({
      received: req.body,
    });
  } else {
    res.send("got the post ");
  }
});
app.get("/auth-endpoint", (req, res) => {
  if (
    req.headers.authorization &&
    req.headers.authorization == "my-api-key-123"
  ) {
    res.send("Authorized");
  } else {
    res.status(401).send();
  }
});

app.listen(PORT, () =>
  console.log(`Server started on port http://localhost:${PORT}`)
);

const app2 = express();
app2.use(bodyParser.json());
app2.get("/", (req, res) => res.send("hello from the other enviroment "));
app2.listen(9090);
