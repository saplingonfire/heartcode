"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Ticker } from "@/components/ui/ticker"

const ANNUAL_DEATHS = 3000000 // 3 million deaths per year
const DEATHS_PER_SECOND = ANNUAL_DEATHS / (365 * 24 * 60 * 60)

function getExistingDeaths() {
  const now = new Date()
  const startOfYear = new Date(now.getFullYear(), 0, 1)
  const secondsElapsed = (now.getTime() - startOfYear.getTime()) / 1000
  return Math.floor(DEATHS_PER_SECOND * secondsElapsed)
}

export default function DrugAbuseTicker() {
  const [deathCount, setDeathCount] = useState(getExistingDeaths())

  useEffect(() => {
    const startTime = Date.now()
    const initialCount = deathCount

    const updateCount = () => {
      const currentTime = Date.now()
      const elapsedSeconds = (currentTime - startTime) / 1000
      const newCount = Math.floor(initialCount + DEATHS_PER_SECOND * elapsedSeconds)
      setDeathCount(newCount)
    }

    const intervalId = setInterval(updateCount, 100) // Update every 100ms for smoother animation

    return () => clearInterval(intervalId)
  }, [deathCount])

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-center text-2xl font-bold">Drug Abuse Deaths</CardTitle>
        <CardDescription className="text-center">
          Estimated deaths from drug abuse this year
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-center items-center text-red-600">
          <Ticker value={deathCount} />
        </div>
        <p className="mt-4 text-center text-sm text-gray-600">
          This counter is based on the estimate that approximately 3 million people die annually from drug abuse.
        </p>
      </CardContent>
    </Card>
  )
}
