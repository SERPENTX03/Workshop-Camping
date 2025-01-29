"use client";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MenuSquare } from "lucide-react";
import {
  useAuth,
  SignedOut,
  SignInButton,
  SignOutButton,
  SignUpButton,
} from "@clerk/nextjs";
import { Button } from "../ui/button";
import Link from "next/link";
import { links } from "@/utils/Link";

const Hammenu = () => {
  const { sessionId } = useAuth();

  if (!sessionId) {
    return (
      <div className="md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <MenuSquare size={30} />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />

            {links.map((item, index) => {
              return (
                <Link key={index} href={item.href}>
                  <DropdownMenuItem>{item.label}</DropdownMenuItem>
                </Link>
              );
            })}

            <SignInButton mode="modal">
              <DropdownMenuItem>Login</DropdownMenuItem>
            </SignInButton>

            <SignUpButton mode="modal">
              <DropdownMenuItem>Register</DropdownMenuItem>
            </SignUpButton>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    );
  }

  return (
    <div className="md:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <MenuSquare size={30} />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {links.map((item, index) => {
            return (
              <Link key={index} href={item.href}>
                <DropdownMenuItem>{item.label}</DropdownMenuItem>
              </Link>
            );
          })}

          <DropdownMenuItem className="w-full cursor-pointer" asChild>
            <SignOutButton signOutOptions={{ sessionId }}>
              <Button>Logout</Button>
            </SignOutButton>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Hammenu;
