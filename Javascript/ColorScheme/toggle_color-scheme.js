function switchTheme() {
  if (document.documentElement.getAttribute("data-theme") == "dark") {
    //&& switched == true) {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  } else if (document.documentElement.getAttribute("data-theme") == "light") {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  }
}