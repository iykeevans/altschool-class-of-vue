<template>
  <div>
    <label>
      First Name <br />
      <input type="text" v-model="user.firstName" />
    </label>

    <!-- <br />

    <label>
      Last Name <br />
      <input type="text" v-model="user.lastName" />
    </label>

    <br />

    <label>
      Age <br />
      <input type="text" v-model="user.age" />
    </label> -->

    <button @click="clearInput">Clear Input</button>

    <div>{{ fullName }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        firstName: "",
        lastName: "",
        age: 0,
      },
    };
  },
  watch: {
    "user.firstName": {
      handler() {
        console.log({ firstName: this.user.firstName });
      },
      immediate: true,
    },
    "user.lastName"() {
      console.log({ lastName: this.user.lastName });
    },
    "user.age"() {
      console.log(typeof this.user.age);
    },
  },
  methods: {
    clearInput() {
      this.user.firstName = "";
    },
    handleChange(event) {
      this.user.firstName = event.target.value;
    },
  },
  computed: {
    fullName() {
      return this.user.firstName + " " + this.user.lastName;
    },
  },
};
</script>

<style scoped></style>
