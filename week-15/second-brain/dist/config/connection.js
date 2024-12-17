"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDb = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const connectDb = () => {
    mongoose_1.default.connect(process.env.DB_URL).then(() => {
        console.log('db connected...');
    }).catch((err) => {
        console.log('err', err);
    });
};
exports.connectDb = connectDb;
