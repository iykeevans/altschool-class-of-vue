<template>
  <div>
    <h1>
      <slot name="title" :title="book.title">Book Title</slot>
    </h1>

    <p>
      <slot name="author" :author="book.author">Book Author</slot>
    </p>

    <slot name="button">
      <button @click="$emit('update', { title: 'Title', body: 'Body' })">
        Click me
      </button>
    </slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      book: {
        author: "R.L Stine",
        title: "Goosebumps",
      },
    };
  },
};
</script>

<style></style>
