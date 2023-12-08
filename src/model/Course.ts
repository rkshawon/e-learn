import mongoose from "mongoose";
import ICourse, { MinimumSkills } from "../interface/course.interface";

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

const CourseModel = mongoose.model<ICourse>("Course", CourseSchema);

export default CourseModel;
