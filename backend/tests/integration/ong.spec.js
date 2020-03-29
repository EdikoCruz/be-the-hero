const request = require('supertest');
const app = require('../../src/app');
const DBconnection = require('../../src/database/DBconnection');

describe('ONG', () => {
    beforeEach(async () =>{
        await DBconnection.migrate.rollback();
        await DBconnection.migrate.latest();
    });

    afterAll(async () => {
        await DBconnection.destroy();
    });

    it('should be able to create new ONG', async () => {
        //.set('authorization', id);
        const response = await request(app)
            .post('/ongs')
            .send({
                name: "APAD",
                email: "contato@apad.com.br",
                whatsapp: "470000000",
                city: "Rio do sul",
                state: "SC"
            });
        
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});