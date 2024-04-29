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
      const account = "aleksandrkrizhonovsky"; // Замените на значение из $_GET['account']
      const code = "fc12ffdcd048973300b35c1714401989"; // Замените на значение из $_GET['code']

      const url = `https://${account}.joinposter.com/api/v2/auth/access_token`;
      const headers = {
        "Access-Control-Allow-Origin": "https://nashi-sushi3.ps.me",
        "Access-Control-Allow-Credentials": true,
        // Другие заголовки, если необходимо
      };

      axios
        .get(
          "https://joinposter.com/api/menu.getCategories?token=388658:6876523b828df7f6545d67f8363887d5&fiscal=0",
          { headers: headers }
        )
        .then((response) => {
          console.log("Ответ:", response.data);
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
