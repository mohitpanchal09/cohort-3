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
Object.defineProperty(exports, "__esModule", { value: true });
exports.signInController = exports.signUpController = void 0;
const auth_manager_1 = require("../managers/auth.manager");
const signUpController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const response = yield (0, auth_manager_1.signUp)(data);
        res.status(200).send(response);
    }
    catch (err) {
        console.log('err ', err);
    }
});
exports.signUpController = signUpController;
const signInController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const response = yield (0, auth_manager_1.signIn)(data);
        res.status(200).send(response);
    }
    catch (err) {
        res.status(500).send({ message: "Internal server error" });
    }
});
exports.signInController = signInController;
