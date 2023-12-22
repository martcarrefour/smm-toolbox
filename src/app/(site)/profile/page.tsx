"use client";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { Button } from "@/components/Button/Button";

const Profile = () => {
  const session = useSession();

  return (
    <div className="flex justify-between">
      {session?.data && (
        <>
          <div className="flex gap-10">
            <Image
              src={session.data?.user?.image ?? ""}
              width={150}
              height={150}
              alt="Аватар"
            />
            <div>{session.data?.user?.name}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
