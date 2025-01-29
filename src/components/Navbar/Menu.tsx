import Link from "next/link";
import React from "react";
import Hammenu from "./Hammenu";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { links } from "@/utils/Link";

type Props = {};

const Menu = (props: Props) => {
  return (
    <div>
      <ul className="hidden md:flex space-x-6 font-semibold text-base lg:text-xl">
        {links.map((item, index) => {
          return (
            <Link key={index} href={item.href}>
              <li>{item.label}</li>
            </Link>
          );
        })}
      </ul>
      {/* Mobile */}
      <ul className="flex items-center gap-4">
        <Hammenu />
      </ul>
    </div>
  );
};

export default Menu;
