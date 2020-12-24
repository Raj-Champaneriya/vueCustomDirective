<template>
  <p v-header:bold="{ background: 'pink' }">{{ msg }}</p>
  <p v-header.primary>{{ msg }}</p>
  <div>
    <span v-format.bold.highlight.underline>guide</span>
    <br />
    <span v-format.underline>guide</span>
  </div>
  <!-- <button @click="count++">count is: {{ count }}</button> -->
  <SubmitButton>Hello Parent Component</SubmitButton>
</template>

<script>
import SubmitButton from "./SubmitButton.vue"
// Example of local custom directive
const format = function (el, binding, vnode) {
  const modifiers = binding.modifiers;
  if (modifiers.underline) {
    el.style.textDecoration = "underline";
  }
  if (modifiers.bold) {
    el.style.fontWeight = "bold";
  }
  if (modifiers.highlight) {
    el.style.background = "#ffff00";
  }
};

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      count: 0,
    };
  },
  components:{
    SubmitButton
  },
  directives: {
    format,
  },
};
</script>
