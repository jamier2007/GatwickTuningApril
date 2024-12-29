import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    vehicle: '',
    service: 'stage1',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Helmet>
        <title>Contact Gatwick Tuning | Book Your ECU Remapping Service Today</title>
        <meta name="description" content="Book your ECU remapping service with Gatwick Tuning in Surrey. Professional vehicle tuning, Stage 1 & 2 tuning, and custom solutions. Free consultation and vehicle assessment." />
        <link rel="canonical" href="https://www.gatwicktuning.com/contact" />
        <meta name="keywords" content="book ECU remapping, vehicle tuning appointment, car tuning Surrey, performance tuning booking, engine remapping consultation" />
        <meta property="og:title" content="Contact Gatwick Tuning | Book Your ECU Remapping Service" />
        <meta property="og:description" content="Book your ECU remapping service with Gatwick Tuning in Surrey. Professional vehicle tuning services and free consultation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.gatwicktuning.com/contact" />
      </Helmet>

      <main className="pt-20 min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-primary" aria-labelledby="contact-heading">
          <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 id="contact-heading" className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block">Contact</span>
                <span className="block text-accent">Get in Touch</span>
              </h1>
            </div>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-primary rounded-lg shadow-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Book Your Tuning Session</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent"
                      aria-describedby="name-description"
                    />
                    <p id="name-description" className="mt-1 text-sm text-gray-300">Please enter your full name</p>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent"
                      aria-describedby="email-description"
                    />
                    <p id="email-description" className="mt-1 text-sm text-gray-300">We'll use this to send your booking confirmation</p>
                  </div>
                  <div>
                    <label htmlFor="vehicle" className="block text-sm font-medium text-white">Vehicle Details</label>
                    <input
                      type="text"
                      id="vehicle"
                      name="vehicle"
                      value={formData.vehicle}
                      onChange={handleChange}
                      placeholder="e.g., BMW 320d 2019"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent"
                      aria-describedby="vehicle-description"
                    />
                    <p id="vehicle-description" className="mt-1 text-sm text-gray-300">Include make, model, and year</p>
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-white">Service Required</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent"
                      aria-describedby="service-description"
                    >
                      <option value="stage1">Stage 1 ECU Remapping (15-30% Power Increase)</option>
                      <option value="stage2">Stage 2 Performance Tuning (30-45% Power Increase)</option>
                      <option value="custom">Custom Tuning Solution</option>
                    </select>
                    <p id="service-description" className="mt-1 text-sm text-gray-300">Select the service that best matches your requirements</p>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white">Additional Information</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent"
                      aria-describedby="message-description"
                    ></textarea>
                    <p id="message-description" className="mt-1 text-sm text-gray-300">Include any specific requirements or questions</p>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-accent hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
                    >
                      Book Appointment
                    </button>
                  </div>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <section className="bg-white rounded-lg shadow-lg p-8" aria-labelledby="contact-info-heading">
                  <h2 id="contact-info-heading" className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                  <address className="space-y-4 not-italic">
                    <div className="flex items-start">
                      <svg className="w-6 h-6 text-secondary mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">Workshop Location</h3>
                        <p className="mt-1 text-gray-600">Near Gatwick Airport, Surrey, UK</p>
                        <p className="mt-1 text-gray-600">Easily accessible from London, Sussex, and surrounding areas</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-6 h-6 text-secondary mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">Email Us</h3>
                        <a href="mailto:info@gatwicktuning.co.uk" className="mt-1 text-gray-600 hover:text-secondary">info@gatwicktuning.co.uk</a>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-6 h-6 text-secondary mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">Call Us</h3>
                        <a href="tel:01342621241" className="mt-1 text-gray-600 hover:text-secondary">01342 621241</a>
                      </div>
                    </div>
                  </address>
                </section>

                <section className="bg-white rounded-lg shadow-lg p-8" aria-labelledby="hours-heading">
                  <h2 id="hours-heading" className="text-2xl font-bold text-gray-900 mb-6">Workshop Hours</h2>
                  <dl className="space-y-2">
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Monday - Friday</dt>
                      <dd className="text-gray-900 font-medium">9:00 AM - 6:00 PM</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Saturday</dt>
                      <dd className="text-gray-900 font-medium">10:00 AM - 4:00 PM</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Sunday</dt>
                      <dd className="text-gray-900 font-medium">Closed</dd>
                    </div>
                  </dl>
                  <p className="mt-4 text-sm text-gray-600">Early morning and late evening appointments available by request</p>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ContactPage;
