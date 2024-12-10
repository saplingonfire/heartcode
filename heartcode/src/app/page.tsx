import * as React from "react"
 
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 p-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">About Me</h1>
      <Card className="bg-[url(https://img.freepik.com/free-vector/beautiful-white-cloud-blue-sky-background_1035-23406.jpg)] bg-cover">
        
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
        
      </Card>
      </div>
  );
}
