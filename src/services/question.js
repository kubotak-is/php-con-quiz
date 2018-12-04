import { db } from "@/libs/firebase";
db.settings({ timestampsInSnapshots: true });

class Question {
  constructor() {
    this.db = db.collection("questions");
  }

  get(id) {
    return this.db.where("id", "==", Number(id)).get();
  }
}

export default new Question();
