
const savedTheme =
  localStorage.getItem("theme") ||
  (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light");

const app = Vue.createApp({
  data() {
    return {

      theme: savedTheme
    };
  },

  watch: {
    theme(newVal) {
      document.documentElement.setAttribute("data-theme", newVal);
      localStorage.setItem("theme", newVal);
    }
  },

  created() {
    document.documentElement.setAttribute("data-theme", this.theme);
  }
});


app.component("theme-select", ThemeSelect);
app.mount("#app");
