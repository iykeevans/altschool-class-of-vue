<script>
import WelcomeBox from "./components/WelcomeBox.vue";
import CustomFetch from "./components/CustomFetch.vue";
import AboutComposition from "./components/AboutComposition.vue";

export default {
  components: {
    WelcomeBox,
    CustomFetch,
    AboutComposition,
  },
  data() {
    return {
      slotName: "title",
      title: "",
      body: "",
    };
  },
  methods: {
    changeSlotName() {
      if (this.slotName === "title") {
        this.slotName = "description";
        return;
      }

      this.slotName = "title";
    },
    handleClick() {
      (this.title = "Title"), (this.body = "Body");
    },
  },
};
</script>

<template>
  <main>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/posts">Posts</router-link>
    </nav>

    <aside></aside>

    <section>
      <router-view />
    </section>
  </main>

  <!-- <about-composition /> -->
  <!-- <welcome-box @update="handleClick">
  </welcome-box> -->

  <!-- <button @click="changeSlotName">Change Slot</button> -->

  <!-- <custom-fetch url="https://jsonplaceholder.typicode.com/todos">
    <template #context="{ isLoading, response }">
      <div v-if="isLoading">Loading...</div>
      <div v-else>
        <div v-for="item in response" :key="item.id">
          <span style="color: blue">{{ item.title }}</span
          >:
          <span style="color: red">{{
            item.completed ? "Done" : "Not Done"
          }}</span>
        </div>
      </div>
    </template>
  </custom-fetch> -->
</template>

<style scoped>
.title {
  font-size: 20px;
  color: red;
}

.body {
  font-size: 16px;
  color: grey;
}

.card__title {
}

.router-link-active,
.router-link-exact-active {
  color: red;
}
</style>
