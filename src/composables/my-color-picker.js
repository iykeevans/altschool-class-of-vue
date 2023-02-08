import { ref } from "vue";

const useColorPicker = () => {
  const message = ref("Pick a color");
  const colors = ["green", "red", "blue", "purple"];

  const matchColor = (color) => {
    const randomColor =
      colors.value[Math.floor(Math.random() * colors.value.length)];

    randomColor === color
      ? (message = `You win... [answer: ${randomColor}]`)
      : (message = `You lose... [answer: ${randomColor}]`);
  };

  return { message, colors, matchColor };
};

export default useColorPicker;
