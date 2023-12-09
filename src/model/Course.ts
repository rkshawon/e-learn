import mongoose from "mongoose";
import ICourse, { MinimumSkills } from "../interface/course.interface";
import { NextFunction } from "express";

const CourseSchema = new mongoose.Schema<ICourse>({
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
    enum: Object.values(MinimumSkills),
  },
  scholarshipAvailable: {
    type: Boolean,
    default: false,
  },
  bootcamp: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Bootcamp",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

CourseSchema.statics.getAverageCost = async function (bootcampId) {
  const obj = await this.aggregate([
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
    await this.model("Bootcamp").findByIdAndUpdate(bootcampId, {
      averageCost: Math.ceil(obj[0].averageCost / 10) * 10,
    });
  } catch (err) {
    console.log(err);
  }
};

CourseSchema.post("save", function () {
  (this.constructor as any).getAverageCost(this.bootcamp);
});
// @ts-ignore
CourseSchema.pre("remove", function () {
  // @ts-ignore
  this.constructor.getAverageCost(this.bootcamp);
});

const CourseModel = mongoose.model<ICourse>("Course", CourseSchema);

export default CourseModel;
