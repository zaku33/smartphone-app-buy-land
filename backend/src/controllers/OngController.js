const generateUniqueId = require('../utils/generateUniqueId');
const connection = require('../database/connection');

module.exports = {
  async index (request, response) {
    const ongs = await connection('ongs').select('*');

    return response.json(ongs);
  },

  async create(request, response) {
    debugger;
    console.log(request);
    const { name, email, whatsapp, city, pin } = request.body;

    const id = generateUniqueId();

    await connection('ongs').insert({
      id,
      name,
      email,
      password,
      whatsapp,
      city,
      pin
    })

    return response.json({ id });    
  }
}