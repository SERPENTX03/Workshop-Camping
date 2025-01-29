import React from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,

  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Profile = () => {
  return (
    <div className="flex">
      <SignedIn>
        {/* Mount the UserButton component */}
        <UserButton />
      </SignedIn>
        {/* Signed out users get sign in button */}

      <SignedOut>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button>GetStarted</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <SignInButton mode="modal">
                <DropdownMenuItem>Login</DropdownMenuItem>
              </SignInButton>
              <SignUpButton mode="modal">
                <DropdownMenuItem>Register</DropdownMenuItem>
              </SignUpButton>
            </DropdownMenuContent>
          </DropdownMenu>
      </SignedOut>
    </div>
  );
};

export default Profile;
