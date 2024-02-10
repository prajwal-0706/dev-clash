'use client';

import React from 'react';
import CategoryHead from './_components/categoryHead';
import Input from './_components/Input';
import SelectInput from './_components/SelectInput';
import InputFile from './_components/InputFile';
import { Button } from '@/components/ui/button';

function SellForm() {
  const [url, seturl] = React.useState('');
  return (
    <div className="w-10/12 m-auto mb-20">
      <div className="text-2xl font-semibold text-slate-800 mb-4">
        Add a property
      </div>
      <div className="w-full border-slate-400 border rounded-lg">
        <CategoryHead title="Property Details" />
        <div className="px-8 py-4">
          <Input
            title="Property Name: "
            holder="Modern Apartment"
            labelId="property-name"
            key="name"
            name="property_name"
          />
          <Input
            title="Owner Name: "
            holder="Jane Smith"
            labelId="property-owner"
            key="owner"
            name="owner"
          />

          <Input
            title="Location: "
            key="location"
            holder="Mumbai"
            labelId="property-location"
            name="location"
          />
          {/* <Input
            title="City: "
            holder="120"
            labelId="property-area"
            key="value"
          /> */}
          <Input
            title="Property area in sqm: "
            holder="120"
            labelId="property-area"
            key="value"
            name="area_sqm"
          />
          <SelectInput
            title="Number of bedrooms: "
            key="type"
            drop={['1', '2', '3', 'More than 3 BHK']}
            name="beds"
          />
          <SelectInput
            title="Number of bathrooms: "
            key="type"
            drop={['1', '2', '3', 'More than 3 BHK']}
            name="bathrooms"
          />
        </div>
      </div>
      <div className="w-full my-10 border-slate-400 border rounded-lg">
        <CategoryHead title="Selling Details" />
        <div className="px-8 py-4">
          {/* <Input
            title="Property Name: "
            holder="Modern Apartment"
            labelId="property-name"
            key="name"
          /> */}
          <SelectInput
            title="Property type"
            key="type"
            drop={['Apartment', 'Villa', 'Townhouse']}
            name="type"
          />
          {/* <SelectInput
            title="Sale type:"
            key="type"
            drop={['For Sale', 'For Rent']}
          /> */}
          <SelectInput
            title="Availability:"
            key="type"
            drop={['Immediate', 'After a month', 'Later']}
            name="availability"
          />
          <SelectInput
            title="Laundry availability:"
            key="type"
            drop={[true, false]}
            name="laundry_availability"
          />
        </div>
      </div>
      <div className="w-full my-10 border-slate-400 border rounded-lg">
        <CategoryHead title="Property Verification" />

        <InputFile setUrl={seturl} url={url} />
      </div>
      <div className="w-full my-10 border-slate-400 border rounded-lg">
        <CategoryHead title="Property Images" />

        <InputFile setUrl={seturl} url={url} />
      </div>
      <Button>Submit</Button>
    </div>
  );
}

export default SellForm;
