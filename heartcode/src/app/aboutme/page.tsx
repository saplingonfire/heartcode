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


export default function AboutMe() {
  const words = [
    {
      text: "About",
    },
    {
      text: "Us", className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "!",
    },
  ];
  return (
    <div className="flex flex-col mx-auto items-center justify-center bg-gray-50 p-4">
      <TypewriterEffectSmooth words={words}/>
      <Card className="bg-[url(https://img.freepik.com/free-vector/beautiful-white-cloud-blue-sky-background_1035-23406.jpg)] bg-cover w-1/2 m-8">
        <CardHeader>
        <img src="https://png.pngtree.com/thumb_back/fh260/background/20240522/pngtree-abstract-cloudy-background-beautiful-natural-streaks-of-sky-and-clouds-red-image_15684333.jpg"
            className="w-24 h-24 rounded-full mb-4 object-cover border-4 border-black"/>
          <CardTitle >
            Who i am
          </CardTitle>
          I am Wei Cong i value teamwork and communication<br></br>          
        
          one thing i hate the most is when people who have bad attuide and refuse to change
          

          <CardTitle>
            Hobby
          </CardTitle>
          i like cooking and play any sport 

          <CardTitle>
             Current education
          </CardTitle>
           i am from FPS(graudate 2021)-JYSS(graduate 2025)-
           
           <CardTitle>
             My dream
          </CardTitle>
           Is to be able to have a stable income to allow to enjoy myelf with my family member
        </CardHeader>
        <CardFooter className="flex justify-between">
      <Button variant="outline">Nice</Button>
      <Button>Cool</Button>
    </CardFooter>
      </Card>
      <Card className="border-black border-8 m-8 w-1/2 h-fit mt-2.5 bg-[url('https://img.freepik.com/free-photo/colorful-abstract-textured-background-design_53876-108265.jpg')] bg-cover">
      <Avatar className="mx-auto mt-2.5 h-40 w-40 bg-pink-200">
      <AvatarImage src="https://www.freeiconspng.com/thumbs/baby-shark-png/baby-shark-png-transparent-background-1.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
    <CardHeader>
      <CardTitle className="text-4xl">About me</CardTitle>
      <CardDescription className="text-2xl">My name is Zhi Ying and I'm a Sec 3 student this year.</CardDescription>
    </CardHeader>
    <CardContent>
      
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
          <Label className="text-3xl" htmlFor="name">Hobbies</Label>
          <CardDescription className="text-2xl">I like to listen to music and play games :)</CardDescription>
          <Carousel className="w-72 h-72 mx-auto">
            <CarouselContent>
              <CarouselItem> <a href="https://www.youtube.com/@Ado1024"> <img src="https://i.guim.co.uk/img/media/ea6401919663c8b4f8b12893039c140f40d55db7/2198_1669_4690_2814/master/4690.png?width=1200&height=1200&quality=85&auto=format&fit=crop&s=73fae3b2723739648aa20774674095f1" className="rounded-[24px]" alt=""/> </a> </CarouselItem>
              <CarouselItem> <a href="https://www.youtube.com/@BrawlStars"> <img src="https://play-lh.googleusercontent.com/VUdLhkbTpT6nv1BxCV-c-YQiaiF_muL1o0h3BZ3LD0UnOU03YcaGBVZTnR82_RgtHXY" className="rounded-[24px]" alt="" /> </a> </CarouselItem>
              <CarouselItem> <a href="https://www.youtube.com/@CoComelon"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ4RspB5joRhIphHkADINw_xDEknhOjZs5CMEC0ZS0mzlc6UmUvpEtFu_qgdD2Q266RMk&usqp=CAU" className="rounded-[24px]" alt=""/> </a> </CarouselItem>
            </CarouselContent>
           <CarouselPrevious />
           <CarouselNext />
          </Carousel>
          </div>
          <div className="flex flex-col space-y-1.5">
          <Label className="text-3xl" htmlFor="name">Family</Label>
          <CardDescription className="text-2xl">I have two older brothers who are currently working!</CardDescription>
          </div>
        </div>
    </CardContent>
    <CardFooter className="flex justify-between">
      <Button variant="outline">Nice</Button>
      <Button>Cool</Button>
    </CardFooter>
  </Card>
  
      </div>
  );
}
