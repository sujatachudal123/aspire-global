import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Content */}
      <section className="relative h-[500px] overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-50"
          style={{ 
            backgroundImage: "url('/h3.png')",
            backgroundPosition: 'center center'
          }}
        />
        
        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center text-white z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-2">Contact us</h1>
          <div className="flex items-center gap-2 text-base">
            <a href="/" className="hover:text-orange-500">Home</a>
            <span>/</span>
            <span className="text-orange-500">Contact Us</span>
          </div>
        </div>

        {/* Angled Overlay */}
        <div className="absolute -bottom-1 left-0 right-0">
          <svg 
            viewBox="0 0 1440 160" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
            preserveAspectRatio="none"
          >
            <path 
              d="M0 160L1440 160L1440 60L720 130L0 60L0 160Z" 
              fill="blue"
            />
            <path 
              d="M0 160L1440 160L1440 80L720 160L0 80L0 160Z" 
              fill="#ff6b00"
            />
          </svg>
        </div>
      </section>
      {/* Happy Serving You Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-[#1f2b6c] text-3xl font-bold mb-4">Happy Serving You</h2>
          </div>
        </div>
      </section>

      {/* Contact Details and Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Details Card */}
            <div className="bg-[#1f2b6c] text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Contact Details</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <span className="text-2xl">📍</span>
                  <p>Maitidevi, Sotopol, Kathmandu Nepal</p>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-2xl">📧</span>
                  <a href="mailto:info@gmail.com" className="hover:text-orange-500">
                    info@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-2xl">☎</span>
                  <p>+977-9802374773</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="h-[300px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.2714600044465!2d85.33391931506246!3d27.70677798279492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb199a06c2eaf9%3A0xc5670a9173e161de!2sMaitidevi%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1647887574671!5m2!1sen!2snp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative">
        {/* Blue section with heading */}
        <div className="relative bg-[#1f2b6c] py-12">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-white text-3xl font-bold">
                Talk To Our Professional Team Now
              </h2>
            </div>
          </div>
        </div>

        {/* Form section with white background */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            {/* White Form Card */}
            <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8 -mt-24">
              <h3 className="text-[#1f2b6c] text-xl font-semibold mb-6 text-center">
                Send Us A Message
              </h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Name*</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:border-[#1f2b6c]"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Phone*</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:border-[#1f2b6c]"
                      placeholder="Your phone"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Email*</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:border-[#1f2b6c]"
                    placeholder="Your email"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-1">Message*</label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:border-[#1f2b6c]"
                    placeholder="Your message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-[#1f2b6c] text-white px-8 py-2 rounded hover:bg-opacity-90 transition-colors inline-flex items-center"
                >
                  Send Now
                  <svg 
                    className="ml-2 w-4 h-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M14 5l7 7m0 0l-7 7m7-7H3" 
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

