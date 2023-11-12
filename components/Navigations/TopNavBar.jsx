"use client";

import { useContext } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { UserContext } from "@/store/UserContext";

import Button from "../Buttons/Button";
import UserDropdown from "./UserDropdown";

const navLinks = [
  { href: "/products", label: "Products" },
  { href: "/categories", label: "Categories" },
  { href: "/about-us", label: "About" },
];

export default function TopNavBar() {
  const pathName = usePathname();
  const router = useRouter();
  const { currentUser } = useContext(UserContext);

  return (
    <nav className="bg-background px-4 py-3 text-main grid grid-cols-6 items-center">
      <div className="col-span-1">
        <Link href="/" className="text-primary font-bold text-2xl">
          Eazy Purchase
        </Link>
      </div>
      <div className="col-start-2 col-end-6 justify-self-center">
        {currentUser?.role === "user" && (
          <>
            {navLinks.map((navLink) => (
              <Link
                key={navLink.label}
                href={navLink.href}
                className={`text-sm font-bold px-3 ${
                  navLink.href === pathName && "text-primary underline"
                }`}
              >
                {navLink.label}
              </Link>
            ))}
          </>
        )}
      </div>
      <div className="col-start-6 justify-self-end">
        {currentUser ? (
          <UserDropdown user={currentUser} />
        ) : (
          <Button variant="tertiary" onClick={() => router.push("/login")}>
            Login
          </Button>
        )}
      </div>
    </nav>
  );
}
