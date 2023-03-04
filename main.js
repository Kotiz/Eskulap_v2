import { createApp } from "vue";
import VueEasyLightbox from "vue-easy-lightbox";
import router from "./routes";
import "bootstrap";
import "./index.css";
import App from "./App.vue";

let app = createApp(App);
app.use(router);
app.use(VueEasyLightbox);
app.mount("#app");
