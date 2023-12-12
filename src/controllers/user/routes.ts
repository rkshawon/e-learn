import express from "express";
import createUser from "./createUser";
import getUser from "./getUser";
import updateUser from "./updateUser";
import deleteUser from "./deleteUser";
import getUserById from "./getUserById";
import validateReq from "../../middleware/validateReq";
import permission from "../../middleware/permission";

const router = express.Router();

router.use(validateReq);

router.post("/", createUser);
router.get("/:id", getUserById);
router.get("/", permission, getUser);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
