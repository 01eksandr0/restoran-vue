import { createStore } from "vuex";
import shop from "./shop";
import products from "./products";
export default createStore({
  modules: { shop, products },
});
