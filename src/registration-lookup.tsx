"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, Car } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import axios from "axios"

export default function RegistrationLookup() {
  const [registration, setRegistration] = useState("")
  const [vehicleData, setVehicleData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleLookup = async () => {
    if (!registration) {
      setError("Please enter a registration number")
      return
    }

    setLoading(true)
    setError("")
    setVehicleData(null)

    try {
      const response = await axios.get(`/api/vehicle-lookup?reg=${registration.trim()}`)
      setVehicleData(response.data)
    } catch (err) {
      setError("Failed to retrieve vehicle data. Please try again.")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

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
                onClick={handleLookup}
                disabled={loading}
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  <>
                    <Search className="mr-2 h-5 w-5" />
                    Check Performance
                  </>
                )}
              </Button>
              
              <Button
                variant="ghost"
                className="text-[#3B82F6] hover:text-[#2563EB] hover:bg-gray-50"
              >
                {"Don't have your registration? Click here"}
              </Button>
            </div>

            {error && (
              <div className="p-3 bg-red-50 border border-red-200 text-red-600 rounded-md text-sm">
                {error}
              </div>
            )}

            {vehicleData && !vehicleData.error && (
              <div className="mt-4 p-4 bg-blue-50 border border-blue-100 rounded-lg">
                <h3 className="text-lg font-bold mb-2">{vehicleData.brand} {vehicleData.model} {vehicleData.variant}</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex flex-col">
                    <span className="font-medium">Year:</span>
                    <span>{vehicleData.year}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium">Fuel:</span>
                    <span>{vehicleData.specs?.fuel}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium">Engine:</span>
                    <span>{vehicleData.specs?.engine}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium">ECU:</span>
                    <span>{vehicleData.specs?.ecu}</span>
                  </div>
                </div>

                {vehicleData.performance_figures && (
                  <div className="mt-4">
                    <h4 className="font-bold mb-2 text-green-600">{vehicleData.performance_figures.stage} Performance</h4>
                    <div className="grid grid-cols-3 gap-2 text-sm">
                      <div></div>
                      <div className="font-medium text-center">Stock</div>
                      <div className="font-medium text-center">Tuned</div>
                      
                      <div className="font-medium">Power</div>
                      <div className="text-center">{vehicleData.performance_figures.original.power}</div>
                      <div className="text-center text-green-600 font-bold">{vehicleData.performance_figures.modified.power}</div>
                      
                      <div className="font-medium">Torque</div>
                      <div className="text-center">{vehicleData.performance_figures.original.torque}</div>
                      <div className="text-center text-green-600 font-bold">{vehicleData.performance_figures.modified.torque}</div>
                      
                      <div className="font-medium">Gains</div>
                      <div></div>
                      <div className="text-center text-green-600 font-bold">
                        {vehicleData.performance_figures.gains.power} / {vehicleData.performance_figures.gains.torque}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

