export default {
  state: [],
  getters: {
    shopList(state) {
      return state;
    },
    getQuantity(state) {
      return state.reduce((sum, i) => sum + i.quantity, 0);
    },
  },
  actions: {
    updateList(ctx, product) {
      ctx.commit("addProduct", product);
    },
    discrimProduct(ctx, id) {
      ctx.commit("minusProduct", id);
    },
  },

  mutations: {
    addProduct(state, product) {
      const index = state.findIndex((i) => i.id === product.id);
      if (index === -1) state.push({ ...product, quantity: 1 });
      else state[index].quantity += 1;
    },
    minusProduct(state, id) {
      const index = state.findIndex((i) => i.id === id);
      state[index].quantity--;
    },
  },
};
