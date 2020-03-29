const request = require('supertest');
const app = require('../../src/app');
const DBconnection = require('../../src/database/DBconnection');

const genericNGO1 = {
    name: "ONG 1",
    email: "contato@ong1.com",
    whatsapp: "83900000000",
    city: "João Pessoa",
    state: "PB"
};

const genericNGO2 = {
    name: "ONG 2",
    email: "contato@ong2.com",
    whatsapp: "83900000000",
    city: "João Pessoa",
    state: "PB"
};

describe('NGO (Non-Governmental Organization)', () => {
    beforeEach(async () =>{
        await DBconnection.migrate.rollback();
        await DBconnection.migrate.latest();
    });

    afterEach(async () =>{
        await DBconnection.migrate.rollback();
        await DBconnection.migrate.latest();
    });

    afterAll(async () => {
        await DBconnection.destroy();
    });

    it('should be able to create new NGO', async () => {
        //.set('authorization', id);
        const response = await request(app)
            .post('/ngos')
            .send(genericNGO1);

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });

    it('should be able to get all ONGs with 0 cadastred', async () => {
        const response = await request(app).get('/ngos');

        expect(response.body).toHaveLength(0);
    });

    it('should be able to get all ONGs with 1 cadastred', async () => {
        await request(app).post('/ngos').send(genericNGO1);

        const response = await request(app).get('/ngos');

        expect(response.body).toHaveLength(1);
    });

    it('should be able to get all ONGs with N cadastred', async () => {
        await request(app).post('/ngos').send(genericNGO1);
        await request(app).post('/ngos').send(genericNGO2);

        const response = await request(app).get('/ngos');

        expect(response.body).toHaveLength(2);
    });
});