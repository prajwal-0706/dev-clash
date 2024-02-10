import Image from "next/image";
import React from "react";
import fees from "@/public/images/feespaid.jpeg";

const Document = () => {
  return (
    <div className="flex flex-col justify-center items-center font-bold text-2xl text-indigo-700 mb-12">
      Property Document
      <hr className="w-[80%] mt-8 mb-8 " />
      <Image src={fees} alt="#" height={500} width={500} />
    </div>
  );
};
export default Document;
