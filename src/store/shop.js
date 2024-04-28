export default {
  state: [
    {
      id: "4",
      quantity: 1,
      src: "https://img.postershop.me/cdn-cgi/image/width=390,format=webp/https://img.postershop.me/13667/a09b7ffb-2d8d-4c91-aabb-fa71ff478e84_image.jpeg",
    },
  ],
  getters: {
    shopList(state) {
      return state;
    },
  },
  actions: {
    updateList(ctx, product) {
      ctx.commit("addProduct", product);
    },
  },
  mutations: {
    addProduct(state, product) {
      const index = state.findIndex((i) => i.id === product.id);
      if (index === -1) state.push({ ...product, quantity: 1 });
      else state[index].quantity += 1;
    },
  },
};
