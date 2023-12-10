import { NextFunction, Request, Response } from "express";
import asyncHandler from "../../middleware/asyncHandler";
import BootCampModel from "../../model/Bootcamp";
import uploadPhoto from "../../helper/uploadPhoto";

const uploadPhotoBootcamp = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const file: any = req.files?.photo;
    const fileName = await uploadPhoto(BootCampModel, id, file, next);

    res.status(200).json({
      message: "success",
      data: fileName,
    });
  }
);

export default uploadPhotoBootcamp;
