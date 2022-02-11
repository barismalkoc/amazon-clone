const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51KRaHwLrR9GFTjySqdSZpUEeDMZK65Wlxf066BxLchyDhAU97f9PC2C7hjYyGB3Qwcni5tY22EqXWHvw8TIpp9Mu00uCKGDATy"
);

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) => res.status(200).send("hello world"));

exports.api = functions.https.onRequest(app);
