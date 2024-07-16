import { Request, Response } from "express";
import { Op } from "sequelize";

import { User } from "../db/models/models";

class UsersController {
  async createOne(req: Request, res: Response) {
    const { username: name, password, email } = req.body;

    if (!name || !password || !email) {
      return res
        .status(400)
        .json({ message: "missing username, password, or email" });
    }

    const newUser = await User.create({ name, password, email });
    res.status(201).json(newUser);
  }
  async updateOne(req: Request, res: Response) {
    const { id } = req.params;
    const { username: name, password, email } = req.body;

    const [updatedCount] = await User.update(
      { name, password, email },
      { where: { id } }
    );

    if (!updatedCount)
      res.status(404).json({ message: "missing user id in url" });

    res.status(204).send();
  }
  async getOne(req: Request, res: Response) {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: "missing user id in url" });
    }

    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }

    res.json(user);
  }
  async getAll(req: Request, res: Response) {
    const { from, to } = req.params;
    const users = await User.findAll({
      where: {
        id: { [Op.between]: [from, to] },
      },
    });
    res.json(users);
  }
  async deleteOne(req: Request, res: Response) {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: "missing user id in url" });
    }
    const user = await User.destroy({ where: { id } });
    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }
    res.status(204).send();
  }
}

export default new UsersController();
