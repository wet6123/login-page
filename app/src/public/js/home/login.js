"use strict";

const id = document.querySelector("#idInput");
const pw = document.querySelector("#pwInput");
const loginButton = document.querySelector("#button");

loginButton.addEventListener("click", login);

function login(event) {
  event.preventDefault();
  const req = {
    id: id.value,
    pw: pw.value,
  };

  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "appication/json",
    },
    body: JSON.stringify(req),
  });
}
