import { App } from 'vue'
import one from "./HelloWorld.vue";

export default function install(app: App) {
  app.component('one', one)
}