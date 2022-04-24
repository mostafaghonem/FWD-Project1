import app from '../index';
import supertest from 'supertest';


const request = supertest(app);
describe('1 - Test endPoint Response', () => {
    it('get the api/images endpoint' ,async ()=>{
        let response = await request.get('/api/images');
        expect(response.status).toBe(400);
    })
    it('get the api/images?filename=imgName&width=number&height=number endpoint', async () => {
        let response = await request.get('/api/images?filename=m&width=200&height=200');
        expect(response.status).toBe(200);
    });
});
