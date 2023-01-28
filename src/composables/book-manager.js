import { ref, reactive } from "@vue/reactivity";
import { onBeforeMount, onMounted, watch, watchEffect } from "vue";

const bookManager = () => {
  const lastName = ref("");
  const book = reactive({
    name: "",
    author: "Random Author",
  });

  let books = ref([]);

  const addBook = (book) => {
    // books.value.push(book);
    books.value = [...books.value, book];
  };

  const removeBook = () => {};

  const fetchBooks = () => {
    const defaultBooks = [
      { name: "GooseBumps", author: "R.L Stine" },
      { name: "Harry Potter", author: "J. K. Rowlings" },
    ];
    // get books in localStorage
    const storedBooks = localStorage.getItem("books");
    console.log("storedBooks", storedBooks);

    if (storedBooks) {
      return (books.value = JSON.parse(storedBooks));
    }

    books.value = defaultBooks;
  };

  onMounted(() => {
    fetchBooks();
  });

  watch(books, (val) => {
    localStorage.setItem("books", JSON.stringify(books.value));
  });

  //   watchEffect(() => {
  //     console.log("==--===>", books);
  //   });

  return {
    books,
    book,
    addBook,
  };
};

export default bookManager;
