import Image from 'next/image';
import React, { useState } from 'react';
import { BedDouble, Bath, Heart, LandPlot } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

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

function PropertyCard({
  property,
  index,
  rowIndex,
}: {
  property: any;
  index: number;
  rowIndex: number;
}) {
  const formattedRent = formatRent(property.price);
  const isFirstRow = rowIndex === 0;
  const isFavorite = false;
  const truncatedName = truncateWords(property.property_name, 2);

  return (
    <Link
      href={`/rent/${property._id}`}
      className={cn(
        'max-w-sm rounded overflow-hidden shadow-lg m-4 p-2 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105',
        isFirstRow && 'border border-yellow-500'
      )}
    >
      <div className="relative w-full h-48 overflow-hidden">
        <Image
          layout="fill"
          objectFit="cover"
          src={property.image_url}
          alt={property.property_name}
        />
        {isFirstRow && (
          <div className="absolute top-0 left-0 bg-yellow-500 text-white px-2 py-1 uppercase text-xs font-bold rounded-tr rounded-bl">
            Popular
          </div>
        )}
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-indigo-600 rounded-full px-3 py-1 text-sm font-semibold text-white mb-2">
          {formattedRent}
        </span>
        <div className="font-bold text-xl mb-2 overflow-hidden overflow-ellipsis">
          {truncatedName}
        </div>
        <p className="text-gray-700 text-base">{property.description}</p>
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
          <span>{property.area_sqm} sqm</span>
        </div>
      </div>
      <div className="px-6 py-4 mt-auto flex items-center">
        <span className="inline-block  bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          {property.location}
        </span>
        <Heart
          size={24}
          fill={isFavorite ? '#4F46E5' : 'none'}
          stroke="#4F46E5"
          className="ml-auto cursor-pointer"
        />
      </div>
    </Link>
  );
}

function PropertyListing({ properties }: { properties: any[] }) {
  return (
    <div className="grid grid-cols-3 mt-7 gap-4 m-auto w-[80%]">
      {properties?.map((property, index) => (
        <PropertyCard
          key={index}
          property={property}
          index={index}
          rowIndex={Math.floor(index / 3)}
        />
      ))}
    </div>
  );
}

export default PropertyListing;
