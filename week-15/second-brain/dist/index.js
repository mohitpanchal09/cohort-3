"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const connection_1 = require("./config/connection");
const index_routes_1 = __importDefault(require("./routes/index.routes"));
dotenv_1.default.config();
(0, connection_1.connectDb)();
const app = (0, express_1.default)();
app.use(express_1.default.json());
(0, index_routes_1.default)(app);
app.listen(process.env.PORT || 8080, () => {
    console.log(`server is running at ${process.env.PORT}`);
});
