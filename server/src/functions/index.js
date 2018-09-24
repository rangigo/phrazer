import * as funcs from "firebase-functions";
import express from "express";

const expressApp = express();

expressApp.get("/home", (request, response) => {
  response.send("Hello from firebase express app!");
});

expressApp.get("/user", (request, response) => {
  response.send("Ha ha, you smart as*.");
});

export const app = funcs.https.onRequest(expressApp);
