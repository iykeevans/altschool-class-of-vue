<template>
  <div>
    <p ref="messageRef">Thank you Michael!</p>
    <button @click="updateMessage">Update Message</button>
    <input type="text" placeholder="Add your book here.." v-model="book.name" />
    <button @click="addBook(book)" :disabled="!book.name">Add</button>

    <div
      v-for="book in books"
      :key="book.name"
      style="border: 1px dashed; margin-top: 10px"
    >
      <div style="margin-bottom: 3px">
        <span style="font-weight: bold; margin-right: 10px">Name:</span>
        <span>{{ book.name }}</span>
      </div>

      <div>
        <span style="font-weight: bold; margin-right: 10px">Author:</span>
        <span>{{ book.author }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from "@vue/reactivity";
import bookManager from "../composables/book-manager";

export default {
  name: "AboutComposition",
  data() {
    return {
      books: [],
      roles: [],
    };
  },
  methods: {
    addBook() {},
    fetchRoles() {},
    removeBook() {},
    fetchBooks() {},
  },
  mounted() {
    this.fetchBooks();
  },
  setup() {
    const messageRef = ref(null);
    const { books, book, addBook } = bookManager();

    const roleManager = () => {};

    const firstName = ref("Adebayo");
    const lastName = ref("Pokanu");

    const updateMessage = () => {
      console.log("messageRef", messageRef.value.textContent);
      messageRef.value.classList.add("text-red");
      messageRef.value.textContent = "Thank you Adebayo!";
    };

    return { books, book, addBook, messageRef, updateMessage };
  },
};
</script>

<style>
.text-red {
  color: red;
}
</style>
