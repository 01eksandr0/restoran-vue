import { createApp } from "vue";
import router from "../src/router/router";
import components from "./shared/components/index";
import App from "./App.vue";
const app = createApp(App);

components.forEach((component) => {
  app.component(component.name, component);
});

app.use(router).mount("#app");
