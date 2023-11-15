<template>
  <div>
    <div v-text="message"></div>
    <h1 v-html="counter"></h1>
    <div v-show="failedExam">Emeka Failed his Exam</div>
    <div v-if="passedExam">Emeka Passed his Exam</div>
    <button @click="handlePassOrFail">
      {{ failedExam ? "Pass" : "Fail" }}
    </button>

    <div v-for="(book, index) in books" :key="index">
      <span>{{ index + 1 }}</span>
      <span>{{ book }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello World",
      counter: "<code>0</code>",
      failedExam: true,
      passedExam: false,
      books: ["Book 1", "Book 2", "Book 3"],
      booksObj: {
        1: "Book1",
        2: "Book2",
        3: "Book3",
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
</style>
