import path from "path";
const sharp = require('sharp');

const resizedImg = async function (imgName:string ,currentPath:string , width:number , height:number){
    let img = path.join(currentPath, 'images', imgName).replace(/\\/g, '/');
    img+='.jpg';

    await sharp(img)
        .resize({
            width: width,
            height: height,
        })
        .toFile(currentPath + `/thumbs/${imgName}${width}x${height}_thumb.jpg`);

    let resImg = path
        .join(currentPath, 'thumbs', imgName)
        .replace(/\\/g, '/');
    resImg += '.jpg';

    return resImg;
};

export default resizedImg;
