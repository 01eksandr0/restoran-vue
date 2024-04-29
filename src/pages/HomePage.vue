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

      const auth = {
        application_id: 3457,
        application_secret: "fc12ffdcd048973300b35c1714401989",
        grant_type: "authorization_code",
        redirect_uri: "https://restoran-vue.vercel.app/",
        code: code,
      };

      axios
        .post(url, auth)
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
