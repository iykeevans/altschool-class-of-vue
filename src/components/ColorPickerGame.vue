<template>
  <h1>Color Picker Game</h1>

  <div>{{ message }}</div>

  <button v-for="color in colors" :key="color" @click="matchColor(color)">
    {{ color }}
  </button>
</template>

<script>
import  ColorPickerCompose from "../composables/ColorPickerGame";

export default {
  setup() {
    const {colors, message, matchColor} = ColorPickerCompose();
    return {colors, message, matchColor};
  }
}
</script>

<style></style>
