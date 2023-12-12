"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const config = {
    port: process.env.PORT,
    database_url: process.env.DATABASE_URL,
    geo_coder: process.env.GEOCODER_PROVIDER,
    geo_coder_api_key: process.env.GEOCODER_AP_KEY,
    image_size_limit: process.env.IMAGE_SIZE_LIMIT,
    file_upload_path: process.env.FILE_UPLOAD_PATH,
    jwt_secret: process.env.JWT_SECRET,
    jwt_expire: process.env.JWT_EXPIRE,
};
exports.default = config;
