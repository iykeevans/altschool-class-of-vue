<template>
  <h1>POST {{ post.id }}</h1>
  <p>{{ post.title }}</p>
</template>

<script>
export default {
  data() {
    return {
      post: {},
    };
  },
  methods: {
    fetchPost() {
      const { postId } = this.$route.params;
      const endpoint = `https://jsonplaceholder.typicode.com/todos/${postId}`;

      fetch(endpoint)
        .then((response) => response.json())
        .then((json) => (this.post = json));
    },
  },
  mounted() {
    this.fetchPost();
  },
};
</script>

<style></style>
