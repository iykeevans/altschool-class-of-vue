<template>
  <!-- <Counter /> -->
  <!-- <VueInstanceHooks /> -->
  <!-- <VueDirectives /> -->
  <!-- <TwoWayBinding /> -->
  <!-- <VueSlots>
    <template #header>Heading</template>
    <template #content="slotProps">
      <div class="border border-dashed border-red-500">
        {{ slotProps.item }}
      </div>
    </template>
  </VueSlots> -->
  <!-- <Emits /> -->
  <Inputs />
</template>

<script>
import Counter from "./components/Counter.vue";
import VueInstanceHooks from "./components/VueInstanceHooks.vue";
import VueDirectives from "./components/VueDirectives.vue";
import TwoWayBinding from "./components/TwoWayBinding.vue";
import VueSlots from "./components/VueSlots.vue";
import Emits from "./components/Emits/Parent.vue";
import Inputs from "./components/Inputs.vue";

export default {
  components: {
    Counter,
    VueInstanceHooks,
    VueDirectives,
    TwoWayBinding,
    VueSlots,
    Emits,
    Inputs,
  },
};
</script>

<style scoped></style>
