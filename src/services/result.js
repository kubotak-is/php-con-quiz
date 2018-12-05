import { postResult } from "@/libs/client";
import { reject } from "rsvp";

export default class Result {
  constructor(user_id, answers) {
    this.user_id = user_id;
    this.answers = answers;
  }

  async send() {
    return postResult({
      user_id: this.user_id,
      answers: this.answers
    })
      .then(result => {
        return Promise.resolve(result);
      })
      .catch(err => {
        return Promise.reject(err);
      });
  }
}
