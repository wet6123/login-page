"use strict";

const output = {
  home: (req, res) => {
    res.render("home/index");
  },
  login: (req, res) => {
    res.render("home/login");
  },
};

const users = {
  id: ["가나다", "아이디"],
  pw: ["123", "456"],
};

const process = {
  login: (req, res) => {
    const id = req.body.id;
    const pw = req.body.pw;

    if (users.id.includes(id)) {
      const index = users.id.indexOf(id);
      if (users.pw[index] === pw) {
        return res.json({
          success: true,
        });
      }
    }

    return res.json({
      success: false,
      msg: "로그인에 실패하셨습니다.",
    });
  },
};

module.exports = {
  output,
  process,
};
