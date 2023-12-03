import { Document } from "mongoose";

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
  careers: "Web developer" | "mobile development" | "ui/ux" | "Other";
  averageRating: number;
  averageCost?: number;
  photo: string;
  housing: boolean;
  jobAssistance: boolean;
  jobGuarantee: boolean;
  acceptGi: boolean;
  createdAt: Date;
}

export default IBootcamp;
