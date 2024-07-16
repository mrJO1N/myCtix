"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const notes_controller_1 = __importDefault(require("../controllers/notes.controller"));
const router = (0, express_1.Router)();
router.get("/:id", notes_controller_1.default.getOne);
router.get("/range/:from/:to", notes_controller_1.default.getAll);
router.patch("/:id", notes_controller_1.default.updateOne);
router.post("/", notes_controller_1.default.createOne);
router.delete("/:id", notes_controller_1.default.deleteOne);
exports.default = router;
