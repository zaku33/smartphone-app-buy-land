const connection = require("../database/connection");

module.exports = {
  async getNews(req, res) {
    console.log("Get News Request");
    return res.send({
      news: [
        {
          id: "1",
          title: "1 Item",
          author: "Nguyen",
          content: "Lorem Isum",
          location: {
            lat: 0,
            long: 0,
          },
        },
        {
          id: "2",
          title: "2 Item",
          author: "Hoang",
          content: "Lorem Isum",
          location: {
            lat: 100,
            long: 100,
          },
        },
        {
          id: "3",
          title: "3 Item",
          author: "Vuong",
          content: "Lorem Isum",
          location: {
            lat: 200,
            long: 200,
          },
        },
        {
          id: "4",
          title: "4 Item",
          author: "Le",
          content: "Lorem Isum",
          location: {
            lat: 300,
            long: 300,
          },
        },
        {
          id: "5",
          title: "5 Item",
          author: "Hung",
          content: "Lorem Isum",
          location: {
            lat: 400,
            long: 400,
          },
        },
        {
          id: "6",
          title: "6 Item",
          author: "Anh",
          content: "Lorem Isum",
          location: {
            lat: 500,
            long: 500,
          },
        },
      ],
    });
  },

  async index(request, response) {
    const ongs = await connection("ongs").select("*");

    return response.json(ongs);
  },

  async create(request, response) {
    debugger;
    console.log(request);
    const { name, email, whatsapp, city, pin } = request.body;

    const id = generateUniqueId();

    await connection("ongs").insert({
      id,
      name,
      email,
      password,
      whatsapp,
      city,
      pin,
    });

    return response.json({ id });
  },
};
