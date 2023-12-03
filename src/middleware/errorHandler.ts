import { ErrorRequestHandler } from "express";
import CustomError from "../utils/customError";

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  console.log(err.stack);

  if (err.name === "CastError") {
    const message = `Resource not found with id of ${err.value}`;
    error = new CustomError(message, 404);
  }

  if (err.code === 11000) {
    const message = `Duplicate field value entered`;
    error = new CustomError(message, 400);
  }
  if (err.name === "ValidationError") {
    const message = Object.values(err.errors).map((val: any) => val.message);
    error = new CustomError(message.toString(), 400);
  }
  res.send(error.statusCode || 500).json({
    success: false,
    error: error.message || "Server Error",
  });
};
export default errorHandler;
