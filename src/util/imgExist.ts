import path from 'path';
import { promises as fs } from 'fs';

const imgExist = async function (dirName: string, imgName: string) {
    let img = path.join(dirName, 'images', imgName).replace(/\\/g, '/');
    img += '.jpg';
    try{
        await fs.readFile(img); //if image name is incorect , it will throw an error
        return 1;
    }
    catch(err){
        return 0;
    }
};

export default imgExist;