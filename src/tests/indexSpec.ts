<<<<<<< HEAD
import app from '../index';
import supertest from 'supertest';


const request = supertest(app);
describe('Test endPoint Response', () => {
    it('get the api/images endpoint', async (done) => {
        let response = await request.get('/api/images');
        expect(response.status).toBe(200);
        done();
    });
});


=======
import app from '../index';
import supertest from 'supertest';


const request = supertest(app);
describe('Test endPoint Response', () => {
    it('get the api/images endpoint', async (done) => {
        let response = await request.get('/api/images');
        expect(response.status).toBe(200);
        done();
    });
});


>>>>>>> 5a13ea8290813a89db280eccf98001c339696b03
//i face an error here , i want some time that i can fix it