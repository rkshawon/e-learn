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
const uploadPhoto_1 = __importDefault(require("../../helper/uploadPhoto"));
const uploadPhotoBootcamp = (0, asyncHandler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { id } = req.params;
    const file = (_a = req.files) === null || _a === void 0 ? void 0 : _a.photo;
    const fileName = yield (0, uploadPhoto_1.default)(Bootcamp_1.default, id, file, next);
    res.status(200).json({
        message: "success",
        data: fileName,
    });
}));
exports.default = uploadPhotoBootcamp;
