import dotenv from "dotenv";

dotenv.config();

const config = {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL as string,
  geo_coder: process.env.GEOCODER_PROVIDER as string,
  geo_coder_api_key: process.env.GEOCODER_AP_KEY as string,
  image_size_limit: process.env.IMAGE_SIZE_LIMIT,
  file_upload_path: process.env.FILE_UPLOAD_PATH as string,
  jwt_secret: process.env.JWT_SECRET as string,
  jwt_expire: process.env.JWT_EXPIRE as string,
};

export default config;
