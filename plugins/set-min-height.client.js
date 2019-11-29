import Vue from "vue";

let windowHeight, headerHeight, footerHeight, mainMinHeight, main;

const setMinHeight = () => {
  windowHeight = window.innerHeight;
  headerHeight = document.getElementById("header").clientHeight;
  footerHeight = document.getElementById("footer").clientHeight;
  mainMinHeight = windowHeight - headerHeight - footerHeight;
  main = document.getElementById("main");

  main.style.minHeight = mainMinHeight + "px";
};
setMinHeight();
window.onresize = setMinHeight;

Vue.mixin({
  updated() {
    setMinHeight();
  },
});
