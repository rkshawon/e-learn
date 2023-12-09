import { Request, Response } from "express";
import asyncHandler from "../../middleware/asyncHandler";
import BootCampModel from "../../model/Bootcamp";
import sortAndPagination from "../../helper/sortAndPagination";
import getQuery from "../../helper/getQuery";

const getBootcamp = asyncHandler(async (req: Request, res: Response) => {
  const { limit, page, skip, sort } = sortAndPagination(req.query);
  let query = getQuery(req.query);

  const data = await BootCampModel.find(query)
    .sort(sort)
    .skip(skip)
    .limit(limit)
    .populate("courses");

  res.status(200).json({
    message: "success",
    total: data.length,
    data,
  });
});

export default getBootcamp;
