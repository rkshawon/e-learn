import { Request, Response } from "express";
import asyncHandler from "../../middleware/asyncHandler";
import CourseModel from "../../model/Course";

const getReview = asyncHandler(async (req: Request, res: Response) => {
  const data = await CourseModel.find();

  res.status(200).json({
    message: "success",
    data,
  });
});

export default getReview;
