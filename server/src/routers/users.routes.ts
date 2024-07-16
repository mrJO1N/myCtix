import { Router } from "express";

import usersControlles from "../controllers/users.controller";

const router = Router();

router.get("/:id", usersControlles.getOne);
router.get("/range/:from/:to", usersControlles.getAll);
router.patch("/:id", usersControlles.updateOne);
router.post("/", usersControlles.createOne);
router.delete("/:id", usersControlles.deleteOne);

export default router;
