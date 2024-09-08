import React from "react";
import Image from "next/image";
import { CircleDollarSign, Fence, Tag } from "lucide-react";
const Stats = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-gray-100 p-10">
      {/* Left Section */}
      <div className="w-full lg:w-3/5 capitalize p-6 lg:p-20">
        <h2 className="text-blue-900 text-3xl lg:text-5xl font-bold">
          The New Way to Find Your New Home
        </h2>

        <p className="lg:pr-28 pt-4 lg:pt-8 pb-6 lg:pb-8 pl-0 lg:pl-2 font-semibold text-gray-700">
          Find your dream place to live in with more than 10k+ properties
          listed.
        </p>

        {/* Stats Section */}
        <div className="flex justify-between items-center w-full lg:w-3/4 mt-8 lg:ml-8 space-x-4">
          {/* Property Return Rate */}
          <div className="flex flex-col justify-center items-center">
            <div className="p-1 rounded-full border border-gray-400">
              <div className="bg-gray-200 p-4 rounded-full">
                <Tag className="h-[30px] w-[30px]" />
              </div>
            </div>
            <div className="font-semibold text-xl lg:text-2xl mt-2">7.1%</div>
            <div className="text-gray-600 text-sm mt-1 lg:mt-2 text-center">
              Property Return Rate
            </div>
          </div>

          {/* Property Sell & Rent */}
          <div className="flex flex-col justify-center items-center">
            <div className="p-1 rounded-full border border-gray-400">
              <div className="bg-gray-200 p-4 rounded-full">
                <Fence className="h-[30px] w-[30px]" />
              </div>
            </div>
            <div className="font-semibold text-xl lg:text-2xl mt-2">2000</div>
            <div className="text-gray-600 text-sm mt-1 lg:mt-2 text-center">
              Property Sell & Rent
            </div>
          </div>

          {/* Daily Transactions */}
          <div className="flex flex-col justify-center items-center">
            <div className="p-1 rounded-full border border-gray-400">
              <div className="bg-gray-200 p-4 rounded-full">
                <CircleDollarSign className="h-[30px] w-[30px]" />
              </div>
            </div>
            <div className="font-semibold text-xl lg:text-2xl mt-2">1300</div>
            <div className="text-gray-600 text-sm mt-1 lg:mt-2 text-center">
              Daily Transactions
            </div>
          </div>
        </div>
      </div>

      {/* Right Section: Image */}
      <div className="flex justify-center items-center w-full lg:w-2/5 mt-8 lg:mt-0">
        <Image
          className="rounded-md"
          src="/images/home-about.png"
          width={400}
          height={300}
          alt="Home About Image"
        />
      </div>
    </div>
  );
};

export default Stats;
