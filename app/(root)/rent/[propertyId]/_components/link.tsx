"use client";

import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const BackLink = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <Link suppressHydrationWarning href="/rent">
      <div className="flex items-center text-indigo-700 font-medium mt-8 mb-8">
        <ChevronLeft className="h-[18px]" />
        <div>Back to map</div>
      </div>
    </Link>
  );
};
export default BackLink;
