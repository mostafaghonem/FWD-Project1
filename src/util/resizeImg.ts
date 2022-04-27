import path from 'path';
import { promises as fs } from 'fs';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const sharp = require('sharp');

const resizedImg = async function (
    imgName: string,
    currentPath: string,
    width: number,
    height: number
) {
    let img = path.join(currentPath, 'images', imgName).replace(/\\/g, '/');
    img += '.jpg';

    //Create thumbs folder
    await fs.mkdir(path.join(currentPath, 'thumbs'), { recursive: true });

    await sharp(img)
        .resize({
            width: width,
            height: height,
        })
        .toFile(currentPath + `/thumbs/${imgName}_thumb.jpg`);

    let resImg = path
        .join(currentPath, 'thumbs', `${imgName}_thumb`)
        .replace(/\\/g, '/');
    resImg += '.jpg';

    return resImg;
};

export default resizedImg;
