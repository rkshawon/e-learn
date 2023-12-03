import dotenv from "dotenv";

dotenv.config();

const config = {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL as string,
  geo_coder: process.env.GEOCODER_PROVIDER as string,
  geo_coder_api_key: process.env.GEOCODER_AP_KEY as string,
};

export default config;
