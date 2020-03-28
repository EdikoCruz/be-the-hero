const crypto = require('crypto');

const DBconnection = require('../database/DBconnection');

module.exports = {
    async index (request, response) {
        const ongs = await DBconnection('ongs').select('*');

        return response.json(ongs);
    },
    async create (request, response) {
        const { name, email, whatsapp, city, state } = request.body;
        const id = crypto.randomBytes(4).toString('HEX');
    
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