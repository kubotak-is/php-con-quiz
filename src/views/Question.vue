<template>
  <div>
    <template v-if="quiz === null">
      <p class="loading">Now Loading...</p>
    </template>
    <template v-else>
      <h1>{{ quiz.title }}</h1>
      <p v-html="quiz.body"></p>
      <div
        class="container"
        v-for="(val, key) in quiz.field"
        :key="key"
        @click="add(key)"
      >
        <label class="title">回答 {{ key }}</label>
        <p v-html="val"></p>
      </div>
    </template>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { default as Question } from "@/services/question.js";
import { default as SmartPhoto } from "smartphoto";

export default {
  name: "Question",
  data: () => ({
    quiz: null
  }),
  created() {
    this.fetch();
  },
  updated() {
    new SmartPhoto(".js-smartPhoto");
  },
  computed: {
    ...mapGetters("answers", {
      answers: "answers",
      hasAnswer: "has"
    })
  },
  methods: {
    fetch() {
      const { id } = this.$route.params;
      Question.get(id).then(snapshot => {
        snapshot.forEach(doc => {
          this.quiz = doc.data();
          this.checkStatus();
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
    checkStatus() {
      const { id } = this.$route.params;
      if (this.hasAnswer(id)) {
        this.assign();
      }
    },
    ...mapActions("answers", { addAnswer: "add" })
  },
  watch: {
    $route() {
      this.fetch();
    }
  }
};
</script>

<style lang="scss" scoped>
.loading {
  text-align: center;
  margin: 1rem auto;
}
</style>
