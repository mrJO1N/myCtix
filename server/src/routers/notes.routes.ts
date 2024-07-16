import { Router } from "express";

import notesControlles from "../controllers/notes.controller";

const router = Router();

router.get("/:id", notesControlles.getOne);
router.get("/range/:from/:to", notesControlles.getAll);
router.patch("/:id", notesControlles.updateOne);
router.post("/", notesControlles.createOne);
router.delete("/:id", notesControlles.deleteOne);

export default router;
