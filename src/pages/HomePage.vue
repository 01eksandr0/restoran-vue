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
import axios from "axios";
export default {
  components: { PromoStend, ProductGroup, MobailShopBar },
  data() {
    return {
      list: [],
    };
  },
  methods: {
    async getData() {
      axios
        .get(
          "https://joinposter.com/api/menu.getProducts?token=388658:6876523b828df7f6545d67f8363887d5"
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error("Ошибка:", error);
        });
    },
  },

  mounted() {
    this.list = data;
    this.getData();
  },
};
</script>

<style lang="scss" scoped></style>
