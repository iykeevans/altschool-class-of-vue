<template>
  <Nav />
  <h1>{{ post.title }}</h1>
  <p>{{ post.body }}</p>
  <button @click="incrementPostId">Increase PostId</button>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useRoute, useRouter } from "vue-router";
import { onMounted } from "@vue/runtime-core";
import Nav from "../components/Nav.vue";
export default {
  components: { Nav },
  beforeRouteUpdate(to, from) {
    // called when the route that renders this component has changed, but this component is reused in the new route.
    // For example, given a route with params `/posts/:id`, when we navigate between `/posts/1` and `/posts/2`,
    // the same `UserDetails` component instance will be reused, and this hook will be called when that happens.
    // Because the component is mounted while this happens, the navigation guard has access to `this` component instance.
    console.log("-----> to", to, "------> from", from);
  },
  setup() {
    const post = ref({});

    // we don't have access to this in the composition API so lets use a hook
    const route = useRoute();
    const router = useRouter();

    const fetchPost = () => {
      const { postId } = route.params;
      const endpoint = `https://dummyjson.com/posts/${postId}`;

      fetch(endpoint)
        .then((response) => response.json())
        .then((json) => (post.value = json));
    };

    const incrementPostId = () => {
      const { postId } = route.params;
      router.push({ name: "Post", params: { postId: Number(postId) + 1 } });
    };

    onMounted(() => {
      fetchPost();
    });

    return {
      post,
      incrementPostId,
    };
  },
};
</script>

<style></style>
