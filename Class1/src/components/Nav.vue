<template>
  <router-link to="/">Home</router-link>
  <router-link to="/login" v-if="!isAuthenticated">Login</router-link>
  <router-link to="/posts" v-else>Posts</router-link>
  <button @click="handleLogout">Logout</button>
</template>

<script>
import { computed } from "@vue/reactivity";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();

    const handleLogout = () => {
      localStorage.removeItem("token");
      router.push("/login");
    };

    const isAuthenticated = computed(() => !!localStorage.getItem("token"));

    return {
      isAuthenticated,
      handleLogout,
    };
  },
};
</script>

<style></style>
