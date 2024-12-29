import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Gatwick Tuning - Professional ECU Remapping Specialists</title>
        <meta name="description" content="Learn about Gatwick Tuning's expertise in ECU remapping and vehicle performance optimization. Over 10 years of experience serving Surrey and surrounding areas." />
        <link rel="canonical" href="https://www.gatwicktuning.com/about" />
      </Helmet>

      <main className="pt-20 min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-primary" aria-labelledby="about-heading">
          <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 id="about-heading" className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block">About</span>
                <span className="block text-accent">Gatwick Tuning</span>
              </h1>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {/* About Content */}
              <div className="bg-primary rounded-lg shadow-xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">Why Choose Gatwick Tuning?</h2>
                <div className="space-y-6">
                  <p className="text-gray-200">
                    At Gatwick Tuning, we specialise in professional ECU remapping services, delivering optimal performance and efficiency improvements for your vehicle. Our expert technicians use state-of-the-art equipment and software to enhance your vehicle's performance while maintaining reliability.
                  </p>
                  <p className="text-gray-200">
                    With over a decade of experience and a commitment to excellence, our team of certified experts uses the latest technology and techniques to ensure the best results for your vehicle. We pride ourselves on providing personalised service and achieving remarkable performance gains.
                  </p>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white">Our Expertise</h3>
                    <ul className="space-y-2" aria-label="Our services">
                      <li className="flex items-center text-gray-200">
                        <svg className="w-5 h-5 mr-2 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Professional ECU Remapping for Enhanced Performance
                      </li>
                      <li className="flex items-center text-gray-200">
                        <svg className="w-5 h-5 mr-2 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Custom Tuning Solutions for All Vehicle Types
                      </li>
                      <li className="flex items-center text-gray-200">
                        <svg className="w-5 h-5 mr-2 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Performance Optimisation and Fuel Efficiency
                      </li>
                    </ul>
                  </div>

                  <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <p className="text-gray-700 font-medium mb-3">Ready to enhance your vehicle's performance?</p>
                    <div className="flex flex-wrap gap-4">
                      <a href="tel:01342621241" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-accent hover:bg-blue-600 transition-colors">
                        <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        Call 01342 621241
                      </a>
                      <a href="mailto:info@gatwicktuning.co.uk" className="inline-flex items-center px-4 py-2 border border-accent rounded-md shadow-sm text-sm font-medium text-accent hover:bg-accent hover:text-white transition-colors">
                        <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Email Us
                      </a>
                    </div>
                  </div>

                </div>

                <div className="mt-8">
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-accent hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
                    aria-label="Contact us to book your tuning session"
                  >
                    Book Your Tuning Session
                  </Link>
                </div>
              </div>

              {/* Stats & Info */}
              <div className="space-y-8">
                <section className="bg-white rounded-lg shadow-lg p-6" aria-labelledby="impact-heading">
                  <h3 id="impact-heading" className="text-xl font-semibold text-gray-900 mb-4">Our Impact</h3>
                  <dl className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4">
                      <dt className="text-3xl font-bold text-accent">500+</dt>
                      <dd className="text-gray-600">Vehicles Tuned</dd>
                    </div>
                    <div className="text-center p-4">
                      <dt className="text-3xl font-bold text-accent">100%</dt>
                      <dd className="text-gray-600">Customer Satisfaction</dd>
                    </div>
                    <div className="text-center p-4">
                      <dt className="text-3xl font-bold text-accent">10+</dt>
                      <dd className="text-gray-600">Years Experience</dd>
                    </div>
                    <div className="text-center p-4">
                      <dt className="text-3xl font-bold text-accent">20%</dt>
                      <dd className="text-gray-600">Average Power Increase</dd>
                    </div>
                  </dl>
                </section>

                <section className="bg-white rounded-lg shadow-lg p-6" aria-labelledby="location-heading">
                  <h3 id="location-heading" className="text-xl font-semibold text-gray-900 mb-4">Our Location</h3>
                  <p className="text-gray-600 mb-4">
                    Conveniently located near Gatwick Airport, we serve customers from Surrey, Sussex, and the greater London area. Our modern facility is equipped with the latest diagnostic and tuning equipment.
                  </p>
                  <address className="space-y-2 not-italic">
                    <div className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-2 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>Near Gatwick Airport, Surrey</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-2 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <time>Mon-Fri: 9:00 AM - 6:00 PM</time>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-2 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <a href="tel:01342621241" className="hover:text-accent transition-colors">01342 621241</a>
                    </div>
                  </address>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutPage;
