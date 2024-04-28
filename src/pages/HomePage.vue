<template>
  <main>
    <PromoStend />
    <ProductGroup :title="'Філадельфія'" :list="list" />
  </main>
</template>

<script>
import PromoStend from "../modules/PromoStend/PromoStend.vue";
import ProductGroup from "../shared/components/ProductGroup/ProductGroup.vue";
import data from "./data.json";
export default {
  components: { PromoStend, ProductGroup },
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
