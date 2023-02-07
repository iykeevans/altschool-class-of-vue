import { ref } from "@vue/reactivity";

const ColorPickerCompose = () => {
  const colors = ["green", "red", "blue", "purple"];
  let message = ref("Pick a color");

  const matchColor = (value) => {
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    if (colors[randomNumber] === value) {
      message.value = `You picked the right color!`;
      return;
    }

    message.value = `You picked the wrong color!`;
  };
  return { colors, message, matchColor };
};

export default ColorPickerCompose;
