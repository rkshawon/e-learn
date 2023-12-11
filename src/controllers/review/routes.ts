import express from "express";
import createReview from "./createReview";
import getReview from "./getReview";
import updateReview from "./updateReview";
import deleteReview from "./deleterReview";
import getReviewById from "./getReviewById";

const router = express.Router();

router.post("/", createReview);
router.get("/:id", getReviewById);
router.get("/", getReview);
router.patch("/:id", updateReview);
router.delete("/:id", deleteReview);

export default router;
