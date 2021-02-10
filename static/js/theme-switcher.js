const button = document.querySelector(".theme-switcher");
const theme = document.querySelector("#theme-link");

button.addEventListener("click", function() {
  theme.href = (theme.getAttribute("href") == "static/css/light-theme.css") ? theme.href = "static/css/dark-theme.css" : theme.href = "static/css/light-theme.css";
});