'use client';

import { api } from '@/convex/_generated/api';
import { Id } from '@/convex/_generated/dataModel';
import { useMutation, useQuery } from 'convex/react';
import React, { useEffect } from 'react';

export default function BuyPage({
  params: { propertyId },
}: {
  params: { propertyId: Id<'properties'> };
}) {
  const documents = useQuery(api.documents.getById, {
    documentId: propertyId,
  });

  const update = useMutation(api.documents.update);

  const onChange = () => {
    update({
      id: propertyId,
    });
  };

  useEffect(() => {
    onChange();
  }, []);

  return <div className="">{documents?.about}</div>;
}
