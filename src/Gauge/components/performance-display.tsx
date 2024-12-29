"use client"

import { useEffect, useState } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface PerformanceDisplayProps {
  title: string
  beforeValue: number
  afterValue: number
  unit: string
  className?: string
}

export function PerformanceDisplay({
  title,
  beforeValue,
  afterValue,
  unit,
  className
}: PerformanceDisplayProps) {
  const [currentValue, setCurrentValue] = useState(beforeValue)
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start({ width: "100%" })
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
    <Card className={cn("w-full bg-gray-900 text-white", className)} ref={ref}>
      <CardHeader>
        <CardTitle className="text-center text-2xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="relative h-48 bg-gray-800 rounded-lg overflow-hidden border-2 border-blue-500 flex flex-col justify-center items-center">
          <div className="absolute top-2 left-2 bg-blue-500 text-xs font-semibold px-2 py-1 rounded">BEFORE</div>
          <div className="absolute top-2 right-2 bg-red-500 text-xs font-semibold px-2 py-1 rounded">AFTER</div>
          
          <motion.div 
            className="text-7xl font-bold mb-2"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {Math.round(currentValue)}
          </motion.div>
          
          <motion.div 
            className="text-2xl font-semibold text-gray-400"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {unit}
          </motion.div>
          
          <motion.div 
            className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-green-400 text-xl font-bold"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            +{formattedPercentage}%
          </motion.div>
        </div>
        
        <div className="mt-4 flex justify-between items-center text-lg">
          <div className="flex flex-col items-center">
            <span className="text-blue-400 font-semibold">Before</span>
            <span className="text-2xl font-bold">{beforeValue}</span>
          </div>
          <div className="h-12 w-px bg-gray-700"></div>
          <div className="flex flex-col items-center">
            <span className="text-red-400 font-semibold">After</span>
            <span className="text-2xl font-bold">{afterValue}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

