import { ref } from "vue";

export const useColorPicker = (colorsArr) => {
  const message = ref("Pick a color...");

  const matchColor = (value) => {
    const randomIndex = Math.floor(Math.random() * colorsArr.length);

    if (colorsArr[randomIndex] === value) {
      message.value = `You Win!! [answer: ${colorsArr[randomIndex]}]`;
      return;
    }

    message.value = `You Lose!! [answer: ${colorsArr[randomIndex]}]`;
  };

  return { message, matchColor };
};
