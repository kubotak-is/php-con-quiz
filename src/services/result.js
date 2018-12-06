import { postResult } from "@/libs/client";

class Result {
  /**
   * @param {String} user_id
   * @param {Object} answers
   */
  async send(user_id, answers) {
    return postResult({
      user_id: user_id,
      answers: answers
    })
      .then(result => {
        return Promise.resolve(result);
      })
      .catch(err => {
        return Promise.reject(err);
      });
  }

  /**
   * @param {Number} correct
   * @return {String}
   */
  rankLabel(correct) {
    switch (correct) {
      case 0:
        return "逮捕（無期懲役）";
      case 1:
        return "逮捕（禁錮5.7年）";
      case 2:
        return "逮捕（罰金5.7万）";
      case 3:
        return "Farace巡査";
      case 4:
        return "Facade警部";
      default:
        return "Facade警視正";
    }
  }
}

export default new Result();
