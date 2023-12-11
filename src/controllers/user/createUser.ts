import { Request, Response } from "express";
import asyncHandler from "../../middleware/asyncHandler";
import CourseModel from "../../model/Course";
import jwt from "jsonwebtoken";
import config from "../../../env-config";

const createUser = asyncHandler(async (req: Request, res: Response) => {
  const data = await CourseModel.create(req.body);

  const accessToken = jwt.sign({ id: data._id }, config.jwt_secret, {
    expiresIn: config.jwt_expire,
  });

  res.status(200).json({
    message: "success",
    data,
    token: { accessToken },
  });
});
export default createUser;
