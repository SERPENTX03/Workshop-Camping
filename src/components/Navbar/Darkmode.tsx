"use client"
import React, { useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

const Darkmode = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const handlesetTheme = ()=> {
    setTheme(resolvedTheme === "light" ? "dark" : "light")
  }

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Button
    variant="outline"
    size="icon"
    onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
  >
    {/* แสดง icon หลังจาก mounted เท่านั้น ป้องกัน hydration error */}
    {mounted ? (
      resolvedTheme === "light" ? (
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem] " />
      )
    ) : (
      <div className="h-[1.2rem] w-[1.2rem]"></div> // ป้องกัน Flashing
    )}
  </Button>
  );
};

export default Darkmode;
