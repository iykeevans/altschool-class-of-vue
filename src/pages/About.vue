<template>
  <h1>This page is about us</h1>
  <!-- <button @click="goBack">Go to Home</button> -->
  <router-link to="/">Go Home</router-link>
  <button @click="$router.push('/post/1?title=goosebumps')">Go To Post</button>
  <button @click="$router.push({ name: 'Home' })">Go Back Home</button>
</template>

<script>
export default {
  methods: {
    goBack() {
      //   this.$router.push("/");
    },
    createUser() {
      //async stuff here
      this.goBack();
    },
  },
};
</script>

<style>
.active {
  color: red;
}
</style>
