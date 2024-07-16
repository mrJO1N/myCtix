"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const models_1 = require("../db/models/models");
class UsersController {
    async createOne(req, res) {
        const { username: name, password, email } = req.body;
        if (!name || !password || !email) {
            return res
                .status(400)
                .json({ message: "missing username, password, or email" });
        }
        const newUser = await models_1.User.create({ name, password, email });
        res.status(201).json(newUser);
    }
    async updateOne(req, res) {
        const { id } = req.params;
        const { username: name, password, email } = req.body;
        const [updatedCount] = await models_1.User.update({ name, password, email }, { where: { id } });
        if (!updatedCount)
            res.status(404).json({ message: "missing user id in url" });
        res.status(204).send();
    }
    async getOne(req, res) {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: "missing user id in url" });
        }
        const user = await models_1.User.findByPk(id);
        if (!user) {
            return res.status(404).json({ message: "user not found" });
        }
        res.json(user);
    }
    async getAll(req, res) {
        const { from, to } = req.params;
        const users = await models_1.User.findAll({
            where: {
                id: { [sequelize_1.Op.between]: [from, to] },
            },
        });
        res.json(users);
    }
    async deleteOne(req, res) {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: "missing user id in url" });
        }
        const user = await models_1.User.destroy({ where: { id } });
        if (!user) {
            return res.status(404).json({ message: "user not found" });
        }
        res.status(204).send();
    }
}
exports.default = new UsersController();
