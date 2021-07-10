// /*
const express = require("express");
const cors = require("cors");
// const morgan = require("mongoose-morgan");
const morgan = require("morgan");
require("dotenv").config();

const connection = require("./connection");
const app = express();

app.use(morgan("dev"));
app.use(cors());

// If you are using Express 4.16+ you don't have to import body-parser anymore.
// You can do it just like this:
// use requests parser of type content-type 'application/json'
app.use(express.urlencoded({ extended: true }));
// To parse the incoming requests with JSON payloads
app.use(express.json());

// home page route
app.get("/", (req, res) => {
  res.status(200).json("Welcome to home page");
});

// Logger
/*
app.use(
  morgan({
    connectionString: process.env.CONNECTION_STRING,
  })
);
*/

// Routes files

// inventory routes
const inventoryRouter = require("./routes/inventory");
app.use("/inventory", inventoryRouter);

connection
  .then(() => {
    const PORT = process.env.PORT || 8080;
    app.listen(PORT, () =>
      console.log(`Server is up and running on port ${PORT}`)
    );
  })
  .catch((e) => {
    console.log("Could not connect!");
  });
// set port, listen to requests
// */
