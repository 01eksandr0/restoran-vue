<template>
  <div class="item">
    <div class="img-container">
      <img
        src="https://img.postershop.me/cdn-cgi/image/width=390,format=webp/https://img.postershop.me/13667/b3f4da92-848e-47e3-b923-4cdd902e2cd0_image.jpeg"
        alt=""
      />
    </div>
    <h3 class="title"></h3>
    <p class="ingridients"></p>
    <div class="bottom">
      <p class="size"></p>
      <button class="btn"></button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCart",
  props: {
    info: Object,
  },
};
</script>

<style lang="scss" scoped></style>
