"use strict";

const id = document.querySelector("#idInput"),
  name = document.querySelector("#nameInput"),
  pw = document.querySelector("#pwInput"),
  confirmPw = document.querySelector("#confirm-pw"),
  registerButton = document.querySelector("#button");

registerButton.addEventListener("click", register);

function register(event) {
  event.preventDefault();

  if (!id.value) return alert("아이디를 입력해주십시오.");

  if (pw.value !== confirmPw.value)
    return alert("비밀번호가 일치하지 않습니다.");

  const req = {
    id: id.value,
    name: name.value,
    pw: pw.value,
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
