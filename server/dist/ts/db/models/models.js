"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.Note = void 0;
const connection_1 = __importDefault(require("../connection"));
const core_1 = require("@sequelize/core");
exports.Note = connection_1.default.define("note", {
    id: { type: core_1.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: core_1.DataTypes.STRING, allowNull: false },
    body: { type: core_1.DataTypes.TEXT, allowNull: false },
});
exports.User = connection_1.default.define("user", {
    id: { type: core_1.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: core_1.DataTypes.STRING, allowNull: false },
    email: { type: core_1.DataTypes.STRING, allowNull: false, unique: true },
    password: { type: core_1.DataTypes.STRING, allowNull: false },
});
exports.User.hasMany(exports.Note);
exports.Note.belongsTo(exports.User);
