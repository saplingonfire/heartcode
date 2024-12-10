import * as React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


export default function Quiz() {
  const words = [
    {
      text: "Quiz",
    }
  ];
  return (
    <div className="flex flex-col mx-auto items-center justify-center bg-gray-50 p-4">
      <TypewriterEffectSmooth words={words}/>
    
      </div>
  );
}
