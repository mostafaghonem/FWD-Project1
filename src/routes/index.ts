import express , {Request , Response} from 'express';
import images from './api/images';

const router = express.Router();

router.get('/', (req: Request, res: Response): void => {
    res.send('Welcome to the API');
});
router.use('/images', images);

export default router;
