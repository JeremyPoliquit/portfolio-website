import { Avatar, AvatarImage } from "@/components/ui/avatar";
import React from "react";

export default function page() {
  return (
    <div className="flex justify-center min-h-screen">
      <div className="max-w-screen-lg w-full p-4 bg-white shadow-xl rounded">
        <nav className="flex justify-center items-center mt-4 fixed">
          {/* Icon */}
          <Avatar className="">
            <AvatarImage src="https://github.com/shadcn.png"/>
          </Avatar>

          {/* list */}
          
        </nav>
        <header>
          
        </header>
      </div>
    </div>
  );
}
