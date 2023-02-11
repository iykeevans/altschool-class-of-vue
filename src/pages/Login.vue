<template>
  <h1>Login Page</h1>
  <input type="text" placeholder="Username" v-model="userName" />
  <input type="password" placeholder="Password" v-model="password" />
  <br />
  <button @click="handleLogin" :disabled="!userName || !password">Login</button>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
export default {
  setup() {
    const userName = ref("");
    const password = ref("");
    const router = useRouter();

    const dummyData = {
      userName: "iyke",
      password: "password",
    };

    const handleLogin = () => {
      if (
        userName.value === dummyData.userName &&
        password.value === dummyData.password
      ) {
        localStorage.setItem("token", "cacacacacac");
        alert("Login successful!!!");
        router.push({ name: "Posts" });
      } else {
        alert("Username or Password is incorrect!!!");
      }
    };

    return {
      userName,
      password,
      handleLogin,
    };
  },
};
</script>

<style></style>
