import express from 'express';
import { promises as fs } from 'fs';
import path from 'path';
const sharp = require('sharp');

const currentPath = __dirname;

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        let imagName: string = req.query.filename as string;
        console.log(imagName);
        // let width = req.query.width; 
        // let height = req.query.height;
        //i have error with getting the query properties so, i was want time more due to internet connection issues so i pass the name of the image only
        let width = 200;
        let height = 200;

        let imgPath = path
            .join(currentPath, 'images', imagName)
            .replace(/\\/g, '/');
        imgPath += '.jpg';

        await fs.readFile(imgPath); //if image name is incorect , it will throw an error
        //else
        await sharp(imgPath)
            .resize({
                width: width,
                height: height,
            })
            .toFile(__dirname + `/thumb/${imagName}.jpg`);
        let resizedImg = path
            .join(currentPath, 'thumb', imagName)
            .replace(/\\/g, '/');
        resizedImg += '.jpg';
        res.status(200).sendFile(resizedImg);
    } catch (err) {
        res.status(400).send('check the image Name');
    }
});

export default router;
