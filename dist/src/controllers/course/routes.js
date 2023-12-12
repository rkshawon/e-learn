"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const createCourse_1 = __importDefault(require("./createCourse"));
const getCourse_1 = __importDefault(require("./getCourse"));
const getCourseById_1 = __importDefault(require("./getCourseById"));
const updateCourse_1 = __importDefault(require("./updateCourse"));
const deleteCourse_1 = __importDefault(require("./deleteCourse"));
const router = express_1.default.Router();
router.post("/", createCourse_1.default);
router.get("/:id", getCourseById_1.default);
router.get("/", getCourse_1.default);
router.patch("/:id", updateCourse_1.default);
router.delete("/:id", deleteCourse_1.default);
exports.default = router;
