import { Document, Schema } from "mongoose";

export enum MinimumSkills {
  Beginner = "beginner",
  Intermediate = "intermediate",
  Advanced = "advanced",
}

interface ICourse extends Document {
  title: string;
  description: string;
  weeks: string;
  tuition: number;
  minimumSkills: MinimumSkills;
  scholarshipAvailable: boolean;
  bootcamp: Schema.Types.ObjectId;
  createdAt: Date;
}

export default ICourse;
