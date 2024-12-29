"use client"

import { useEffect, useState } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface PerformanceComparisonProps {
  title: string
  beforeValue: number
  afterValue: number
  unit: string
  className?: string
}

export function PerformanceComparison({
  title,
  beforeValue,
  afterValue,
  unit,
  className
}: PerformanceComparisonProps) {
  const [currentValue, setCurrentValue] = useState(beforeValue)
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start({ width: "100%" })
      const animationDuration = 3000 // Increased from 2000 to 3000 for slower loading
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
    <Card className={cn("w-full bg-[#1F2937] text-white", className)} ref={ref}>
      <CardHeader>
        <CardTitle className="text-center text-2xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex justify-between items-stretch h-48 bg-gray-800 rounded-lg overflow-hidden border-2 border-[#4F86F7]">
          <div className="flex-1 flex flex-col justify-center items-center bg-gray-800 border-r-2 border-[#4F86F7]">
            <div className="text-gray-300 font-semibold mb-2">BEFORE</div>
            <div className="text-5xl font-bold mb-2">{beforeValue}</div>
            <div className="text-xl font-semibold text-gray-300">{unit}</div>
          </div>
          <div className="flex-1 flex flex-col justify-center items-center bg-[#4F86F7]/20">
            <div className="text-[#4F86F7] font-semibold mb-2">AFTER</div>
            <motion.div 
              className="text-5xl font-bold mb-2"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {Math.round(currentValue)}
            </motion.div>
            <div className="text-xl font-semibold text-[#4F86F7]">{unit}</div>
          </div>
        </div>
        
        <motion.div 
          className="mt-4 text-center text-green-400 text-2xl font-bold"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          +{formattedPercentage}% Increase
        </motion.div>
        
        <div className="mt-4 flex justify-between items-center text-lg">
          <div className="flex flex-col items-center">
            <span className="text-gray-300 font-semibold">Stock</span>
            <span className="text-2xl font-bold">{beforeValue}</span>
          </div>
          <motion.div 
            className="h-12 bg-[#4F86F7]"
            style={{ width: 2 }}
            animate={{ height: [0, 48] }}
            transition={{ duration: 0.8, delay: 1.2 }}
          />
          <div className="flex flex-col items-center">
            <span className="text-[#4F86F7] font-semibold">Tuned</span>
            <span className="text-2xl font-bold">{afterValue}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

