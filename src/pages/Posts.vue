<template>
  <h1>This Are My Posts</h1>

  <div>
    <div v-for="post in posts" :key="post.id">
      <h2>POST {{ post.id }}</h2>
      <p>{{ post.title }}</p>
      <button @click="$router.push(`/posts/${post.id}`)">View More</button>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
export default {
  data() {
    return {
      posts: [],
    };
  },

  methods: {
    fetchPosts() {
      const endpoint = "https://jsonplaceholder.typicode.com/todos";

      fetch(endpoint)
        .then((response) => response.json())
        .then((json) => (this.posts = json));
    },
  },
  mounted() {
    this.fetchPosts();
  },
};
</script>

<style></style>
