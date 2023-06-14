import request from 'supertest';
import Server from '../../../src/models/classes/server';
import { Application } from 'express';
import SequelizeDb from '../../../src/models/classes/sequelizeDb';
import seqSampleDb from '../../../src/config/database/seqSample.connection';

describe('/api/categories', ()=> {
    let app: Application;
    let dataBase: SequelizeDb;
    let response: request.Response;
    beforeAll(() => {
        app = new Server().getApp();
        dataBase = new SequelizeDb(seqSampleDb);
        dataBase.connect()
    })
    afterAll( () => dataBase.disconnect() )
    describe('GET /', () => {
        beforeAll(async () => {
        response = await request(app).get('/api/categories').send();
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
        response = await request(app).get('/api/categories/0').send();
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
        response = await request(app).get('/api/categories/0').send();
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
        response = await request(app).post('/api/categories/').send();
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
        response = await request(app).get('/api/categories/0').send();
        })
        it('should response with 200 status', async () => {
            expect(response.statusCode).toBe(200);
        } );
        it('should return the response in JSON format', async () => {
            expect(response.headers['content-type']).toContain('application/json');
        })
    })
})