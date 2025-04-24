import { FaGlobe, FaGraduationCap, FaHandshake, FaUsers } from 'react-icons/fa';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden"> {/* Increased height from 300px to 500px */}
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-50"
          style={{ 
            backgroundImage: "url('/h3.png')", // Make sure to save the image in this location
            backgroundPosition: 'center center'
          }}
        />
        
        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center text-white z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-2">About us</h1> {/* Increased text size */}
          <div className="flex items-center gap-2 text-base"> {/* Increased text size */}
            <a href="/" className="hover:text-orange-500">Home</a>
            <span>/</span>
            <span className="text-orange-500">About Us</span>
          </div>
        </div>

        {/* Angled Overlay */}
        <div className="absolute -bottom-1 left-0 right-0"> {/* Added negative bottom to prevent white line */}
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

      {/* New About Intro Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-7xl mx-auto">
            {/* Title */}
            <div className="mb-8">
              <p className="text-orange-600 font-medium mb-2">About Macrohub Educational Consultancy</p>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-800">
                Grow your career with Aspire Global Education Consultancy
              </h2>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Text Content */}
              <div className="space-y-4">
                <p className="text-gray-700">
                  Aspire Global Education Consultancy Pvt. Ltd. is a trusted and professional 
                  educational consultancy dedicated to providing high-quality, affordable, and reliable 
                  test preparation and study abroad guidance. We assist students in pursuing higher 
                  education in Dubai, the UK, Malta, and other global destinations. Our commitment to 
                  continuous improvement ensures excellence in our services. We provide authentic, 
                  up-to-date university information, and our dedicated team makes the application 
                  process smooth, efficient, and time-saving.
                </p>
                <p className="text-gray-700">
                  Aspire Global Education is a platform you can trust. We believe in building 
                  relationships based on integrity and reliability. Understanding the immense trust our 
                  students and parents place in us, we maintain the highest ethical standards and 
                  never compromise on integrity. Our mission is to place well-qualified students in the 
                  best possible 'right-fit' institutions abroad, ensuring they find universities that match 
                  their academic, financial, and social needs.
                </p>
                <p className="text-gray-700">
                  Our knowledgeable and friendly advisers guide students through every step of their 
                  journey—from their first consultation at Aspire Global Education to their successful 
                  departure to their destination. We are committed to making global education 
                  accessible and helping students achieve their dreams.
                </p>
              </div>

              {/* Images */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative h-[300px]">
                  <img
                    src="/h4.png" // Replace with your actual image path
                    alt="Student Consulting"
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="relative h-[300px]">
                  <img
                    src="/h5.png" // Replace with your actual image path
                    alt="Graduate Student"
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}


      {/* Core Values Section */}
      
      {/* Stats Section */}
      
      {/* Message from Executives Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-7xl mx-auto">
            {/* CEO Message */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* CEO Image */}
                <div className="relative h-[400px] bg-[#B8D5E2]">
                  <img
                    src="/h6.png"
                    alt="CEO of Aspire Global"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* CEO Message Content */}
                <div className="p-8 flex flex-col justify-center">
                  <p className="text-blue-600 font-medium mb-2">Message From The Lead</p>
                  <h3 className="text-2xl font-bold text-blue-800 mb-4">Message from CEO</h3>
                  <p className="text-gray-600 mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                    aliquip ex ea commodo consequat. Duis aute irure dolor in 
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                    pariatur.
                  </p>
                  <div>
                    <h4 className="text-xl font-bold text-blue-800">John Doe</h4>
                    <p className="text-gray-600">Chief Executive Officer</p>
                  </div>
                </div>
              </div>
            </div>

            {/* MD Message */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* MD Message Content */}
                <div className="p-8 flex flex-col justify-center">
                  <p className="text-blue-600 font-medium mb-2">Message From The Lead</p>
                  <h3 className="text-2xl font-bold text-blue-800 mb-4">Message from MD</h3>
                  <p className="text-gray-600 mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                    aliquip ex ea commodo consequat. Duis aute irure dolor in 
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                    pariatur.
                  </p>
                  <div>
                    <h4 className="text-xl font-bold text-blue-800">Brooklyn Simmons</h4>
                    <p className="text-gray-600">Managing Director (MD)</p>
                  </div>
                </div>

                {/* MD Image */}
                <div className="relative h-[400px] bg-[#1E293B]">
                  <img
                    src="/h7.png"
                    alt="Managing Director of Aspire Global"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Counselors Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <p className="text-orange-600 font-medium mb-2">Our Team</p>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-800">
                Meet Our Expert Counselors
              </h2>
            </div>

            {/* Counselors Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {/* Counselor 1 */}
              <div className="flex flex-col items-center">
                <div className="w-full aspect-square rounded-lg overflow-hidden border-2 border-orange-500 p-1">
                  <img
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop&q=60"
                    alt="Counselor 1"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold text-blue-800 mt-4 mb-1">Name Here</h3>
                <p className="text-gray-600">Counselor</p>
              </div>

              {/* Counselor 2 */}
              <div className="flex flex-col items-center">
                <div className="w-full aspect-square rounded-lg overflow-hidden border-2 border-orange-500 p-1">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=60"
                    alt="Counselor 2"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold text-blue-800 mt-4 mb-1">Name Here</h3>
                <p className="text-gray-600">Counselor</p>
              </div>

              {/* Counselor 3 */}
              <div className="flex flex-col items-center">
                <div className="w-full aspect-square rounded-lg overflow-hidden border-2 border-orange-500 p-1">
                  <img
                    src="./h6.png"
                    alt="Counselor 3"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold text-blue-800 mt-4 mb-1">Name Here</h3>
                <p className="text-gray-600">Counselor</p>
              </div>

              {/* Counselor 4 */}
              <div className="flex flex-col items-center">
                <div className="w-full aspect-square rounded-lg overflow-hidden border-2 border-orange-500 p-1">
                  <img
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=60"
                    alt="Counselor 4"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold text-blue-800 mt-4 mb-1">Name Here</h3>
                <p className="text-gray-600">Counselor</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Banner and Stats Section */}
      <section className="relative">
        {/* Video Banner */}
        <div className="relative h-[400px] overflow-hidden">
          <div className="absolute inset-0 bg-[#1f2b6c] opacity-90"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=60')",
            }}
          />
          
          {/* Content Overlay */}
          <div className="relative h-full flex flex-col items-center justify-center text-white z-10 px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 max-w-3xl">
              Taking Education to Next Level with Technology
            </h2>
            <button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg transition-colors">
              <svg 
                className="w-6 h-6" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z"/>
              </svg>
              Watch Video
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="relative -mt-20 z-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
                {/* Documentation Stats */}
                <div className="flex items-center gap-6">
                  <div className="text-[#1f2b6c]">
                    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 7V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V7C3 4 4.5 2 8 2H16C19.5 2 21 4 21 7Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M15.5 2V9.85999C15.5 10.3 14.98 10.52 14.66 10.23L12.34 8.09003C12.15 7.91003 11.85 7.91003 11.66 8.09003L9.34003 10.23C9.02003 10.52 8.5 10.3 8.5 9.85999V2H15.5Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-4xl font-bold text-[#1f2b6c]">2000</h3>
                    <p className="text-gray-600 uppercase text-sm tracking-wider">Documentation</p>
                  </div>
                </div>

                {/* Vertical Divider 1 */}
                <div className="hidden md:block absolute left-1/3 top-1/2 -translate-y-1/2 w-px h-16 bg-black opacity-300"></div>

                {/* Colleges Stats */}
                <div className="flex items-center gap-6">
                  <div className="text-[#1f2b6c]">
                    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 22H22" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 2L3 7V11" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 2L21 7V11" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 6V13" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M7 11V17" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M17 11V17" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-4xl font-bold text-[#1f2b6c]">356</h3>
                    <p className="text-gray-600 uppercase text-sm tracking-wider">Colleges</p>
                  </div>
                </div>

                {/* Vertical Divider 2 */}
                <div className="hidden md:block absolute right-1/3 top-1/2 -translate-y-1/2 w-px h-16 bg-black opacity-300"></div>

                {/* Admissions Stats */}
                <div className="flex items-center gap-6">
                  <div className="text-[#1f2b6c]">
                    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 15C15.728 15 18.75 12.09 18.75 8.5C18.75 4.91 15.728 2 12 2C8.272 2 5.25 4.91 5.25 8.5C5.25 12.09 8.272 15 12 15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M7.52002 13.52L7.51001 20.9C7.51001 21.8 8.14001 22.24 8.92001 21.87L11.6 20.6C11.85 20.49 12.19 20.49 12.44 20.6L15.12 21.87C15.9 22.23 16.53 21.8 16.53 20.9V13.34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-4xl font-bold text-[#1f2b6c]">1100</h3>
                    <p className="text-gray-600 uppercase text-sm tracking-wider">Admissions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            {/* Left Image Section */}
            <div className="w-full md:w-5/12 relative">
              <div className="relative h-[600px] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=60"
                  alt="Students studying together"
                  className="w-full h-full object-cover"
                />
                {/* Diagonal Overlay */}
                </div>
            </div>

            {/* Right Content Section */}
            <div className="w-full md:w-7/12 pl-0 md:pl-16 mt-8 md:mt-0">
              <p className="text-orange-500 font-medium mb-2">Our working process</p>
              <h2 className="text-3xl font-bold text-[#1f2b6c] mb-8">How we Work ?</h2>
              
              <div className="space-y-8">
                {/* Step 1 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1f2b6c] text-white flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#1f2b6c] mb-2">Student Screening</h3>
                    <p className="text-gray-600">
                      First, we evaluate the qualifications, skills, and potential of students to succeed in their desired educational pursuits and to ensure a good match between students and the programs they are applying for.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1f2b6c] text-white flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#1f2b6c] mb-2">University Assistance</h3>
                    <p className="text-gray-600">
                      Our experienced team ensures a smooth and efficient process, helping students secure admissions to their desired universities abroad.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1f2b6c] text-white flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#1f2b6c] mb-2">Admission Assistance</h3>
                    <p className="text-gray-600">
                      Our dedicated team provides guidance on meeting admission requirements and deadlines.
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1f2b6c] text-white flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#1f2b6c] mb-2">Documentation Guidance</h3>
                    <p className="text-gray-600">
                      We assist students in understanding and compiling the necessary documents for their study abroad applications, including academic transcripts, letters of recommendation, personal statements, and more.
                    </p>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1f2b6c] text-white flex items-center justify-center font-bold">
                    5
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#1f2b6c] mb-2">Visa Lodgement</h3>
                    <p className="text-gray-600">
                      We assist students in understanding visa requirements, preparing the necessary documentation, and completing the application accurately.
                    </p>
                  </div>
                </div>

                {/* Step 6 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1f2b6c] text-white flex items-center justify-center font-bold">
                    6
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#1f2b6c] mb-2">Pre-Departure Briefing</h3>
                    <p className="text-gray-600">
                      We guide students on travel preparations, cultural adaptation, and safety tips.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Affiliated Universities Section */}
      <section className="py-16 bg-[#FFF5EB]">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <p className="text-orange-500 font-medium mb-2">Institutions</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1f2b6c]">
              Our Affiliated Universities
            </h2>
          </div>

          {/* Universities Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {/* Athabasca University */}
            <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
              <div className="p-4">
                <img
                  src="https://images.unsplash.com/photo-1562774053-701939374585?w=800&auto=format&fit=crop&q=60"
                  alt="Athabasca University"
                  className="h-24 w-full object-contain rounded-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="px-4 pb-4 text-center">
                <h3 className="text-[#1f2b6c] font-medium text-sm">
                  Athabasca University
                </h3>
              </div>
            </div>

            {/* Monash University */}
            <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
              <div className="p-4">
                <img
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop&q=60"
                  alt="Monash University"
                  className="h-24 w-full object-contain rounded-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="px-4 pb-4 text-center">
                <h3 className="text-[#1f2b6c] font-medium text-sm">
                  Monash University
                </h3>
              </div>
            </div>

            {/* La Salle University */}
            <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
              <div className="p-4">
                <img
                  src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800&auto=format&fit=crop&q=60"
                  alt="La Salle University"
                  className="h-24 w-full object-contain rounded-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="px-4 pb-4 text-center">
                <h3 className="text-[#1f2b6c] font-medium text-sm">
                  La Salle University
                </h3>
              </div>
            </div>

            {/* AIU */}
            <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
              <div className="p-4">
                <img
                  src="https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=800&auto=format&fit=crop&q=60"
                  alt="AIU"
                  className="h-24 w-full object-contain rounded-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="px-4 pb-4 text-center">
                <h3 className="text-[#1f2b6c] font-medium text-sm">
                  AIU
                </h3>
              </div>
            </div>

            {/* ACU */}
            <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
              <div className="p-4">
                <img
                  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&auto=format&fit=crop&q=60"
                  alt="ACU"
                  className="h-24 w-full object-contain rounded-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="px-4 pb-4 text-center">
                <h3 className="text-[#1f2b6c] font-medium text-sm">
                  ACU
                </h3>
              </div>
            </div>

            {/* RMIT University */}
            <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
              <div className="p-4">
                <img
                  src="https://images.unsplash.com/photo-1576495199011-eb94736d05d6?w=800&auto=format&fit=crop&q=60"
                  alt="RMIT University"
                  className="h-24 w-full object-contain rounded-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="px-4 pb-4 text-center">
                <h3 className="text-[#1f2b6c] font-medium text-sm">
                  RMIT University
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    
    );
};

export default About;















