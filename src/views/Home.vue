<template>
  <div class="home">
    <h1 class="home-title">
      <img alt="Laravel Quiz" src="../assets/laravel_quiz.png" />
    </h1>
    <p><small>presented by istyle-inc.</small></p>
    <img class="facade-police" src="../assets/police_a.png" alt="Facade警察" />
    <div class="container police-comment">
      <label class="title">Facade警察</label>
      <type-writer ref="policecomment" :interval="50">
        <p>
          ちょっとそこの君。<br />Laravelについていくつか質問するから任意で答えてね。
        </p>
      </type-writer>
    </div>
    <button class="btn" @click="startBtn">こたえる</button>
  </div>
</template>

<script>
// @ is an alias to /src
import TypeWriter from "@/components/TypeWriter.vue";

export default {
  name: "home",
  components: {
    TypeWriter
  },
  mounted() {
    const { policecomment } = this.$refs;
    policecomment.$emit("typewrite");
  },
  methods: {
    startBtn() {
      this.$router.push({ name: "question", params: { id: 1 } });
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  text-align: center;
  padding-bottom: 1rem;
}
.home-title {
  img {
    width: 100%;
    height: auto;
  }
}
.facade-police {
  width: 70%;
}
.police-comment {
  width: 90%;
  height: 100px;
  margin: 1rem auto;
  text-align: left;
  .title {
    margin-bottom: 0;
  }
}
</style>
