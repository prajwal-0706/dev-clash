import { BedSingle, HelpCircle } from "lucide-react";
import Image from "next/image";
import React from "react";
import owner from "@/public/images/owener.jpg";
import { Button } from "@/components/ui/button";
import logo from "@/public/logo.svg";
type prop = {
  data: any;
};
const Info = (props: prop) => {
  const info = props.data;
  return (
    <>
      <div className="w-[59%] flex rounded-lg border-slate-300 border-2 mt-10 mb-10">
        <div className="m-5">
          <p className="text-slate-500 mb-3 text-sm">Bedrooms</p>
          <div className="flex">
            <BedSingle className="text-slate-500 mr-3" />
            <p className="font-bold text-lg">{info.beds}</p>
          </div>
        </div>
        <div className="m-5">
          <p className="text-slate-500 mb-3 text-sm">Bathrooms</p>
          <div className="flex">
            <BedSingle className="text-slate-500 mr-3" />
            <p className="font-bold text-lg">{info.bathrooms}</p>
          </div>
        </div>
        <div className="m-5">
          <p className="text-slate-500 mb-3 text-sm">Square Area</p>
          <div className="flex">
            <BedSingle className="text-slate-500 mr-3" />
            <p className="font-bold text-lg">{info.area_sqm}</p>
          </div>
        </div>
        <div className="m-5">
          <p className="text-slate-500 mb-3 text-sm">Repair Quality</p>
          <div className="flex">
            <BedSingle className="text-slate-500 mr-3" />
            <p className="font-bold text-lg">{info.repair_quality}</p>
          </div>
        </div>
        <div className="m-5">
          <p className="text-slate-500 mb-3 text-sm">Status</p>
          <div className="flex">
            <BedSingle className="text-slate-500 mr-3" />
            <p className="font-bold text-lg">{info.status}</p>
          </div>
        </div>
      </div>

      <div className="w-[59%]">
        <h1 className="font-bold text-2xl mb-5">About this home</h1>
        <p className=" font-normal">{info.about}</p>
      </div>

      <div className="rounded-lg border-2 border-slate-300 w-[59%] mt-8 bg-slate-200 ">
        <p className="mt-5 ml-3 text-slate-500 text-xl">
          Listed by property owner
        </p>

        <div className="flex justify-between items-center mb-4 ">
          <div className="flex">
            <div className=" flex justify-center items-center m-3">
              <Image
                src={owner}
                alt="#"
                height={40}
                width={40}
                className="rounded-full object-contain"
              />
            </div>
            <div className="flex flex-col justify-center item-center">
              <p className="font-bold text-sm">{info.owner}</p>
              <p className="text-slate-500 text-sm">
                {info.property_details.city}
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-3">
            <Button className=" bg-indigo-200 text-indigo-700  hover:bg-indigo-700 hover:text-white">
              Ask a question
            </Button>
            <Button className=" bg-indigo-200 text-indigo-700  hover:bg-indigo-700 hover:text-white mr-2">
              <HelpCircle className="h-[20px] mr-2" />
              Get more info
            </Button>
          </div>
        </div>
      </div>
      <hr className="mt-6 w-[59%] mb-6 text-slate-600" />

      <div className="w-[59%] ">
        <h1 className="font-bold text-2xl">Rental features</h1>

        <div className=" text-sm flex justify-between gap-8">
          <div className="w-[100%]">
            <div className="flex justify-between w-[100%] mt-4 mb-4">
              <p className="flex ">
                Listed on
                <Image src={logo} alt="#" height={20} />
                <p className="text-indigo-700 font-bold">Estatery</p>
              </p>
              <p className="font-bold  ">{info.property_details.listed_on}</p>
            </div>
            <div className="flex justify-between w-[100%] mt-4 mb-4">
              <p className="flex ">Date Available</p>
              <p className="font-bold  ">
                {info.property_details.availability}
              </p>
            </div>
            <div className="flex justify-between w-[100%] mt-4 mb-4">
              <p className="flex ">Type</p>
              <p className="font-bold  ">{info.property_details.type}</p>
            </div>
            <div className="flex justify-between w-[100%] mt-4 mb-4">
              <p className="flex ">Laundry</p>
              <p className="font-bold  ">
                {info.property_details.laundry_availability}
              </p>
            </div>
            <div className="flex justify-between w-[100%] mt-4 mb-4">
              <p className="flex ">Cooling</p>
              <p className="font-bold  ">{info.property_details.cooling}</p>
            </div>
            <div className="flex justify-between w-[100%] mt-4 mb-4">
              <p className="flex ">Heating</p>
              <p className="font-bold  ">{info.property_details.heating}</p>
            </div>
          </div>

          {/* 2 */}

          <div className="w-[100%]">
            <div className="flex justify-between w-[100%] mt-4 mb-4">
              <p className="flex">City</p>
              <p className="font-bold ">{info.property_details.city}</p>
            </div>
            <div className="flex justify-between w-[100%] mt-4 mb-4">
              <p className="flex">Year Build</p>
              <p className="font-bold ">{info.property_details.year_built}</p>
            </div>
            <div className="flex justify-between w-[100%] mt-4 mb-4">
              <p className="flex">Size</p>
              <p className="font-bold ">{info.property_details.lot_size_sqm}</p>
            </div>
            <div className="flex justify-between w-[100%] mt-4 mb-4">
              <p className="flex">Parking Area</p>
              <p className="font-bold ">{info.property_details.parking_area}</p>
            </div>
            <div className="flex justify-between w-[100%] mt-4 mb-4">
              <p className="flex">Deposit</p>
              <p className="font-bold ">{info.property_details.deposit}</p>
            </div>
            <div className="flex justify-between w-[100%] mt-4 mb-4">
              <p className="flex">Proccessing Fee</p>
              <p className="font-bold ">
                {info.property_details.processing_fees}
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-6 w-[59%] mb-6 text-slate-600" />
    </>
  );
};
export default Info;
