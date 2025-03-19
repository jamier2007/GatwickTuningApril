import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>ECU Remapping Surrey | Stage 1 & 2 Tuning | Gatwick Tuning</title>
        <meta name="description" content="Professional ECU remapping in Surrey. Stage 1 & 2 tuning, DPF/EGR solutions. Up to 45% power increase. Expert technicians and latest equipment." />
        <link rel="canonical" href="https://www.gatwicktuning.co.uk/services" />
        <meta name="keywords" content="ECU remapping Surrey, Stage 1 tuning, Stage 2 tuning, DPF solutions, EGR delete, performance tuning, engine remapping" />
        <meta property="og:title" content="ECU Remapping Surrey | Stage 1 & 2 Tuning | Gatwick Tuning" />
        <meta property="og:description" content="Professional ECU remapping in Surrey. Stage 1 & 2 tuning, DPF/EGR solutions. Up to 45% power increase. Expert technicians and latest equipment." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.gatwicktuning.co.uk/services" />
      </Helmet>

      <main className="pt-20 min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-primary" aria-labelledby="services-heading">
          <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 id="services-heading" className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block">Professional ECU</span>
                <span className="block text-accent">Remapping Services</span>
              </h1>
              <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
                Expert vehicle tuning solutions in Surrey. Boost power, improve fuel efficiency, and enhance overall performance.
              </p>
            </div>
          </div>
        </section>

        {/* Services Overview Section */}
        <section className="py-16 bg-white" aria-labelledby="services-overview-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 id="services-overview-heading" className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Our Tuning Services
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Comprehensive ECU remapping solutions for all vehicle types
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Stage 1 Tuning */}
              <div className="relative bg-primary rounded-lg shadow-xl p-8">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="inline-block px-4 py-1 bg-accent rounded-full text-sm font-semibold text-white shadow-lg">
                    Most Popular
                  </div>
                </div>
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4" aria-hidden="true">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Stage 1 Tuning</h3>
                <p className="text-gray-300 mb-4">
                  Perfect for daily drivers looking for improved performance. Experience gains of 15-30% in both power and torque.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    15-30% Power Increase
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Improved Throttle Response
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Better Fuel Economy
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Full Vehicle Assessment
                  </li>
                </ul>
                <div className="mt-4">
                  <span className="text-2xl font-bold text-white">£280</span>
                  <Link 
                    to="/contact" 
                    className="ml-4 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-accent hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
                  >
                    Book Now
                  </Link>
                </div>
              </div>

              {/* Stage 2 Tuning */}
              <div className="bg-primary rounded-lg shadow-xl p-8">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4" aria-hidden="true">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Stage 2 Tuning</h3>
                <p className="text-gray-300 mb-4">
                  Advanced tuning for maximum performance. Optimized for vehicles with performance modifications.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    30-45% Power Increase
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Custom Mapping
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Performance Hardware Support
                  </li>
                </ul>
                <div className="mt-4">
                  <span className="text-2xl font-bold text-white">£350</span>
                  <Link 
                    to="/contact" 
                    className="ml-4 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-accent hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
                  >
                    Book Now
                  </Link>
                </div>
              </div>

              {/* Specialised Tuning */}
              <div className="bg-primary rounded-lg shadow-xl p-8">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4" aria-hidden="true">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Specialised Tuning</h3>
                <p className="text-gray-300 mb-4">
                  Custom performance solutions for specific requirements and vehicle types.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Custom Performance Maps
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Expert Consultation
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Tailored Solutions
                  </li>
                </ul>
                <div className="mt-4">
                  <span className="text-2xl font-bold text-white">Contact Us</span>
                  <Link 
                    to="/contact" 
                    className="ml-4 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-accent hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>

              {/* EGR/DPF Solutions */}
              <div className="bg-primary rounded-lg shadow-xl p-8">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4" aria-hidden="true">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">EGR/DPF Solutions</h3>
                <p className="text-gray-300 mb-4">
                  Professional solutions for diesel vehicles. Improve performance and reliability.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Improved Performance
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Better Fuel Economy
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Professional Service
                  </li>
                </ul>
                <div className="mt-4">
                  <span className="text-2xl font-bold text-white">£250</span>
                  <Link 
                    to="/contact" 
                    className="ml-4 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-accent hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
                  >
                    Book Now
                  </Link>
                </div>
              </div>

              {/* AdBlue Delete */}
              <div className="bg-primary rounded-lg shadow-xl p-8">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4" aria-hidden="true">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">AdBlue Delete</h3>
                <p className="text-gray-300 mb-4">
                  Professional AdBlue system solutions for modern diesel vehicles.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Complete System Removal
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Professional Installation
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Warranty Included
                  </li>
                </ul>
                <div className="mt-4">
                  <span className="text-2xl font-bold text-white">£350</span>
                  <Link 
                    to="/contact" 
                    className="ml-4 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-accent hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-gray-50" aria-labelledby="why-choose-us-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 id="why-choose-us-heading" className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Why Choose Gatwick Tuning?
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Experience the difference with our professional ECU remapping services
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="relative">
                <h3 className="text-xl font-semibold text-gray-900">Expert Technicians</h3>
                <p className="mt-2 text-gray-500">
                  Our certified professionals have years of experience in ECU remapping and vehicle performance tuning.
                </p>
              </div>
              <div className="relative">
                <h3 className="text-xl font-semibold text-gray-900">Latest Equipment</h3>
                <p className="mt-2 text-gray-500">
                  State-of-the-art diagnostic and tuning technology for optimal results and maximum performance gains.
                </p>
              </div>
              <div className="relative">
                <h3 className="text-xl font-semibold text-gray-900">Guaranteed Results</h3>
                <p className="mt-2 text-gray-500">
                  Comprehensive after-service support and satisfaction guarantee for all our tuning services.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary" aria-labelledby="cta-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 id="cta-heading" className="text-3xl font-extrabold text-white sm:text-4xl">
                Ready to Transform Your Vehicle?
              </h2>
              <p className="mt-4 text-lg text-gray-300">
                Contact us today for a free consultation and discover your vehicle's true potential
              </p>
              <div className="mt-8">
                <Link to="/contact" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ServicesPage;
