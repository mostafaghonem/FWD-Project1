"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routes/index"));
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, morgan_1.default)('tiny'));
app.use('/api', index_1.default);
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`app listening on port ${port}`);
    console.log(path_1.default.basename(__dirname));
    console.log(path_1.default.resolve("./"));
});
exports.default = app;
