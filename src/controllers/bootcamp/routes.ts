import express from "express";
import createBootcamp from "./createBootcamp";
import getBootcamp from "./getBootcamp";
import getBootcampByRadius from "./getBootcampByRadius";

const router = express.Router();

router.post("/", createBootcamp);
router.get("/radius/:zipcode/:distance", getBootcampByRadius);
router.get("/", getBootcamp);

export default router;
