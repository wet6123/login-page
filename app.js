"use strict";

// 모듈
const express = require("express");
const app = express();

// 라우팅
const home = require("./routes/home");

// 앱 세팅
app.set("vieews", "./views");
app.set("view engine", "ejs");

app.use("/", home); //use는 미들 웨어를 등록해주는 매서드

module.exports = app;
