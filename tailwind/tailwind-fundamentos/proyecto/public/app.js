const menu = document.getElementById("menu");
const btn = document.getElementById("boton");
btn.addEventListener("click", change);

function change() {
  if (menu.classList.contains("block")) {
    menu.classList.remove("block");
    menu.classList.add("hidden");
  } else {
    menu.classList.remove("hidden");
    menu.classList.add("block");
  }
}
