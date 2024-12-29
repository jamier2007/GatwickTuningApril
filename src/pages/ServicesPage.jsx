import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>ECU Remapping Services | Stage 1 & 2 Tuning in Surrey | Gatwick Tuning</title>
        <meta name="description" content="Professional ECU remapping services in Surrey. Stage 1 & 2 tuning, DPF/EGR solutions, and custom performance maps. Up to 45% power increase. Expert technicians and latest equipment." />
        <link rel="canonical" href="https://www.gatwicktuning.com/services" />
        <meta name="keywords" content="ECU remapping Surrey, Stage 1 tuning, Stage 2 tuning, DPF solutions, EGR delete, performance tuning, engine remapping" />
        <meta property="og:title" content="ECU Remapping Services | Gatwick Tuning" />
        <meta property="og:description" content="Professional ECU remapping services in Surrey. Stage 1 & 2 tuning, DPF/EGR solutions, and custom performance maps. Expert vehicle tuning services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.gatwicktuning.com/services" />
      </Helmet>

      <main className="pt-20 min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-primary" aria-labelledby="services-heading">
          <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 id="services-heading" className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block">Our Professional</span>
                <span className="block text-accent">Tuning Services</span>
              </h1>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 id="services-grid-heading" className="sr-only">Our Tuning Services</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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
                  Custom performance solutions for specific requirements.
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
                  Professional off-road performance solutions for track and race vehicles.
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
                  Professional AdBlue system solutions for off-road and track vehicles.
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
                  <span className="text-2xl font-bold text-white">£250</span>
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

        {/* Additional Info */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Our Tuning Services?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Expert Technicians</h3>
                <p className="text-gray-600">Our certified technicians have years of experience in ECU remapping and vehicle tuning, ensuring the best results for your vehicle.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">State-of-the-Art Equipment</h3>
                <p className="text-gray-600">We use the latest diagnostic and tuning equipment to provide precise and reliable performance improvements.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Satisfaction Guaranteed</h3>
                <p className="text-gray-600">We stand behind our work with a satisfaction guarantee and provide ongoing support for all our tuning services.</p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-xl text-gray-700 mb-6">Ready to transform your vehicle's performance?</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="tel:01342621241" className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-accent hover:bg-accent/90 transition-colors">
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Us: 01342 621241
                </a>
                <a href="mailto:info@gatwicktuning.co.uk" className="inline-flex items-center px-6 py-3 border border-accent rounded-md shadow-sm text-base font-medium text-accent hover:bg-accent hover:text-white transition-colors">
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email Us Today
                </a>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-primary/90 transition-colors"
                >
                  Book Your Session
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
