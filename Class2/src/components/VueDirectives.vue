<template>
  <div>
    <div
      v-text="message"
      :style="[`color: ${passedExam ? 'green' : 'red'}`]"
    ></div>
    <h1 v-html="counter"></h1>
    <div v-show="failedExam">Emeka Failed his Exam</div>
    <div v-if="passedExam">Emeka Passed his Exam</div>
    <button @click="handlePassOrFail">
      {{ failedExam ? "Pass" : "Fail" }}
    </button>

    <animal-card
      v-for="(item, index) in booksObj"
      :key="index"
      :index="index"
      :name="item.name"
      :[typeOfAnimalKey]="item.typeOfAnimal"
    />
  </div>
</template>

<script>
import AnimalCard from "./AnimalCard.vue";

export default {
  components: { AnimalCard },
  data() {
    return {
      typeOfAnimalKey: "typeOfAnimal",
      message: "Hello World",
      counter: "<code>0</code>",
      failedExam: true,
      passedExam: false,
      animals: [
        { name: "Jeremy", typeOfAnimal: "Dog" },
        { name: "Ibra", typeOfAnimal: "Cat" },
      ],
      booksObj: {
        1: { name: "Jeremy", typeOfAnimal: "Dog" },
        2: { name: "Ibra", typeOfAnimal: "Cat" },
      },
    };
  },
  methods: {
    handlePassOrFail() {
      this.failedExam = !this.failedExam;
      this.passedExam = !this.passedExam;
    },
  },
};
</script>

<style scoped>
.button-wrapper {
  display: flex;
  gap: 10px;
}

.danger {
  color: red;
}

.success {
  color: green;
}
</style>
