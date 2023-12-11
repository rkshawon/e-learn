import express from "express";
import createBootcamp from "./createBootcamp";
import getBootcamp from "./getBootcamp";
import getBootcampByRadius from "./getBootcampByRadius";
import updateBootcamp from "./updateBootcamp";
import deleteBootcamp from "./deleteBootcamp";
import getBootcampById from "./getBootcampById";
import uploadPhotoBootcamp from "./uploadPhotoBootcamp";

const router = express.Router();

router.post("/", createBootcamp);
router.get("/:id", getBootcampById);
router.get("/radius/:zipcode/:distance", getBootcampByRadius);
router.get("/", getBootcamp);
router.put("/:id/photo", uploadPhotoBootcamp);
router.patch("/:id", updateBootcamp);
router.delete("/:id", deleteBootcamp);

export default router;
