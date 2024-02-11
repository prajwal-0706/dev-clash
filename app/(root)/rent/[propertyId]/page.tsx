'use client';

import React, { useEffect, useState } from 'react';
import BackLink from './_components/link';
import property1 from '@/public/images/property-1.jpg';
import Heading from './_components/heading';
import Info from './_components/info';
import { Id } from '@/convex/_generated/dataModel';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';

const PropertyPagebyId = ({
  params: { propertyId },
}: {
  params: { propertyId: Id<'properties'> };
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const data = useQuery(api.documents.getById, {
    documentId: propertyId,
  });
  return (
    <div suppressHydrationWarning className="w-[80%] m-auto">
      <BackLink />
      <Heading data={data} />
      <Info data={data} />
      {/* <div>{propertyId}</div> */}
    </div>
  );
};
export default PropertyPagebyId;
