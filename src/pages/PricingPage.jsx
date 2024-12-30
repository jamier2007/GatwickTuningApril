import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const PricingPage = () => {
  return (
    <>
      <Helmet>
        <title>ECU Remapping Prices | Stage 1 & 2 Tuning Costs | Gatwick Tuning</title>
        <meta name="description" content="Competitive ECU remapping prices in Surrey. Stage 1 tuning from £280, Stage 2 from £350. Professional vehicle tuning services with transparent pricing." />
        <link rel="canonical" href="https://www.gatwicktuning.com/pricing" />
        <meta name="keywords" content="ECU remapping cost, tuning prices Surrey, Stage 1 tuning price, Stage 2 tuning cost, vehicle remapping prices" />
      </Helmet>

      <div className="pt-20 min-h-screen bg-gray-50">
        <main>
          {/* Hero Section */}
          <section className="relative bg-primary" aria-labelledby="pricing-heading">
            <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 id="pricing-heading" className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                  <span className="block">Transparent</span>
                  <span className="block text-accent">Pricing</span>
                </h1>
                <p className="mt-4 text-xl text-gray-300 text-center">Transparent Pricing for Professional Tuning Services</p>
              </div>
            </div>
          </section>

          {/* Pricing Cards */}
          <section className="bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Stage 1 Tuning - Most Popular */}
                <div className="relative bg-primary rounded-lg shadow-xl p-8">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="inline-block px-4 py-1 bg-accent rounded-full text-sm font-semibold text-white shadow-lg">
                      Most Popular
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Stage 1 Tuning</h3>
                  <p className="mt-4 text-gray-300">Perfect for daily drivers looking for improved performance</p>
                  <p className="mt-8">
                    <span className="text-4xl font-bold text-white">£280</span>
                  </p>
                  <ul className="mt-6 space-y-4">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="ml-3 text-gray-300">15-30% Power Increase</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="ml-3 text-gray-300">Improved Throttle Response</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="ml-3 text-gray-300">Better Fuel Economy</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="ml-3 text-gray-300">Full Vehicle Assessment</span>
                    </li>
                  </ul>
                  <div className="mt-8">
                    <Link to="/contact" className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-accent hover:bg-accent/90">
                      Book Now
                    </Link>
                  </div>
                </div>

                {/* Stage 2 Tuning */}
                <div className="bg-primary rounded-lg shadow-xl p-8">
                  <h3 className="text-2xl font-bold text-white">Stage 2 Tuning</h3>
                  <p className="mt-4 text-gray-300">Advanced tuning for maximum performance</p>
                  <p className="mt-8">
                    <span className="text-4xl font-bold text-white">£350</span>
                  </p>
                  <ul className="mt-6 space-y-4">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="ml-3 text-gray-300">30-45% Power Increase</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="ml-3 text-gray-300">Custom Mapping</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="ml-3 text-gray-300">Performance Hardware Support</span>
                    </li>
                  </ul>
                  <div className="mt-8">
                    <Link to="/contact" className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-accent hover:bg-accent/90">
                      Book Now
                    </Link>
                  </div>
                </div>

                {/* Specialised Tuning */}
                <div className="bg-primary rounded-lg shadow-xl p-8">
                  <h3 className="text-2xl font-bold text-white">Specialised Tuning</h3>
                  <p className="mt-4 text-gray-300">Custom performance solutions for specific requirements</p>
                  <p className="mt-8">
                    <span className="text-4xl font-bold text-white">Contact Us</span>
                  </p>
                  <ul className="mt-6 space-y-4">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="ml-3 text-gray-300">Custom Performance Maps</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="ml-3 text-gray-300">Expert Consultation</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="ml-3 text-gray-300">Tailored Solutions</span>
                    </li>
                  </ul>
                  <div className="mt-8">
                    <Link to="/contact" className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-accent hover:bg-accent/90">
                      Contact Us
                    </Link>
                  </div>
                </div>

                {/* EGR/DPF Solutions */}
                <div className="bg-primary rounded-lg shadow-xl p-8">
                  <h3 className="text-2xl font-bold text-white">EGR/DPF Solutions</h3>
                  <p className="mt-4 text-gray-300">Off-road performance solutions</p>
                  <p className="mt-8">
                    <span className="text-4xl font-bold text-white">£250</span>
                  </p>
                  <ul className="mt-6 space-y-4">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="ml-3 text-gray-300">Improved Performance</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="ml-3 text-gray-300">Better Fuel Economy</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="ml-3 text-gray-300">Professional Service</span>
                    </li>
                  </ul>
                  <div className="mt-8">
                    <Link to="/contact" className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-accent hover:bg-accent/90">
                      Book Now
                    </Link>
                  </div>
                </div>

                {/* AdBlue Delete Solutions */}
                <div className="bg-primary rounded-lg shadow-xl p-8">
                  <h3 className="text-2xl font-bold text-white">AdBlue Delete</h3>
                  <p className="mt-4 text-gray-300">Professional AdBlue system solutions</p>
                  <p className="mt-8">
                    <span className="text-4xl font-bold text-white">£350</span>
                  </p>
                  <ul className="mt-6 space-y-4">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="ml-3 text-gray-300">Complete System Removal</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="ml-3 text-gray-300">Professional Installation</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="ml-3 text-gray-300">Warranty Included</span>
                    </li>
                  </ul>
                  <div className="mt-8">
                    <Link to="/contact" className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-accent hover:bg-accent/90">
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default PricingPage;
