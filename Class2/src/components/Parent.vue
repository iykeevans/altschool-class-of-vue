<template>
  <Child v-bind="$props" />
</template>

<script>
export default {
  props: ["lastName", "title"],
};
</script>

<style scoped></style>
