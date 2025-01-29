import React from "react";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { categories } from "../../utils/categories";


const CategoryInput = ({defaultValue}: {defaultValue?:string}) => {
    const name='category'
 
    return (
    <div className="mb-4 w-[50%]">
      <Label className="capitalize" htmlFor={name}>{name}</Label>
      <Select 
      defaultValue={defaultValue || categories[0].label}
      name={name}
      required
      >
        <SelectTrigger >
          <SelectValue  />
        </SelectTrigger>
        <SelectContent>
          {categories.map((item, index) => {
            return (
              <SelectItem key={index} value={item.label}>
                <span className="flex gap-3 items-center capitalize">
                    <item.icon />
                    {item.label}</span>
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
};

export default CategoryInput;
