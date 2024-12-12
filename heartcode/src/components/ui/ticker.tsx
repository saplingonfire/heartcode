"use client"

import React from 'react'

interface TickerProps {
  value: number
}

export function Ticker({ value }: TickerProps) {
  const formattedValue = value.toLocaleString()

  return (
    <div className="font-mono text-4xl tabular-nums tracking-tight">
      {formattedValue}
    </div>
  )
}

