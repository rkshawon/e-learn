import { NextFunction, Request, Response } from "express";
import asyncHandler from "../../middleware/asyncHandler";
import BootCampModel from "../../model/Bootcamp";
import CustomError from "../../utils/customError";

const updateBootcamp = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    const data = await BootCampModel.findByIdAndDelete(id);

    if (!data) {
      return next(new CustomError("data not found", 404));
    }

    res.status(200).json({
      message: "success",
      data,
    });
  }
);

export default updateBootcamp;
