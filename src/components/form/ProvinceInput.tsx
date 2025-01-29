import React from "react";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { provinces } from "@/utils/province";

type Props = {};

const ProvinceInput = ({defaultValue}: {defaultValue?:string}) => {
    const name='province'
 
    return (
    <div className="w-[50%]">
      <Label className="capitalize" htmlFor="">{name}</Label>
      <Select 
      defaultValue={defaultValue || provinces[0].PROVINCE_NAME}
      name={name}
      required
      >
        <SelectTrigger >
          <SelectValue  />
        </SelectTrigger>
        <SelectContent>
          {provinces.map((item) => {
            return (
              <SelectItem key={item.PROVINCE_ID} value={item.PROVINCE_NAME}>
                <span className="flex gap-3 items-center capitalize">
                    {item.PROVINCE_NAME}</span>
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
};

export default ProvinceInput;
