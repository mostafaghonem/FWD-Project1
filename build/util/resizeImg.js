"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const sharp = require('sharp');
const resizedImg = function (imgName, currentPath, width, height) {
    return __awaiter(this, void 0, void 0, function* () {
        let img = path_1.default.join(currentPath, 'images', imgName).replace(/\\/g, '/');
        img += '.jpg';
        yield sharp(img)
            .resize({
            width: width,
            height: height,
        })
            .toFile(currentPath + `/thumbs/${imgName}_thumb.jpg`);
        let resImg = path_1.default
            .join(currentPath, 'thumbs', `${imgName}_thumb`)
            .replace(/\\/g, '/');
        resImg += '.jpg';
        return resImg;
    });
};
exports.default = resizedImg;
