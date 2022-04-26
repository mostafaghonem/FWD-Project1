import express from 'express';
import resizedImg from '../../util/resizeImg';
import imgExist from '../../util/imgExist';
import validateEndpoint from '../../models/image';
import { Request, Response, NextFunction } from "express";
import path from 'path';
const NodeCache = require("node-cache");
const myCache = new NodeCache();

const router = express.Router();

router.get('/', async (req:Request, res:Response) : Promise<void>=> {
    try {
        let imgName: string = req.query.filename as string;
        let width = parseInt(req.query.width as unknown as string);
        let height = parseInt(req.query.height as unknown as string);

        //validate for user input filename , width and height
        let img = {
            name:imgName,
            width:width,
            height:height
        }
        let {error} = validateEndpoint(img);
        if(error) throw(error.details[0].message);

        //check if imgName is exist or not 
        let err = await imgExist(path.resolve("./"), imgName);
        if(!err) throw `${imgName} image name does not Exist...`;

        //added cache from https://www.geeksforgeeks.org/how-to-access-cache-data-in-node-js/
        let key = imgName+width+height;
        if(myCache.has(key)){
            console.log('Retrived Value from Cache...');
            res.status(200).sendFile(myCache.get(key));
        }else{
            console.log('Resizing the Image...');
            //resize the given imgName and return its path 
            let resImg = await resizedImg(imgName , path.resolve("./") , width , height);
            myCache.set(key , resImg);
            //send the resized img to the user
            res.status(200).sendFile(resImg);
        }

    } catch (err) {
        res.status(400).send(err);
    }
});

export default router;

