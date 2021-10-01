"use strict";

const id = document.querySelector("#idInput");
const pw = document.querySelector("#pwInput");
const loginButton = document.querySelector("button");

loginButton.addEventListener("click", login);

function login() {
  const req = {
    id: id.value,
    pw: pw.value,
  };
}
