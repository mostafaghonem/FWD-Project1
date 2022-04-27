import app from '../index';
import supertest from 'supertest';
import resizedImg from '../util/resizeImg';
import path from 'path';

const request = supertest(app);
describe('1 - Test endPoint Response', () => {
    it('get the api/images endpoint', async () => {
        const response = await request.get('/api/images');
        expect(response.status).toBe(400);
    });
    it('get the api/images?filename=imgName&width=number&height=number endpoint', async () => {
        const response = await request.get(
            '/api/images?filename=m&width=200&height=200'
        );
        expect(response.status).toBe(200);
    });
});

describe('2 - Test resizing the image', () => {
    it('test the OutPut string path of resizeing Function', async () => {
        const res = await resizedImg('m', path.resolve('./'), 200, 200);
        const imgPath = path
            .join(path.resolve('./'), 'thumbs')
            .replace(/\\/g, '/');
        expect(res).toEqual(`${imgPath}/m_thumb.jpg`);
    });
});
