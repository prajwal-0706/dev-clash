import Image from 'next/image';
import React, { useState } from 'react';
import { BedDouble, Bath, Heart, LandPlot } from 'lucide-react'; // Importing the icons

function formatRent(rent: any) {
  if (rent >= 1000) {
    return `$${(rent / 1000).toFixed(1)}K/year`;
  } else {
    return `$${rent}/year`;
  }
}

function truncateWords(text: string, maxWords: number) {
  const words = text.split(' ');
  if (words.length > maxWords) {
    return words.slice(0, maxWords).join(' ') + '...';
  }
  return text;
}

function PropertyCard({ property, index }: { property: any; index: number }) {
  const formattedRent = formatRent(property.price); // Format rent information
  const isPopular = index < 3; // Check if the property is among the top 3
  const [isFavorite, setIsFavorite] = useState(false); // State variable for favorite status

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite); // Toggle favorite status
  };

  const truncatedName = truncateWords(property.property_name, 4); // Truncate property name if it exceeds 4 words

  return (
    <div className={`max-w-sm rounded overflow-hidden shadow-lg m-4 transition duration-300 ease-in-out transform hover:scale-105 ${isPopular ? 'border border-yellow-500' : ''}`}>
      <div className="relative w-full h-48 overflow-hidden">
        <Image
          layout="fill"
          objectFit="cover"
          src={property.image_url}
          alt={property.property_name} /> {/* Use property_name instead of title */}
        {isPopular && (
          <div className="absolute top-0 left-0 bg-yellow-500 text-white px-2 py-1 uppercase text-xs font-bold rounded-tr rounded-bl">
            Popular
          </div>
        )}
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-indigo-600 rounded-full px-3 py-1 text-sm font-semibold text-white mb-2">
          {formattedRent}
        </span>
        <div className="font-bold text-xl mb-2 overflow-hidden overflow-ellipsis">{truncatedName}</div> {/* Use truncatedName */}
        <p className="text-gray-700 text-base">
          {property.description}
        </p>
      </div>
      <div className="px-6 py-4 flex items-center">
        <div className="flex items-center mr-4">
          <BedDouble size={20} className="mr-2 text-indigo-600" />
          <span>{property.bedrooms} Bedrooms</span>
        </div>
        <div className="flex items-center mr-4">
          <Bath size={20} className="mr-2 text-indigo-600" />
          <span>{property.bath} Bathroom</span>
        </div>
        <div className="flex items-center">
          <LandPlot size={20} className="mr-2 text-indigo-600" />
          <span>{property.area_sqm} sqm</span> {/* Display area_sqm */}
        </div>
      </div>
      <div className="px-6 py-4 mt-auto flex items-center"> {/* Use mt-auto to align to the bottom */}
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          {property.location}
        </span>
        <Heart size={24} fill={isFavorite ? '#4F46E5' : 'none'} stroke="#4F46E5" className="ml-auto cursor-pointer" onClick={toggleFavorite} />
      </div>
    </div>
  );
}

function PropertyListing({ properties }: { properties: any[] }) {
  return (
    <div className="grid grid-cols-3 gap-4 m-auto w-[80%]">
      {properties.map((property, index) => (
        <PropertyCard key={index} property={property} index={index} />
      ))}
    </div>
  );
}

export default PropertyListing;
