import { ref } from "@vue/reactivity";

export default function ColorPickerGame2                                                    () {
  const colors = ["green", "red", "blue", "purple"];
  let message = ref("Pick a color...");

  const matchColor = (value) => {
    // do a random color based on the array index;
    const randomNumber = Math.floor(Math.random() * colors.length); 

    if (colors[randomNumber] === value) {
      message.value = `You win... [answer: ${colors[randomNumber]}]`;
      return;
    }

    message.value = `You loose [answer: ${colors[randomNumber]}]`;
  };

  return { colors, message, matchColor };
}














