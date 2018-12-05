<template>
  <div v-if="result !== null"></div>
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
    ...mapGetters("user", {
      user: "user"
    }),
    ...mapGetters("answers", {
      answers: "answers"
    })
  },
  methods: {
    fetch() {
      let result = new Result(this.user.uid, this.answers);
      result
        .send()
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
