import { NextFunction, Request, Response } from "express";
import asyncHandler from "../../middleware/asyncHandler";
import BootCampModel from "../../model/Bootcamp";
import CustomError from "../../utils/customError";
import config from "../../../env-config";

const updateBootcamp = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const imageSize = config.image_size_limit || 100000;
    const { id } = req.params;

    const file: any = req.files?.photo;

    if (!file?.mimetype.startsWith("image")) {
      return next(new CustomError("File type should be image", 402));
    }
    if (file.size > imageSize) {
      return next(
        new CustomError(
          `File size should be less than ${config.image_size_limit}`,
          402
        )
      );
    }
    const fileName = id + "_" + file.name;

    file.mv(`${config.file_upload_path}/${fileName}`, async (err: any) => {
      if (err) {
        console.log(err);
        return next(new CustomError(`Could not complete file upload`, 500));
      }
      await BootCampModel.findByIdAndUpdate(id, { phone: fileName });
    });

    res.status(200).json({
      message: "success",
      data: fileName,
    });
  }
);

export default updateBootcamp;
