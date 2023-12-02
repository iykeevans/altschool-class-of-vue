<template>
  <div>
    <!-- <div v-for="pokemon in pokemons" :key="pokemon.name">
      {{ pokemon.name }}
    </div> -->
    <input type="text" class="border border-solid rounded" v-model="todo" />
    <br />
    <button class="bg-gray-200 px-2 rounded" @click="addTodo">Add Todo</button>

    <div v-for="item in todos">
      {{ item }}
    </div>
  </div>
</template>

<script setup>
import usePokemon from "./composables/usePokemon";
import useTodos from "./composables/useTodos";

const { pokemons } = usePokemon();
const { todos, todo, addTodo } = useTodos();
</script>

<style scoped></style>
