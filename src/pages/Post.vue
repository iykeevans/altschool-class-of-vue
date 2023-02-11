<template>
  <h1>POST {{ post.id }}</h1>
  <p>{{ post.title }}</p>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useRoute } from "vue-router";
import { onMounted } from "@vue/runtime-core";
export default {
  setup() {
    const post = ref({});

    // we don't have access to this in the composition API so lets use a hook
    const route = useRoute();

    const fetchPost = () => {
      const { postId } = route.params;
      const endpoint = `https://jsonplaceholder.typicode.com/todos/${postId}`;

      fetch(endpoint)
        .then((response) => response.json())
        .then((json) => (post.value = json));
    };

    onMounted(() => {
      fetchPost();
    });

    return {
      post,
    };
  },
};
</script>

<style></style>
