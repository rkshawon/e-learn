import mongoose, { Schema } from "mongoose";
import IReview from "../interface/review.interface";

const reviewSchema = new Schema<IReview>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  bootcamp: {
    type: Schema.Types.ObjectId,
    ref: "Bootcamp",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

reviewSchema.statics.getAverageCost = async function (bootcampId) {
  const obj = await this.aggregate([
    {
      $match: { bootcamp: bootcampId },
    },
    {
      $group: {
        _id: "$bootcamp",
        averageRating: { $avg: "$rating" },
      },
    },
  ]);

  try {
    // @ts-ignore
    await this.model("Bootcamp").findByIdAndUpdate(bootcampId, {
      averageRating: obj[0].averageRating,
    });
  } catch (err) {
    console.log(err);
  }
};

reviewSchema.post("save", function () {
  (this.constructor as any).getAverageRating(this.bootcamp);
});
// @ts-ignore
reviewSchema.pre("remove", function () {
  // @ts-ignore
  this.constructor.getAverageRating(this.bootcamp);
});

reviewSchema.index({ bootcamp: 1, user: 1 }, { unique: true });

const ReviewModel = mongoose.model<IReview>("Review", reviewSchema);

export default ReviewModel;
