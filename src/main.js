import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";

const app = createApp(App);

// Register a global custom directive called `v-mainHeader`
app
  .directive("header", {
    beforeMount(el, binding) {
      var fontWeight = 100;
      if (binding.arg && binding.arg.toLowerCase() === "bold") {
        fontWeight = 600;
      }

      var fontColor = "black";
      if (binding.modifiers.primary) {
        fontColor = "Blue";
      }

      el.style.fontSize = "25px";
      el.style.fontWeight = fontWeight;
      el.style.background = binding.value
        ? binding.value.background
        : "lightblue";
      el.style.color = fontColor;
    },
  })
  .mount("#app");
