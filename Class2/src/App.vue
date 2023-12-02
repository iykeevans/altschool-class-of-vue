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
  <!-- <Inputs /> -->
  <h1>Hello App!</h1>
  <div>
    <!-- use the router-link component for navigation. -->
    <!-- specify the link by passing the `to` prop. -->
    <!-- `<router-link>` will render an `<a>` tag with the correct `href` attribute -->
    <router-link
      to="/"
      class="border-b border-dashed border-black cursor-pointer"
      >Go to Home</router-link
    ><br />
    <router-link
      to="/about"
      class="border-b border-dashed border-black cursor-pointer"
      >Go to About</router-link
    >
  </div>
  <router-view></router-view>
</template>

<script>
import Counter from "./components/Counter.vue";
import VueInstanceHooks from "./components/VueInstanceHooks.vue";
import VueDirectives from "./components/VueDirectives.vue";
import TwoWayBinding from "./components/TwoWayBinding.vue";
import VueSlots from "./components/VueSlots.vue";
import Emits from "./components/Emits/Parent.vue";
import Inputs from "./components/Inputs.vue";
import PokemonApiExample from "./components/Projects/PokemonApiExample/index.vue";

export default {
  components: {
    Counter,
    VueInstanceHooks,
    VueDirectives,
    TwoWayBinding,
    VueSlots,
    Emits,
    Inputs,
    PokemonApiExample,
  },
};
</script>

<style scoped></style>
