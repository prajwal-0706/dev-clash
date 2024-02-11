"use client";
import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Calculator } from "lucide-react";
import { Label } from "./ui/label";
import { Button } from "./ui/button";

function MortgageCalc() {
  const [values, setvalues] = useState({
    homePrice: 0,
    duration: 0,
    interestRate: 0,
  });
  console.log("QkN91Mpd3GVkpA0CKJyyEQ==jIrVoHlzNoGydeOd");
  const [result, setresult] = useState<any>(undefined);
  const HandleSubmit = async () => {
    let res: any = await fetch(
      `https://api.api-ninjas.com/v1/mortgagecalculator?loan_amount=${values.homePrice}&interest_rate=${values.duration}&duration_years=${values.interestRate}`,
      {
        headers: {
          "X-Api-Key": "QkN91Mpd3GVkpA0CKJyyEQ==jIrVoHlzNoGydeOd",
        },
      }
    );
    res = res.json().then((e: any) => {
      setresult(e);
    });
  };
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <div className="aside w-[80px] h-[80px] bg-slate-300 rounded-s-2xl fixed bottom-10 right-0 shadow-lg flex justify-center items-center">
            <Calculator size={38} />
          </div>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Mortgage Calculator</SheetTitle>
            <SheetDescription>
              Calculate your monthly mortgage payment!
              <Label htmlFor="home-price" className="block mt-12 my-4">
                Home Price
              </Label>
              <input
                id="home-price"
                type="number"
                className="block w-full border border-slate-300 rounded-md p-2"
                value={values.homePrice}
                onChange={(e) =>
                  setvalues({ ...values, homePrice: parseInt(e.target.value) })
                }
              />
              <Label htmlFor="down-payment" className="block mt-4 my-2">
                Duration:
              </Label>
              <input
                id="down-payment"
                type="number"
                className="block w-full border border-slate-300 rounded-md p-2"
                value={values.duration}
                onChange={(e) =>
                  setvalues({
                    ...values,
                    duration: parseInt(e.target.value),
                  })
                }
              />
              <Label htmlFor="interest-rate" className="block mt-4 my-2">
                Interest Rate
              </Label>
              <input
                id="interest-rate"
                type="number"
                className="block w-full border border-slate-300 rounded-md p-2"
                value={values.interestRate}
                onChange={(e) =>
                  setvalues({
                    ...values,
                    interestRate: parseInt(e.target.value),
                  })
                }
              />
              <Button
                className="mt-4"
                onClick={() => {
                  HandleSubmit();
                }}
              >
                Calculate
              </Button>
              <div className="mt-8 text-left font-bold text-xl my-3">
                Result:
              </div>
              <div className="text-left">
                <span className="font-semibold">Monthly Payment</span>
                <div>Total: {result?.monthly_payment?.total},</div>
                <div>mortgage: {result?.monthly_payment?.mortgage}</div>
              </div>
              <div className="text-left my-4">
                <span className="font-semibold">Annual Payment</span>
                <div>Total: {result?.annual_payment?.total},</div>
                <div>mortgage: {result?.annual_payment?.mortgage}</div>
              </div>
              <div className="text-left font-semibold">
                Total intrest paid: {result?.total_interest_paid}
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MortgageCalc;
