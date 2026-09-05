import { ref, computed } from "@vue/composition-api";

export default {
  setup() {
    const colors = ["green", "red", "blue", "purple"];
    const message = ref("Pick a color...");

    const randomColor = computed(() => {
      return colors[Math.floor(Math.random() * 3) + 1];
    });

    const matchColor = (value) => {
      if (randomColor.value === value) {
        message.value = `You win... [answer: ${randomColor.value}]`;
        return;
      }
      message.value = `You loose [answer: ${randomColor.value}]`;
    };

    return { colors, message, matchColor };
  },
};
