import { NextFunction, Request, Response } from "express";
import asyncHandler from "./asyncHandler";
import { Role } from "../interface/user.interface";
import CustomError from "../utils/customError";

const permission = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const userData = req.user;

    if (!userData) {
      return next(new CustomError("Bad request", 500));
    }

    if (userData.role !== Role.Publisher && userData.role !== Role.ADMIN) {
      return next(new CustomError("Forbidden Access", 403));
    }

    next();
  }
);

export default permission;
