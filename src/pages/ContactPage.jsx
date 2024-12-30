import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const ContactPage = () => {
  const location = useLocation();
  const { vehicleDetails, selectedServices, totalPrice } = location.state || {};
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    preferredDate: '',
    preferredTime: ''
  });

  // Pre-fill the message with vehicle and service details if available
  useEffect(() => {
    if (vehicleDetails || selectedServices) {
      const servicesText = selectedServices?.map(service => {
        switch(service) {
          case 'stage1': return 'Stage 1 Tuning';
          case 'stage2': return 'Stage 2 Tuning';
          case 'egrDpf': return 'EGR/DPF Solutions';
          case 'adblue': return 'AdBlue Delete';
          default: return '';
        }
      }).filter(Boolean).join(', ');

      const vehicleText = vehicleDetails ? `
Vehicle Details:
- Make: ${vehicleDetails.make}
- Model: ${vehicleDetails.model}
- Year: ${vehicleDetails.year}
- Engine: ${vehicleDetails.engine}
- Fuel Type: ${vehicleDetails.fuel}` : '';

      const message = `I would like to book the following services: ${servicesText}.
${vehicleText}

Total Price: £${totalPrice || 0}

Additional Notes:`;

      setFormData(prev => ({
        ...prev,
        message: message.trim()
      }));
    }
  }, [vehicleDetails, selectedServices, totalPrice]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Book Your Tuning Session | Gatwick Tuning</title>
        <meta name="description" content="Book your professional ECU remapping session with Gatwick Tuning. Contact us for expert vehicle tuning services in Surrey." />
        <link rel="canonical" href="https://www.gatwicktuning.com/contact" />
      </Helmet>

      <main className="pt-20 min-h-screen bg-gray-50">
        <section className="relative bg-primary" aria-labelledby="contact-heading">
          <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 id="contact-heading" className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block">Book Your</span>
                <span className="block text-accent">Tuning Session</span>
              </h1>
            </div>
          </div>
        </section>

        <section className="max-w-2xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow-lg rounded-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent sm:text-sm"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700">Preferred Date</label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent sm:text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700">Preferred Time</label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent sm:text-sm"
                  >
                    <option value="">Select a time</option>
                    <option value="morning">Morning (9am - 12pm)</option>
                    <option value="afternoon">Afternoon (12pm - 5pm)</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={8}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent sm:text-sm"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-accent hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
                >
                  Send Booking Request
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default ContactPage;
