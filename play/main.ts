import { createApp } from "vue";
import App from "./App.vue";
import bestiaryui from "@bestiaryui/components";

const app = createApp(App);
app.use(bestiaryui);

app.mount("#app");