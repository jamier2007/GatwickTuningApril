import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Gatwick Tuning | Expert ECU Remapping Surrey & Sussex</title>
        <meta name="description" content="Gatwick Tuning - Leading ECU remapping specialists in Surrey & Sussex. 10+ years experience, certified technicians, and state-of-the-art equipment. Free consultation available." />
        <link rel="canonical" href="https://www.gatwicktuning.co.uk/about" />
        <meta name="keywords" content="Gatwick Tuning about, ECU remapping experts Surrey, ECU remapping Sussex, certified car tuning, professional vehicle tuning, performance specialists" />
        <meta property="og:title" content="About Gatwick Tuning | Expert ECU Remapping Surrey & Sussex" />
        <meta property="og:description" content="Gatwick Tuning - Leading ECU remapping specialists in Surrey & Sussex. 10+ years experience, certified technicians, and state-of-the-art equipment." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.gatwicktuning.co.uk/about" />
        <meta property="og:image" content="https://www.gatwicktuning.co.uk/og-image.jpg" />
        <meta property="og:image:alt" content="Gatwick Tuning - Professional ECU Remapping Services" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Gatwick Tuning | Expert ECU Remapping Surrey & Sussex" />
        <meta name="twitter:description" content="Gatwick Tuning - Leading ECU remapping specialists in Surrey & Sussex. 10+ years experience, certified technicians, and state-of-the-art equipment." />
        <meta name="twitter:image" content="https://www.gatwicktuning.co.uk/og-image.jpg" />
        <meta name="twitter:image:alt" content="Gatwick Tuning - Professional ECU Remapping Services" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "AboutPage",
              "name": "About Gatwick Tuning | Expert ECU Remapping Surrey & Sussex",
              "description": "Gatwick Tuning - Leading ECU remapping specialists in Surrey & Sussex. 10+ years experience, certified technicians, and state-of-the-art equipment.",
              "url": "https://www.gatwicktuning.co.uk/about",
              "mainEntity": {
                "@type": "Organization",
                "name": "Gatwick Tuning",
                "description": "Professional ECU remapping and vehicle performance tuning specialists in Surrey & Sussex",
                "areaServed": ["Surrey", "Sussex"],
                "foundingDate": "2013",
                "numberOfEmployees": "5-10"
              }
            }
          `}
        </script>
      </Helmet>

      <main className="pt-20 min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-primary" aria-labelledby="about-heading">
          <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 id="about-heading" className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block">About Gatwick Tuning</span>
                <span className="block text-accent">Your ECU Remapping Experts</span>
              </h1>
              <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
                Leading specialists in vehicle performance tuning and ECU remapping across Surrey & Sussex
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 bg-white" aria-labelledby="story-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 id="story-heading" className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Our Story
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                A decade of excellence in vehicle performance tuning across Surrey & Sussex
              </p>
            </div>

            <div className="mt-12 prose prose-lg mx-auto">
              <p>
                Founded in 2013, Gatwick Tuning has grown to become the most trusted name in ECU remapping and vehicle performance tuning across Surrey and Sussex. Our journey began with a simple mission: to provide professional, reliable, and effective tuning solutions for all types of vehicles.
              </p>
              <p>
                Over the years, we've invested in state-of-the-art equipment and continuous training to ensure we stay at the forefront of automotive technology. Our team of certified technicians brings together decades of combined experience in vehicle tuning and diagnostics, serving customers throughout both Surrey and Sussex.
              </p>
            </div>
          </div>
        </section>

        {/* Our Expertise Section */}
        <section className="py-16 bg-gray-50" aria-labelledby="expertise-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 id="expertise-heading" className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Our Expertise
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Specialized knowledge in all aspects of vehicle tuning
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="relative">
                <h3 className="text-xl font-semibold text-gray-900">ECU Remapping</h3>
                <p className="mt-2 text-gray-500">
                  Advanced ECU remapping techniques for optimal engine performance and efficiency.
                </p>
              </div>
              <div className="relative">
                <h3 className="text-xl font-semibold text-gray-900">Performance Tuning</h3>
                <p className="mt-2 text-gray-500">
                  Comprehensive performance tuning solutions for all vehicle types and requirements.
                </p>
              </div>
              <div className="relative">
                <h3 className="text-xl font-semibold text-gray-900">Diagnostic Services</h3>
                <p className="mt-2 text-gray-500">
                  State-of-the-art diagnostic equipment for accurate vehicle assessment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section className="py-16 bg-white" aria-labelledby="team-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 id="team-heading" className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Our Team
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Meet the experts behind our success
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="relative">
                <h3 className="text-xl font-semibold text-gray-900">Certified Technicians</h3>
                <p className="mt-2 text-gray-500">
                  Our team of certified professionals brings years of experience in vehicle tuning.
                </p>
              </div>
              <div className="relative">
                <h3 className="text-xl font-semibold text-gray-900">Continuous Training</h3>
                <p className="mt-2 text-gray-500">
                  Regular training ensures we stay updated with the latest tuning technologies.
                </p>
              </div>
              <div className="relative">
                <h3 className="text-xl font-semibold text-gray-900">Customer Support</h3>
                <p className="mt-2 text-gray-500">
                  Dedicated support team to assist you throughout your tuning journey.
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
                Ready to Experience Our Expertise?
              </h2>
              <p className="mt-4 text-lg text-gray-300">
                Contact us today for a free consultation and discover how we can enhance your vehicle's performance
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

export default AboutPage;
