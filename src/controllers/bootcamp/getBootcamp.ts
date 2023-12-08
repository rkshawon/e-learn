import { Request, Response } from "express";
import asyncHandler from "../../middleware/asyncHandler";
import BootCampModel from "../../model/Bootcamp";

const getBootcamp = asyncHandler(async (req: Request, res: Response) => {
  const data = await BootCampModel.find().populate("courses");

  res.status(200).json({
    message: "success",
    data,
  });
});

export default getBootcamp;
