import Image from "next/image";
import React from "react";
import StatusCards from "./StatusCards";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import RentForm from "./RentForm";
import BuyForm from "./BuyForm";

function Hero() {
  return (
    <div className="flex w-11/12 mx-auto ">
      <div className=" lg:w-7/12 lg:px-10 lg:p-16 pb-16">
        <span className="text-7xl font-semibold w-8/12  ">
          Buy, Rent, or Sell your property easily!
        </span>
        <div className="text-sm font-normal lg:w-8/12 mt-8">
          A great platform to buy, sell or even rent your properties without any
          commissions.
        </div>
        <div className="flex mt-8">
          <div>
            <StatusCards title="renters" amount="50k+" />
          </div>
          <div className="mx-10">
            <StatusCards title="properties" amount="10k+" />
          </div>
        </div>
        <div className="drawer mt-10">
          <Tabs defaultValue="rent" className="">
            <TabsList>
              <TabsTrigger value="rent">Rent</TabsTrigger>
              <TabsTrigger value="buy">Buy</TabsTrigger>
            </TabsList>
            <TabsContent value="rent">
              <RentForm />
            </TabsContent>
            <TabsContent value="buy">
              <BuyForm />
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <div className="hidden sm:block">
        <Image
          className="rounded-md m-4 float-right"
          src="/images/property-1.jpg"
          width={300}
          height={100}
          alt="card"
        />
        <Image
          className="rounded-md m-4 mr-auto mt-40"
          src="/images/property-2.jpg"
          width={220}
          height={70}
          alt="card"
        />
        <Image
          className="rounded-md m-4 mx-auto"
          src="/images/property-5.jpg"
          width={320}
          height={120}
          alt="card"
        />
      </div>
    </div>
  );
}

export default Hero;
