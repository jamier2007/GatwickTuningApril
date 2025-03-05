import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import TuningGauge from '../components/TuningGauge';
import { Helmet } from 'react-helmet-async';
import { Car, Search } from 'lucide-react';

// Configure axios
const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

// Add response interceptor for better error handling
api.interceptors.response.use(
  response => response,
  error => {
    console.error('API Error:', error);
    console.error('Response data:', error.response?.data);
    console.error('Response status:', error.response?.status);
    console.error('Response headers:', error.response?.headers);
    
    if (error.code === 'ERR_NETWORK') {
      console.error('Network error details:', error);
      throw new Error('Unable to connect to the server. Please try our manual lookup option.');
    }
    
    if (error.response?.status === 404) {
      throw new Error('Vehicle not found. Please check the registration number or try our manual lookup option.');
    }

    if (error.response?.status === 403) {
      throw new Error('Access denied. Please try again later or use our manual lookup option.');
    }
    
    throw new Error(error.response?.data?.detail || error.message || 'An unexpected error occurred.');
  }
);

const HomePage = () => {
  const [lookupMethod, setLookupMethod] = useState('reg'); // 'reg' or 'manual'
  const [regNumber, setRegNumber] = useState('');
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedFuel, setSelectedFuel] = useState('');
  const [selectedEngine, setSelectedEngine] = useState('');
  const [vehicleDetails, setVehicleDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedServices, setSelectedServices] = useState([]);

  // Example data - replace with your actual data
  const makes = ['BMW', 'Audi', 'Mercedes', 'Volkswagen', 'Ford', 'Vauxhall'];
  const fuels = ['Petrol', 'Diesel', 'Hybrid'];
  const engines = {
    BMW: {
      '3 Series': ['318d', '320d', '330d', '320i', '330i', 'M340i'],
      '5 Series': ['520d', '530d', '540i', 'M550i']
    }
  };

  const handleRegLookup = async () => {
    if (!regNumber) {
      setError('Please enter a registration number');
      return;
    }

    setIsLoading(true);
    setError(null);
    setVehicleDetails(null);

    try {
      const cleanReg = regNumber.trim().toUpperCase();
      
      // Test registration case
      if (cleanReg === 'TEST') {
        setVehicleDetails({
          make: 'BMW',
          model: '330d',
          year: '2020',
          fuel: 'Diesel',
          engine: '3.0L',
          ecu: 'Bosch',
          variant: 'M Sport',
          transmission: 'Automatic',
          potential: {
            basePower: 265,
            targetPower: 320,
            baseTorque: 580,
            targetTorque: 680
          }
        });
        setIsLoading(false);
        return;
      }

      console.log('Making API request for registration:', cleanReg);
      
      const response = await api.get(`/${cleanReg}`);
      console.log('API Response:', response.data);
      
      if (response.data.status === 'success') {
        const { performance_reg_data, vehicle_data_only } = response.data.data;
        
        if (!performance_reg_data && !vehicle_data_only) {
          setError('No vehicle data found for this registration');
          return;
        }

        setVehicleDetails({
          make: performance_reg_data?.brand || vehicle_data_only?.make || 'Unknown',
          model: performance_reg_data?.model || vehicle_data_only?.model || 'Unknown',
          year: performance_reg_data?.year || vehicle_data_only?.year || 'Unknown',
          fuel: performance_reg_data?.specs?.fuel || vehicle_data_only?.fuel || 'Unknown',
          engine: performance_reg_data?.specs?.engine || vehicle_data_only?.cc || 'Unknown',
          ecu: performance_reg_data?.specs?.ecu || 'Not Available',
          variant: performance_reg_data?.variant || 'Standard',
          transmission: vehicle_data_only?.transmission || 'Unknown',
          potential: {
            basePower: parseInt(performance_reg_data?.performance_figures?.original?.power) || 0,
            targetPower: parseInt(performance_reg_data?.performance_figures?.modified?.power) || 0,
            baseTorque: parseInt(performance_reg_data?.performance_figures?.original?.torque) || 0,
            targetTorque: parseInt(performance_reg_data?.performance_figures?.modified?.torque) || 0
          }
        });
      } else {
        throw new Error('Failed to fetch vehicle data');
      }
    } catch (err) {
      console.error('Error looking up registration:', err);
      if (err.response?.status === 404) {
        setError(`Vehicle not found: ${regNumber}. Please check the registration number or try our manual lookup option.`);
      } else if (err.code === 'ERR_NETWORK') {
        setError('Network error. Please check your connection and try again.');
      } else {
        setError(err.message || 'Unable to lookup vehicle details. Please try again later.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Gatwick Tuning | Professional ECU Remapping & Performance Tuning Surrey</title>
        <meta name="description" content="Expert ECU remapping and vehicle tuning services in Surrey. Boost your vehicle's performance with our professional tuning solutions. Free vehicle assessment and consultation." />
        <link rel="canonical" href="https://www.gatwicktuning.com" />
        <meta name="keywords" content="ECU remapping Surrey, car tuning, vehicle performance, engine tuning, Stage 1 tuning, Stage 2 tuning, DPF solutions, diesel tuning, performance upgrades" />
        <meta property="og:title" content="Gatwick Tuning | Professional ECU Remapping & Performance Tuning" />
        <meta property="og:description" content="Expert ECU remapping and vehicle tuning services in Surrey. Boost your vehicle's performance with our professional tuning solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.gatwicktuning.com" />
        <meta property="og:image" content="https://www.gatwicktuning.com/og-image.jpg" />
        <meta property="og:image:alt" content="Gatwick Tuning - Professional ECU Remapping Services" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gatwick Tuning | Professional ECU Remapping & Performance Tuning" />
        <meta name="twitter:description" content="Expert ECU remapping and vehicle tuning services in Surrey. Boost your vehicle's performance with our professional tuning solutions." />
        <meta name="twitter:image" content="https://www.gatwicktuning.com/og-image.jpg" />
        <meta name="twitter:image:alt" content="Gatwick Tuning - Professional ECU Remapping Services" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Gatwick Tuning - Professional ECU Remapping & Performance Tuning",
              "description": "Expert ECU remapping and vehicle tuning services in Surrey. Boost your vehicle's performance with our professional tuning solutions.",
              "url": "https://www.gatwicktuning.com",
              "mainEntity": {
                "@type": "Service",
                "name": "ECU Remapping",
                "description": "Professional ECU remapping services to enhance your vehicle's performance, power, and fuel efficiency.",
                "provider": {
                  "@type": "AutoRepair",
                  "name": "Gatwick Tuning",
                  "areaServed": "Surrey"
                }
              }
            }
          `}
        </script>
      </Helmet>

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-primary" aria-labelledby="hero-heading">
          <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 id="hero-heading" className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block">Expert ECU Remapping</span>
                <span className="block text-accent">in Surrey</span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Unlock Your Vehicle's True Potential with Professional ECU Tuning Services
              </p>
            </div>
          </div>
        </section>

        {/* Vehicle Selection Section */}
        <section className="py-12 bg-[#1C2331]" aria-labelledby="tuning-potential-heading">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="w-full bg-white border border-gray-200 rounded-lg shadow-lg">
              <div className="pt-6 flex flex-col items-center gap-6 p-8">
                <div className="rounded-full bg-[#3B82F6] p-4">
                  <Car className="w-8 h-8 text-white" />
                </div>
                
                <div className="text-center space-y-2">
                  <h2 id="tuning-potential-heading" className="text-2xl md:text-3xl font-bold text-[#1C2331]">
                    Check Your Vehicle's Power
                  </h2>
                  <p className="text-gray-500 text-sm md:text-base">
                    Discover your vehicle's performance potential
                  </p>
                </div>

                <div className="w-full max-w-md space-y-4">
                  {lookupMethod === 'reg' ? (
                    // Registration lookup form
                    <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); handleRegLookup(); }}>
                      <div className="relative">
                        <div className="absolute left-0 top-0 bottom-0 flex items-center justify-center w-14 bg-[#3B82F6] rounded-l-lg border-r border-[#2563EB]">
                          <span className="text-white font-semibold text-sm">GB</span>
                        </div>
                        <input
                          type="text"
                          id="registration"
                          value={regNumber}
                          onChange={(e) => setRegNumber(e.target.value.toUpperCase())}
                          className="pl-16 h-14 w-full text-lg font-bold tracking-wider text-center uppercase bg-yellow-50 border-2 border-yellow-100 rounded-lg focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent"
                          placeholder="Enter registration"
                          disabled={isLoading}
                          aria-label="Enter your vehicle registration number"
                          aria-describedby="reg-error"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-[#3B82F6] to-[#2563EB] hover:from-[#2563EB] hover:to-[#1D4ED8] text-white rounded-lg flex items-center justify-center"
                      >
                        {isLoading ? (
                          <span className="flex items-center" role="status">
                            <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12 11.955 11.955 0 01-8 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                            </svg>
                            Looking up...
                          </span>
                        ) : (
                          <>
                            <Search className="mr-2 h-5 w-5" />
                            Check Performance
                          </>
                        )}
                      </button>

                      {error && (
                        <p id="reg-error" className="mt-2 text-sm text-red-600 text-center" role="alert">
                          {error}
                        </p>
                      )}

                      <button
                        type="button"
                        onClick={() => setLookupMethod('manual')}
                        className="w-full text-[#3B82F6] hover:text-[#2563EB] hover:bg-gray-50 font-medium py-2 rounded-lg"
                      >
                        Don't have your registration? Click here
                      </button>
                    </form>
                  ) : (
                    // Manual selection form
                    <form className="space-y-4">
                      <div>
                        <label htmlFor="make" className="block text-sm font-medium text-gray-700">
                          Make
                        </label>
                        <select
                          id="make"
                          value={selectedMake}
                          onChange={(e) => setSelectedMake(e.target.value)}
                          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-[#3B82F6] focus:border-[#3B82F6] rounded-md"
                          aria-label="Select vehicle make"
                        >
                          <option value="">Select Make</option>
                          {makes.map((make) => (
                            <option key={make} value={make}>{make}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="model" className="block text-sm font-medium text-gray-700">
                          Model
                        </label>
                        <select
                          id="model"
                          value={selectedModel}
                          onChange={(e) => setSelectedModel(e.target.value)}
                          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-[#3B82F6] focus:border-[#3B82F6] rounded-md"
                          disabled={!selectedMake}
                        >
                          <option value="">Select Model</option>
                          {selectedMake && engines[selectedMake] && 
                            Object.keys(engines[selectedMake]).map((model) => (
                              <option key={model} value={model}>{model}</option>
                            ))}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="fuel" className="block text-sm font-medium text-gray-700">
                          Fuel Type
                        </label>
                        <select
                          id="fuel"
                          value={selectedFuel}
                          onChange={(e) => setSelectedFuel(e.target.value)}
                          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-[#3B82F6] focus:border-[#3B82F6] rounded-md"
                        >
                          <option value="">Select Fuel Type</option>
                          {fuels.map((fuel) => (
                            <option key={fuel} value={fuel}>{fuel}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="engine" className="block text-sm font-medium text-gray-700">
                          Engine
                        </label>
                        <select
                          id="engine"
                          value={selectedEngine}
                          onChange={(e) => setSelectedEngine(e.target.value)}
                          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-[#3B82F6] focus:border-[#3B82F6] rounded-md"
                          disabled={!selectedMake || !selectedModel}
                        >
                          <option value="">Select Engine</option>
                          {selectedMake && selectedModel && engines[selectedMake][selectedModel]?.map((engine) => (
                            <option key={engine} value={engine}>{engine}</option>
                          ))}
                        </select>
                      </div>
                    </form>
                  )}
                </div>

                {vehicleDetails && (
                  <div className="w-full max-w-md mt-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Vehicle Details</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Make</p>
                        <p className="font-medium">{vehicleDetails.make}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Model</p>
                        <p className="font-medium">{vehicleDetails.model}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Year</p>
                        <p className="font-medium">{vehicleDetails.year}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Engine</p>
                        <p className="font-medium">{vehicleDetails.engine}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Fuel Type</p>
                        <p className="font-medium">{vehicleDetails.fuel}</p>
                      </div>
                      {vehicleDetails.variant && (
                        <div>
                          <p className="text-sm text-gray-500">Variant</p>
                          <p className="font-medium">{vehicleDetails.variant}</p>
                        </div>
                      )}
                    </div>

                    <div className="mt-6">
                      <h4 className="text-lg font-medium text-gray-900 mb-4 text-center">Estimated Tuning Potential</h4>
                      <div className="grid grid-cols-2 gap-2">
                        <TuningGauge
                          label="Horsepower"
                          beforeValue={vehicleDetails.potential.basePower}
                          afterValue={vehicleDetails.potential.targetPower}
                          unit="bhp"
                        />
                        <TuningGauge
                          label="Torque"
                          beforeValue={vehicleDetails.potential.baseTorque}
                          afterValue={vehicleDetails.potential.targetTorque}
                          unit="lb/ft"
                        />
                      </div>
                    </div>

                    <div className="mt-8">
                      <h4 className="text-lg font-medium text-gray-900 mb-4">Select Required Services</h4>
                      <div className="space-y-4">
                        {/* Tuning Options */}
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id="stage1"
                            checked={selectedServices.includes('stage1')}
                            onChange={(e) => {
                              const newServices = selectedServices.filter(s => s !== 'stage1' && s !== 'stage2');
                              if (e.target.checked) {
                                newServices.push('stage1');
                              }
                              setSelectedServices(newServices);
                            }}
                            className="h-4 w-4 text-accent border-gray-300 rounded focus:ring-accent"
                          />
                          <label htmlFor="stage1" className="ml-3">
                            <span className="block text-sm font-medium text-gray-900">Stage 1 Tuning</span>
                            <span className="block text-sm text-gray-500">15-30% Power Increase - £280</span>
                          </label>
                        </div>

                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id="stage2"
                            checked={selectedServices.includes('stage2')}
                            onChange={(e) => {
                              const newServices = selectedServices.filter(s => s !== 'stage1' && s !== 'stage2');
                              if (e.target.checked) {
                                newServices.push('stage2');
                              }
                              setSelectedServices(newServices);
                            }}
                            className="h-4 w-4 text-accent border-gray-300 rounded focus:ring-accent"
                          />
                          <label htmlFor="stage2" className="ml-3">
                            <span className="block text-sm font-medium text-gray-900">Stage 2 Tuning</span>
                            <span className="block text-sm text-gray-500">30-45% Power Increase - £350</span>
                          </label>
                        </div>

                        {/* Delete Options */}
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id="egrDpf"
                            checked={selectedServices.includes('egrDpf')}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setSelectedServices(prev => [...prev, 'egrDpf']);
                              } else {
                                setSelectedServices(prev => prev.filter(s => s !== 'egrDpf'));
                              }
                            }}
                            className="h-4 w-4 text-accent border-gray-300 rounded focus:ring-accent"
                          />
                          <label htmlFor="egrDpf" className="ml-3">
                            <span className="block text-sm font-medium text-gray-900">EGR/DPF Solutions</span>
                            <span className="block text-sm text-gray-500">Off-road performance solutions - £250</span>
                          </label>
                        </div>

                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id="adblue"
                            checked={selectedServices.includes('adblue')}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setSelectedServices(prev => [...prev, 'adblue']);
                              } else {
                                setSelectedServices(prev => prev.filter(s => s !== 'adblue'));
                              }
                            }}
                            className="h-4 w-4 text-accent border-gray-300 rounded focus:ring-accent"
                          />
                          <label htmlFor="adblue" className="ml-3">
                            <span className="block text-sm font-medium text-gray-900">AdBlue Delete</span>
                            <span className="block text-sm text-gray-500">Professional AdBlue system solutions - £350</span>
                          </label>
                        </div>
                      </div>

                      {/* Total Price */}
                      <div className="mt-6 border-t border-gray-200 pt-4">
                        <div className="flex justify-between items-center">
                          <span className="text-lg font-medium text-gray-900">Total Price:</span>
                          <span className="text-xl font-bold text-accent">
                            £{(() => {
                              const prices = {
                                stage1: 280,
                                stage2: 350,
                                egrDpf: 250,
                                adblue: 350
                              };
                              
                              if (selectedServices.length === 0) return 0;
                              
                              // Find the most expensive service
                              const basePrice = Math.max(...selectedServices.map(service => prices[service]));
                              
                              // Add £50 for each additional service
                              const additionalCost = (selectedServices.length - 1) * 50;
                              
                              return basePrice + additionalCost;
                            })()}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6">
                      <Link
                        to="/contact"
                        state={{
                          vehicleDetails,
                          selectedServices,
                          totalPrice: (() => {
                            const prices = {
                              stage1: 280,
                              stage2: 350,
                              egrDpf: 250,
                              adblue: 350
                            };
                            
                            if (selectedServices.length === 0) return 0;
                            
                            const basePrice = Math.max(...selectedServices.map(service => prices[service]));
                            const additionalCost = (selectedServices.length - 1) * 50;
                            
                            return basePrice + additionalCost;
                          })()
                        }}
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#3B82F6] hover:bg-[#2563EB] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3B82F6]"
                      >
                        Book Your Tuning Session
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 bg-gray-50" aria-labelledby="features-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-centre">
              <h2 id="features-heading" className="text-base text-secondary font-semibold tracking-wide uppercase">Why Choose Us</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Professional Tuning Services
              </p>
            </div>

            <div className="mt-10">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
                {/* Performance Feature */}
                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-secondary text-white">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Enhanced Performance</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    Boost your vehicle's power and torque with our professional ECU remapping services.
                  </dd>
                </div>

                {/* Fuel Efficiency Feature */}
                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-secondary text-white">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 9a2 2 0 10-4 0v5a2 2 0 01-2 2h6m-6-4h4m8 0a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Improved Fuel Economy</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    Optimise your vehicle's fuel efficiency while maintaining performance.
                  </dd>
                </div>

                {/* Expert Service Feature */}
                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-secondary text-white">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 014 12 11.955 11.955 0 01-8 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                      </svg>
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Expert Technicians</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    Our certified professionals ensure safe and reliable tuning solutions.
                  </dd>
                </div>

                {/* Custom Solutions Feature */}
                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-secondary text-white">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                      </svg>
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Customised Solutions</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    Tailored tuning solutions for your specific vehicle and requirements.
                  </dd>
                </div>

                {/* Modern Equipment Feature */}
                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-secondary text-white">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">State-of-the-Art Equipment</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    Using the latest diagnostic and tuning technology for optimal results.
                  </dd>
                </div>

                {/* Support Feature */}
                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-secondary text-white">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Ongoing Support</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    Comprehensive after-service support and satisfaction guarantee.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;
