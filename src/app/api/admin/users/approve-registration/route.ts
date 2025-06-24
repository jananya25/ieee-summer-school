import { NextRequest, NextResponse } from "next/server";
import User from "@/models/user.model";
import dbConnect from "@/lib/db";
import { auth } from "@/auth";
import { queueRegistrationApproved } from "@/lib/email/queue";

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

        const { 
            userId, 
            paymentAmount, 
            schedulePdfLink, 
            qrCodeImage, 
            paymentLink 
        } = await request.json();
        
        if (!userId) {
            return NextResponse.json({ error: "User ID is required" }, { status: 400 });
        }

        if (!paymentAmount || !schedulePdfLink || !qrCodeImage || !paymentLink) {
            return NextResponse.json({ 
                error: "Payment amount, schedule PDF link, QR code image, and payment link are required" 
            }, { status: 400 });
        }

        // Find the user
        const user = await User.findById(userId);
        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        // Check if user is already paid
        if (user.isPaid) {
            return NextResponse.json({ error: "User has already paid" }, { status: 400 });
        }

        // Send registration approved email with payment request
        try {
            await queueRegistrationApproved(user.email, user.fullName, {
                registrationData: {
                    id: user._id,
                    status: 'Approved',
                    registrationDate: user.createdAt
                },
                paymentAmount: parseFloat(paymentAmount),
                schedulePdfLink,
                qrCodeImage,
                paymentLink
            });
            
            // Update user status to indicate registration approved and payment request sent
            user.paymentRequestSent = true;
            user.paymentRequestSentAt = new Date();
            user.isVerified = true; // Mark as verified since approved
            user.updatedAt = new Date();
            await user.save();
            
            console.log(`Registration approved email with payment request queued for ${user.email}`);
        } catch (emailError) {
            console.error("Failed to send registration approved email:", emailError);
            return NextResponse.json({ error: "Failed to send registration approved email" }, { status: 500 });
        }

        return NextResponse.json({ 
            message: "Registration approved and payment request sent successfully",
            user: {
                id: user.id,
                email: user.email,
                fullName: user.fullName,
                isVerified: user.isVerified,
                paymentRequestSent: user.paymentRequestSent,
                paymentRequestSentAt: user.paymentRequestSentAt
            }
        });
    } catch (error) {
        console.error("Error sending registration approved email:", error);
        return NextResponse.json({ error: "Failed to send registration approved email" }, { status: 500 });
    }
} 