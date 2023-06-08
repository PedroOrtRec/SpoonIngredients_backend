import request from 'supertest';
import Server from '../../../src/models/classes/server'

describe('/api/foods', ()=> {
    let server: Server;
    let response: request.Response;
    beforeAll(() => {
        server = new Server();
    })
    describe('GET /', () => {
        beforeAll(async () => {
        response = await request(server.getApp()).get('/api/foods').send();
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
        response = await request(server.getApp()).get('/api/foods/0').send();
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
        response = await request(server.getApp()).get('/api/foods/category/vegetable').send();
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
        response = await request(server.getApp()).get('/api/foods/0').send();
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
        response = await request(server.getApp()).post('/api/foods/').send();
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
        response = await request(server.getApp()).get('/api/foods/0').send();
        })
        it('should response with 200 status', async () => {
            expect(response.statusCode).toBe(200);
        } );
        it('should return the response in JSON format', async () => {
            expect(response.headers['content-type']).toContain('application/json');
        })
    })
})