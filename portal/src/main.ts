import { createApp } from "vue";
import "vuetify/dist/vuetify.min.css";
import App from "./App.vue";
import router from "./router/index";
import "vuetify/dist/vuetify.min.css";

const app = createApp(App);

app.use(router);
// app.use(vuetify);

app.mount("#app");
