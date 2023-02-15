<template>
  <h1>Counter</h1>

  <div>Count: {{ count }}</div>

  <button @click="incrementCount">Increase Count</button>
</template>

<script>
import { ref } from "@vue/reactivity";

export default {
  setup() {
    const count = ref(0);

    const incrementCount = () => {
      count.value++;
    };

    return {
      // count,
      // incrementCount,
    };
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
  methods: {
    incrementCount() {
      this.$store.commit("increment");
    },
  },
};
</script>

<style></style>
