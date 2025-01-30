import Link from "next/link";
import React from "react";
import Hammenu from "./Hammenu";
import { links } from "@/utils/Link";
import Darkmode from "./Darkmode";


const Menu = () => {
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
      <ul className="flex md:hidden items-center gap-4">
        <Darkmode/>
        <Hammenu />
      </ul>
    </div>
  );
};

export default Menu;
