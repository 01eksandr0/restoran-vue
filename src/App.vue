<script>
import MyFooter from "./modules/Footer/MyFooter.vue";
import MyHeader from "./modules/Header/MyHeader.vue";
export default {
  components: { MyHeader, MyFooter },
};
</script>

<template>
  <my-header />
  <router-view></router-view>
  <my-footer />
</template>

<style lang="scss">
@include media(tablet) {
}
</style>
