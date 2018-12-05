<template>
  <div><slot></slot></div>
</template>

<script>
export default {
  name: "TypeWriter",
  props: {
    interval: {
      type: Number,
      default: 75
    }
  },
  created() {
    this.$on("typewrite", function() {
      this.typewiter();
    });
  },
  methods: {
    typewiter() {
      let _this = this;
      let $el = this.$el;
      let str = $el.innerHTML;
      let progress = 0;
      $el.innerHTML = ""; // reset

      let timer = setInterval(() => {
        let current = str.substr(progress, 1);
        if (current === "<") {
          progress = str.indexOf(">", progress) + 1;
        } else {
          ++progress;
        }
        $el.innerHTML = str.substring(0, progress);
        if (progress >= str.length) {
          remove();
        }
      }, this.interval);

      function end() {
        $el.innerHTML = str;
        remove();
      }

      function remove() {
        clearInterval(timer);
        window.removeEventListener("click", end);
        _this.$emit("end-typewite");
      }
      window.addEventListener("click", end);
    }
  }
};
</script>
