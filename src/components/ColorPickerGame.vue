<template>
  <h1>Color Picker Game</h1>

  <div>{{ message }}</div>

  <button v-for="color in colors" :key="color" @click="matchColor(color)">
    {{ color }}
  </button>
</template>

<script setup>
import useColorPickerGame from "../composables/ColorPickerGame";
const { colors, message, matchColor } = useColorPickerGame();
</script>

<style>
</style>
