"use client";
import { use, useEffect, useState } from "react";
import { getUserData } from "../../data/conference-schedule";
import { UserProfile } from "@/components/user-profile";
import { User } from "@/types/user";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";


export default function ProfilePage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") {
      return;
    }
    if (!session) {
      router.push("/api/auth/signin");
    }
  }, [session, status, router]);

  return session ? <UserProfile session={session} /> : <div>Loading...</div>;
}
