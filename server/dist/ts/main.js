"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const main_routes_1 = __importDefault(require("./routers/main.routes"));
const connection_1 = __importDefault(require("./db/connection"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT ?? 80;
app.use(express_1.default.json());
app.use("/api", main_routes_1.default);
async function startServer() {
    try {
        await connection_1.default.authenticate();
        await connection_1.default.sync();
        app.listen(PORT, () => console.log(`server is running at ${PORT}. http://localhost:${PORT}`));
    }
    catch (err) {
        console.error(err);
    }
}
startServer();
