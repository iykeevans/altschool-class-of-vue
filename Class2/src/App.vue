<template>
  <!-- <Counter /> -->
  <!-- <VueInstanceHooks /> -->
  <!-- <VueDirectives /> -->
  <TwoWayBinding />
  <!-- <VueSlots>
    <template #content> Hello World!!! </template>
    <template #header> Welcome </template>
  </VueSlots> -->
</template>

<script>
import Counter from "./components/Counter.vue";
import VueInstanceHooks from "./components/VueInstanceHooks.vue";
import VueDirectives from "./components/VueDirectives.vue";
import TwoWayBinding from "./components/TwoWayBinding.vue";
import VueSlots from "./components/VueSlots.vue";

export default {
  components: {
    Counter,
    VueInstanceHooks,
    VueDirectives,
    TwoWayBinding,
    VueSlots,
  },
};
</script>

<style scoped></style>
