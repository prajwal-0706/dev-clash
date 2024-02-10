import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const BackLink = () => {
  return (
    <Link href="/rent">
      <div className="flex items-center text-indigo-700 font-medium mt-8 mb-8">
        <ChevronLeft className="h-[18px]" />
        <p>Back to map</p>
      </div>
    </Link>
  );
};
export default BackLink;
