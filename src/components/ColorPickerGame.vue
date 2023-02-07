<template>
  <h1>Color Picker Game</h1>

  <div class="message">{{ message }}</div>

  <button v-for="color in colors" :key="color" @click="matchColor(color)">
    {{ color }}
  </button>
</template>

<script setup>
import { ref, reactive } from "@vue/reactivity";
import { useColorPicker } from "../composables/useColorPicker";
const colors = ["dodgerblue", "aquagreen", "aliceblue", "yellow"];

const { message, matchColor } = useColorPicker(colors);
</script>

<style scoped>
.message {
  font-size: 14px;
  justify-self: center;
  align-self: center;
}

button {
  border: none;
  padding: 8px 6px;
  font-size: 16px;
  margin: 4px;
  cursor: pointer;
}
</style>
