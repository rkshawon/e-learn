import config from "../../env-config";
import NodeGeocoder, { BaseOptions } from "node-geocoder";

const options = {
  provider: config.geo_coder,
  fetch: "https",
  apiKey: config.geo_coder_api_key,
  formatter: null,
};

const geocoder = NodeGeocoder(options);
export default geocoder;
