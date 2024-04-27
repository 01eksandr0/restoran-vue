<template>
  <section>
    <Container>
      <div class="my-container">
        <h2 :id="navId">{{ Title }}</h2>
        <ul>
          <li></li>
        </ul></div
    ></Container>
  </section>
</template>

<script>
export default {
  props: {
    list: Array,
    title: String,
    navId: String,
  },
};
</script>

<style lang="scss" scoped></style>
