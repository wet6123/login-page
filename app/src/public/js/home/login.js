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
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = "/";
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error(new Error("로그인 중 에러 발생"));
    });
}
