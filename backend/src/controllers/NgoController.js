const generateUniqueId = require('../utils/generateUniqueId');
const connection = require('../database/connection');

module.exports={
    async index (request, response) {
        const ngo = await connection('ngo').select('*');
    
        return response.json(ngo);
    },

    async create(request, response){
        const { name, email, whatsapp, city, uf } = request.body;

    const id = generateUniqueId();
     await connection('ngo').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
    })

    return response.json({ id });
    }
};