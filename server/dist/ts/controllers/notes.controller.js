"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const models_1 = require("../db/models/models");
class NotesController {
    async createOne(req, res) {
        const { title, body, userId } = req.body;
        if (!title || !body || !userId) {
            return res
                .status(400)
                .json({ message: "missing title, userId, or body" });
        }
        try {
            const newNote = await models_1.Note.create({ title, body, userId });
            res.status(201).json(newNote);
        }
        catch (err) {
            res.status(404).json({ message: "missing this user" });
        }
    }
    async updateOne(req, res) {
        const { id } = req.params;
        const { title, body } = req.body;
        const [updatedCount] = await models_1.Note.update({ title, body }, { where: { id } });
        if (!updatedCount)
            res.status(404).json({ message: "missing note id in url" });
        res.status(204).send();
    }
    async getOne(req, res) {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: "missing note id in url" });
        }
        const note = await models_1.Note.findByPk(id);
        if (!note) {
            return res.status(404).json({ message: "note not found" });
        }
        res.json(note);
    }
    async getAll(req, res) {
        const { from, to } = req.params;
        const notes = await models_1.Note.findAll({
            where: {
                id: { [sequelize_1.Op.between]: [from, to] },
            },
        });
        res.json(notes);
    }
    async deleteOne(req, res) {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: "missing note id in url" });
        }
        const note = await models_1.Note.destroy({ where: { id } });
        if (!note) {
            return res.status(404).json({ message: "note not found" });
        }
        res.status(204).send();
    }
}
exports.default = new NotesController();
