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
const express_1 = __importDefault(require("express"));
const resizeImg_1 = __importDefault(require("../../util/resizeImg"));
const imgExist_1 = __importDefault(require("../../util/imgExist"));
const image_1 = __importDefault(require("../../models/image"));
const path_1 = __importDefault(require("path"));
const router = express_1.default.Router();
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let imgName = req.query.filename;
        let width = parseInt(req.query.width);
        let height = parseInt(req.query.height);
        let img = {
            name: imgName,
            width: width,
            height: height
        };
        let { error } = (0, image_1.default)(img);
        if (error)
            throw (error.details[0].message);
        let err = yield (0, imgExist_1.default)(path_1.default.resolve("./"), imgName);
        if (!err)
            throw 'Image Name does not Exist...';
        let resImg = yield (0, resizeImg_1.default)(imgName, path_1.default.resolve("./"), width, height);
        res.status(200).sendFile(resImg);
    }
    catch (err) {
        res.status(400).send(err);
    }
}));
exports.default = router;
