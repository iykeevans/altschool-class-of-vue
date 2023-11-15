<template>
  <slot name="color" :value="value">
    <div :style="`color: ${value}`">{{ value }}</div>
  </slot>
  <slot name="footer">
    <div style="font-size: 8px">Generic footer</div>
  </slot>

  <button @click="handleSelectedColor">Click me</button>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: "Color",
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    handleSelectedColor() {
      this.$emit("change-selected-color", this.value);
    },
  },
};
</script>

<style></style>
