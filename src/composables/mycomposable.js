
import {ref, reactive} from "@vue/reactivity";

export function usePicker() {
    const colors = ["green", "red", "blue", "purple"];
    let message = ref("Pick a color... please");

    const matchColor = (value) => {
        const randomNumber = Math.floor(Math.random() * 3) + 1;

        if (colors[randomNumber] === value) {
            message.value = `You win... [answer: ${colors[randomNumber]}]`;
            return;
        }
        message.value = `You loose! Answer is ${colors[randomNumber]}`;
    };
    return { colors, message, matchColor };
};



