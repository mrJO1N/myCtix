import { Router } from "express";
import users from "./users.routes";
import notes from "./notes.routes";

const router = Router();

router.use("/users", users);
router.use("/notes", notes);

export default router;
