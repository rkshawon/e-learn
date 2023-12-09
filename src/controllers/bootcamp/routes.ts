import express from "express";
import createBootcamp from "./createBootcamp";
import getBootcamp from "./getBootcamp";
import getBootcampByRadius from "./getBootcampByRadius";
import updateBootcamp from "./updateBootcamp";

const router = express.Router();

router.post("/", createBootcamp);
router.get("/radius/:zipcode/:distance", getBootcampByRadius);
router.get("/", getBootcamp);
router.put("/:id", updateBootcamp);

export default router;
