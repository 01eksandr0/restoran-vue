<template>
  <main class="main">
    <PromoStend />
    <ProductGroup
      v-if="getProducts.sets"
      :title="getProducts.sets[0].category_name"
      :list="getProducts.sets"
    />
    <ProductGroup
      v-if="getProducts.premiumRolls"
      :title="getProducts.premiumRolls[0].category_name"
      :list="getProducts.premiumRolls"
    />
    <ProductGroup
      v-if="getProducts.philadelphia"
      :title="getProducts.philadelphia[0].category_name"
      :list="getProducts.philadelphia"
    />
    <ProductGroup
      v-if="getProducts.california"
      :title="getProducts.california[0].category_name"
      :list="getProducts.california"
    />
    <ProductGroup
      v-if="getProducts.futomaki"
      :title="getProducts.futomaki[0].category_name"
      :list="getProducts.futomaki"
    />
    <ProductGroup
      v-if="getProducts.californiaWithSesame"
      :title="getProducts.californiaWithSesame[0].category_name"
      :list="getProducts.californiaWithSesame"
    />
    <ProductGroup
      v-if="getProducts.hotRolls"
      :title="getProducts.hotRolls[0].category_name"
      :list="getProducts.hotRolls"
    />
    <ProductGroup
      v-if="getProducts.warmRolls"
      :title="getProducts.warmRolls[0].category_name"
      :list="getProducts.warmRolls"
    />
    <ProductGroup
      v-if="getProducts.bakedRolls"
      :title="getProducts.bakedRolls[0].category_name"
      :list="getProducts.bakedRolls"
    />
    <ProductGroup
      v-if="getProducts.maki"
      :title="getProducts.maki[0].category_name"
      :list="getProducts.maki"
    />
    <ProductGroup
      v-if="getProducts.sushi"
      :title="getProducts.sushi[0].category_name"
      :list="getProducts.sushi"
    />
    <ProductGroup
      v-if="getProducts.soup"
      :title="getProducts.soup[0].category_name"
      :list="getProducts.soup"
    />
    <ProductGroup
      v-if="getProducts.salad"
      :title="getProducts.salad[0].category_name"
      :list="getProducts.salad"
    />
    <ProductGroup
      v-if="getProducts.drinks"
      :title="getProducts.drinks[0].category_name"
      :list="getProducts.drinks"
    />
    <ProductGroup
      v-if="getProducts.sushiSet"
      :title="getProducts.sushiSet[0].category_name"
      :list="getProducts.sushiSet"
    />
    <MobailShopBar />
  </main>
</template>

<script>
import MobailShopBar from "../modules/Header/MobailShopBar.vue";
import PromoStend from "../modules/PromoStend/PromoStend.vue";
import ProductGroup from "../shared/components/ProductGroup/ProductGroup.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  components: { PromoStend, ProductGroup, MobailShopBar },
  computed: mapGetters(["getProducts"]),
  methods: mapActions(["getAllProducts"]),
  mounted() {
    this.getAllProducts();
  },
};
</script>

<style lang="scss" scoped>
@include media(tablet) {
  .main {
    padding-top: 90px;
  }
}
@include media(desktop) {
  .main {
    padding-top: 100px;
  }
}
</style>
