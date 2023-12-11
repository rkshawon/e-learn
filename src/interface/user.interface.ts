import { Document } from "mongoose";

export enum Role {
  User = "user",
  Publisher = "publisher",
}

interface User extends Document {
  name: string;
  email: string;
  password: string;
  role: Role;
  resetPasswordToken?: string;
  resetPasswordExpire?: Date;
  createdAt: Date;
}

export default User;
