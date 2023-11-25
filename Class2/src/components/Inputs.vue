<template>
  <div>
    <input
      type="text"
      class="border border-solid border-gray-300"
      v-model="firstName"
    />

    <textarea
      class="border border-solid border-gray-300"
      v-model="description"
    />

    <input type="checkbox" name="" id="" v-model="checkboxValue" />

    <label class="flex gap-x-3 items-center">
      Yes
      <input type="radio" name="" id="" value="yes" v-model="radioValue" />
    </label>

    <label class="flex gap-x-3 items-center">
      No
      <input type="radio" name="" id="" value="no" v-model="radioValue" />
    </label>

    <select name="" id="" v-model="selectValue">
      <option value="Option 1">Option 1</option>
      <option value="Option 2">Option 2</option>
      <option value="Option 3">Option 3</option>
    </select>

    {{ firstName }} {{ description }} {{ checkboxValue }} {{ radioValue }}
    {{ selectValue }}
  </div>
</template>

<script>
export default {
  watch: {
    checkboxValue() {
      console.log(this.checkboxValue);
    },
  },
  data() {
    return {
      firstName: "",
      description: "",
      checkboxValue: false,
      radioValue: "yes",
      selectValue: "",
    };
  },
  computed: {
    ifyName() {
      return "mutohir" + "ify";
    },
  },
};
</script>

<style scoped></style>
