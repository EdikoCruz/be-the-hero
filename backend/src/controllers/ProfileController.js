const DBconnection = require('../database/DBconnection');

module.exports = {
    async index (request, response) {
        const ong_id = request.headers.authorization;
        const incidents = await DBconnection('incidents')
            .where('ong_id', ong_id)
            .select('*');

        return response.json(incidents);
    }
}