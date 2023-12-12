import { NextFunction, Request, Response } from "express";
import asyncHandler from "./asyncHandler";
import CustomError from "../utils/customError";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../../env-config";
import mongoose from "mongoose";

interface MyJwtPayload extends JwtPayload {
  userId: mongoose.Types.ObjectId;
  role: string;
}

const validateReq = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      throw new CustomError("You are not authorized", 401);
    }

    let verifiedUser = jwt.verify(token, config.jwt_secret) as MyJwtPayload;

    req.user = {
      userId: verifiedUser.userId,
      role: verifiedUser.role,
    };
    next();
  }
);

export default validateReq;
