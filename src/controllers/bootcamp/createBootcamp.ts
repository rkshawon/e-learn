import { Request, Response } from "express";
import asyncHandler from "../../middleware/asyncHandler";
import BootCampModel from "../../model/Bootcamp";
import geocoder from "../../utils/geocoder";

const createBootcamp = asyncHandler(async (req: Request, res: Response) => {
  const loc = await geocoder.geocode(req.body.address);

  req.body.location = {
    type: "Point",
    coordinates: [loc[0].longitude || 0, loc[0].latitude || 0],
    formattedAddress: loc[0].formattedAddress || "",
    city: loc[0].city || "",
    street: loc[0].streetName || "",
    state: loc[0].stateCode || "",
    zipcode: loc[0].zipcode || "",
    country: loc[0].countryCode || "",
  };

  const data = await BootCampModel.create(req.body);

  res.status(200).json({
    message: "success",
    data,
  });
});
export default createBootcamp;
