import request from 'supertest';
import Server from '../../src/models/classes/server'

describe('Index', ()=> {
    let server: Server;
    let response: request.Response;
    beforeAll(() => {
        server = new Server();
    })
    describe('GET /', () => {
        beforeAll(async () => {
        response = await request(server.getApp()).get('/').send();
        })
        it('should response with 200 status', async () => {
            expect(response.statusCode).toBe(200);
        } );
        it('should return the response in JSON format', async () => {
            expect(response.headers['content-type']).toContain('application/json');
        })
    })
})