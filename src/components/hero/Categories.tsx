import React from "react";
import { categories } from "@/utils/categories";
import Link from "next/link";
const Categories = ({
  search,
  category,
}: {
  search?: string;
  category?: string;
}) => {
  const searchTerm = search ? `&search=${search}` : "";
  return (
    <div className="max-w-6xl mx-auto px-10  mt-4 py-4">
      <div className="flex items-center justify-between ">
        {categories.map((cat) => {
          const isActive = cat.label === category;

          return (
            <Link key={cat.label} href={`/?category=${cat.label}${searchTerm}`}>
              <div
                className={`flex items-center flex-col 
              text-sm md:text-xl lg:text-2xl
            relative group
              ${isActive ? "border-b-2 border-primary" : ""}
              `}
              >
                <cat.icon />
                {cat.label}
                <span
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-primary transform scale-x-0 group-hover:scale-100
          transition-transform duration-300 ease-in-out"
                ></span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
