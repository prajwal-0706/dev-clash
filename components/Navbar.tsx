'use client';
import Image from 'next/image';
import React from 'react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { Urbanist } from 'next/font/google';
import { ArrowRight, Menu } from 'lucide-react';
import { useConvexAuth } from 'convex/react';
import { SignInButton, UserButton } from '@clerk/clerk-react';
import Link from 'next/link';
import { Spinner } from './Spinner';

const urbanist = Urbanist({ subsets: ['latin'] });

const items = [
  {
    title: 'Sell',
    href: '/sell',
  },
  {
    title: 'Rent',
    href: '/rent',
  },
  {
    title: 'Buy',
    href: '/rent',
  },
  {
    title: 'Manage Property',
    href: '/manage-property',
  },
];

function Navbar() {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div className="h-[120px]">
      <div className="flex w-full py-5 px-5 sm:px-10 space-between justify-between fixed bg-slate-50 z-50 ">
        <Link href="/" className="flex items-center justify-center">
          <Image
            width={40}
            height={40}
            src="/logo.svg"
            alt="Next.js Logo"
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          />
          <span
            className={cn('text-2xl font-semibold px-4', urbanist.className)}
          >
            Estatery
          </span>
        </Link>
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
          {isLoading && <Spinner />}
          {!isAuthenticated && !isLoading && (
            <>
              <SignInButton mode="modal">
                <Button variant="secondary">Login</Button>
              </SignInButton>
              <SignInButton mode="modal">
                <Button className="bg-indigo-700">Sign Up</Button>
              </SignInButton>
            </>
          )}

          {isAuthenticated && !isLoading && (
            <>
              <Button size="sm" variant="ghost" asChild>
                <Link href="/rent">
                  Enter Estatery
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
              <UserButton afterSignOutUrl="/" />
            </>
          )}
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
              <DropdownMenuSeparator />
              <DropdownMenuItem>Login</DropdownMenuItem>
              <DropdownMenuItem>Sign Up</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
