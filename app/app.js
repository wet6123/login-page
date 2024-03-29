"use strict";

// 모듈
const express = require("express");
const app = express();

// 라우팅
const home = require("./src/routes/home");

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(express.static(`${__dirname}/src/public`)); //public의 js파일과 views의 ejs파일을 연결시켜주기 위한 미들웨어
app.use(express.json());
//url을 통해 전달되는 데이터에 한글, 공백 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(express.urlencoded({ extended: true }));

app.use("/", home); //use는 미들 웨어를 등록해주는 매서드

module.exports = app;
