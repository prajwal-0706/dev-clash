import React from "react";
import Image from "next/image";
import { CircleDollarSign, Fence, Tag } from "lucide-react";
const Stats = () => {
  return (
    <div className="flex w-11/12 mx-auto bg-gray-100 ">
      <div className="capitalize">
        <h2 className="">the new way to find your new home</h2>

        <p>
          Find your dream place to live in with more than 10k+ property listed
        </p>

        <div className="flex">
          <div className="p-1 rounded-full border border-black">
            <div className="bg-gray-200 p-2 rounded-full">
              <Tag />
            </div>
          </div>
          <div className="p-1 rounded-full border border-black">
            <div className="bg-gray-200 p-2 rounded-full">
              <Fence />
            </div>
          </div>
          <div className="p-1 rounded-full border border-black">
            <div className="bg-gray-200 p-2 rounded-full">
              <CircleDollarSign />
            </div>
          </div>
        </div>
      </div>
      <div className="flex ">
        <Image
          className="rounded-md m-4 float-right"
          src="/images/home-about.png"
          width={300}
          height={100}
          alt="card"
        />
      </div>
    </div>
  );
};

export default Stats;
