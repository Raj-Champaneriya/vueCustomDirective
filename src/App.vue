<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
</template>

<script>
import { onBeforeMount } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import SubmitButton from "./components/SubmitButton.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    SubmitButton,
  },
};
</script>
