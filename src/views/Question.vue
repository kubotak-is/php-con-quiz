<template>
  <div v-if="quiz !== null">
    <h1>{{ quiz.title }}</h1>
    <div
      class="container"
      v-for="(val, key) in quiz.field"
      :key="key"
      @click="add(key)"
    >
      <label class="title">回答 {{ key }}</label>
      <p>{{ val }}</p>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { default as Question } from "@/services/question.js";

export default {
  name: "Question",
  data: () => ({
    quiz: null
  }),
  created() {
    this.fetch();
  },
  methods: {
    fetch() {
      const { id } = this.$route.params;
      Question.get(id).then(snapshot => {
        snapshot.forEach(doc => {
          this.quiz = doc.data();
        });
      });
    },
    add(key) {
      this.addAnswer({
        id: this.quiz.id,
        key: key
      }).then(() => {
        this.assign();
      });
    },
    assign() {
      let next = this.quiz.next;
      this.quiz = null;
      if (next) {
        this.$router.push({ name: "question", params: { id: next } });
      } else {
        this.$router.push({ name: "result" });
      }
    },
    ...mapActions("answers", { addAnswer: "add" })
  },
  watch: {
    $route: "fetch"
  }
};
</script>
