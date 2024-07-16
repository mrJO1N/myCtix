import { Request, Response } from "express";
import { Op } from "sequelize";

import { Note } from "../db/models/models";

class NotesController {
  async createOne(req: Request, res: Response) {
    const { title, body, userId } = req.body;

    if (!title || !body || !userId) {
      return res
        .status(400)
        .json({ message: "missing title, userId, or body" });
    }

    try {
      const newNote = await Note.create({ title, body, userId });
      res.status(201).json(newNote);
    } catch (err) {
      res.status(404).json({ message: "missing this user" });
    }
  }
  async updateOne(req: Request, res: Response) {
    const { id } = req.params;
    const { title, body } = req.body;

    const [updatedCount] = await Note.update(
      { title, body },
      { where: { id } }
    );

    if (!updatedCount)
      res.status(404).json({ message: "missing note id in url" });

    res.status(204).send();
  }
  async getOne(req: Request, res: Response) {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: "missing note id in url" });
    }

    const note = await Note.findByPk(id);

    if (!note) {
      return res.status(404).json({ message: "note not found" });
    }

    res.json(note);
  }
  async getAll(req: Request, res: Response) {
    const { from, to } = req.params;
    const notes = await Note.findAll({
      where: {
        id: { [Op.between]: [from, to] },
      },
    });
    res.json(notes);
  }
  async deleteOne(req: Request, res: Response) {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: "missing note id in url" });
    }
    const note = await Note.destroy({ where: { id } });
    if (!note) {
      return res.status(404).json({ message: "note not found" });
    }
    res.status(204).send();
  }
}

export default new NotesController();
