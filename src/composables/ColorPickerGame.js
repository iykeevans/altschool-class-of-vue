import { ref } from "@vue/reactivity";

const ColorPicker = () => {
  const colors = ["green", "red", "blue", "purple"];
  let message = ref("Pick a Color");

  const matchColor = (value) => {
    // do a random color based on the array index;
    const randomNumber = Math.floor(Math.random() * 3) + 1; //between 1 - 4

    if (colors[randomNumber] === value) {
      message.value = `You Win! [answer: ${colors[randomNumber]}]`;
      return;
    }
    message.value = `You Loose! [answer: ${colors[randomNumber]}]`;
  };
  return {colors, message, matchColor}
};

export default ColorPicker
