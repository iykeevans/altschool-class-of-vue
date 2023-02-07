<template>
  <h1 class="title">Color Picker Game</h1>
  <div class="msg-container">
    <P class="msg">{{ message }}</P>
  </div>


  <div class="btn-container">
    <button v-for="color in colors" :key="color" @click="matchColor(color)" class="btn">
      {{ color }}
    </button>
  </div>

</template>

<script>
import ColorPicker from "../composables/ColorPicker.js";
export default {
  setup() {
    const { colors, message, matchColor } = ColorPicker();
    return { colors, message, matchColor };
  },
};
</script>

<style>
.title {
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 3rem 0
}

.msg-container {
  position: relative;
  width: 100%;
}

.msg {
  text-align: center;
  font-size: 1.3rem;
  font-weight: 700;
  position: absolute;
  bottom: 0;
  left: 50%;
  border: 1px solid #000;
  padding: .5rem;
  border-radius: 5px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
}

.btn-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;
}

.btn {
  width: 100px;
  height: 100px;
  border: none;
  border-radius: 50%;
  margin: 1rem;
  font-size: 1.5rem;
  font-weight: 700;
  cursor: pointer;
  outline: none;
}

@media screen and (min-width: 768px) {
  .btn {
    width: 150px;
    height: 150px;
    font-size: 2rem;
  }

  .title {
    font-size: 2.5rem;
  }

  .btn-container {
    width: 80%;
  }

  .msg-container {
    width: 80%;
  }

  .msg {
    font-size: 1.5rem;
  }
}
</style>