// Autor: Mateo Álvarez Murillo
// Fecha de creación: 2023
// 
// Este código se proporciona bajo la Licencia MIT.
// Para más información, consulta el archivo LICENSE en la raíz del repositorio.

"use strict";

window.addEventListener("load", () => {
  const modal = document.querySelector(".modal");
  const button1 = document.getElementById("button1");
  const button2 = document.getElementById("button3");
  const button3 = document.getElementById("button2");
  const close = document.querySelector(".modal__content--close");
  button1.addEventListener("click", () => {
    aparecer();
  });
  button2.addEventListener("click", () => {
    aparecer();
  });
  button3.addEventListener("click", () => {
    aparecer();
  });
  close.addEventListener("click", () => {
    desaparecer();
  });

  function aparecer() {
    modal.classList.remove("hidden");
    modal.classList.add("visible");
  }

  function desaparecer() {
    modal.classList.remove("visible");
    modal.classList.add("hidden");
  }
});
