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
      case 1:
      case 2:
        return "逮捕（無期懲役）";
      case 3:
        return "逮捕（禁錮5.7年）";
      case 4:
        return "逮捕（罰金5.7万）";
      case 5:
        return "一般市民";
      case 6:
        return "Facade巡査";
      default:
        return "Facade警部";
    }
  }

  /**
   * @param {Number} correct
   * @return {String}
   */
  message(correct) {
    switch (correct) {
      case 0:
      case 1:
      case 2:
        return `あなた、Laravel全然知らないですね。PHPフレームワーク Laravel Webアプリケーション開発 バージョン5.5 LTS対応を読んで出直してください。`;
      case 3:
        return `PHPフレームワーク Laravel Webアプリケーション開発 バージョン5.5 LTS対応を購入して学び直しが必要なようです。`;
      case 4:
        return `PHPフレームワーク Laravel Webアプリケーション開発 バージョン5.5 LTS対応を読み直しましょう。`;
      case 5:
        return `PHPフレームワーク Laravel Webアプリケーション開発 バージョン5.5 LTS対応は持ってますか？持ってなければぜひ買いましょう。`;
      case 6:
        return `同僚でしたか。一緒にFacade警察として、Laravelユーザーの良いお手本になっていきましょう。`;
      default:
        return `これはこれは、警部殿でしたか。今後もFacade警部として世の中のLaravelユーザーに啓蒙をお願い致します。`;
    }
  }
}

export default new Result();
