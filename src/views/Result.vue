<template>
  <div v-if="result !== null">
    <h1>{{ label }}</h1>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { default as Result } from "@/services/result.js";

export default {
  name: "Result",
  data: () => ({
    result: null
  }),
  created() {
    this.fetch();
  },
  computed: {
    label() {
      if (this.result !== null) {
        return Result.rankLabel(this.result.score.correct);
      }
      return "";
    },
    ...mapGetters("user", {
      user: "user"
    }),
    ...mapGetters("answers", {
      answers: "answers"
    })
  },
  methods: {
    fetch() {
      Result.send(this.user.uid, this.answers)
        .then(result => {
          this.result = result;
        })
        .catch(() => {
          alert("送信に失敗しました");
        });
    }
  }
};
</script>
