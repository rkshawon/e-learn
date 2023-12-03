import config from "../../env-config";
import NodeGeocoder from "node-geocoder";

const options: any = {
  provider: config.geo_coder,
  apiKey: config.geo_coder_api_key,
};

const geocoder = NodeGeocoder(options);
export default geocoder;
