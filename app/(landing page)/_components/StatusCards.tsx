import React from "react";

function StatusCards(props: any) {
  return (
    <div className="border-l-2 text-xl border-l-slate-600 px-6">
      <div className="text-3xl text-indigo-700 font-semibold">
        {props.amount}
      </div>
      {props.title}
    </div>
  );
}

export default StatusCards;
