"use client"

import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart, Sector } from "recharts"
import { PieSectorDataItem } from "recharts/types/polar/Pie"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

import { Button } from "@/components/ui/button"
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

const chartData = [
    { year: "2023", drug_abusers: 3122, fill: "var(--color-2023)" },
    { year: "2022", drug_abusers: 2826, fill: "var(--color-2022)" },
  ]

  
const chartConfig = {
    drug_abusers: {
      label: "Arrested Drug Abusers",
    },
    2023: {
        label: "2023",
        color: "hsl(var(--chart-2))",
      },
    2022: {
      label: "2022",
      color: "hsl(var(--chart-1))",
    },
  } satisfies ChartConfig

  const words = [
    {
      text: "Combat",  
    },
    {
      text: "Drug", className: "text-red-600",
    },
    {
      text: "Abuse", className: "text-red-600",
    },
    {
      text: "Today.", 
    },
  ];  

  import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"
 
  const linechartData = [
    { age: "<20", 2022: 119, 2023: 132 },
    { age: "20-29", 2022: 609, 2023: 727 },
    { age: "30-39", 2022: 700, 2023: 740 },
    { age: "40-49", 2022: 520, 2023: 565 },
    { age: "50-59", 2022: 536, 2023: 594 },
    { age: ">60", 2022: 342, 2023: 364 },
  ]
  const linechartConfig = {
    2022: {
      label: "2022",
      color: "hsl(var(--chart-1))",
    },
    2023: {
      label: "2023",
      color: "hsl(var(--chart-2))",
    },
  } satisfies ChartConfig


export default function Data() {
    return(
    <div>
        <div className="flex mt-12 m-8 items-stretch p-8 drop-shadow-2xl">
            <div className="w-1/2  min-h-full">
            <Card className="flex flex-col h-full">
                <CardHeader className="items-center pb-0">
                    <CardTitle>Total Drug Abusers Arrested</CardTitle>
                    <CardDescription>2022 vs 2023</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 pb-0">
                    <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-[350px]"
                    >
                    <PieChart>
                        <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent hideLabel />}
                        />
                        <Pie
                        data={chartData}
                        dataKey="drug_abusers"
                        nameKey="year"
                        innerRadius={90}
                        strokeWidth={5}
                        activeIndex={0}
                        activeShape={({
                            outerRadius = 0,
                            ...props
                        }: PieSectorDataItem) => (
                            <Sector {...props} outerRadius={outerRadius + 10} />
                        )}
                        />
                    </PieChart>
                    </ChartContainer>
                </CardContent>
                <CardFooter className="flex-col gap-2 text-sm">
                    <div className="flex items-center gap-2 font-medium leading-none">
                    3122 in 2023 vs 2826 in 2022 <TrendingUp className="h-4 w-4" />
                    </div>
                    <div className="leading-none text-muted-foreground">
                    10.5% increase in drug abusers arrested
                    </div>
                </CardFooter>
            </Card>
            </div>
            <div className="w-1/2 h-auto p-8 content-center">
            <h2 className="text-center font-bold text-[35px]">
                We need to put a stop to this increasing trend.
            </h2>
            <p className="mb-12 text-center text-2xl font-light">
                We can do much more to stop drug abuse. 
            </p>
            <p className="font-medium text-center text-4xl">
                Help yourself, your family, and your friends...
            </p>
            <p className="mt-12 mx-auto w-fit text-4xl">
            <TypewriterEffectSmooth words={words}/>
            </p>
            </div>

        </div>

        <div className="flex h-fit m-8">
            <div className=" w-1/2 h-auto m-8 text-center content-center">
                <h1 className="text-center font-bold text-4xl">
                     Education starts from young
                </h1>
                <p className="text-center text-2xl font-light">
                    We need to foster a drug-free community
                </p>
                <p className="m-24 font-semibold text-center text-5xl">
                    Seek help for you and your loved ones today
                </p>
                <p className="font-medium text-center text-3xl">
                    Refer to the Resources page for more information
                </p>
                <Button variant="outline" className="font-mono text-2xl mt-4"> <a href="http://localhost:3000/resources">
                  To Resources
                  </a> </Button>
            </div>

            <div className=" w-1/2 h-fit m-8 drop-shadow-2xl">
            <Card>
                <CardHeader>
                    <CardTitle>Total drug abusers by age</CardTitle>
                    <CardDescription>2023 vs 2024</CardDescription>
                </CardHeader>
                <CardContent>
                    <ChartContainer config={linechartConfig}>
                    <LineChart
                        accessibilityLayer
                        data={linechartData}
                        margin={{
                        left: 12,
                        right: 12,
                        }}
                    > 
                        <CartesianGrid vertical={false} />
                        <XAxis
                        dataKey="age"
                        tickLine={false}
                        axisLine={false}
                        tickMargin={8}
                        tickFormatter={(value) => value}
                        /> 
                        <YAxis />
                        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                        <Line
                        dataKey="2022"
                        type="monotone"
                        stroke="var(--color-2022)"
                        strokeWidth={2}
                        dot={false}
                        />
                        <Line
                        dataKey="2023"
                        type="monotone"
                        stroke="var(--color-2023)"
                        strokeWidth={2}
                        dot={false}
                        />
                    </LineChart>
                    </ChartContainer>
                </CardContent>
                <CardFooter>
                    <div className="flex w-full items-start gap-2 text-sm">
                    <div className="grid gap-2">
                        <div className="flex items-center gap-2 font-medium leading-none">
                         <TrendingUp className="h-4 w-4" />
                         Nearly 600% increase in drug abusers from 20-29 year olds
                        </div>
                        <div className="flex items-center gap-2 leading-none text-muted-foreground">
                        Largest increase in drug abusers amongst youths
                        </div>
                    </div>
                    </div>
                </CardFooter>
                </Card>
            </div>
        </div>
    </div>
    )
    
}
