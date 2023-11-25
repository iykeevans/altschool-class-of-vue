<template>
  <div
    class="h-[500px] w-[400px] mx-auto border border-dashed border-gray-400 px-5 py-5"
  >
    <h2 class="mb-4 pb-2 border-b-2 border-solid border-gray-400">
      <slot name="header" />
    </h2>

    <p>
      <slot name="content" item="This is from the content" />
    </p>
  </div>
</template>

<script>
export default {
  props: ["heading", "content"],
};
</script>

<style scoped></style>
