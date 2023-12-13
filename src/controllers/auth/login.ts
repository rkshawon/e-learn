import { CookieOptions, NextFunction, Request, Response } from "express";
import asyncHandler from "../../middleware/asyncHandler";
import jwt from "jsonwebtoken";
import config from "../../../env-config";
import UserModel from "../../model/User";
import CustomError from "../../utils/customError";
import bcrypt from "bcryptjs";

const login = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const data = await UserModel.findOne({ email: req.body.email });

    if (!data) {
      return next(new CustomError("User not found", 404));
    }

    const isValidPassword = await bcrypt.compare(
      req.body.password,
      data.password
    );

    if (!isValidPassword) {
      return next(new CustomError("Password is not valid", 400));
    }

    const userData = { userId: data._id, role: data.role };

    const accessToken = jwt.sign(userData, config.jwt_secret, {
      expiresIn: config.jwt_expire,
    });

    // const refreshToken = jwt.sign(userData, config.jwt_secret, {
    //   expiresIn: config.jwt_expire,
    // });

    const cookieOptions: CookieOptions = {
      secure: true,
      sameSite: "none",
      httpOnly: true,
    };

    // res.cookie('refreshToken', refreshToken, cookieOptions);

    res.status(200).cookie("token", accessToken, cookieOptions).json({
      message: "success",
      data,
      accessToken,
    });
  }
);

export default login;
