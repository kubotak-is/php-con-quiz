<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <type-writer ref="a" @end-typewite="next" :interval="50">
      <p>
        ああああああ<br />いいいいいい<br />うううううう<br />ええええええ<br />おおおおおお<br />
        かかかかかか<br />きききききき<br />くくくくくく<br />けけけけけけ<br />ここここここ
      </p>
    </type-writer>
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
    const { a } = this.$refs;
    a.$emit("typewrite");
  },
  methods: {
    next() {
      console.log("end");
    }
  }
};
</script>
