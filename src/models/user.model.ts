import mongoose, { Schema, Document } from "mongoose";

export interface User extends Document {
  id: string;
  fullName: string;
  phone: string;
  gender: string;
  email: string;
  password: string;
  role: string;
  designation: string;
  ieeeMemberId: string;
  isPaymentLinkSent: boolean;
  isVerified: boolean;
  institutionCompany: string;
  ieeeIdCardUrl: string;
  isPaid: boolean;
  isPaymentVerified: boolean;
  paymentScreenshotUrl: string;
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema: Schema = new Schema({
  id: {
    type: String,
    unique: false,
    sparse: true,
  },
  fullName: {
    type: String,
    trim: true,
  },
  phone: {
    type: String,
  },
  gender: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    require: true,
  },
  password: {
    type: String,
  },
  designation: {
    type: String,
    require: true,
  },
  role: {
    type: String,
  },
  isPaymentLinkSent: {
    type: Boolean,
    default: false,
  },
  isPaymentVerified: {
    type: Boolean,
    default: false,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  ieeeMemberId: {
    type: String,
    required: false,
  },
  institutionCompany: {
    type: String,
    required: false,
  },
  ieeeIdCardUrl: {
    type: String,
    required: false,
  },
  isPaid: {
    type: Boolean,
    default: false,
  },
  paymentScreenshotUrl: {
    type: String,
    required: false,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const userModel =
  (mongoose.models.User as mongoose.Model<User>) ||
  mongoose.model<User>("User", UserSchema);

export default userModel;
