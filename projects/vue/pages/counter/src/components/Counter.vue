<template>
  <div class="counterCompContainer">
    <h1>{{ deneme }}</h1>
  </div>
</template>

<script>
export default {
  name: "CounterComp",

  computed: {
    deneme() {
      return 12;
    },
  },
};
</script>

<style scoped>
.counterCompContainer {
}
</style>
