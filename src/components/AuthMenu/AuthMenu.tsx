"use client";
import Link from "next/link";
import { AuthMenuProps } from "./AuthMenu.props";
import { signOut, useSession } from "next-auth/react";
import { Button } from "../Button/Button";

import NavLink from "../NavLink/NavLink";
const AuthMenu: React.FC<AuthMenuProps> = () => {
  const session = useSession();

  return (
    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
      {session?.data ? (
        <>
          <NavLink
            href={"profile"}
            className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
          >
            Профиль
          </NavLink>

          <Link
            onClick={() => {
              signOut({
                callbackUrl: "/",
              });
            }}
            href={"#"}
          >
            <Button>Выйти</Button>
          </Link>
        </>
      ) : (
        //? FIX LINK
        <NavLink href={"/api/auth/signin"}>
          <Button>Зайти через VK</Button>
        </NavLink>
      )}
    </ul>
  );
};

export default AuthMenu;
