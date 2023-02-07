import { ref } from "vue";

export const matchColor = (value, colors) => {
  let message = ref("Pick a color...");
  const randomNumber = Math.floor(
    Math.random() * colors.length
  ); 
  let messageColor = 'White'
  if (colors[randomNumber] === value) {
    messageColor =`${colors[randomNumber]}`
    message.value = `You win... [answer: ${colors[randomNumber]}]`;
  } else {
    messageColor =`${colors[randomNumber]}`
    message.value = `You loose [answer: ${colors[randomNumber]}]`;
  }

  return { message, messageColor };
};