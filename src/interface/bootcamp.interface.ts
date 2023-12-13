import { Document, Schema } from "mongoose";

export enum Careers {
  WebDeveloper = "Web developer",
  MobileDevelopment = "Mobile development",
  UIUX = "UI/UX",
  Other = "Other",
  FullStackDevelopment = "Full Stack Development",
  DataScience = "Data Science",
}

interface Location {
  type: string;
  coordinates: number[];
  formattedAddress?: string;
  city?: string;
  street?: string;
  state?: string;
  zipcode?: string;
  country?: string;
}

interface IBootcamp extends Document {
  name: string;
  slug: string;
  description: string;
  website?: string;
  phone?: string;
  email?: string;
  address: string;
  location: Location;
  careers: Careers;
  averageRating: number;
  averageCost?: number;
  photo: string;
  housing: boolean;
  jobAssistance: boolean;
  jobGuarantee: boolean;
  acceptGi: boolean;
  user: Schema.Types.ObjectId;
  createdAt: Date;
}

export default IBootcamp;
