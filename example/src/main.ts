import { createApp } from "vue"
import "./style.css"
import { clickOutSide } from "v-click-outside-vue3"

import App from "./App.vue"

const app = createApp(App)

app.directive("click-outside", clickOutSide)

app.mount("#app")
