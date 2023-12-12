"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const env_config_1 = __importDefault(require("../../env-config"));
const node_geocoder_1 = __importDefault(require("node-geocoder"));
const options = {
    provider: env_config_1.default.geo_coder,
    apiKey: env_config_1.default.geo_coder_api_key,
};
const geocoder = (0, node_geocoder_1.default)(options);
exports.default = geocoder;
