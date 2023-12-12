"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const customError_1 = __importDefault(require("../utils/customError"));
const errorHandler = (err, req, res, next) => {
    let error = Object.assign({}, err);
    error.message = err.message;
    console.error(err.stack);
    if (res.headersSent) {
        return next(error);
    }
    if (err.name === "CastError") {
        const message = `Resource not found with id of ${err.value}`;
        error = new customError_1.default(message, 404);
    }
    else if (err.code === 11000) {
        const message = Object.entries(err.keyValue).map(([key, value]) => `Duplicate field '${key}' with value '${value}' entered`);
        error = new customError_1.default(message.toString(), 400);
    }
    else if (err.name === "ValidationError") {
        const message = Object.values(err.errors).map((val) => val.message);
        error = new customError_1.default(message.toString(), 400);
    }
    res.status(error.statusCode || 500).json({
        success: false,
        error: error.message || "Server Error",
    });
};
exports.default = errorHandler;
