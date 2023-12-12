"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const createUser_1 = __importDefault(require("./createUser"));
const getUser_1 = __importDefault(require("./getUser"));
const updateUser_1 = __importDefault(require("./updateUser"));
const deleteUser_1 = __importDefault(require("./deleteUser"));
const getUserById_1 = __importDefault(require("./getUserById"));
const router = express_1.default.Router();
router.post("/", createUser_1.default);
router.get("/:id", getUserById_1.default);
router.get("/", getUser_1.default);
router.patch("/:id", updateUser_1.default);
router.delete("/:id", deleteUser_1.default);
exports.default = router;
