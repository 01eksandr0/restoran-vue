<template>
  <main class="main">
    <ShopList />
    <ShopForm v-if="getSum" />
  </main>
</template>

<script>
import { mapGetters } from "vuex";
import ShopList from "../modules/ShopList/ShopList.vue";
import ShopForm from "../modules/ShopForm/ShopForm.vue";
export default {
  components: { ShopList, ShopForm },
  computed: mapGetters(["getSum"]),
};
</script>

<style lang="scss" scoped>
.main {
  padding: 20px 0;
}
@include media(tablet) {
  .main {
    padding: 40px 0 30px;
  }
}
</style>
