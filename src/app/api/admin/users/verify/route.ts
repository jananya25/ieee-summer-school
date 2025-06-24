import { NextRequest, NextResponse } from "next/server";
import User from "@/models/user.model";
import dbConnect from "@/lib/db";
import { auth } from "@/auth";

export async function POST(request: NextRequest) {
    const session = await auth();
    
    if (!session?.user?.email) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        await dbConnect();
        
        // Check if the current user is an admin
        const currentUser = await User.findOne({ email: session.user.email });
        if (!currentUser || currentUser.role !== "admin") {
            return NextResponse.json({ error: "Access denied. Admin role required." }, { status: 403 });
        }

        const { userId } = await request.json();
        console.log("userId", userId);  
        
        if (!userId) {
            return NextResponse.json({ error: "User ID is required" }, { status: 400 });
        }

        // Find and update the user
        const user = await User.findById(userId);
        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        // Update verification status
        user.isVerified = true;
        user.updatedAt = new Date();
        await user.save();

        // TODO: Send verification email
        // You can integrate with your email service here (SendGrid, Nodemailer, etc.)
        console.log(`Sending verification email to ${user.email}`);

        return NextResponse.json({ 
            message: "User verified successfully",
            user: {
                id: user.id,
                email: user.email,
                fullName: user.fullName,
                isVerified: user.isVerified
            }
        });
    } catch (error) {
        console.error("Error verifying user:", error);
        return NextResponse.json({ error: "Failed to verify user" }, { status: 500 });
    }
} 