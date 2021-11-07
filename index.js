const menu = document.getElementById("menu");
const sidebar = document.querySelector(".sidebar");
const close_btn = document.getElementById("close_btn");

menu.addEventListener("click", () => {
  sidebar.classList.add("active");
});

close_btn.addEventListener("click", () => {
  sidebar.classList.remove("active");
});
