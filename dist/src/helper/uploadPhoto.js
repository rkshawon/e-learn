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
const env_config_1 = __importDefault(require("../../env-config"));
const customError_1 = __importDefault(require("../utils/customError"));
const uploadPhoto = (model, id, file, next) => __awaiter(void 0, void 0, void 0, function* () {
    const imageSize = env_config_1.default.image_size_limit || 100000;
    if (!(file === null || file === void 0 ? void 0 : file.mimetype.startsWith("image"))) {
        return next(new customError_1.default("File type should be image", 402));
    }
    if (file.size > imageSize) {
        return next(new customError_1.default(`File size should be less than ${env_config_1.default.image_size_limit}`, 402));
    }
    const fileName = id + "_" + file.name;
    file.mv(`${env_config_1.default.file_upload_path}/${fileName}`, (err) => __awaiter(void 0, void 0, void 0, function* () {
        if (err) {
            console.log(err);
            return next(new customError_1.default(`Could not complete file upload`, 500));
        }
        yield model.findByIdAndUpdate(id, { phone: fileName });
    }));
    return fileName;
});
exports.default = uploadPhoto;
