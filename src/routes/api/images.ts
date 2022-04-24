import express from 'express';
import resizedImg from '../../util/resizeImg';
import imgExist from '../../util/imgExist';
import validateEndpoint from '../../models/image';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        let imgName: string = req.query.filename as string;
        let width = parseInt(req.query.width as unknown as string);
        let height = parseInt(req.query.height as unknown as string);

        let img = {
            name:imgName,
            width:width,
            height:height
        }
        let {error} = validateEndpoint(img);
        if(error) throw(error.details[0].message);

        let err = await imgExist(__dirname, imgName);
        if(!err) throw 'Image Name does not Exist...';

        let resImg = await resizedImg(imgName , __dirname , width , height);
        res.status(200).sendFile(resImg);
    } catch (err) {
        res.status(400).send(err);
    }
});

export default router;

