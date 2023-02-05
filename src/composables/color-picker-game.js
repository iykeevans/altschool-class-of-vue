import { ref, reactive } from 'vue'
import { onMounted, watch} from 'vue'

const colorPickerGame = () => {
  const colors = reactive(['green', 'red', 'blue', 'purple'])
  const message = ref('Pick a color...')

  const matchColor = (color) => {
    const randomNumber = Math.floor(Math.random() * 3) + 1 //between 1 - 4
    if (colors[randomNumber] === color) {
      message.value = `You win... [answer: ${colors[randomNumber]}]`
      return
    }
    message.value = `You loose [answer: ${colors[randomNumber]}]`
  }
  onMounted(() => {

  })

  watch(colors, (message) => {
    console.log(message)
  })

  return {
    colors,
    matchColor,
    message,
  }
}

export default colorPickerGame
