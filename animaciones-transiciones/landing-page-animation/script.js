// MIT License

// Copyright (c) 2023 Mateo Álvarez Murillo

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

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
