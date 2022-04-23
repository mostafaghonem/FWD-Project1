<<<<<<< HEAD
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get('/', (req, res) => {
    console.log(req.query.filename);
    console.log(req.query.width);
    console.log(req.query.height);
});
exports.default = router;
=======
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get('/', (req, res) => {
    console.log(req.query.filename);
    console.log(req.query.width);
    console.log(req.query.height);
});
exports.default = router;
>>>>>>> 5a13ea8290813a89db280eccf98001c339696b03
