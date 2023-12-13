import { NextFunction, Request, Response } from "express";
import asyncHandler from "../../middleware/asyncHandler";
import CustomError from "../../utils/customError";
import ReviewModel from "../../model/Review";

const updateReview = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    const data = await ReviewModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!data) {
      return next(new CustomError("data not found", 404));
    }

    res.status(200).json({
      message: "success",
      data,
    });
  }
);

export default updateReview;
