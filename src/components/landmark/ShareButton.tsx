"use client";
import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {  LucideFacebook, Share2, Twitter } from "lucide-react";
import { Button } from "../ui/button";

import {
  TwitterShareButton,
  FacebookMessengerShareButton,

} from "react-share";



const ShareButton = ({
  landmarkId,
  name,
}: {
  landmarkId: string;
  name: string;
}) => {
    const url = process.env.NEXT_PUBLIC_WEBSITE_URL
    const shareLink = `${url}/landmark/${landmarkId}`
  return (
    <section>
      <Popover>
        <PopoverTrigger asChild>
          <Button size="icon">
            <Share2 />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full space-x-4" side="top" align="end">
          <FacebookMessengerShareButton url={shareLink} name={name} appId="facebook" >
            <LucideFacebook/>
          </FacebookMessengerShareButton>
          <TwitterShareButton url={shareLink} name={name}>
            <Twitter/>
          </TwitterShareButton>
         
        </PopoverContent>
      </Popover>
    </section>
  );
};

export default ShareButton;
