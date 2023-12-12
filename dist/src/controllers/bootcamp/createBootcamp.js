"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const asyncHandler_1 = __importDefault(require("../../middleware/asyncHandler"));
const Bootcamp_1 = __importDefault(require("../../model/Bootcamp"));
const geocoder_1 = __importDefault(require("../../utils/geocoder"));
const createBootcamp = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const loc = yield geocoder_1.default.geocode(req.body.address);
    req.body.location = {
        type: "Point",
        coordinates: [loc[0].longitude || 0, loc[0].latitude || 0],
        formattedAddress: loc[0].formattedAddress || "",
        city: loc[0].city || "",
        street: loc[0].streetName || "",
        state: loc[0].stateCode || "",
        zipcode: loc[0].zipcode || "",
        country: loc[0].countryCode || "",
    };
    const data = yield Bootcamp_1.default.create(req.body);
    res.status(200).json({
        message: "success",
        data,
    });
}));
exports.default = createBootcamp;