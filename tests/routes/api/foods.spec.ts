import request from 'supertest';
import Server from '../../../src/models/classes/server'
import { Application } from 'express';
import SequelizeDb from '../../../src/models/classes/sequelizeDb';
import seqSampleDb from '../../../src/config/database/seqSample.connection';

describe('/api/foods', ()=> {
    let app: Application;
    let dataBase: SequelizeDb;
    let response: request.Response;
    beforeAll(async () => {
        app = new Server().getApp();
        // dataBase = new SequelizeDb(seqSampleDb);
        // await dataBase.connect()
    })
    // afterAll(async () => await dataBase.disconnect())
    describe('GET /', () => {
        beforeAll(async () => {
        response = await request(app).get('/api/foods').send();
        })
        it('should response with 200 status', async () => {
            expect(response.statusCode).toBe(200);
        } );
        it('should return the response in JSON format', async () => {
            expect(response.headers['content-type']).toContain('application/json');
        })
    });
    describe('GET /:id', () => {
        beforeAll(async () => {
        response = await request(app).get('/api/foods/0').send();
        })
        it('should response with 200 status', async () => {
            expect(response.statusCode).toBe(200);
        } );
        it('should return the response in JSON format', async () => {
            expect(response.headers['content-type']).toContain('application/json');
        })
    });
    describe('GET /category/:category', () => {
        beforeAll(async () => {
        response = await request(app).get('/api/foods/category/vegetable').send();
        })
        it('should response with 200 status', async () => {
            expect(response.statusCode).toBe(200);
        } );
        it('should return the response in JSON format', async () => {
            expect(response.headers['content-type']).toContain('application/json');
        })
    });
    describe('PUT /:id', () => {
        beforeAll(async () => {
        response = await request(app).get('/api/foods/0').send();
        })
        it('should response with 200 status', async () => {
            expect(response.statusCode).toBe(200);
        } );
        it('should return the response in JSON format', async () => {
            expect(response.headers['content-type']).toContain('application/json');
        })
    });
    describe('POST /', () => {
        beforeAll(async () => {
        response = await request(app).post('/api/foods/').send();
        })
        it('should response with 200 status', async () => {
            expect(response.statusCode).toBe(200);
        } );
        it('should return the response in JSON format', async () => {
            expect(response.headers['content-type']).toContain('application/json');
        })
    });
    describe('DELETE /:id', () => {
        beforeAll(async () => {
        response = await request(app).get('/api/foods/0').send();
        })
        it('should response with 200 status', async () => {
            expect(response.statusCode).toBe(200);
        } );
        it('should return the response in JSON format', async () => {
            expect(response.headers['content-type']).toContain('application/json');
        })
    })
})