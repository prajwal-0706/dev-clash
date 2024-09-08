"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import Link from "next/link";

function RentForm() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div className="mt-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
        {/* Location Select */}
        <Select>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Mumbai">Mumbai</SelectItem>
            <SelectItem value="Pune">Pune</SelectItem>
            <SelectItem value="Delhi">Delhi</SelectItem>
          </SelectContent>
        </Select>

        {/* Move-in Date Picker */}
        <DropdownMenu>
          <DropdownMenuTrigger className="p-2 px-4 border border-slate-200 rounded-md w-full sm:w-auto">
            Select Move-in Date
          </DropdownMenuTrigger>
          <DropdownMenuContent className="p-0">
            <DropdownMenuItem className="p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Search Button */}
        <Link href={"/rent"} className="w-full sm:w-auto">
          <Button className="w-full sm:w-auto bg-indigo-700">Search</Button>
        </Link>
      </div>
    </div>
  );
}

export default RentForm;
