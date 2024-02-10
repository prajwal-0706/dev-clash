import { Button } from "@/components/ui/button";
import { Heart, Search, Share2 } from "lucide-react";
import Image from "next/image";
import React from "react";

type prop = {
  data: any;
};

const Heading = (props: prop) => {
  const data = props.data;
  console.log(data);

  return (
    <div>
      <div className="flex items-center justify-between ml-1">
        <h1 className="text-3xl font-bold">{data.property_name}</h1>
        <div className=" flex justify-between w-1/5">
          <Button className=" bg-indigo-100 text-indigo-700  hover:bg-indigo-700 hover:text-white">
            <Share2 />
            Share
          </Button>
          <Button className=" bg-indigo-100 text-indigo-700  hover:bg-indigo-700 hover:text-white">
            <Heart />
            Favourite
          </Button>
          {/* <Button>
            <Search />
            Brouse nearby listing
          </Button> */}
        </div>
      </div>
      <div className="text-slate-500 mt-2 mb-2 ml-1">{data.location}</div>

      <div className="w-full flex justify-between h-[400px]">
        <div className="w-[59%]">
          <Image
            className="h-full object-cover rounded-lg "
            src={data.image_url}
            alt="Image"
          />
        </div>
        <div className="w-[39%] flex flex-col justify-between">
          <Image
            className="h-[48%] rounded-lg object-cover"
            src={data.image_url}
            alt="Image"
          />
          <Image
            className="h-[48%] rounded-lg object-cover"
            src={data.image_url}
            alt="Image"
          />
        </div>
      </div>
    </div>
  );
};
export default Heading;
