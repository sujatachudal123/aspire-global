import React from 'react';
import { Link } from 'react-router-dom';

const PTEClass = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Angled Design */}
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
          <h1 className="text-5xl md:text-6xl font-bold mb-2">Pearson Test of English</h1>
          <div className="flex items-center gap-2 text-base">
            <a href="/" className="hover:text-orange-500">Home</a>
            <span>/</span>
            <a href="/" className="hover:text-orange-500">Test Preparation Class </a>
            <span>/</span>
            
            <span className="text-orange-500">PTE</span>
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

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left Column - Course Info */}
            <div className="w-full md:w-2/3">
              <div className="mb-8">
                <p className="text-orange-500  lowercase tracking-wider mb-2">our test preparation class</p>
                <h2 className="text-3xl font-bold text-[#1f2b6c] mb-6">Pearson Test of English</h2>

                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=60"
                    alt="PTE Class"
                    className="w-full h-64 object-cover"
                  />

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#1f2b6c] mb-4">PTE Course Overview</h3>
                    <p className="text-gray-600 mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <p className="text-gray-600 mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                </div>
              </div>

              {/* Course Curriculum */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-[#1f2b6c] mb-4">Course Curriculum</h3>
                <p className="text-gray-600 mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p className="text-gray-600 mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* Duration */}
                <div className="bg-blue-50 p-6 rounded-lg flex items-center">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Duration</p>
                    <p className="text-lg font-semibold text-[#1f2b6c]">Approx. 12 Weeks</p>
                  </div>
                </div>

                {/* Classes */}
                <div className="bg-blue-50 p-6 rounded-lg flex items-center">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Classes</p>
                    <p className="text-lg font-semibold text-[#1f2b6c]">21 Classes</p>
                  </div>
                </div>

                {/* Certificate */}
                <div className="bg-blue-50 p-6 rounded-lg flex items-center">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Certificate</p>
                    <p className="text-lg font-semibold text-[#1f2b6c]">Course Certificate</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Enrollment Form */}
            <div className="w-full md:w-1/3">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-orange-500 p-4 text-white text-center">
                  <h3 className="text-xl font-bold">Enroll Now</h3>
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
                      <label className="block text-sm text-gray-600 mb-1">Preparation Class</label>
                      <select
                        className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:border-[#1f2b6c]"
                      >
                        <option value="ielts">IELTS</option>
                        <option value="pte" selected>PTE</option>
                        <option value="toefl">TOEFL</option>
                        <option value="gre">GRE</option>
                        <option value="sat">SAT</option>
                        <option value="gmat">GMAT</option>
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
                      className="w-full bg-[#1f2b6c] text-white py-3 rounded hover:bg-opacity-90 transition-colors"
                    >
                      Book Now →
                    </button>
                  </form>
                </div>
              </div>

              {/* Quick Links */}
              <div className="mt-8 bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-[#1f2b6c] p-4 text-white">
                  <h3 className="text-xl font-bold">Test Preparation</h3>
                </div>

                <div className="p-4">
                  <ul className="space-y-2">
                    <li>
                      <Link to="/services/ielts" className="block p-2 hover:bg-blue-50 rounded transition-colors">
                        IELTS
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/pte" className="block p-2 bg-orange-50 text-orange-500 rounded">
                        PTE
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/toefl" className="block p-2 hover:bg-blue-50 rounded transition-colors">
                        TOEFL
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/gre" className="block p-2 hover:bg-blue-50 rounded transition-colors">
                        GRE
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/sat" className="block p-2 hover:bg-blue-50 rounded transition-colors">
                        SAT
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/gmat" className="block p-2 hover:bg-blue-50 rounded transition-colors">
                        GMAT
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PTEClass;
