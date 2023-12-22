"use client";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { Button } from "@/components/Button/Button";
import { redirect } from "next/navigation";

const Profile = () => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/profile");
    },
  });

  return (
    <div className="flex justify-between">
      {session && (
        <>
          <div className="flex gap-10">
            <Image
              src={session.user?.image ?? ""}
              width={150}
              height={150}
              alt="Аватар"
            />
            <div>{session.user?.name}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
