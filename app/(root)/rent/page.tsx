'use client';
import { useState } from 'react';
import Bar from './_components/Bar';
import Cards from './_components/Cards';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';

function SearchBarWithDropdown() {
  const [searchTerm, setSearchTerm] = useState('');
  const [dropdownValue, setDropdownValue] = useState('Property');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleDropdownChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setDropdownValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="mx-4 sm:mx-20 flex">
      {' '}
      {/* Responsive margin */}
      <h1 className="text-3xl flex-1 pt-7 font-semibold">
        Search Properties for Rent
      </h1>
      <form onSubmit={handleSubmit} className="mt-8 flex">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="border border-gray-300 px-5 py-2 mx-2 rounded-l-md h-10"
        />
        <div className="flex-1">
          <select
            value={dropdownValue}
            onChange={handleDropdownChange}
            className="border border-gray-300 px-5 py-2 mx-2 rounded-r-md bg-white h-10"
          >
            <option value="Property">Property</option>
            <option value="Location">Location</option>
          </select>
        </div>
        <button
          type="submit"
          className="border border-gray-300 px-4 py-2 rounded-md mx-2 bg-indigo-600 h-10 text-white"
        >
          Search
        </button>
      </form>
    </div>
  );
}

function page() {
  const allDocuments = useQuery(api.documents.getAllData, {});

  return (
    <div>
      <SearchBarWithDropdown />
      <Cards properties={allDocuments!} />
    </div>
  );
}

export default page;
