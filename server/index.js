"use strict";

// Basic express setup:

const PORT          = 8080;
const express       = require("express");
const bodyParser    = require("body-parser");
const app           = express();
const DataHelpersFactory = require("./lib/data-helpers.js");
const tweetsRoutes = require("./routes/tweets");


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Database on Mongo
const MongoClient   = require('mongodb').MongoClient;
const MONGODB_URI   = "mongodb://localhost:27017/tweeter";

let DataHelpers;

MongoClient.connect(MONGODB_URI, (err, db) => {
  if (err) {
      console.log(`Failed to connect: ${MONGODB_URI}`);
      throw err;
  }
  console.log(`Connected to mongodb: ${MONGODB_URI}`);

  DataHelpers = DataHelpersFactory(db);

  app.use("/tweets", tweetsRoutes(DataHelpers));

  //Running server
  app.listen(PORT, () => {
    console.log("Example app listening on port " + PORT);
  });

});
