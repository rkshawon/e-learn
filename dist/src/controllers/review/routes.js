"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const createReview_1 = __importDefault(require("./createReview"));
const getReview_1 = __importDefault(require("./getReview"));
const updateReview_1 = __importDefault(require("./updateReview"));
const deleterReview_1 = __importDefault(require("./deleterReview"));
const getReviewById_1 = __importDefault(require("./getReviewById"));
const router = express_1.default.Router();
router.post("/", createReview_1.default);
router.get("/:id", getReviewById_1.default);
router.get("/", getReview_1.default);
router.patch("/:id", updateReview_1.default);
router.delete("/:id", deleterReview_1.default);
exports.default = router;
