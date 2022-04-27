import express from 'express';
import resizedImg from '../../util/resizeImg';
import imgExist from '../../util/imgExist';
import validateEndpoint from '../../models/image';
import { Request, Response, NextFunction } from 'express';
import path from 'path';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const NodeCache = require('node-cache')
const myCache = new NodeCache();

const router = express.Router();

router.get('/', async (req: Request, res: Response): Promise<void> => {
    try {
        const imgName: string = req.query.filename as string;
        const width = parseInt(req.query.width as unknown as string);
        const height = parseInt(req.query.height as unknown as string);

        //validate for user input filename , width and height
        const img = {
            name: imgName,
            width: width,
            height: height,
        };
        const { error } = validateEndpoint(img);
        if (error) throw error.details[0].message;

        //check if imgName is exist or not
        const err = await imgExist(path.resolve('./'), imgName);
        if (!err) throw `${imgName} image name does not Exist...`;

        //added cache from https://www.geeksforgeeks.org/how-to-access-cache-data-in-node-js/
        const key = imgName + width + height;
        if (myCache.has(key)) {
            console.log('Retrived Value from Cache...');
            res.status(200).sendFile(myCache.get(key));
        } else {
            console.log('Resizing the Image...');
            //resize the given imgName and return its path
            const resImg = await resizedImg(
                imgName,
                path.resolve('./'),
                width,
                height
            );
            myCache.set(key, resImg);
            //send the resized img to the user
            res.status(200).sendFile(resImg);
        }
    } catch (err) {
        res.status(400).send(err);
    }
});

export default router;
