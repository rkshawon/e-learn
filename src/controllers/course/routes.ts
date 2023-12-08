import express from "express";
import createCourse from "./createCourse";
import getCourse from "./getCourse";

const router = express.Router();

router.post("/", createCourse);
router.get("/", getCourse);

export default router;
