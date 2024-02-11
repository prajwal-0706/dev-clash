'use client';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import React from 'react';

function SelectInput(props: any) {
  return (
    <div className="my-4">
      <Label htmlFor={props.labelId}>{props.title}</Label>
      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder={props.title} />
        </SelectTrigger>
        <SelectContent>
          {props.drop.map((e: any) => {
            return <SelectItem value={e}>{e}</SelectItem>;
          })}
        </SelectContent>
      </Select>
    </div>
  );
}

export default SelectInput;
