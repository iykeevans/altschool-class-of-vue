<template>
  <div>
    <h1>Color Picker Game</h1>
    <div class="body" :style="{'background-color': background}">
      <div>{{ res }}</div>
    </div>
    <div class="buttons">
      <button v-for="color in colors" :key="color" @click="match(color)">
        {{ color }}
      </button>
    </div>
</div>
</template>

<script>
import { matchColor } from "../composables/color-picker";
import { ref } from "vue";
export default {
  setup() {
    const colors = ["green", "red", "blue", "purple"];
    let res = ref("Pick a color...");
    let background = ref('');
    const match = (color) => {
      let { message, messageColor } = matchColor(color, colors);
      background.value = messageColor
      res.value = message;
    };
    return { res, match, colors, background };
  }
};
</script>


<style scoped>
  .body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 60px;
    color: white;
    background-color: black;
    margin: 10px;
  }
  
  .buttons {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
</style>