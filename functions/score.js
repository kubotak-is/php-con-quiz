class score {
  constructor({ user_id, correct, answers }) {
    this.user_id = user_id;
    this.correct = correct;
    this.answers = answers;
  }

  export() {
    return {
      user_id: this.user_id,
      correct: this.correct,
      answers: this.answers
    };
  }
}

module.export = score;
