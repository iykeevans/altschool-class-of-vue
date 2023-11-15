<template>
  <h1>This Are My Posts</h1>

  <div>
    <div v-if="loading">Loading...</div>
    <div
      v-else
      v-for="post in posts"
      :key="post.id"
      style="border: 1px dashed; margin-bottom: 10px"
    >
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
      <button @click="$router.push(`/posts/${post.id}`)">View More</button>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";

export default {
  setup() {
    const posts = ref([]);
    const loading = ref(true);

    const fetchPosts = () => {
      const endpoint = "https://dummyjson.com/posts";

      fetch(endpoint)
        .then((response) => response.json())
        .then((response) => (posts.value = response.posts))
        .finally(() => (loading.value = false));
    };

    onMounted(() => {
      fetchPosts();
    });

    return {
      posts,
      loading,
    };
  },
};
</script>

<style></style>
