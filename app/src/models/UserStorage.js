"use strict";

class UserStorage {
  static #users = {
    id: ["가나다", "아이디"],
    pw: ["123", "456"],
    name: ["배준성", "우리밋"],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }
}

module.exports = UserStorage;
