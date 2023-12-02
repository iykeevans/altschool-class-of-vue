<template>
  <div>This is the user page</div>
  <div>Dynamic route is: {{ $route.params.id }}</div>
  <button @click="$router.push('/user/10')">Go To 10th user</button>
</template>

<script>
export default {
  mounted() {
    console.log("I mounted");
  },
  //   watch: {
  //     "$route.params"() {
  //       console.log("Param changed");
  //     },
  //   },
  //   created() {
  //     this.$watch(
  //       () => this.$route.params,
  //       (toParams, previousParams) => {
  //         console.log("I changed");
  //       }
  //     );
  //   },
  beforeRouteUpdate(to, from) {
    console.log("I changed");
  },
};
</script>

<style scoped></style>
