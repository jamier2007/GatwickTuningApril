import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';

const ContactPage = () => {
  const location = useLocation();
  const { vehicleDetails, selectedServices, totalPrice } = location.state || {};
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicle: '',
    service: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false
  });

  // Check if the URL has a success parameter (for FormSubmit redirect)
  useEffect(() => {
    // Check if we've been redirected back from FormSubmit
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('success')) {
      setFormStatus({ submitted: true, error: false });
      
      // Send WhatsApp notification
      sendWhatsAppNotification();
      
      // Clean up the URL
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  // Function to send WhatsApp notification via CallMeBot API
  const sendWhatsAppNotification = async () => {
    try {
      const phone = '447922921110';
      const apiKey = '4542589';
      
      // Get the form data from localStorage
      const storedFormData = JSON.parse(localStorage.getItem('lastFormSubmission')) || formData;
      
      // Create notification message
      const notificationText = `New Booking Request:
Name: ${storedFormData.name}
Email: ${storedFormData.email}
Phone: ${storedFormData.phone}
Date: ${storedFormData.preferredDate || 'Not specified'}
Time: ${storedFormData.preferredTime || 'Not specified'}
Message: ${storedFormData.message ? storedFormData.message.substring(0, 100) + '...' : 'No message'}`;
      
      // Encode the message for URL
      const encodedText = encodeURIComponent(notificationText);
      
      // Send the WhatsApp notification
      await axios.get(`https://api.callmebot.com/whatsapp.php?phone=${phone}&text=${encodedText}&apikey=${apiKey}`);
      
      console.log('WhatsApp notification sent successfully');
      
      // Clear the stored form data
      localStorage.removeItem('lastFormSubmission');
    } catch (error) {
      console.error('Error sending WhatsApp notification:', error);
    }
  };

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Store form data in localStorage before submission
      localStorage.setItem('lastFormSubmission', JSON.stringify(formData));
      
      // Submit the form programmatically
      e.target.submit();
    } catch (error) {
      console.error('Error during form submission:', error);
      setFormStatus({ submitted: false, error: true });
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Gatwick Tuning | ECU Remapping Surrey & Sussex</title>
        <meta name="description" content="Contact Gatwick Tuning for professional ECU remapping services in Surrey & Sussex. Free consultation, expert advice, and competitive pricing. Call or email us today." />
        <link rel="canonical" href="https://www.gatwicktuning.co.uk/contact" />
        <meta name="keywords" content="contact Gatwick Tuning, ECU remapping Surrey, ECU remapping Sussex, car tuning contact, performance tuning Surrey, performance tuning Sussex, vehicle tuning consultation" />
        <meta property="og:title" content="Contact Gatwick Tuning | ECU Remapping Surrey & Sussex" />
        <meta property="og:description" content="Contact Gatwick Tuning for professional ECU remapping services in Surrey & Sussex. Free consultation, expert advice, and competitive pricing." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.gatwicktuning.co.uk/contact" />
        <meta property="og:image" content="https://www.gatwicktuning.co.uk/og-image.jpg" />
        <meta property="og:image:alt" content="Gatwick Tuning - Professional ECU Remapping Services" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Gatwick Tuning | ECU Remapping Surrey & Sussex" />
        <meta name="twitter:description" content="Contact Gatwick Tuning for professional ECU remapping services in Surrey & Sussex. Free consultation, expert advice, and competitive pricing." />
        <meta name="twitter:image" content="https://www.gatwicktuning.co.uk/og-image.jpg" />
        <meta name="twitter:image:alt" content="Gatwick Tuning - Professional ECU Remapping Services" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "name": "Contact Gatwick Tuning | ECU Remapping Surrey & Sussex",
              "description": "Contact Gatwick Tuning for professional ECU remapping services in Surrey & Sussex. Free consultation, expert advice, and competitive pricing.",
              "url": "https://www.gatwicktuning.co.uk/contact",
              "mainEntity": {
                "@type": "Organization",
                "name": "Gatwick Tuning",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+44-1342-621241",
                  "contactType": "customer service",
                  "areaServed": ["Surrey", "Sussex"],
                  "availableLanguage": "English"
                }
              }
            }
          `}
        </script>
      </Helmet>

      <main className="pt-20 min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-primary" aria-labelledby="contact-heading">
          <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 id="contact-heading" className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block">Contact Us</span>
                <span className="block text-accent">Get in Touch</span>
              </h1>
              <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
                Ready to enhance your vehicle's performance? Contact us for a free consultation
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-16 bg-white" aria-labelledby="contact-info-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 id="contact-info-heading" className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Contact Information
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Get in touch with us through any of these channels
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="relative">
                <h3 className="text-xl font-semibold text-gray-900">Phone</h3>
                <p className="mt-2 text-gray-500">
                  <a href="tel:01342621241" className="hover:text-accent">
                    01342 621241
                  </a>
                </p>
              </div>
              <div className="relative">
                <h3 className="text-xl font-semibold text-gray-900">Email</h3>
                <p className="mt-2 text-gray-500">
                  <a href="mailto:info@gatwicktuning.co.uk" className="hover:text-accent">
                    info@gatwicktuning.co.uk
                  </a>
                </p>
              </div>
              <div className="relative">
                <h3 className="text-xl font-semibold text-gray-900">Address</h3>
                <p className="mt-2 text-gray-500">
                  Near Gatwick Airport<br />
                  Surrey & Sussex, United Kingdom
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 bg-gray-50" aria-labelledby="contact-form-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 id="contact-form-heading" className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Send Us a Message
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Fill out the form below and we'll get back to you shortly
              </p>
            </div>

            <div className="mt-12 max-w-lg mx-auto">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="vehicle" className="block text-sm font-medium text-gray-700">
                    Vehicle Details
                  </label>
                  <input
                    type="text"
                    name="vehicle"
                    id="vehicle"
                    value={formData.vehicle}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent"
                    placeholder="Make, Model, Year"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700">
                    Service Required
                  </label>
                  <select
                    name="service"
                    id="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="stage1">Stage 1 Tuning</option>
                    <option value="stage2">Stage 2 Tuning</option>
                    <option value="dpf">DPF Solutions</option>
                    <option value="egr">EGR Solutions</option>
                    <option value="adblue">AdBlue Solutions</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent"
                    required
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-accent hover:bg-accent-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-white" aria-labelledby="location-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 id="location-heading" className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Our Location
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Conveniently located near Gatwick Airport, serving Surrey & Sussex
              </p>
            </div>

            <div className="mt-12">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2504.1234567890123!2d-0.1615!3d51.1537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDA5JzEzLjMiTiAwwrAwOSc0MS40Ilc!5e0!3m2!1sen!2suk!4v1234567890123!5m2!1sen!2suk"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Gatwick Tuning Location"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ContactPage;
