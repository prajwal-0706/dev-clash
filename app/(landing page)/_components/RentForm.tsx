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

function RentForm() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
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
        <DropdownMenu>
          <DropdownMenuTrigger className="p-2 px-4 border border-slate-200 rounded-md mx-2">
            Select Move-in Date
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button className="bg-indigo-700 mx-2">Search</Button>
      </div>
    </div>
  );
}

export default RentForm;
