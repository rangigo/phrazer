const functions = require("firebase-functions");
const express = require("express");

const app = express();

app.get("/home", (request, response) => {
  response.send("Hello from firebase express app!");
});

app.get("/user", (request, response) => {
  response.send("Ha ha, you smart as*.");
});

exports.app = functions.https.onRequest(app);
