import React from "react";
import Image from "next/image";
import { CircleDollarSign, Fence, Tag } from "lucide-react";
const Stats = () => {
  return (
    <div className="flex w-10/12 mx-auto bg-gray-100 ">
      <div className=" w-3/5 capitalize p-20   ">
        <h2 className="text-blue-900 text-5xl font-bold">the new way to find your new home</h2>

        <p className="pr-28 pt-8 pb-8 pl-2 font-semibold text-gray-700">
          Find your dream place to live in with more than 10k+ property listed.
        </p>

        <div className="flex justify-between items-center w-3/4 ml-8">
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="p-1 rounded-full border border-gray-400">
              <div className="bg-gray-200 p-4 rounded-full ">
                <Tag className="h-[30px] w-[30px]  "/>
              </div>
            </div>
            <div className="font-semibold text-2xl ">7.1%</div>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="p-1 rounded-full border border-gray-400">
              <div className="bg-gray-200 p-4 rounded-full">
                <Fence className="h-[30px] w-[30px]  "/>
              </div>
            </div>
            <div className="font-semibold text-2xl ">2000</div>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="p-1 rounded-full border border-gray-400">
              <div className="bg-gray-200 p-4 rounded-full">
                <CircleDollarSign className="h-[30px] w-[30px]  "/>
              </div>
            </div>
            <div className="font-semibold text-2xl ">1300</div>
          </div>
        </div>
      </div>
      <div className="">
        <Image
          className="rounded-md m-4 float-right"
          src="/images/home-about.png"
          width={400}
          height={100}
          alt="card"
        />
      </div>
    </div>
  );
};

export default Stats;
