<template>
  <div class="result" v-if="result !== null">
    <h1 class="result-title">結果発表</h1>

    <div class="result-container container dark">
      <p :class="labelClass">{{ label }}</p>
    </div>
    <img :src="correctImage(result.score.correct)" :alt="label" />

    <div class="container policecomment" v-if="message">
      <type-writer ref="policecomment" :interval="50">
        <p>{{ message }}</p>
      </type-writer>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { default as Result } from "@/services/result.js";
import TypeWriter from "@/components/TypeWriter.vue";

export default {
  name: "Result",
  components: {
    TypeWriter
  },
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
    labelClass() {
      if (this.result !== null) {
        switch (this.result.score.correct) {
          case 0:
          case 1:
          case 2:
            return `result-red`;
          case 3:
            return `result-yellow`;
          default:
            return `result-white`;
        }
      }
      return null;
    },
    message() {
      if (this.result !== null) {
        return Result.message(this.result.score.correct);
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
    },
    correctImage(correct) {
      switch (correct) {
        case 0:
        case 1:
        case 2:
          return `/img/result/police_c.png`;
        default:
          return `/img/result/police_b.png`;
      }
    }
  },
  updated() {
    if (this.message === "") return;
    const { policecomment } = this.$refs;
    policecomment.$emit("typewrite");
  }
};
</script>

<style lang="scss" scoped>
.result {
  text-align: center;
}
.result-title {
  font-size: 1.5rem;
  margin: 2rem auto;
}
.result-container {
  p {
    font-size: 2rem;
  }
}
.result {
  &-white {
    color: white;
  }
  &-yellow {
    color: yellow;
  }
  &-red {
    color: red;
  }
}
.policecomment {
  text-align: left;
}
</style>
