import { ref } from "vue";
export function useColorPicker(ListOfColor) {
  let message = ref("Pick a color...");
  const colors = ListOfColor;
  const matchColor = (value) => {
    // do a random color based on the array index;
    const randomNumber = Math.floor(Math.random() * 3) + 2; //between 1 - 4

    if (colors[randomNumber] === value) {
      message.value = `You Predicted Successfully... [answer: ${colors[randomNumber]}]`;
      return;
    }

    message.value = `You Lost the prediction [answer: ${colors[randomNumber]}]`;
  };

  return { colors, message, matchColor };
}
