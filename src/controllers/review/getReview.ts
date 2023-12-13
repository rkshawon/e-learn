import { Request, Response } from "express";
import asyncHandler from "../../middleware/asyncHandler";
import ReviewModel from "../../model/Review";

const getReview = asyncHandler(async (req: Request, res: Response) => {
  const data = await ReviewModel.find();

  res.status(200).json({
    message: "success",
    data,
  });
});

export default getReview;
