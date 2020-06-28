const connection = require("../database/connection");

module.exports = {
  async index(request, response) {
    const ong_id = request.headers.authorization;

    const incidents = await connection("incidents")
      .where("ong_id", ong_id)
      .select("*");

    return response.json(incidents);
  },

  async userRegister(req, res) {
    let username = req.body.username;
    let password = req.body.password;
    let phone = req.body.phone;
    let email = req.body.email;

    if (username == "dulieutrongdb") {
      return res.status(406).send({
        status: 406,
        message: "this username already existed",
      });
    }

    // save into db
    //
    //
    //

    return res.send({
      status: 200,
      message: "register successful!",
    });
  },

  async resetUserPassword(req, res) {
    let email = req.body.email;
    console.log(email);
  },
};
