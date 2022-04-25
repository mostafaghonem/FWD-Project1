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
const fs_1 = require("fs");
const imgExist = function (dirName, imgName) {
    return __awaiter(this, void 0, void 0, function* () {
        let img = path_1.default.join(dirName, 'images', imgName).replace(/\\/g, '/');
        img += '.jpg';
        try {
            yield fs_1.promises.readFile(img); //if image name is incorect , it will throw an error
            return 1;
        }
        catch (err) {
            return 0;
        }
    });
};
exports.default = imgExist;
