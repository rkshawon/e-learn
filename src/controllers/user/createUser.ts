import { Request, Response } from "express";
import asyncHandler from "../../middleware/asyncHandler";
import CourseModel from "../../model/Course";

const createUser = asyncHandler(async (req: Request, res: Response) => {
  const data = await CourseModel.create(req.body);

  res.status(200).json({
    message: "success",
    data,
  });
});
export default createUser;
