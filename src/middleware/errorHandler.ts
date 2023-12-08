import { ErrorRequestHandler } from "express";
import CustomError from "../utils/customError";

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  console.error(err.stack);

  if (res.headersSent) {
    return next(error);
  }

  if (err.name === "CastError") {
    const message = `Resource not found with id of ${err.value}`;
    error = new CustomError(message, 404);
  } else if (err.code === 11000) {
    const message = Object.entries(err.keyValue).map(
      ([key, value]) => `Duplicate field '${key}' with value '${value}' entered`
    );

    error = new CustomError(message.toString(), 400);
  } else if (err.name === "ValidationError") {
    const message = Object.values(err.errors).map((val: any) => val.message);
    error = new CustomError(message.toString(), 400);
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || "Server Error",
  });
};

export default errorHandler;
