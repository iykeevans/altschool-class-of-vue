<template>
  <div>{{ name }}</div>

  <input v-model="searchValue" />

  <!-- <button v-on:click="changeName">Change Name</button> -->
  <div v-for="color in filteredColors" :key="color">
    {{ color }}
  </div>
</template>

<script>
export default {
  name: "Recap_01_02_2023",
  data() {
    return {
      name: "Hello World",
      colors: ["red", "blue", "green", "yellow", "pink", "black", "gold"],
      filteredColors: [
        "red",
        "blue",
        "green",
        "yellow",
        "pink",
        "black",
        "gold",
      ],
      searchValue: "",
    };
  },
  methods: {
    changeName() {
      this.name = "Adebayo";
    },
    filterString() {
      //   this.colors = this.colors.filter((item) =>
      //     item.toLowerCase().includes(this.searchValue.toLowerCase())
      //   );
      // loop through the colors
      // get color
      // do check to confirm if searchvalue is in the currentColor

      const newArray = [];

      if (this.searchValue.length === 0) {
        return this.colors;
      }
      debugger;
      for (let index = 0; index < this.colors.length; index++) {
        const color = this.colors[index];

        // check if the color is included in the searchValue
        let condition = color
          .toLowerCase()
          .includes(this.searchValue.toLowerCase());

        if (condition) {
          newArray.push(color);
        }
      }

      return newArray;
    },
  },
  watch: {
    searchValue: {
      handler() {
        this.filteredColors = this.colors.filter((item) =>
          item.toLowerCase().includes(this.searchValue.toLowerCase())
        );
      },
    },
  },
  computed: {
    filteredColors() {
      return this.colors.filter((item) =>
        item.toLowerCase().includes(this.searchValue.toLowerCase())
      );
    },
  },
};
</script>

<style></style>
