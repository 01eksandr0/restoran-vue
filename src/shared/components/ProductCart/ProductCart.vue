<template>
  <div class="item">
    <div class="img-container">
      <img :src="info.src" alt="" class="img" />
    </div>
    <div class="text-content">
      <h3 class="title">Філадельфія лайт 235г</h3>
      <p class="ingridients">
        Креветка, ікра тобіко, філадельфія, огірок, авокадо, рис, норі.
      </p>
      <div class="bottom">
        <p class="price">180 грн</p>
        <div class="control">
          <button>-</button>
          <p class="counter">{{ quantity }}</p>
          <button class="btn">+</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ProductCart",
  props: {
    info: Object,
  },
  data() {
    return {
      quantity: 0,
    };
  },
  computed: mapGetters(["shopList"]),
  mounted() {
    const cart = this.shopList.find((i) => i.id === this.info.id);
    console.log(cart);
    this.quantity = cart.quantity || 0;
  },
};
</script>

<style lang="scss" scoped>
.item {
  width: 300px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0px;
  &:hover .img {
    transform: scale(110%);
    z-index: 0;
  }
}
.img-container {
  height: 300px;
  width: 300px;
  overflow: hidden;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.text-content {
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 6px;
  padding: 10px;
}
.img {
  height: 300px;
  width: 300px;
  transition: transform $animation-duration $animation-time-function;
}
.title {
  font-size: 22px;
}
.ingridients {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.5);
}
.bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.price {
  color: rgba(0, 0, 0, 0.7);
  font-size: 26px;
}
.control {
  display: flex;
  align-items: center;
  gap: 4px;
}
.btn {
  padding: 7px 15px;
  border-radius: 5px;
  font-size: 26px;
  color: #fff;
  background-color: lightgreen;
  transition: color $animation-duration $animation-time-function,
    background-color $animation-duration $animation-time-function;
  &:hover {
    background-color: green;
    color: rgba(255, 255, 255, 0.8);
  }
}
@include media(desktop) {
  .item {
    width: 280px;
  }
  .img-container {
    width: 280px;
    height: 280px;
  }
}
</style>
