const admin = require("firebase-admin");
const functions = require("firebase-functions");
const express = require("express");
const app = express();

const score = require("./score");

admin.initializeApp(functions.config().firebase);
const db = admin.firestore();
db.settings({ timestampsInSnapshots: true });

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.post("/api/result", (req, res) => {
  let user_id = req.body.user_id;
  let answers = req.body.answers;

  let s;

  // 正解の取得
  correct()
    .then(data => {
      // 正解の個数
      let result = {};
      for (let k in answers) {
        result[k] = {
          answer: answers[k],
          result: answers[k] === data[k]
        };
      }
      s = new score({
        user_id: user_id,
        correct: Object.keys(result).filter(key => {
          return result[key].result;
        }).length,
        answers: result,
        timestamp: new Date().getTime()
      });
      return Promise.resolve(s.export());
    })
    .then(s => {
      return saveScore(s);
    })
    .then(() => {
      res.status(201).json({
        result: "success",
        score: s
      });
    })
    .catch(err => {
      res.status(err instanceof ReferenceError ? 403 : 500).json({
        result: "error"
      });
    });
});

const correct = async () => {
  let docRef = db.collection("correct");
  return docRef.get().then(snapshot => {
    let data;
    snapshot.forEach(doc => {
      data = doc.data();
    });
    return data;
  });
};

const saveScore = async s => {
  let docRef = db.collection("scores").doc(s.user_id);
  return docRef.set(s);
};

exports.app = functions
  .runWith({
    timeoutSeconds: 180,
    memory: "512MB"
  })
  .region("asia-northeast1")
  .https.onRequest(app);
