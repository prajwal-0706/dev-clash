"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Hero from "./_components/hero";
import { BadgeCheck, Car } from "lucide-react";
import { useRouter } from "next/navigation";
import Stats from "./_components/Stats";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Hero />
      <section className="flex bg-slate-200 w-full py-10">
        <div className="w-10/12 mx-auto h-fit relative flex">
          <div className="w-full h-fit relative">
            <div className="absolute -left-10 z-10 bg-white p-2 flex rounded-md mt-10">
              <div className="rounded-full bg-slate-100 w-fit p-2 ">
                <BadgeCheck size={33} />
              </div>
              <div className="text-base font-semibold mx-2 ">
                Verified Properties
                <div className="text-xs font-medium">
                  Geniun properties with verified documents!
                </div>
              </div>
            </div>

            <div className="bg-[url('/images/property-4.jpg')] w-9/12 h-[520px] bg-cover bg-center rounded-lg"></div>
          </div>
          <div className="flex justify-center items-center">
            <Tabs defaultValue="account" className="w-[400px]">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="account">For tenants</TabsTrigger>
                <TabsTrigger value="password">For landloards</TabsTrigger>
              </TabsList>
              <TabsContent value="account">
                <Card>
                  <CardHeader>
                    <CardTitle>
                      You are a tenants? We can help you out.
                    </CardTitle>
                    <CardDescription className="py-4">
                      We make it easy for tenants to find their next home.
                      Sharing you verified properties with all the details you
                      need to make a decision.
                    </CardDescription>
                    <Button
                      onClick={() => router.push("/rent")}
                      className="mt-4"
                    >
                      Find a property
                    </Button>
                  </CardHeader>
                </Card>
              </TabsContent>
              <TabsContent value="password">
                <Card>
                  <CardHeader>
                    <CardTitle>Worried about selling your house?</CardTitle>
                    <CardDescription className="py-4">
                      Want to sell your house? We can help you out. We make it
                      easy to sell your home easily. Sharing you verified
                      properties with all the details you need to make a
                      decision.
                    </CardDescription>
                    <Button className="mt-4">Sell your property</Button>
                  </CardHeader>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
      <Stats />

      <div className="w-full bg-indigo-700 text-white">
        <div className="w-10/12 mx-auto py-10 text-center">
          <div className="text-indigo-400 text-2xl font-semibold">
            No spam promise
          </div>
          <div className="text-4xl font-bold my-4">Are you a buyer?</div>
          <div className="text-base w-6/12 mx-auto">
            We promise to never spam you. Discover your way to your dream home.
            We asure you to provide you with the best and verified properties.
            Enter your email and get updated with new properties listed in your
            area.
          </div>
          <div className="flex w-6/12 mx-auto mt-4">
            <Input placeholder="Enter your email" />
            <Button className="mx-2">Submit</Button>
          </div>
        </div>
      </div>
    </>
  );
}
