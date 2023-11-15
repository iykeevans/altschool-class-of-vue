<template>
  <h1 class="red">{{ count }}</h1>

  <div>
    <button @click="handleAdd">Add</button>
    <button @click="handleRemove">Remove</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    handleAdd() {
      this.count++;
    },
    handleRemove() {
      this.count--;
    },
  },
};
</script>

<style scoped>
.red {
  color: red;
}
</style>
