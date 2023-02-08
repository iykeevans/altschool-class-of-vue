<template>
  <h1>Color Picker Game</h1>

  <div>{{ message }}</div>

  <button v-for="color in colors" :key="color" @click="matchColor(color)">
    {{ color }}
  </button>
</template>

<script>
import colorpickercomp from '../composables/ColorPickerComp';
export default {
  setup() {
    const {colors, message, matchColor} = colorpickercomp();
  },
};
</script>

<style></style>
