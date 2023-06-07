import request from 'supertest';
import { app } from '../../src/app';

describe('Index', ()=> {
    describe('GET /', () => {
        test('should response with 200 status', async () => {
            const response = await request(app).get('/').send();
            expect(response.statusCode).toBe(200);
        } )
    })
})