import { Link } from 'react-router-dom';
import {
  FaGraduationCap,
  FaUniversity,
  FaPassport,
  FaBookReader,
  FaCreditCard,
  FaHome,
  FaPlane,
  FaBriefcase
} from 'react-icons/fa';

const Pagination = () => {
  return (
    <div className="flex justify-end mt-8 gap-2">
      <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-[#1f2b6c] hover:text-white transition-colors">
        &lt;
      </button>
      <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded bg-[#1f2b6c] text-white">
        1
      </button>
      <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-[#1f2b6c] hover:text-white transition-colors">
        2
      </button>
      <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-[#1f2b6c] hover:text-white transition-colors">
        3
      </button>
      <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-[#1f2b6c] hover:text-white transition-colors">
        4
      </button>
      <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-[#1f2b6c] hover:text-white transition-colors">
        &gt;
      </button>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      id: 'carrercounselling',
      title: 'Career Counseling',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=60',
      icon: <FaGraduationCap className="text-aspire-blue text-3xl" />,
      description: 'Expert guidance to choose the right career path based on skills, interests, and future goals.'
    },
    {
      id: 'visa-guidance',
      title: 'Visa Guidance',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop&q=60',
      icon: <FaPassport className="text-aspire-blue text-3xl" />,
      description: 'Complete support for visa applications, documentation, and interview preparation to ensure approval.'
    },
    {
      id: 'test-preparation',
      title: 'Test Preparation',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&auto=format&fit=crop&q=60',
      icon: <FaBookReader className="text-aspire-blue text-3xl" />,
      description: 'Coaching for IELTS, TOEFL, and PTE to help students achieve high scores for university admissions.'
    },
    {
      id: 'study-abroad',
      title: 'Study Abroad',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop&q=60',
      icon: <FaPlane className="text-aspire-blue text-3xl" />,
      description: 'Assistance in studying in Dubai, the UK, and Malta with personalized study plans and university details.'
    },
    {
      id: 'admission-guide',
      title: 'Admission Guide',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=60',
      icon: <FaUniversity className="text-aspire-blue text-3xl" />,
      description: 'Support in university selection, application preparation, and securing admissions efficiently.'
    },
    {
      id: 'insurance',
      title: 'Insurance',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format&fit=crop&q=60',
      icon: <FaCreditCard className="text-aspire-blue text-3xl" />,
      description: 'Help in obtaining health and travel insurance for student safety and visa compliance.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-50"
          style={{
            backgroundImage: "url('/h3.png')",
            backgroundPosition: 'center center'
          }}
        />

        {/* Content */}
        <div className="relative h-full container mx-auto px-4 flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Our Solution</h1>
          <div className="flex items-center gap-2 text-base sm:text-lg">
            <Link to="/" className="hover:text-orange-500 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-orange-500">Services</span>
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

      {/* Services Grid Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            <p className="text-orange-500 font-medium mb-2">Our Solution</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#1f2b6c]">
              We Provide High Quality Educational Service
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {services.map((service) => (
              <Link
                to={`/services/${service.id}`}
                key={service.id}
                className="group relative bg-white rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
              >
                <div className="relative overflow-hidden aspect-[16/9]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    {service.icon}
                  </div>

                  {/* Angled overlay */}
                  <div className="absolute bottom-0 left-0 right-0">
                    <svg
                      viewBox="0 0 400 40"
                      className="w-full h-8 md:h-10"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0 40L400 40L400 20L200 35L0 20L0 40Z"
                        fill="#1f2b6c"
                        className="transition-all duration-300 group-hover:fill-orange-500"
                      />
                      <path
                        d="M0 40L400 40L400 30L200 40L0 30L0 40Z"
                        fill="#ff6b00"
                        className="transition-all duration-300 group-hover:fill-[#1f2b6c]"
                      />
                    </svg>
                  </div>
                </div>

                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-[#1f2b6c] mb-2 group-hover:text-orange-500 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export { Services as default };

const CareerCounseling = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-50"
          style={{
            backgroundImage: "url('/career-counseling-hero.jpg')",
            backgroundPosition: 'center center'
          }}
        />

        {/* Content */}
        <div className="relative h-full container mx-auto px-4 flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Career Counseling</h1>
          <div className="flex items-center gap-2 text-lg">
            <Link to="/" className="hover:text-orange-500 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-orange-500 transition-colors">Services</Link>
            <span>/</span>
            <span className="text-orange-500">Career Counseling</span>
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
              fill="white"
            />
            <path
              d="M0 160L1440 160L1440 80L720 160L0 80L0 160Z"
              fill="#ff6b00"
            />
          </svg>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Service Navigation */}
            <div className="flex flex-col md:flex-row gap-8">
              {/* Left Side - Service Links */}
              <div className="md:w-1/3">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-[#1f2b6c] mb-4">Our Services</h3>
                  <div className="flex flex-col gap-2">
                    <Link
                      to="/services/visa-guidance"
                      className="p-3 hover:bg-[#1f2b6c] hover:text-white rounded transition-colors"
                    >
                      Visa Guidance
                    </Link>
                    <Link
                      to="/services/test-preparation"
                      className="p-3 hover:bg-[#1f2b6c] hover:text-white rounded transition-colors"
                    >
                      Test Preparation
                    </Link>
                    <Link
                      to="/services/career-counseling"
                      className="p-3 bg-[#1f2b6c] text-white rounded"
                    >
                      Career Counseling
                    </Link>
                    <Link
                      to="/services/study-abroad"
                      className="p-3 hover:bg-[#1f2b6c] hover:text-white rounded transition-colors"
                    >
                      Study Abroad
                    </Link>
                    <Link
                      to="/services/admission-guide"
                      className="p-3 hover:bg-[#1f2b6c] hover:text-white rounded transition-colors"
                    >
                      Admission Guide
                    </Link>
                    <Link
                      to="/services/insurance"
                      className="p-3 hover:bg-[#1f2b6c] hover:text-white rounded transition-colors"
                    >
                      Insurance
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="md:w-2/3">
                <img
                  src="/career-counseling-detail.jpg"
                  alt="Career Counseling Session"
                  className="w-full h-[400px] object-cover rounded-lg mb-8"
                />
                <h2 className="text-3xl font-bold text-[#1f2b6c] mb-6">
                  Career Counseling Services
                </h2>
                <p className="text-gray-700 mb-6">
                  Our career counseling services are designed to help students and professionals make informed decisions about their academic and professional futures. Through personalized guidance and expert insights, we help you identify your strengths, interests, and potential career paths.
                </p>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-[#1f2b6c] mb-3">
                      What We Offer
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Personalized career assessment and guidance</li>
                      <li>Skills and interests evaluation</li>
                      <li>Industry insights and market trends analysis</li>
                      <li>Academic pathway planning</li>
                      <li>Resume building and interview preparation</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-[#1f2b6c] mb-3">
                      Why Choose Our Career Counseling
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Experienced career counselors</li>
                      <li>Comprehensive career assessment tools</li>
                      <li>Up-to-date industry knowledge</li>
                      <li>Personalized attention and guidance</li>
                      <li>Long-term career planning support</li>
                    </ul>
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

export { CareerCounseling };









