<template>
  <div style="border: 1px solid green">
    <h1>this is a child in this Layout</h1>

    <Nav />
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
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import Nav from "../components/Nav.vue";

export default {
  components: { Nav },

  beforeRouteEnter(to, from) {
    const isAuthenticated = () => !!localStorage.getItem("token");

    if (!isAuthenticated()) {
      return {
        name: "Login",
      };
    }
  },
  setup() {
    onMounted(() => {});

    return {};
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
    loading() {
      return this.$store.state.loadingPosts;
    },
  },
  mounted() {
    this.$store.dispatch("getPosts");
  },
};
</script>

<style></style>
