import { Request, Response } from "express";
import asyncHandler from "../../middleware/asyncHandler";
import UserModel from "../../model/User";

const register = asyncHandler(async (req: Request, res: Response) => {
  const data = await UserModel.create(req.body);

  res.status(200).json({
    message: "success",
    data,
  });
});
export default register;
