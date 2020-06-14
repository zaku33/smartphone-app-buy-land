const connection = require("../database/connection");

module.exports = {
  async userLogin(req, res) {
    console.log(req.body);

    let username = req.body.username;
    let password = req.body.password;

    if (username == "zaku33" && password == "123123") { // replace this with query on db
      return res.send({
        status: 200,
        message: "Login Success",
        access_token: "asd123asd123",
      });
    }
    return res.send({
      status: 401,
      message: "Wrong Username or Password",
    });
  },
};
