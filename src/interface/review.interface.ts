import { Document, Schema } from "mongoose";

interface IReview extends Document {
  title: string;
  description: string;
  rating: number;
  user: Schema.Types.ObjectId;
  bootcamp: Schema.Types.ObjectId;
  createdAt: Date;
}

export default IReview;
