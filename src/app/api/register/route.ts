import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import dbConnect from "@/lib/db";
import User from "@/models/user.model";
import bcrypt from "bcryptjs";
// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
// Helper function to upload files to Cloudinary
const uploadToCloudinary = async (file: File): Promise<string> => {
  const buffer = Buffer.from(await file.arrayBuffer());
  const fileUri = `data:${file.type};base64,${buffer.toString("base64")}`;
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(
      fileUri,
      { resource_type: "auto", folder: "ieee-congress" }, 
      (error, result) => {
        if (error) reject(error);
        else resolve(result?.secure_url || "");
      }
    );
  });
};

// Main POST handler
export async function POST(request: NextRequest, response: NextResponse) {
  console.log("request", request);
  try {

    // Connect to MongoDB
    await dbConnect();

    // Extract form data
    const formData = await request.formData();
    const requiredFields = [
      "fullName",
      "email",
      "password",
      "gender",
      "phone",
    ];
    // Validate required fields
    for (const field of requiredFields) {
      if (!formData.get(field)) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }
    // Extract form data and files
    const {
      ieeeIdCard,
      fullName,
      email,
      password,
      phone,
      gender,
      designation,
      ieeeMemberId,
      institutionCompany,
    } = Object.fromEntries(formData) as Record<string, string | File>;

    // Optional file uploads
    let ieeeIdCardUrl = "";
    if (ieeeIdCard) {
      ieeeIdCardUrl = await uploadToCloudinary(ieeeIdCard as File);
    }
    const hashedPassword = await bcrypt.hash(password as string, 10);

    // Check if user exists and update or create a new user
    const user = await User.findOne({ email });
    const defaultValues = {
      isVerified: false,
      isPaid: false,
      isDeleted: false,
      role: "attendee",
      isPaymentVerified: false,
      isPaymentLinkSent: false,
      createdAt: new Date(),
    };
    if (user) {
      Object.assign(user, {
        fullName,
        phone,
        gender,
        designation,
        ieeeMemberId,
        ieeeIdCardUrl,
        institutionCompany,
        password: hashedPassword,
        ...defaultValues,
        
      });
      await user.save();
    } else {
      const newUser = new User({
        fullName,
        email,
        password: hashedPassword,
        phone,
        gender,
        designation,
        ieeeMemberId,
        ieeeIdCardUrl,
        institutionCompany,
        ...defaultValues,
      });
      await newUser.save();
    }

    return NextResponse.json(
      { message: "Registration successful" },
      { status: 201 }
    );

    // return NextResponse.json({ message: "Registration successful" });
  } catch (error) {
    console.error("Error during registration:", error);
    return NextResponse.json(
      { error: "An error occurred during registration" },
      { status: 500 }
    );
  }
}