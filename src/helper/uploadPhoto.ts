import { NextFunction, Response, Request } from "express";
import config from "../../env-config";
import CustomError from "../utils/customError";

const uploadPhoto = async (
  model: any,
  id: string,
  file: any,
  next: NextFunction
) => {
  const imageSize = config.image_size_limit || 100000;

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
    await model.findByIdAndUpdate(id, { phone: fileName });
  });
  return fileName;
};
export default uploadPhoto;
