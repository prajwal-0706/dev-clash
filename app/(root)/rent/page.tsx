
"use client"
import { useState } from "react"
import Bar from './_components/Bar'
import Cards from "./_components/Cards";

const props = [{
  "property_id": 1,
  "property_name": "Modern Apartment with Stunning View",
  "location": "123 Main St, Cityville, USA",
  "price": 350000,
  "beds": 2,
  "bathrooms": 2,
  "area_sqm": 120,
  "status": "For Sale",
  "owner": "John Doe",
  "image_url": "/images/property-1.jpg",
  "property_details": {
    "listed_on": "2024-02-10",
    "availability": "Immediate",
    "type": "Apartment",
    "laundry_availability": true,
    "cooling": "Central Air",
    "heating": "Forced Air",
    "city": "Cityville",
    "year_built": 2018,
    "lot_size_sqm": 500,
    "parking_area": "Garage",
    "deposit": 10000,
    "processing_fees": 500
  },
  "about": "This modern apartment offers breathtaking views of the city skyline. It features spacious living areas, high-end finishes, and a private balcony.",
  "repair_quality": "Excellent"
},
{
  "property_id": 2,
  "property_name": "Luxury Villa with Pool",
  "location": "456 Oak St, Suburbia, USA",
  "price": 850000,
  "beds": 4,
  "bathrooms": 4,
  "area_sqm": 400,
  "status": "For Sale",
  "owner": "Jane Smith",
  "image_url": "/images/property-2.jpg",
  "property_details": {
    "listed_on": "2024-02-05",
    "availability": "Immediate",
    "type": "Villa",
    "laundry_availability": true,
    "cooling": "Central Air",
    "heating": "Radiant",
    "city": "Suburbia",
    "year_built": 2015,
    "lot_size_sqm": 1000,
    "parking_area": "Driveway",
    "deposit": 20000,
    "processing_fees": 1000
  },
  "about": "This luxurious villa boasts a spacious layout with high ceilings and large windows offering abundant natural light. The outdoor area features a swimming pool and landscaped gardens.",
  "repair_quality": "Newly Renovated"
},
{
  "property_id": 3,
  "property_name": "Cozy Townhouse in Historic District",
  "location": "789 Elm St, Oldtown, USA",
  "price": 250000,
  "beds": 3,
  "bathrooms": 2,
  "area_sqm": 150,
  "status": "Sold",
  "owner": "Michael Johnson",
  "image_url": "/images/property-3.jpg",
  "property_details": {
    "listed_on": "2024-01-20",
    "availability": "Sold",
    "type": "Townhouse",
    "laundry_availability": true,
    "cooling": "Window Units",
    "heating": "Radiant",
    "city": "Oldtown",
    "year_built": 1920,
    "lot_size_sqm": 300,
    "parking_area": "Street",
    "deposit": 15000,
    "processing_fees": 750
  },
  "about": "This charming townhouse is nestled in the heart of the historic district. It features original hardwood floors, exposed brick walls, and a private courtyard.",
  "repair_quality": "Good"
},
{
  "property_id": 4,
  "property_name": "Spacious Family Home with Garden",
  "location": "101 Pine St, Suburbia, USA",
  "price": 450000,
  "beds": 3,
  "bathrooms": 2.5,
  "area_sqm": 200,
  "status": "For Sale",
  "owner": "Sarah Brown",
  "image_url": "/images/property-4.jpg",
  "property_details": {
    "listed_on": "2024-02-08",
    "availability": "Immediate",
    "type": "Single Family Home",
    "laundry_availability": true,
    "cooling": "Central Air",
    "heating": "Forced Air",
    "city": "Suburbia",
    "year_built": 2005,
    "lot_size_sqm": 600,
    "parking_area": "Garage",
    "deposit": 18000,
    "processing_fees": 900
  },
  "about": "This spacious family home offers a large backyard with a lush garden, perfect for outdoor entertaining. The interior features an open-plan layout and modern amenities.",
  "repair_quality": "Excellent"
},
{
  "property_id": 5,
  "property_name": "Beachfront Condo with Ocean Views",
  "location": "789 Ocean Blvd, Beachtown, USA",
  "price": 600000,
  "beds": 2,
  "bathrooms": 2,
  "area_sqm": 100,
  "status": "For Sale",
  "owner": "Emily Wilson",
  "image_url": "/images/property-5.jpg",
  "property_details": {
    "listed_on": "2024-01-15",
    "availability": "Immediate",
    "type": "Condo",
    "laundry_availability": true,
    "cooling": "Central Air",
    "heating": "Forced Air",
    "city": "Beachtown",
    "year_built": 2010,
    "lot_size_sqm": 200,
    "parking_area": "Parking Lot",
    "deposit": 12000,
    "processing_fees": 600
  },
  "about": "This beachfront condo offers stunning ocean views and direct beach access. It features a spacious balcony, modern kitchen, and resort-style amenities.",
  "repair_quality": "Good"
},
{
  "property_id": 6,
  "property_name": "Mountain Retreat with Panoramic Views",
  "location": "456 Mountain Rd, Mountainville, USA",
  "price": 750000,
  "beds": 4,
  "bathrooms": 3.5,
  "area_sqm": 300,
  "status": "For Sale",
  "owner": "David Lee",
  "image_url": "/images/property-6.jpg",
  "property_details": {
    "listed_on": "2024-01-10",
    "availability": "Immediate",
    "type": "Mountain Home",
    "laundry_availability": true,
    "cooling": "None",
    "heating": "Fireplace",
    "city": "Mountainville",
    "year_built": 2012,
    "lot_size_sqm": 1000,
    "parking_area": "Driveway",
    "deposit": 20000,
    "processing_fees": 1000
  },
  "about": "This mountain retreat offers panoramic views of the surrounding landscape. It features a cozy fireplace, spacious deck, and luxurious master suite.",
  "repair_quality": "Excellent"
},]

function SearchBarWithDropdown() {
  const [searchTerm, setSearchTerm] = useState('');
  const [dropdownValue, setDropdownValue] = useState('Property');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleDropdownChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDropdownValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="mx-4 sm:mx-20 flex"> {/* Responsive margin */}
      <h1 className="text-3xl flex-1 pt-7 font-semibold">Search Properties for Rent</h1>
      <form onSubmit={handleSubmit} className="mt-8 flex">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={ handleSearchChange}
          className="border border-gray-300 px-4 py-2 rounded-l-md mr-2"
        />
        <div className="flex-1">
          <select
            value={dropdownValue}
            onChange={handleDropdownChange}
            className="border border-gray-300 px-4 py-2 rounded-r-md bg-white"
          >
            <option value="Property">Property</option>
            <option value="Location">Location</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <button type="submit" className="border border-gray-300 px-4 py-2 rounded-md bg-gray-200">Search</button>
      </form>
    </div>
  );
}

function page() {
  return (
    <div>
      <SearchBarWithDropdown />
      <Bar properties={props}/>
      <Cards properties={props}/>
    </div>
  )
}

export default page;

