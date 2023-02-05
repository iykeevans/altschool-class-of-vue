<script>
import ColorPickerGame from "./components/ColorPickerGame.vue";
import Recap_01_02_2023 from "./components/Recap_01_02_2023.vue";
import Bookings from "./components/Bookings.vue";

export default {
  components: { ColorPickerGame, Recap_01_02_2023, Bookings },
  data() {
    return {
      currentLesson: "color-picker-game",
    };
  },
};
</script>

<template>
  <ColorPickerGame v-if="currentLesson === 'color-picker-game'" />
  <Bookings v-else />
  <!-- <Recap_01_02_2023 v-else />  -->
</template>

<style scoped></style>
