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
import { HelpCircle } from "lucide-react";
import Image from "next/image";
import { useToast } from "@/components/ui/use-toast";
import TextareaWithButton from "./textArea";

export default function AddComment() {
  const { toast } = useToast();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className=" bg-indigo-200 text-indigo-700  hover:bg-indigo-700 hover:text-white mr-2">
          <HelpCircle className="h-[20px] mr-2" />
          Add a review
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] ">
        <TextareaWithButton />
      </DialogContent>
    </Dialog>
  );
}
