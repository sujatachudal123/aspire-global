import React from 'react';
import { Link } from 'react-router-dom';

const UKStudyAbroad = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Angled Design */}
      <section className="relative h-[500px] overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-50"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&auto=format&fit=crop&q=60')",
            backgroundPosition: 'center center'
          }}
        />

        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center text-white z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-2 text-center">Study in UK</h1>
          <p className="text-xl mb-4 text-center max-w-3xl">Explore World-Class Education in the United Kingdom</p>
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
              fill="#1f2b6c"
            />
            <path
              d="M0 160L1440 160L1440 80L720 160L0 80L0 160Z"
              fill="#ff6b00"
            />
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left Column - Content */}
            <div className="w-full md:w-2/3">
              <div className="mb-8">
                <p className="text-orange-500 font-semibold uppercase tracking-wider mb-2">Study Abroad</p>
                <h2 className="text-3xl font-bold text-[#1f2b6c] mb-6">Why Study in the United Kingdom?</h2>

                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?w=800&auto=format&fit=crop&q=60"
                    alt="UK University"
                    className="w-full h-64 object-cover"
                  />

                  <div className="p-6">
                    <p className="text-gray-600 mb-4">
                      The United Kingdom is home to some of the world's most prestigious universities, offering high-quality education recognized globally. With a rich academic heritage and innovative teaching methods, UK institutions provide an exceptional learning experience that prepares students for successful careers.
                    </p>
                    <p className="text-gray-600 mb-4">
                      Studying in the UK offers numerous benefits, including internationally recognized qualifications, shorter program durations, diverse course options, and opportunities to develop strong English language skills. The multicultural environment enriches your educational journey and broadens your global perspective.
                    </p>
                  </div>
                </div>
              </div>

              {/* UK Education System */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-[#1f2b6c] mb-4">UK Education System</h3>
                <p className="text-gray-600 mb-6">
                  The UK education system is renowned for its quality and standards, offering various qualification levels:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
                  <li><span className="font-semibold">Undergraduate Degrees:</span> Bachelor's degrees typically take 3 years in England, Wales, and Northern Ireland, and 4 years in Scotland.</li>
                  <li><span className="font-semibold">Postgraduate Degrees:</span> Master's programs usually last 1 year, while PhD programs take 3-4 years.</li>
                  <li><span className="font-semibold">Foundation Courses:</span> Preparatory courses for international students to bridge educational gaps before starting degree programs.</li>
                  <li><span className="font-semibold">Vocational Qualifications:</span> Practical, skills-based qualifications focused on specific industries or careers.</li>
                </ul>
              </div>

              {/* Top Universities */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-[#1f2b6c] mb-4">Top UK Universities</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* University of Oxford */}
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="bg-blue-50 p-4">
                      <h4 className="text-lg font-semibold text-[#1f2b6c]">University of Oxford</h4>
                    </div>
                    <div className="p-4">
                      <p className="text-gray-600 text-sm mb-2">
                        One of the oldest and most prestigious universities in the world, offering exceptional teaching and research opportunities.
                      </p>
                      <a href="https://www.ox.ac.uk/" target="_blank" rel="noopener noreferrer" className="text-orange-500 text-sm hover:underline">Visit Website</a>
                    </div>
                  </div>

                  {/* University of Cambridge */}
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="bg-blue-50 p-4">
                      <h4 className="text-lg font-semibold text-[#1f2b6c]">University of Cambridge</h4>
                    </div>
                    <div className="p-4">
                      <p className="text-gray-600 text-sm mb-2">
                        A world-leading university known for its academic excellence and cutting-edge research facilities.
                      </p>
                      <a href="https://www.cam.ac.uk/" target="_blank" rel="noopener noreferrer" className="text-orange-500 text-sm hover:underline">Visit Website</a>
                    </div>
                  </div>

                  {/* Imperial College London */}
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="bg-blue-50 p-4">
                      <h4 className="text-lg font-semibold text-[#1f2b6c]">Imperial College London</h4>
                    </div>
                    <div className="p-4">
                      <p className="text-gray-600 text-sm mb-2">
                        Specializing in science, engineering, medicine, and business, with a focus on practical application and innovation.
                      </p>
                      <a href="https://www.imperial.ac.uk/" target="_blank" rel="noopener noreferrer" className="text-orange-500 text-sm hover:underline">Visit Website</a>
                    </div>
                  </div>

                  {/* London School of Economics */}
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="bg-blue-50 p-4">
                      <h4 className="text-lg font-semibold text-[#1f2b6c]">London School of Economics</h4>
                    </div>
                    <div className="p-4">
                      <p className="text-gray-600 text-sm mb-2">
                        A global center for social sciences, offering programs in economics, politics, law, and related fields.
                      </p>
                      <a href="https://www.lse.ac.uk/" target="_blank" rel="noopener noreferrer" className="text-orange-500 text-sm hover:underline">Visit Website</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Visa Information */}
              <div className="mb-8 bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#1f2b6c] mb-4">UK Student Visa Information</h3>
                <p className="text-gray-700 mb-4">
                  International students need a Student Visa (previously Tier 4) to study in the UK for courses longer than 6 months. Key requirements include:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="bg-white p-2 rounded-full mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p>Confirmation of Acceptance for Studies (CAS) from a licensed sponsor</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-white p-2 rounded-full mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p>Proof of sufficient funds for tuition and living expenses</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-white p-2 rounded-full mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p>English language proficiency (usually IELTS or equivalent)</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-white p-2 rounded-full mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p>Valid passport and application fee payment</p>
                  </li>
                </ul>
                <div className="mt-4">
                  <Link 
                    to="/services/visa-guidance" 
                    className="text-orange-500 hover:underline font-medium"
                  >
                    Learn more about our visa guidance services →
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="w-full md:w-1/3">
              {/* Enquiry Form */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                <div className="bg-orange-500 p-4 text-white text-center">
                  <h3 className="text-xl font-bold">Enquire Now</h3>
                </div>

                <div className="p-6">
                  <form className="space-y-4">
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

                    <div>
                      <label className="block text-sm text-gray-600 mb-1">Email*</label>
                      <input
                        type="email"
                        className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:border-[#1f2b6c]"
                        placeholder="Your email"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-gray-600 mb-1">Study Level</label>
                      <select
                        className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:border-[#1f2b6c]"
                      >
                        <option value="">Select Study Level</option>
                        <option value="undergraduate">Undergraduate</option>
                        <option value="postgraduate">Postgraduate</option>
                        <option value="phd">PhD</option>
                        <option value="foundation">Foundation</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm text-gray-600 mb-1">Message</label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:border-[#1f2b6c]"
                        placeholder="Your message"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#1f2b6c] text-white py-3 rounded hover:bg-opacity-90 transition-colors flex items-center justify-center"
                    >
                      <span>Submit Enquiry</span>
                      <span className="ml-2">→</span>
                    </button>
                  </form>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                <div className="bg-[#1f2b6c] p-4 text-white">
                  <h3 className="text-xl font-bold">Study Destinations</h3>
                </div>

                <div className="p-4">
                  <ul className="space-y-2">
                    <li>
                      <Link to="/study-abroad/usa" className="block p-2 hover:bg-blue-50 rounded transition-colors">
                        <span className="flex items-center">
                          <span className="mr-2">→</span>
                          Study in USA
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/study-abroad/canada" className="block p-2 hover:bg-blue-50 rounded transition-colors">
                        <span className="flex items-center">
                          <span className="mr-2">→</span>
                          Study in Canada
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/study-abroad/australia" className="block p-2 hover:bg-blue-50 rounded transition-colors">
                        <span className="flex items-center">
                          <span className="mr-2">→</span>
                          Study in Australia
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/study-abroad/uk" className="block p-2 bg-orange-50 text-orange-500 rounded">
                        <span className="flex items-center">
                          <span className="mr-2">→</span>
                          Study in UK
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/study-abroad/new-zealand" className="block p-2 hover:bg-blue-50 rounded transition-colors">
                        <span className="flex items-center">
                          <span className="mr-2">→</span>
                          Study in New Zealand
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/study-abroad" className="block p-2 hover:bg-blue-50 rounded transition-colors">
                        <span className="flex items-center">
                          <span className="mr-2">→</span>
                          View All Countries
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Services */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-[#1f2b6c] p-4 text-white">
                  <h3 className="text-xl font-bold">Our Services</h3>
                </div>

                <div className="p-4">
                  <ul className="space-y-2">
                    <li>
                      <Link to="/services/visa-guidance" className="block p-2 hover:bg-blue-50 rounded transition-colors">
                        <span className="flex items-center">
                          <span className="mr-2">→</span>
                          Visa Guidance
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/test-preparation" className="block p-2 hover:bg-blue-50 rounded transition-colors">
                        <span className="flex items-center">
                          <span className="mr-2">→</span>
                          Test Preparation
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/admission-guide" className="block p-2 hover:bg-blue-50 rounded transition-colors">
                        <span className="flex items-center">
                          <span className="mr-2">→</span>
                          Admission Guide
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#1f2b6c] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Begin Your UK Education Journey?</h2>
            <p className="text-lg mb-8 opacity-90">
              Our expert counselors are here to guide you through every step of your UK study abroad experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact-us" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md transition-colors duration-300 text-center"
              >
                Book a Free Consultation
              </Link>
              <Link 
                to="/study-abroad" 
                className="bg-white hover:bg-gray-100 text-[#1f2b6c] px-8 py-3 rounded-md transition-colors duration-300 text-center"
              >
                Explore Other Countries
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UKStudyAbroad;
