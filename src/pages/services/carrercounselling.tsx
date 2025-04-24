import { Link } from 'react-router-dom';

const CareerCounselling = () => {
  return (
    <div className="min-h-screen bg-white">
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
          <h1 className="text-5xl md:text-6xl font-bold mb-2">Carrer Counselling</h1> {/* Increased text size */}
          <div className="flex items-center gap-2 text-base"> {/* Increased text size */}
            <a href="/" className="hover:text-orange-500">Home</a>
            <span>/</span>
            <a href="/" className="hover:text-orange-500">Services</a>
            <span>/</span>
            <span className="text-orange-500">Carrer Counselling</span>
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

      {/* Main Content Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Content Box - removed border classes */}
            <div className="rounded-lg overflow-hidden">
              <div className="bg-blue-50 p-4">
            
              <p className="text-orange-600 font-medium mb-2">Our Solution</p>
                <h2 className="text-xl font-bold text-blue-2000">Career Counseling</h2>
              </div>

              <div className="p-6">
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Left Side - Content */}
                  <div className="lg:w-2/3">
                    <img
                      src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=60"
                      alt="Career Counseling Session"
                      className="w-full h-auto object-cover mb-6 rounded"
                    />
                    <p className="text-gray-600 mb-6">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                      ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                      eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                      deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                      aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
                      nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
                      sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                      Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
                      aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit
                      esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                    </p>
                  </div>

                  {/* Right Side - Service Links */}
                  <div className="lg:w-1/3">
                    <Link
                      to="/services/visa-assistance"
                      className="block p-4 mb-4 bg-orange-50 hover:bg-orange-100 rounded transition-colors"
                    >
                      <div className="flex items-center">
                        <span className="mr-auto">Visa Assistance</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </Link>

                    <Link
                      to="/services/test-preparation"
                      className="block p-4 mb-4 bg-orange-50 hover:bg-orange-100 rounded transition-colors"
                    >
                      <div className="flex items-center">
                        <span className="mr-auto">Test Preparation</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </Link>

                    <Link
                      to="/services/carrercounselling"
                      className="block p-4 mb-4 bg-orange-500 text-white rounded"
                    >
                      <div className="flex items-center">
                        <span className="mr-auto">Career Counseling</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </Link>

                    <Link
                      to="/services/study-abroad"
                      className="block p-4 mb-4 bg-orange-50 hover:bg-orange-100 rounded transition-colors"
                    >
                      <div className="flex items-center">
                        <span className="mr-auto">Study Abroad</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </Link>

                    <Link
                      to="/services/admission-guide"
                      className="block p-4 mb-4 bg-orange-50 hover:bg-orange-100 rounded transition-colors"
                    >
                      <div className="flex items-center">
                        <span className="mr-auto">Admission Guide</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </Link>

                    <Link
                      to="/services/insurance"
                      className="block p-4 mb-4 bg-orange-50 hover:bg-orange-100 rounded transition-colors"
                    >
                      <div className="flex items-center">
                        <span className="mr-auto">Insurance</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareerCounselling;
