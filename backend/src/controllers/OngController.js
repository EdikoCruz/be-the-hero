const generateUniqueId = require('../utils/generateUniqueId');

const DBconnection = require('../database/DBconnection');

module.exports = {
    async index (request, response) {
        const ongs = await DBconnection('ongs').select('*');

        return response.json(ongs);
    },
    async create (request, response) {
        const { name, email, whatsapp, city, state } = request.body;
        const id = generateUniqueId();
    
        await DBconnection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            state
        });
    
        return response.json({ id });
    }
}