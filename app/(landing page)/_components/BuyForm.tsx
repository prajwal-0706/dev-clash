'use client';
import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

function BuyForm() {
  return (
    <div>
      <div>
        <div className="w-fit flex">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Loaction" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Mumbai">Mumbai</SelectItem>
              <SelectItem value="Pune">Pune</SelectItem>
              <SelectItem value="Delhi">Delhi</SelectItem>
            </SelectContent>
          </Select>
          <Link href={'/rent'}>
            <Button className="bg-indigo-700 mx-2">Search</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BuyForm;
