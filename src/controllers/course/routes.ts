import express from "express";
import createCourse from "./createCourse";
import getCourse from "./getCourse";
import getCourseById from "./getCourseById";
import updateCourse from "./updateCourse";
import deleteCourse from "./deleteCourse";
import validateReq from "../../middleware/validateReq";

const router = express.Router();

router.use(validateReq);

router.post("/", createCourse);
router.get("/:id", getCourseById);
router.get("/", getCourse);
router.patch("/:id", updateCourse);
router.delete("/:id", deleteCourse);

export default router;
