const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");

admin.initializeApp(functions.config().firebase);
const cors = require("cors");
const cardsRouter = express();
const setsRouter = express();

cardsRouter.use(cors({ origin: true }));
setsRouter.use(cors({ origin: true }));

// Get all sets
setsRouter.get("/", async (req, res) => {
  const sets = await admin
    .firestore()
    .collection("sets")
    .get();
  var lista = [];
  sets.docs.forEach(doc => {
    lista.push({ id: doc.id, data: doc.data() });
  });
  res.send(lista);
});

// Get all cards
cardsRouter.get("/", async (req, res) => {
  const cards = await admin
    .firestore()
    .collection("cards")
    .get();
  var lista = [];
  cards.docs.forEach(doc => {
    lista.push({ id: doc.id, data: doc.data() });
  });
  res.send(lista);
});

exports.cards = functions.https.onRequest(cardsRouter);
exports.sets = functions.https.onRequest(setsRouter);
