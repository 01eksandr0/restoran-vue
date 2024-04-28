import { createApp } from "vue";
import router from "../src/router/router";
import components from "./shared/components/index";
import App from "./App.vue";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { BiInstagram, RiZhihuFill } from "oh-vue-icons/icons";

const app = createApp(App);
addIcons(BiInstagram, RiZhihuFill);
components.forEach((component) => {
  app.component(component.name, component);
});
app.component("v-icon", OhVueIcon);
app.use(router).mount("#app");
