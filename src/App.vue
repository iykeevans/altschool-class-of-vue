<script>
import ColorPickerGame from "./components/ColorPickerGame.vue";
import Recap_01_02_2023 from "./components/Recap_01_02_2023.vue";

export default {
  components: { ColorPickerGame, Recap_01_02_2023 },
  data() {
    return {
      currentLesson: "color-picker-game",
    };
  },
};
</script>

<template>
  <router-view />
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: opacity 1s, transform 1s;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transition: translateX(-30%);
}
</style>
