import { NextFunction, Request, Response } from "express";
import asyncHandler from "../../middleware/asyncHandler";
import UserModel from "../../model/User";
import CustomError from "../../utils/customError";

const createUser = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const data = await UserModel.create(req.body);

    if (!data) {
      return next(new CustomError("Could not create data", 400));
    }

    res.status(200).json({
      message: "success",
      data,
    });
  }
);
export default createUser;
