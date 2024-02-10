import React from 'react';

function CategoryHead(props: any) {
  return (
    <div className=" px-4 p-2 border-b border-slate-300 font-semibold">
      {props.title}
    </div>
  );
}

export default CategoryHead;
