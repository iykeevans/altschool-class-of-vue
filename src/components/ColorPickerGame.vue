<template>
  <h1>Color Picker Game</h1>

  <div>{{ message }}</div>

  <button v-for="color in colors" :key="color" @click="matchColor(color)">
    {{ color }}
  </button>
</template>

<script>
import { useColorPicker } from "../composables/ColorPicker";
export default {
  components: [useColorPicker],
  setup() {
    const { colors, message, matchColor } = useColorPicker([
      "green",
      "red",
      "blue",
      "purple",
      "brown",
    ]);

    return { colors, message, matchColor };
  },
};
</script>

<style></style>
