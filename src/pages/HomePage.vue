<template>
  <main>
    <PromoStend />
    <ProductGroup :title="'Філадельфія'" :list="list" />
    <MobailShopBar />
  </main>
</template>

<script>
import MobailShopBar from "../modules/Header/MobailShopBar.vue";
import PromoStend from "../modules/PromoStend/PromoStend.vue";
import ProductGroup from "../shared/components/ProductGroup/ProductGroup.vue";
import data from "./data.json";
export default {
  components: { PromoStend, ProductGroup, MobailShopBar },
  data() {
    return {
      list: [],
    };
  },
  mounted() {
    this.list = data;
  },
};
</script>

<style lang="scss" scoped></style>
