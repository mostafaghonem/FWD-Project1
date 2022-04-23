<<<<<<< HEAD
import express from "express";
import images from './api/images';

const router = express.Router();


router.get('/' , (req , res)=>{
    res.send('Welcome to the API');
})
router.use('/images' , images);



=======
import express from "express";
import images from './api/images';

const router = express.Router();


router.get('/' , (req , res)=>{
    res.send('Welcome to the API');
})
router.use('/images' , images);



>>>>>>> 5a13ea8290813a89db280eccf98001c339696b03
export default router;