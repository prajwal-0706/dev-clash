import React from "react";
import tick from "@/public/images/tick.png";
import star from "@/public/images/Star.png";
import Image from "next/image";

const Comments = (props: any) => {
  const data: any = props.data;
  return (
    <div className="w-[300px] border border-gray-200 rounded-lg p-4 ">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex gap-1">
            <Image src={star} alt="" className="h-4" />
            <Image src={star} alt="" className="h-4" />
            <Image src={star} alt="" className="h-4" />
            <Image src={star} alt="" className="h-4" />
          </div>
          <div className="ml-2">{/* <BsThreeDots /> */}</div>
        </div>
        <div className="flex items-center">
          <h2 className="text-lg font-bold">{data.name}</h2>
          <Image src={tick} alt="#" className="h-5 ml-1" />
        </div>
      </div>
      <p className="text-base text-gray-600 mt-2">
        {data.discription.slice(0, 100)}
      </p>
      <div className="mt-2">
        <p className="text-xs font-medium text-gray-500">{`Posted on ${data.date}`}</p>
      </div>
    </div>
  );
};

export default Comments;
