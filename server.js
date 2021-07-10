// /*
const express = require("express");
const cors = require("cors");
const morgan = require("mongoose-morgan");
require("dotenv").config();

const connection = require("./connection");
const app = express();
const Inventory = require("./models/inventory");

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

// inventory routes
app.get("/inventory", async (req, res) => {
  try {
    const items = await Inventory.find({}).lean().exec(); //.find({}).lean().exec();
    res.status(200).json(items);
  } catch (e) {
    console.error(e);
    res.status(500).send();
  }
});

app.post("/inventory", async (req, res) => {
  const newItem = {
    item: "journal",
    qty: 25,
    size: { h: 14, w: 21, uom: "cm" },
    status: "A",
  };

  try {
    const item = await Inventory.create(newItem);
    res.status(201).json(item.toJSON());
  } catch (e) {
    console.error(e);
    res.status(500).send();
  }
});

// Logger
app.use(
  morgan({
    connectionString: process.env.CONNECTION_STRING,
  })
);

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
