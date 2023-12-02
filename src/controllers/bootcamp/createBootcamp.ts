import { Request, Response } from "express";
import asyncHandler from "../../middleware/asyncHandler";
import BootCampModel from "../../model/Bootcamp";

const createBootcamp = asyncHandler(async (req: Request, res: Response) => {
  const data = await BootCampModel.create(req.body);
  res.status(200).json({
    message: "success",
    data,
  });
});
export default createBootcamp;
