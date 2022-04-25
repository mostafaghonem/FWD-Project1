"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
function validateEndpoint(img) {
    let schema = joi_1.default.object({
        name: joi_1.default.string().required(),
        width: joi_1.default.number().required(),
        height: joi_1.default.number().required()
    });
    return schema.validate(img);
}
exports.default = validateEndpoint;
