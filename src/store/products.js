import axios from "axios";
export default {
  state: {},
  actions: {
    async getAllProducts(ctx) {
      try {
        const { data: response } = await axios.get(
          "https://joinposter.com/api/menu.getProducts?token=388658:6876523b828df7f6545d67f8363887d5"
        );
        ctx.commit("sortProducts", response.response);
      } catch (error) {
        console.log(error);
      }
    },
  },
  mutations: {
    sortProducts(state, products) {
      state.sets = products.filter((i) => i.menu_category_id === "19");
      state.premiumRolls = products.filter((i) => i.menu_category_id === "22");
      state.philadelphia = products.filter((i) => i.menu_category_id === "10");
      state.california = products.filter((i) => i.menu_category_id === "11");
      state.futomaki = products.filter((i) => i.menu_category_id === "6");
      state.californiaWithSesame = products.filter(
        (i) => i.menu_category_id === "12"
      );
      state.hotRolls = products.filter((i) => i.menu_category_id === "7");
      state.warmRolls = products.filter((i) => i.menu_category_id === "8");
      state.bakedRolls = products.filter((i) => i.menu_category_id === "23");
      state.maki = products.filter((i) => i.menu_category_id === "5");
      state.sushi = products.filter((i) => i.menu_category_id === "13");
      state.soup = products.filter((i) => i.menu_category_id === "17");
      state.salad = products.filter((i) => i.menu_category_id === "16");
      state.drinks = products.filter((i) => i.menu_category_id === "3");
      state.sushiSet = products.filter((i) => i.menu_category_id === "20");
    },
  },
  getters: {
    getProducts(state) {
      return state;
    },
  },
};
