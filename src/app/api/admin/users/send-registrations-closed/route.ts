import { NextRequest, NextResponse } from "next/server";
import User from "@/models/user.model";
import dbConnect from "@/lib/db";
import { queueRegistrationsClosed } from "@/lib/email/queue";

export async function GET(request: NextRequest) {

  try {
    await dbConnect();

    // Find users who have not paid and have not been sent the final email
    const users = await User.find({ isPaid: false, finalEmailSent: false });
    console.log(`Found ${users.length} users who need to be notified.`);
    if (!users.length) {
      return NextResponse.json({ message: "No users found who need to be notified." });
    }

    let queued = 0;
    const errors: string[] = [];
    for (const user of users) {
      try {
        await queueRegistrationsClosed(user.email, user.fullName);
        user.finalEmailSent = true;
        user.finalEmailSentAt = new Date();
        user.updatedAt = new Date();
        await user.save();
        queued++;
      } catch (e) {
        errors.push(user.email);
      }
    }

    return NextResponse.json({
      message: `Queued 'registrations closed' email for ${queued} users.`,
      errors,
      recipients: users.map(u => ({ email: u.email, fullName: u.fullName }))
    });
  } catch (error) {
    console.error("Error sending registrations closed emails:", error);
    return NextResponse.json({ error: "Failed to send registrations closed emails" }, { status: 500 });
  }
} 
