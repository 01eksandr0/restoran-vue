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
      const authUrl = `https://nashi-sushi3.joinposter.com/api/v2/auth/access_token`;
      const res = await axios.get(authUrl);
      console.log(res);
    },
  },

  mounted() {
    this.list = data;
    this.getData();
  },
};
</script>

<style lang="scss" scoped></style>
