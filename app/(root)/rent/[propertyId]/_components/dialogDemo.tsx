import { Button } from "@/components/ui/button";
import logo from "@/public/logo.svg";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Home from "@/public/images/Home.webp";
import { HelpCircle } from "lucide-react";
import Image from "next/image";
import { useToast } from "@/components/ui/use-toast";
import Link from "next/link";

export function DialogDemo() {
  const { toast } = useToast();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className=" bg-indigo-200 text-indigo-700  hover:bg-indigo-700 hover:text-white mr-2">
          <HelpCircle className="h-[20px] mr-2" />
          Get more info
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] ">
        <div className="bg-slate-200 h-[400px] flex flex-col justify-center items-start pl-8">
          <div className="font-bold text-2xl m-1 text-indigo-700 flex ">
            <Image src={logo} alt="#" height={20} className="mr-2" />
            Estatery
          </div>
          <div className="font-bold text-4xl m-1">$29</div>
          <div className="font-normal text-xl m-1 mb-8">per month</div>
          <hr className="w-[80%] bg-black m-3" />
          <div className="relative">
            <Image
              src={Home}
              alt="#"
              className="absolute top-[-150px] left-48 animate-bounce"
              height={100}
              width={100}
            />
            <li>Valid documents related to property </li>
            <li>Tie up with the real-estate agent</li>
            <li>Premium advertising</li>
          </div>

          <hr className="w-[80%] bg-black m-3" />
          <Link href={"/document"}>
            <Button
              onClick={() =>
                toast({
                  title: "Premium purchase Successfully ✅",
                  description: "Let's find home together!!!",
                })
              }
              className=" bg-indigo-200 text-indigo-700  hover:bg-indigo-700 hover:text-white ml-[90%] mt-4"
            >
              Buy premium
            </Button>
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
}
