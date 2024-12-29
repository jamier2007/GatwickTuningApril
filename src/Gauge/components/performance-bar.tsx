"use client"

import { useEffect, useState } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface PerformanceBarProps {
  title: string
  beforeValue: number
  afterValue: number
  unit: string
  className?: string
}

export function PerformanceBar({
  title,
  beforeValue,
  afterValue,
  unit,
  className
}: PerformanceBarProps) {
  const [currentValue, setCurrentValue] = useState(beforeValue)
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start({ width: "100%" })
      const animationDuration = 1500
      const startTime = Date.now()
      const animate = () => {
        const now = Date.now()
        const progress = Math.min((now - startTime) / animationDuration, 1)
        setCurrentValue(beforeValue + progress * (afterValue - beforeValue))
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      requestAnimationFrame(animate)
    }
  }, [inView, beforeValue, afterValue, controls])

  const percentage = ((afterValue - beforeValue) / beforeValue) * 100
  const formattedPercentage = percentage.toFixed(1)

  return (
    <Card className={cn("w-full", className)} ref={ref}>
      <CardHeader>
        <CardTitle className="text-center">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="relative h-24 bg-gray-200 rounded-lg overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-blue-700"
            style={{ width: `${(beforeValue / afterValue) * 100}%` }}
          />
          <motion.div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-red-500 to-red-700"
            initial={{ width: 0 }}
            animate={controls}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
          <div className="absolute inset-0 flex items-center justify-between px-4">
            <span className="text-2xl font-bold text-white drop-shadow-md">
              {Math.round(beforeValue)}
            </span>
            <span className="text-3xl font-bold text-white drop-shadow-md">
              {Math.round(currentValue)}
            </span>
          </div>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-sm font-medium">Before</span>
          <span className="text-lg font-bold text-green-600">+{formattedPercentage}%</span>
          <span className="text-sm font-medium">After</span>
        </div>
        <div className="mt-2 text-center text-sm text-gray-600">
          {unit}
        </div>
      </CardContent>
    </Card>
  )
}

