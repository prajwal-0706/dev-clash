import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import React from 'react';

function InputParam(props: any) {
  return (
    <div className="my-4">
      <Label htmlFor={props.labelId}>{props.title}</Label>
      <Input
        onChange={props.onChange}
        name={props.name}
        placeholder={props.holder}
      />
    </div>
  );
}

export default InputParam;
