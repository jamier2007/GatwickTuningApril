"use client"

import { useEffect, useState } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface PerformanceSpeedometerProps {
  title: string
  beforeValue: number
  afterValue: number
  unit: string
  className?: string
}

export function PerformanceSpeedometer({
  title,
  beforeValue,
  afterValue,
  unit,
  className
}: PerformanceSpeedometerProps) {
  const [currentValue, setCurrentValue] = useState(beforeValue)
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start({ rotate: 180 * (afterValue / (afterValue * 1.2)) })
      const animationDuration = 2000
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
        <div className="relative w-full aspect-square max-w-[300px] mx-auto">
          {/* Speedometer background */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 rounded-full border-4 border-gray-700" />
          
          {/* Speedometer markings */}
          {[...Array(11)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-4 bg-white"
              style={{
                top: '10%',
                left: '50%',
                transformOrigin: '50% 400%',
                transform: `rotate(${i * 18 - 90}deg)`,
              }}
            />
          ))}
          
          {/* Needle */}
          <motion.div
            className="absolute w-1 h-[45%] bg-red-500 rounded-full"
            style={{
              top: '10%',
              left: 'calc(50% - 2px)',
              transformOrigin: 'bottom',
            }}
            initial={{ rotate: 0 }}
            animate={controls}
            transition={{ type: "spring", stiffness: 50, damping: 15 }}
          />
          
          {/* Center cap */}
          <div className="absolute top-[45%] left-[45%] w-[10%] h-[10%] bg-gray-300 rounded-full border-2 border-gray-400" />
          
          {/* Value display */}
          <div className="absolute bottom-[20%] left-0 right-0 text-center">
            <span className="text-4xl font-bold text-white">
              {Math.round(currentValue)}
            </span>
            <span className="text-xl text-gray-300 ml-2">{unit}</span>
          </div>
          
          {/* Percentage increase */}
          <div className="absolute bottom-[10%] left-0 right-0 text-center">
            <span className="text-lg font-medium text-green-400">
              +{formattedPercentage}%
            </span>
          </div>
        </div>
        
        {/* Before and After labels */}
        <div className="flex justify-between mt-4 text-sm">
          <span>Before: {beforeValue} {unit}</span>
          <span>After: {afterValue} {unit}</span>
        </div>
      </CardContent>
    </Card>
  )
}

