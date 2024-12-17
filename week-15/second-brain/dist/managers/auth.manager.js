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
exports.signIn = exports.signUp = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const User_1 = require("../models/User");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const signUp = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = data;
        const existingUser = yield User_1.User.findOne({ username: username });
        if (existingUser) {
            return { message: "user already exists" };
        }
        bcrypt_1.default.hash(password, 10).then(function (hash) {
            return __awaiter(this, void 0, void 0, function* () {
                yield User_1.User.create({ username, password: hash });
                return { message: "You have been signed up" };
            });
        });
    }
    catch (err) {
        //@ts-ignore
        throw new Error(err);
    }
});
exports.signUp = signUp;
const signIn = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = data;
        const existingUser = yield User_1.User.findOne({ username: username });
        if (!existingUser) {
            return { message: "User does not exist" };
        }
        const isPasswordValid = yield bcrypt_1.default.compare(password, existingUser.password);
        if (!isPasswordValid) {
            return { message: "Incorrect password" };
        }
        const token = jsonwebtoken_1.default.sign({ username: existingUser.username }, process.env.JWT_SEC);
        return { id: existingUser._id, token: token };
    }
    catch (err) {
        //@ts-ignore
        throw new Error(err);
    }
});
exports.signIn = signIn;
