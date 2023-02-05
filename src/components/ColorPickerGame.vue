<template>
  <h1>Color Picker Game</h1>

  <div>{{ message }}</div>

  <button v-for="color in colors" :key="color" @click="matchColor(color)">
    {{ color }}
  </button>
</template>

<script>
import colorManager from "../composables/color-manager";

export default {
  name: "ColorPickerGame",
  data() {
    return {
      colors: [],
      message: ""
    }
  },
  methods: {
    matchColor() {}
  },

  setup() {
    const {colors, message, matchColor} = colorManager();

    return { colors, message, matchColor };
  },
};
</script>

<style></style>
