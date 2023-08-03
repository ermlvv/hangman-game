export const darkModeHandle = () => {
  const toggleThemeMode = document.querySelector("#toggleDarkMode");
  const htmlElement = document.documentElement;

  if (localStorage.getItem("mode") === "dark") {
    htmlElement.classList.add("dark");
    toggleThemeMode.checked = true;
  }
  toggleThemeMode.addEventListener("input", () => {
    htmlElement.classList.toggle("dark");

    if (htmlElement.classList.contains("dark")) {
      localStorage.setItem("mode", "dark");
    } else {
      localStorage.setItem("mode", "light");
    }
  });
};
