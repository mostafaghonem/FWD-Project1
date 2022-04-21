import express from 'express';
import { promises as fs } from 'fs';
import path from 'path';
const sharp = require('sharp');

const currentPath = __dirname;

const router = express.Router();

router.get('/', async (req, res) => {
    // try {

    // } catch (err) {
    //     res.status(400).send('check the image Name');
    // }
    let imagName: string = req.query.filename as string;
    let width = parseInt((req.query.width as unknown)as string ) ;
    let height = parseInt((req.query.height as unknown) as string);
    
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
});

export default router;
