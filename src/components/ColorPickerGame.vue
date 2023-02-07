<template>
  <h1 >Color Picker Game</h1>

  <div>{{ message }}</div>

  <button v-for="color in colors" :key="color" @click="matchColor(color)">
    {{ color }}
  </button>
</template>


<script setup>
import { usePicker } from "../composables/mycomposable.js";
const { colors, message, matchColor } = usePicker();
</script>


<style>
h1{
  color:darkgoldenrod;
  font-size: 50px;
  font-family:monospace;
}

div{
  font-family: monospace;
  font-size: 1.1rem;
  margin-left: 100px;
  color: darkred;
}

button{
  margin-bottom: 10px;
  height: 45px;
  width: 90%;
  border-radius: 13px;
  border: none;
  font-family: monospace;
  font-size: 15px;
  
}
button:hover{
background: rgba(255, 255, 255, 0.16);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(6.5px);
-webkit-backdrop-filter: blur(6.5px);
border: 1px solid rgba(255, 255, 255, 0.3);
}
</style>
