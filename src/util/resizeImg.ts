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
        .toFile(currentPath + `/thumbs/${imgName}_thumb.jpg`);

    let resImg = path
        .join(currentPath, 'thumbs', `${imgName}_thumb`)
        .replace(/\\/g, '/');
    resImg += '.jpg';

    return resImg;
};

export default resizedImg;
