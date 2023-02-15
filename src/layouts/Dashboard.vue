<template>
  <div style="border: 1px dashed red">
    <Nav />
    <h1>This is the dashboard</h1>

    <router-view style="border: 1px solid green" />
  </div>
</template>

<script>
import Nav from "../components/Nav.vue";
export default {
  components: { Nav },
};
</script>

<style></style>
