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
const sortAndPagination_1 = __importDefault(require("../../helper/sortAndPagination"));
const getQuery_1 = __importDefault(require("../../helper/getQuery"));
const getBootcamp = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { limit, page, skip, sort } = (0, sortAndPagination_1.default)(req.query);
    let query = (0, getQuery_1.default)(req.query);
    const data = yield Bootcamp_1.default.find(query)
        .sort(sort)
        .skip(skip)
        .limit(limit)
        .populate("courses");
    res.status(200).json({
        message: "success",
        total: data.length,
        data,
    });
}));
exports.default = getBootcamp;
