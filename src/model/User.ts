import mongoose from "mongoose";
import { Role } from "../interface/user.interface";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add name"],
    maxlength: [50, "Name can not be more than 50 characters"],
  },
  email: {
    type: String,
    required: [true, "Please add an email"],
    unique: true,
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please use valid url with http or https",
    ],
  },
  password: {
    type: String,
    required: [true, "Please add password"],
    minlength: 6,
    select: false,
  },
  role: {
    type: String,
    enum: Object.values(Role),
    default: "user",
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const UserModel = mongoose.model("User", UserSchema);

export default UserModel;
