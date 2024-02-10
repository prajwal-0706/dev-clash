"use client";

import React from "react";
import BackLink from "./_components/link";
import property1 from "@/public/images/property-1.jpg";
import Heading from "./_components/heading";
import Info from "./_components/info";

const PropertyPagebyId = ({
  params: { propertyId },
}: {
  params: { propertyId: string };
}) => {
  const data: any = {
    property_id: 1,
    property_name: "Modern Apartment with Stunning View",
    location: "123 Main St, Cityville, USA",
    price: 350000,
    beds: 2,
    bathrooms: 2,
    area_sqm: 120,
    status: "For Sale",
    owner: "John Doe",
    image_url: property1,
    property_details: {
      listed_on: "2024-02-10",
      availability: "Immediate",
      type: "Apartment",
      laundry_availability: "yes",
      cooling: "Central Air",
      heating: "Forced Air",
      city: "Cityville",
      year_built: 2018,
      lot_size_sqm: 500,
      parking_area: "Garage",
      deposit: 10000,
      processing_fees: 500,
    },
    about:
      "This modern apartment offers breathtaking views of the city skyline. It features spacious living areas, high-end finishes, and a private balcony.",
    repair_quality: "Excellent",
  };
  return (
    <div className="w-[80%] m-auto">
      <BackLink />
      <Heading data={data} />
      <Info data={data} />
      {/* <div>{propertyId}</div> */}
    </div>
  );
};
export default PropertyPagebyId;
