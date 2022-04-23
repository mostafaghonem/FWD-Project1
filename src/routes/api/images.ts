<<<<<<< HEAD
import express from 'express';
import resizedImg from '../../util/resizeImg';
import imgExist from '../../util/imgExist';
import path from 'path';
const sharp = require('sharp')

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        let imgName: string = req.query.filename as string;
        let width = parseInt(req.query.width as unknown as string);
        let height = parseInt(req.query.height as unknown as string);

        let err = await imgExist(__dirname, imgName);
        if(!err) throw 'Image Name does not Exist...';

        let resImg = await resizedImg(imgName , __dirname , width , height);
        res.status(200).sendFile(resImg);
    } catch (err) {
        res.status(400).send(err);
    }
});

export default router;
=======
import express from 'express';
import { promises as fs } from 'fs';
import path from 'path';
const sharp = require('sharp');

const currentPath = __dirname;

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        let imagName: string = req.query.filename as string;
        let width = parseInt(req.query.width as unknown as string);
        let height = parseInt(req.query.height as unknown as string);

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
>>>>>>> 5a13ea8290813a89db280eccf98001c339696b03
