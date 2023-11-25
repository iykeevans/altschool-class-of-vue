<template>
  <button class="bg-gray-300 block rounded px-2 py-1" @click="changeMessage">
    Change message
  </button>
</template>

<script>
export default {
  methods: {
    changeMessage() {
      this.$emit("changeMessage", "Another World");
    },
  },
};
</script>

<style scoped></style>
