const admin = require("firebase-admin");
const functions = require("firebase-functions");
const express = require("express");
const app = express();

const score = require("./score");

admin.initializeApp(functions.config().firebase);
const db = admin.firestore();

app.post("/api/result", (req, res) => {
  let user_id = req.body.user_id;
  let answers = req.body.answers;
  // 正解の取得
  correct
    .then(data => {
      // 正解の個数
      let result = 0;
      for (let [k, v] of answers) {
        if (v === data[k]) {
          ++result;
        }
      }
      let s = new score({
        user_id: user_id,
        correct: result,
        answers: answers
      });
      return Promise.resolve(s.export());
    })
    .then(s => {
      return saveScore(s);
    })
    .then(s => {
      console.log(s);
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
  let docRef = db.collection("scores");
  return docRef.add(s);
};

exports.app = functions.https.onRequest(app);
