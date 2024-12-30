"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, Car } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

export default function RegistrationLookup() {
  const [registration, setRegistration] = useState("")

  return (
    <div className="min-h-[500px] w-full bg-[#1C2331] flex items-center justify-center p-4">
      <Card className="w-full max-w-lg bg-white border-gray-200">
        <CardContent className="pt-6 flex flex-col items-center gap-6">
          <div className="rounded-full bg-[#3B82F6] p-4">
            <Car className="w-8 h-8 text-white" />
          </div>
          
          <div className="text-center space-y-2">
            <h1 className="text-2xl md:text-3xl font-bold text-[#1C2331]">
              Check Your Vehicle's Power
            </h1>
            <p className="text-gray-500 text-sm md:text-base">
              Discover your vehicle's performance potential
            </p>
          </div>

          <div className="w-full max-w-md space-y-4">
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 flex items-center justify-center w-14 bg-[#3B82F6] rounded-l-lg border-r border-[#2563EB]">
                <span className="text-white font-semibold text-sm">GB</span>
              </div>
              <Input 
                type="text"
                value={registration}
                onChange={(e) => setRegistration(e.target.value.toUpperCase())}
                className="pl-16 h-14 text-lg font-bold tracking-wider text-center uppercase bg-yellow-50 border-2 border-yellow-100 rounded-lg focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent"
                placeholder="Enter registration"
              />
            </div>

            <div className="flex flex-col gap-3">
              <Button 
                size="lg"
                className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-[#3B82F6] to-[#2563EB] hover:from-[#2563EB] hover:to-[#1D4ED8]"
              >
                <Search className="mr-2 h-5 w-5" />
                Check Performance
              </Button>
              
              <Button
                variant="ghost"
                className="text-[#3B82F6] hover:text-[#2563EB] hover:bg-gray-50"
              >
                {"Don't have your registration? Click here"}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

