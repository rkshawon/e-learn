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
const mongoose_1 = __importDefault(require("mongoose"));
const course_interface_1 = require("../interface/course.interface");
const CourseSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: [true, "Please add title"],
        trim: true,
        maxlength: [50, "Name can not be more than 50 characters"],
    },
    description: {
        type: String,
        required: [true, "Please add description"],
        maxlength: [500, "Description can not be more than 500 characters"],
    },
    weeks: {
        type: String,
        required: [true, "Please add weeks"],
    },
    tuition: {
        type: Number,
        required: [true, "Please add tuition cost"],
    },
    minimumSkills: {
        type: String,
        required: [true, "Please add minimum skills"],
        enum: Object.values(course_interface_1.MinimumSkills),
    },
    scholarshipAvailable: {
        type: Boolean,
        default: false,
    },
    bootcamp: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Bootcamp",
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
CourseSchema.statics.getAverageCost = function (bootcampId) {
    return __awaiter(this, void 0, void 0, function* () {
        const obj = yield this.aggregate([
            {
                $match: { bootcamp: bootcampId },
            },
            {
                $group: {
                    _id: "$bootcamp",
                    averageCost: { $avg: "$tuition" },
                },
            },
        ]);
        try {
            // @ts-ignore
            yield this.model("Bootcamp").findByIdAndUpdate(bootcampId, {
                averageCost: Math.ceil(obj[0].averageCost / 10) * 10,
            });
        }
        catch (err) {
            console.log(err);
        }
    });
};
CourseSchema.post("save", function () {
    this.constructor.getAverageCost(this.bootcamp);
});
// @ts-ignore
CourseSchema.pre("remove", function () {
    // @ts-ignore
    this.constructor.getAverageCost(this.bootcamp);
});
const CourseModel = mongoose_1.default.model("Course", CourseSchema);
exports.default = CourseModel;
