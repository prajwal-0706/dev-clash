"use client";
import Image from "next/image";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { Urbanist } from "next/font/google";
import { Menu } from "lucide-react";

const urbanist = Urbanist({ subsets: ["latin"] });

const items = [
  {
    title: "Sell",
    href: "/sell",
  },
  {
    title: "Rent",
    href: "/rent",
  },
  {
    title: "Buy",
    href: "/buy",
  },
  {
    title: "Manage Property",
    href: "/manage-property",
  },
];

function Navbar() {
  return (
    <div>
      <div className="flex w-full py-5 px-5 sm:px-10 space-between justify-between  ">
        <div className="flex items-center justify-center">
          <Image
            width={40}
            height={40}
            src="/logo.svg"
            alt="Next.js Logo"
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          />
          <span
            className={cn("text-2xl font-semibold px-4", urbanist.className)}
          >
            Estatery
          </span>
        </div>
        <div className=" items-center justify-center space-x-4 hidden md:flex ">
          <NavigationMenu className="font-medium">
            <NavigationMenuList>
              {items.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink className="px-4" href={item.href}>
                    {item.title}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="hidden md:flex items-center justify-center space-x-4">
          <Button variant="secondary">Login</Button>
          <Button className="bg-indigo-700">Sign Up</Button>
        </div>
        <div className="md:hidden mt-1">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Menu size={30} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {items.map((item, index) => (
                <DropdownMenuItem key={index}>{item.title}</DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
