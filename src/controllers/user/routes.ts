import express from "express";
import createUser from "./createUser";
import getUser from "./getUser";
import updateUser from "./updateUser";
import deleteUser from "./deleteUser";
import getUserById from "./getUserById";

const router = express.Router();

router.post("/", createUser);
router.get("/:id", getUserById);
router.get("/", getUser);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
