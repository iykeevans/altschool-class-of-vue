<template>
  <div>
    <span>{{ index }}. </span>
    <div>{{ name }}</div>
    <div>{{ typeOfAnimal }}</div>
  </div>
</template>

<script>
export default {
  props: ["index", "name", "typeOfAnimal"],
};
</script>

<style scoped></style>
