"use strict";

const id = document.querySelector("#idInput"),
  name = document.querySelector("#nameInput"),
  pw = document.querySelector("#pwInput"),
  confirmPw = document.querySelector("#confirm-pw"),
  registerButton = document.querySelector("#button");

registerButton.addEventListener("click", register);

function register(event) {
  event.preventDefault();
  const req = {
    id: id.value,
    name: name.value,
    pw: pw.value,
    confirmPw: confirmPw.value,
  };

  fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = "/login";
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error(new Error("회원가입 중 에러 발생"));
    });
}
