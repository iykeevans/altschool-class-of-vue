<template>
  <div>
    {{ message }}

    <Child @changeMessage="changeMessage($event)" />
  </div>
</template>

<script>
import Child from "./Child.vue";

export default {
  components: { Child },
  data() {
    return {
      message: "Hello World",
    };
  },
  methods: {
    changeMessage(eventValue) {
      this.message = eventValue;
    },
  },
};
</script>

<style scoped></style>
