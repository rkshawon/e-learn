import { NextFunction, Request, Response } from "express";
import asyncHandler from "../../middleware/asyncHandler";
import ReviewModel from "../../model/Review";

const createBootcampReview = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    req.body.user = req.user?.userId;
    req.body.bootcamp = req.params.id;

    const data = await ReviewModel.create(req.body);

    res.status(200).json({
      message: "success",
      data,
    });
  }
);
export default createBootcampReview;
