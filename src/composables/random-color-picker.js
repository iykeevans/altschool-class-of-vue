import { ref, computed } from "@vue/composition-api";

export function randomColorPicker() {
  const colors = ref(["green", "red", "blue", "purple"]);
  let message = ref("Pick a color...");

  const color = computed(() => {
      return colors[Math.floor(Math.random() * 3) + 1]; //between 1 - 4
  })
  const matchColor = (value) => {

      if (color.value === value) {
          message.value = `You win... [answer: ${colors.value[randomNumber]}]`;
          return;
        }
        message.value = `You lose [answer: ${colors.value[randomNumber]}]`;
    };
    return { colors, message, matchColor };
};
