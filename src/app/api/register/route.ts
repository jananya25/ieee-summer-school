import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import User from "@/models/user.model";
import bcrypt from "bcrypt";
import { uploadToCloudinary } from "@/lib/cloudinary";
import { queueWelcomeEmail } from "@/lib/email/queue";

export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    const formData = await request.formData();
    const requiredFields = [
      "fullName",
      "email",
      "password",
      "gender",
      "phone",
    ];
    for (const field of requiredFields) {
      if (!formData.get(field)) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }
    const {
      idCard,
      cv,
      fullName,
      email,
      password,
      phone,
      gender,
      designation,
      ieeeMemberId,
      institutionCompany,
    } = Object.fromEntries(formData) as Record<string, string | File>;

    let ieeeIdCardUrl = "";
      if (idCard) {
      ieeeIdCardUrl = await uploadToCloudinary(idCard as File);
    }
    let cvUrl = "";
    if (cv) {
      cvUrl = await uploadToCloudinary(cv as File);
    }
    const hashedPassword = await bcrypt.hash(password as string, 10);

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
    
    let isNewUser = false;
    
    if (user) {
      Object.assign(user, {
        fullName,
        phone,
        gender,
        designation,
        ieeeMemberId,
        ieeeIdCardUrl,
        institutionCompany,
        cvUrl,
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
        cvUrl,
        ...defaultValues,
      });
      await newUser.save();
      isNewUser = true;
    }

    // Send welcome email
    try {
      await queueWelcomeEmail(email as string, fullName as string);
      console.log(`Welcome email queued for: ${email}`);
    } catch (emailError) {
      console.error("Failed to send welcome email:", emailError);
      // Don't fail the registration if email fails
    }

    return NextResponse.json(
      { 
        message: "Registration successful",
        isNewUser,
        emailSent: true
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error during registration:", error);
    return NextResponse.json(
      { error: "An error occurred during registration" },
      { status: 500 }
    );
  }
}