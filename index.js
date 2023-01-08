"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
const mongoDB = process.env.MONGODB_URL;
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});

app.use("/api/v1/" , );

app.listen(port, () => {
    try {
        if (typeof mongoDB === "string") {
            mongoose_1.default.connect(mongoDB).then((res) => {
                console.log(res);
                console.log('db connected');
            }).catch((err) => {
                console.log('error in connecting db');
            });
        }
    }
    catch (err) {
        console.log(err);
    }
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
