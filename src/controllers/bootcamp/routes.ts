import express from "express";
import createBootcamp from "./createBootcamp";

const router = express.Router();

router.post("/", createBootcamp);

export default router;
