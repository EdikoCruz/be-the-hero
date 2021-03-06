const DBconnection = require('../database/DBconnection');

module.exports = {
    async create (request, response) {
        const { id } = request.body;
        const ong_id = request.headers.authorization;
    
        const ong = await DBconnection('ongs')
            .where('id', id)
            .select('name')
            .first();

        if (!ong) {
            return response
                .status(400)
                .json({error: 'No ONG found with this ID'});
        }
    
        return response.json(ong);
    }
}