class score {
  constructor({ user_id, correct, answers, timestamp }) {
    this.user_id = user_id;
    this.correct = correct;
    this.answers = answers;
    this.timestamp = timestamp;
  }

  export() {
    return {
      user_id: this.user_id,
      correct: this.correct,
      answers: this.answers,
      timestamp: this.timestamp
    };
  }
}

module.exports = score;
