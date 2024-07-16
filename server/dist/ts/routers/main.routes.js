"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_routes_1 = __importDefault(require("./users.routes"));
const notes_routes_1 = __importDefault(require("./notes.routes"));
const router = (0, express_1.Router)();
router.use("/users", users_routes_1.default);
router.use("/notes", notes_routes_1.default);
exports.default = router;
