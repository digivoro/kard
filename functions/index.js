let functions = require("firebase-functions");
let admin = require("firebase-admin");
let express = require("express");
let cors = require("cors");

admin.initializeApp(functions.config().firebase);
let router = express();

router.use(cors({ origin: true }));

// Obtener cartas
router.get("/:collection", async (req, res) => {
  let collection = await admin
    .firestore()
    .collection(req.params.collection)
    .get();
  let lista = collection.docs.map(doc => {
    return { id: doc.id, data: doc.data() };
  });
  res.send(lista);
});

// Obtener carta por Id
router.get("/:collection/id/:documentId", async (req, res) => {
  let document = await admin
    .firestore()
    .collection(req.params.collection)
    .doc(req.params.documentId)
    .get()
    .then(doc => {
      if (doc.exists) {
        return doc.data();
      } else {
        return {};
      }
    });
  res.send(document);
});

// Obtener X cartas
router.get("/:collection/limit/:limitNumber", async (req, res) => {
  let collection = await admin
    .firestore()
    .collection(req.params.collection)
    .limit(req.params.limitNumber)
    .get();
  let lista = collection.docs.map(doc => {
    return { id: doc.id, data: doc.data() };
  });
  res.send(lista);
});

exports.collection = functions.https.onRequest(router);
