import { Request, Response } from "express";
import asyncHandler from "../../middleware/asyncHandler";
import BootCampModel from "../../model/Bootcamp";
import geocoder from "../../utils/geocoder";

const getBootcampByRadius = asyncHandler(
  async (req: Request, res: Response) => {
    const { zipcode, distance } = req.params;

    const loc = await geocoder.geocode(zipcode);

    const lat = loc[0].latitude;
    const lng = loc[0].longitude;

    const radius = Number(distance) / 3963;

    console.log(radius, lng, lat);

    const data = await BootCampModel.find({
      location: { geoWithin: { $centerSphere: [[lng, lat], radius] } },
    });

    res.status(200).json({
      message: "success",
      data,
    });
  }
);
export default getBootcampByRadius;
