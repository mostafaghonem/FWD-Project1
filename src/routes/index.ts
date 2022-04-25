import express from "express";
import images from './api/images';
import { Request, Response, NextFunction } from "express";


const router = express.Router();


router.get('/' , (req:Request , res:Response):void=>{
    res.send('Welcome to the API');
})
router.use('/images' , images);



export default router;