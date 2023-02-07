<template>
  <div>
    <slot name="context" :isLoading="isLoading" :response="response"></slot>
  </div>
</template>

<script>
export default {
  props: ["url"],
  data() {
    return {
      isLoading: true,
      response: [],
    };
  },
  mounted() {
    fetch(this.url)
      .then((response) => response.json())
      .then((data) => (this.response = data))
      .catch((error) => console.log(error))
      .finally(() => (this.isLoading = false));
  },
};
</script>

<style></style>
