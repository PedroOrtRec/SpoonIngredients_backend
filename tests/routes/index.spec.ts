import request from 'supertest';
import Server from '../../src/models/classes/server'
import { Application } from 'express';

describe('Index', ()=> {
    let app: Application;
    let response: request.Response;
    beforeAll( () => {
        app = new Server().getApp();
    })
    describe('GET /', () => {
        beforeAll(async () => {
        response = await request(app).get('/').send();
        })
        it('should response with 200 status', async () => {
            expect(response.statusCode).toBe(200);
        } );
        it('should return the response in JSON format', async () => {
            expect(response.headers['content-type']).toContain('application/json');
        })
    })
})