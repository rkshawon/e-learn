import { Request, Response } from "express";
import asyncHandler from "../../middleware/asyncHandler";
import ReviewModel from "../../model/Review";

const createReview = asyncHandler(async (req: Request, res: Response) => {
  const data = await ReviewModel.create(req.body);

  res.status(200).json({
    message: "success",
    data,
  });
});

export default createReview;
