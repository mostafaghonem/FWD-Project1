import app from '../index';
import supertest from 'supertest';


const request = supertest(app);
describe('Test endPoint Response', () => {
    it('get the api/images endpoint', async (done) => {
        const response = await request.get('/api/images');
        expect(response.status).toBe(200);
        done();
    });
});


//i face an error here , i want some time that i can fix it