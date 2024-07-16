"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_controller_1 = __importDefault(require("../controllers/users.controller"));
const router = (0, express_1.Router)();
router.get("/:id", users_controller_1.default.getOne);
router.get("/range/:from/:to", users_controller_1.default.getAll);
router.patch("/:id", users_controller_1.default.updateOne);
router.post("/", users_controller_1.default.createOne);
router.delete("/:id", users_controller_1.default.deleteOne);
exports.default = router;
