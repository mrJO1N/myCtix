"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@sequelize/core");
const postgres_1 = require("@sequelize/postgres");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const sequelize = new core_1.Sequelize({
    dialect: postgres_1.PostgresDialect,
    database: process.env.DB_NAME,
    user: process.env.DB_USER ?? "",
    password: process.env.DB_PASS ?? "",
    host: process.env.DB_HOSTNAME ?? "LOCALHOST",
    port: Number(process.env.DB_PORT) ?? 5432,
    clientMinMessages: "notice",
});
exports.default = sequelize;
