import express from "express";
import createReview from "./createReview";
import getReview from "./getReview";
import updateReview from "./updateReview";
import deleteReview from "./deleterReview";
import getReviewById from "./getReviewById";
import validateReq from "../../middleware/validateReq";

const router = express.Router();

router.use(validateReq);

router.post("/", createReview);
router.get("/:id", getReviewById);
router.get("/", getReview);
router.patch("/:id", updateReview);
router.delete("/:id", deleteReview);

export default router;
