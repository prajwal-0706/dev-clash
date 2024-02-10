'use client';

import { api } from '@/convex/_generated/api';
import { useQuery } from 'convex/react';
import React from 'react';
import Cards from '../rent/_components/Cards';

export default function BuyPage() {
  const allDocuments = useQuery(api.documents.getAllData, {});
  console.log(allDocuments);
  return (
    <div>
      <div>Buy</div>
      <div className="">
        <Cards properties={allDocuments as any} />
      </div>
    </div>
  );
}
