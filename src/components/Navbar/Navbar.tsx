import Link from "next/link";
import React from "react";
import Menu from "./Menu";
import Darkmode from "./Darkmode";
import Profile from "./Profile";
import Search from "./Search";

const Navbar = () => {
  return (
    <nav>
      <div className="max-w-[1200px] mx-auto px-8 py-6">
        <div className="flex justify-between items-center ">
          <div>
            <Link href="/">
              <li className="font-bold text-3xl  list-none">Camping</li>
            </Link>
          </div>
          <div>
            <Menu />
      
          </div>
          <div className="hidden md:flex items-center gap-4">
          <Darkmode />
          <Profile />
          </div>
        </div>
      </div>
      {/* Search  */}
      <div className="max-w-2xl mx-auto  px-8">
        <Search />
      </div>
    </nav>
  );
};

export default Navbar;
