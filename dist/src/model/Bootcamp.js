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
const bootcamp_interface_1 = require("../interface/bootcamp.interface");
const slugify_1 = __importDefault(require("slugify"));
const BootcampSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: [true, "Please add name"],
        unique: true,
        trim: true,
        maxlength: [50, "Name can not be more than 50 characters"],
    },
    slug: String,
    description: {
        type: String,
        required: [true, "Please add description"],
        maxlength: [500, "Description can not be more than 500 characters"],
    },
    website: {
        type: String,
        match: [
            /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
            "Please use valid url with http or https",
        ],
    },
    phone: {
        type: String,
        maxlength: [20, "Phone numbere can not be more than 20 characters"],
    },
    email: {
        type: String,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please use valid url with http or https",
        ],
    },
    address: {
        type: String,
        select: false,
        required: [true, "Please add description"],
        maxlength: [100, "Address can not be more than 100 characters"],
    },
    location: {
        type: {
            type: String,
            enum: ["Point"],
            default: "Point",
        },
        coordinates: {
            type: [Number],
            required: true,
            index: "2dsphere",
        },
        formattedAddress: String,
        city: String,
        street: String,
        state: String,
        zipcode: String,
        country: String,
    },
    careers: {
        type: String,
        required: true,
        enum: Object.values(bootcamp_interface_1.Careers),
    },
    averageRating: {
        type: Number,
        required: true,
        min: [1, "Rating can not be less than 1"],
        max: [10, "Rating can not be more than 10"],
    },
    averageCost: Number,
    photo: {
        type: String,
        default: "no-photo.jpg",
    },
    housing: {
        type: Boolean,
        default: false,
    },
    jobAssistance: {
        type: Boolean,
        default: false,
    },
    jobGuarantee: {
        type: Boolean,
        default: false,
    },
    acceptGi: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});
BootcampSchema.pre("save", function (next) {
    this.slug = (0, slugify_1.default)(this.name, { lower: true });
    next();
});
BootcampSchema.pre(
// @ts-ignore
"remove", function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        yield this.model("Course").deleteMany({ bootcamp: this._id });
        next();
    });
});
BootcampSchema.virtual("courses", {
    ref: "Course",
    localField: "_id",
    foreignField: "bootcamp",
    justOne: false,
});
const BootCampModel = mongoose_1.default.model("Bootcamp", BootcampSchema);
exports.default = BootCampModel;
