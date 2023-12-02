import mongoose from "mongoose";
import IBootcamp from "../interface/bootcamp.interface";
import slugify from "slugify";

const BootcampSchema = new mongoose.Schema<IBootcamp>({
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
    required: [true, "Please add description"],
    maxlength: [100, "Address can not be more than 100 characters"],
  },
  location: {
    type: {
      type: String,
      enum: ["Point"],
      required: true,
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
    coountry: String,
  },
  careers: {
    type: String,
    required: true,
    enum: ["Web developer", "Mobile development", "UI/UX", "Other"],
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
});
BootcampSchema.pre("save", function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});
const BootCampModel = mongoose.model("Bootcamp", BootcampSchema);
export default BootCampModel;
