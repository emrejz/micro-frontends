<template>
  <section id="counterContainer">
    <CounterComp />
    <h4>This home page was created by vue.</h4>
  </section>
</template>

<script>
import CounterComp from "./components/Counter.vue";

export default {
  name: "App",
  components: {
    CounterComp,
  },
};
</script>

<style scoped>
#counterContainer {
  display: flex;
  flex-direction: column;
  margin: 0 60px;
  align-items: center;
}
</style>
