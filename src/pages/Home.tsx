import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Play, ChevronRight, ArrowRight } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const services = [
  {
    title: "Career Counseling",
    description:
      "Expert guidance to choose the right career path based on skills, interests, and future goals.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Visa Guidance",
    description:
      "Complete support for visa applications, documentation, and interview preparation to ensure approval.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Test Preparation",
    description:
      "Coaching for IELTS, TOEFL, and PTE to help students achieve high scores for university admissions.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Study Abroad",
    description:
      "Assistance in studying in Dubai, the UK, and Malta with personalized study plans and university details.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Admission Guide",
    description:
      "Support in university selection, application preparation, and securing admissions efficiently.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Insurance",
    description:
      "Help in obtaining health and travel insurance for student safety and visa compliance.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format&fit=crop&q=60",
  },
];

const countries = [
  {
    name: 'Dubai',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&auto=format&fit=crop&q=60'
  },
  {
    name: 'Malta',
    image: 'https://images.unsplash.com/photo-1514222134-b57cbb8ce073?w=800&auto=format&fit=crop&q=60'
  },
  {
    name: 'Poland',
    image: 'https://images.unsplash.com/photo-1519197924294-4ba991a11128?w=800&auto=format&fit=crop&q=60'
  },
  {
    name: 'Denmark',
    image: 'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=800&auto=format&fit=crop&q=60'
  },
];

const testPrepClasses = [
  {
    name: 'PTE Class',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=60'
  },
  {
    name: 'TOEFL Class',
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&auto=format&fit=crop&q=60'
  },
  {
    name: 'IELTS Class',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&auto=format&fit=crop&q=60'
  },
  {
    name: 'GRE Class',
    image: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&auto=format&fit=crop&q=60'
  },
  {
    name: 'SAT Class',
    image: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800&auto=format&fit=crop&q=60'
  },
  {
    name: 'GMAT Class',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=60'
  }
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: false,
  dotsClass: "slick-dots custom-dots",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const EducationalServices = () => {
  return (
    <section className="py-12 bg-white text-center">
      <h2 className="text-3xl font-bold text-blue-800 mb-2">Our Solution</h2>
      <p className="text-2xl font-semibold text-blue-900 mb-10">
        We Provide high quality Educational Service
      </p>
      <div className="grid md:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <Card key={index} className="shadow-md rounded-xl overflow-hidden border border-gray-200">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover border-b-4 border-blue-800"
            />
            <CardContent className="p-5">
              <h3 className="text-lg font-bold text-blue-800 mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section className="py-16 bg-white px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <p className="text-orange-500 font-medium mb-2 tracking-wide">
            About Aspire Global Education
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 leading-snug mb-4">
            Grow your career with Aspire Global Education Consultancy
          </h2>
          <p className="text-gray-700 mb-6 text-justify">
            Aspire Global Education Consultancy Pvt. Ltd. is a professional educational consultancy dedicated to providing high-quality, affordable, and reliable test preparation and study abroad guidance. We specialize in assisting students who aspire to pursue higher education in Dubai, the UK, Malta, and other global destinations.
            Our commitment to continuous improvement ensures excellence in our services. We offer authentic, up-to-date information on universities, and our experienced team streamlines the application process, making it efficient and hassle-free for students.
          </p>
          <button className="bg-blue-900 text-white px-6 py-3 rounded shadow hover:bg-blue-800 flex items-center gap-2">
            Read More
            <span className="ml-1">&#8594;</span>
          </button>
        </div>

        {/* Right Image with Play Button */}
        <div className="relative w-full max-w-md mx-auto">
          <img
            src="/h1.png"
            alt="Graduate"
            className="rounded-lg object-cover w-full shadow-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white bg-opacity-80 p-3 rounded-full shadow-md cursor-pointer hover:scale-105 transition-transform">
              <Play className="w-6 h-6 text-white text-600" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CountriesSection = () => {
  return (
    <section className="bg-[#e7e9fc] py-20 px-10 rounded-lg"> {/* Increased padding-top and padding-bottom */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-12"> {/* Increased gap */}
        {/* Left Content */}
        <div className="lg:w-1/2">
          <p className="text-[#d2416d] font-semibold uppercase tracking-wider text-lg"> {/* Increased text size */}
            Pick Your Destinations
          </p>
          <h2 className="text-4xl font-bold text-[#1f2b6c] mt-4 mb-6"> {/* Increased text size and margins */}
            Select Your Favorite Country.
          </h2>
          <p className="text-[#3f4a5c] mt-6 text-lg leading-relaxed"> {/* Increased text size and line height */}
            Choosing the right study destination is a crucial step toward shaping your future.
            Whether you dream of studying in Dubai, the UK, Malta, or other global destinations,
            we help you explore the best opportunities. Each country offers unique academic programs,
            cultural experiences, and career prospects.
          </p>
          <p className="text-[#3f4a5c] mt-6 text-lg leading-relaxed"> {/* Increased text size and line height */}
            Our expert team provides personalized guidance, ensuring you select the ideal country
            based on your academic goals, budget, lifestyle preferences, and career aspirations.
            From university selection to visa processing, we make your study abroad journey smooth and hassle-free.
          </p>
          <button className="mt-8 bg-[#1f2b6c] text-white px-8 py-3 rounded-md hover:bg-[#3b4d9c] transition text-lg inline-flex items-center gap-2 group">
            View All
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Right Content: Slider */}
        <div className="lg:w-1/2 w-full relative pb-20"> {/* Increased bottom padding */}
          <Slider {...sliderSettings}>
            {countries.map((country, index) => (
              <div key={index} className="px-3"> {/* Increased padding */}
                <div className="relative h-96 rounded-lg overflow-hidden shadow-lg group"> {/* Increased height from h-80 to h-96 */}
                  <img
                    src={country.image}
                    alt={country.name}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-0 bg-black bg-opacity-60 w-full py-4 text-white text-center font-semibold text-xl"> {/* Increased padding and text size */}
                    Study in {country.name}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

const TestPrepClasses = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <p className="text-[#d2416d] font-semibold text-sm uppercase tracking-wider">
          Our Classes
        </p>
        <h2 className="text-3xl font-bold text-[#1f2b6c] mt-2">
          Test Preparation Classes
        </h2>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative">
        <Slider {...sliderSettings}>
          {testPrepClasses.map((item, index) => (
            <div key={index} className="px-3 pb-12">
              <div className="relative rounded-lg overflow-hidden shadow-lg group cursor-pointer">
                <div className="h-[300px] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute bottom-6 left-0 bg-white py-2 px-6 shadow-md transition-transform duration-500 group-hover:translate-x-2">
                  <h3 className="text-[#1f2b6c] font-semibold">
                    {item.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

// Hero slider data
const heroSlides = [
  {
    id: 1,
    title: "Best Educational Consultancy In Nepal",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et pellentesque felis nec integer. Non Curabitur habitasse Sapien Risus Accumsan sed Mauris. Leo Ornare Rutrum Ut ligula Vulputate.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 2,
    title: "Study Abroad With Confidence",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et pellentesque felis nec integer. Non Curabitur habitasse Sapien Risus Accumsan sed Mauris.",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 3,
    title: "Your Gateway To Global Education",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et pellentesque felis nec integer. Non Curabitur habitasse Sapien Risus Accumsan sed Mauris.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=60"
  }
];

// We'll use heroSlides directly for the right side slider

const Home = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const mainSliderRef = React.useRef<Slider | null>(null);

  // Add custom CSS for hero slider when component mounts
  useEffect(() => {
    const heroSliderStyles = document.createElement('style');
    heroSliderStyles.innerHTML = `
      /* Vertical slider dots container */
      .vertical-slider-dots {
        position: absolute;
        right: 30px;
        top: 50%;
        transform: translateY(-50%);
        z-index: 30;
      }

      .vertical-slider-dots ul {
        display: flex !important;
        flex-direction: column;
        gap: 12px;
        padding: 15px 10px;
        margin: 0;
        background-color: rgba(0, 0, 0, 0.3);
        border-radius: 30px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      }

      .vertical-slider-dots li {
        width: auto;
        height: auto;
        margin: 0;
      }

      .vertical-slider-dots li.slick-active div {
        background-color: white;
        transform: scale(1.2);
        box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
      }

      .vertical-slider-dots li button:before {
        display: none;
      }

      /* Hide default dots */
      .slick-dots li button:before {
        display: none;
      }

      /* Bottom slide indicator */
      .slide-indicator {
        position: absolute;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        gap: 8px;
        z-index: 20;
      }

      .slide-indicator-dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.5);
        transition: all 0.3s ease;
        cursor: pointer;
      }

      .slide-indicator-dot.active {
        background-color: white;
        transform: scale(1.2);
      }
    `;
    document.head.appendChild(heroSliderStyles);

    return () => {
      document.head.removeChild(heroSliderStyles);
    };
  }, []);

  // Function to handle dot click for the bottom indicator
  const handleDotClick = (index: number) => {
    setActiveSlide(index);
    if (mainSliderRef.current) {
      mainSliderRef.current.slickGoTo(index);
    }
  };

  // We no longer need to sync activeSlide and activeRightImage

  // We don't need the auto-rotation effect anymore since the slider has autoplay enabled
  // But we'll keep the sync between activeSlide and activeRightImage for the bottom indicator

  const heroSliderSettings = {
    dots: true, // Enable dots for vertical slider
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 5000,
    fade: true, // Use fade transition for smoother background changes
    beforeChange: (_: any, next: number) => setActiveSlide(next),
    afterChange: (current: number) => setActiveSlide(current),
    arrows: false,
    // Custom dot rendering
    customPaging: (_: number) => (
      <div className="w-3 h-3 rounded-full bg-white bg-opacity-70 hover:bg-opacity-100 transition-all duration-300" />
    ),
    // Position dots vertically on the right side
    appendDots: (dots: React.ReactNode) => (
      <div className="vertical-slider-dots">
        <div className="relative">
          <ul className="relative z-10"> {dots} </ul>
        </div>
      </div>
    )
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <Slider ref={mainSliderRef} {...heroSliderSettings} className="h-full">
          {heroSlides.map((slide) => (
            <div key={slide.id} className="relative h-screen">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-50 transition-all duration-700"
                style={{
                  backgroundImage: `url('${slide.image}')`
                }}
              />

              {/* Content Container */}
              <div className="relative h-full container mx-auto px-4 flex items-center justify-between">
                {/* Text Content */}
                <div className="text-white max-w-xl lg:max-w-2xl">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl opacity-90 mb-8">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* Slide Indicator - visible on mobile */}
        <div className="slide-indicator md:hidden">
          {heroSlides.map((_, index) => (
            <div
              key={index}
              className={`slide-indicator-dot ${index === activeSlide ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>

        {/* Angled Overlay */}
        <div className="absolute -bottom-1 left-0 right-0 z-10">
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

      {/* About Section */}
      <AboutSection />

      {/* Educational Services Section */}
      <EducationalServices />

      {/* Countries Section */}
      <CountriesSection />

      {/* Test Prep Classes Section */}
      <TestPrepClasses />

      {/* How We Work Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 p-4">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=60"
              alt="How we work"
              className="w-full rounded-lg shadow-lg object-cover h-[600px]"
            />
          </div>
          <div className="w-full md:w-1/2 p-4">
            <p className="text-[#d2416d] font-semibold uppercase tracking-wider mb-2">Our working process</p>
            <h2 className="text-3xl font-bold text-[#1f2b6c] mb-8">How we Work ?</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1f2b6c] text-white flex items-center justify-center font-semibold">1</div>
                <div>
                  <h3 className="font-bold text-[#1f2b6c] mb-1">Student Screening</h3>
                  <p className="text-[#3f4a5c] text-sm">First, we evaluate the qualifications, skills, and potential of students to succeed in their desired educational pursuits and to ensure a good match between students and the programs they are applying for.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1f2b6c] text-white flex items-center justify-center font-semibold">2</div>
                <div>
                  <h3 className="font-bold text-[#1f2b6c] mb-1">University Assistance</h3>
                  <p className="text-[#3f4a5c] text-sm">Our experienced team ensures a smooth and efficient process helping students secure admissions to their desired universities abroad.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1f2b6c] text-white flex items-center justify-center font-semibold">3</div>
                <div>
                  <h3 className="font-bold text-[#1f2b6c] mb-1">Admission Assistance</h3>
                  <p className="text-[#3f4a5c] text-sm">Our dedicated team provides guidance on meeting admission requirements and deadlines.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1f2b6c] text-white flex items-center justify-center font-semibold">4</div>
                <div>
                  <h3 className="font-bold text-[#1f2b6c] mb-1">Documentation Guidance</h3>
                  <p className="text-[#3f4a5c] text-sm">We assist students in understanding and compiling the necessary documents for their study abroad applications, including academic transcripts, letters of recommendation, personal statements, and more.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1f2b6c] text-white flex items-center justify-center font-semibold">5</div>
                <div>
                  <h3 className="font-bold text-[#1f2b6c] mb-1">Visa Lodgement</h3>
                  <p className="text-[#3f4a5c] text-sm">We assist students in understanding visa requirements, preparing the necessary documentation, and completing the application accurately.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1f2b6c] text-white flex items-center justify-center font-semibold">6</div>
                <div>
                  <h3 className="font-bold text-[#1f2b6c] mb-1">Pre-Departure Briefing</h3>
                  <p className="text-[#3f4a5c] text-sm">We guide students on travel preparations, cultural adaptation, and safety tips.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Testimonials Section */}
      <TestimonialSection />

      {/* Statistics Section */}
      <StatisticsSection />

      {/* Testimonial Section */}
      <TestimonialSection />

      {/* Blog Section */}
      <BlogSection />

      {/* University Partners Section */}
      <UniversityPartners />

      {/* Footer */}
      <footer />
    </>
  );
};








const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    university: "Studying at Harvard University",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    quote: "Thanks to Aspire Global, my dream of studying at Harvard became a reality. Their counselors guided me through every step of the application and visa process."
  },
  {
    id: 2,
    name: "Michael Chen",
    university: "Studying at Oxford University",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    quote: "The test preparation classes at Aspire Global were instrumental in helping me achieve the scores I needed for Oxford. The teachers were excellent."
  },
  {
    id: 3,
    name: "Emma Thompson",
    university: "Studying at MIT",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    quote: "The personalized attention and dedication of the Aspire Global team made my application process smooth and successful. I highly recommend their services."
  }
];

const TestimonialSection = () => {
  // Add testimonial slider styles
  TestimonialSliderStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    customPaging: (_: number) => (
      <div className="w-2 h-2 rounded-full bg-gray-300 hover:bg-[#1f2b6c] transition-colors duration-300" />
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ],
    appendDots: (dots: React.ReactNode) => (
      <div style={{ bottom: "-40px" }}>
        <ul className="flex justify-center items-center gap-2"> {dots} </ul>
      </div>
    )
  };

  return (
    <section className="bg-[#f8f9ff] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-[#d2416d] font-semibold text-sm uppercase tracking-wider">
            Feedback
          </p>
          <h2 className="text-3xl font-bold text-[#1f2b6c] mt-2">
            What Students Say?
          </h2>
        </div>

        <Slider {...settings} className="testimonial-slider">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="px-4">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.university}</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "{testimonial.quote}"
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

// Add testimonial slider styles when needed
const TestimonialSliderStyles = () => {
  useEffect(() => {
    const sliderStyles = document.createElement('style');
    sliderStyles.innerHTML = `
      .testimonial-slider .slick-dots li button:before {
        display: none;
      }

      .testimonial-slider .slick-dots li.slick-active div {
        background-color: #1f2b6c;
      }

      .testimonial-slider .slick-slide {
        opacity: 0.5;
        transition: opacity 0.3s ease;
      }

      .testimonial-slider .slick-slide.slick-active {
        opacity: 1;
      }
    `;
    document.head.appendChild(sliderStyles);

    return () => {
      document.head.removeChild(sliderStyles);
    };
  }, []);

  return null;
};

const StatisticsSection: React.FC = () => {
  return (
    <section className="bg-[#1f2b6c] py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center text-white mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Taking Education to Next Level with Technology
          </h2>
          <button className="bg-white bg-opacity-10 hover:bg-opacity-20 transition-all
            px-6 py-3 rounded-md flex items-center gap-2 mx-auto">
            <Play className="h-5 w-5" />
            Watch Video
          </button>
        </div>

        {/* Stats Cards */}
        <div className="bg-white rounded-lg shadow-lg py-10 px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative">
            {/* Documentation Stats */}
            <div className="flex flex-col items-center relative">
              <div className="mb-4 text-[#1f2b6c]">
                <svg
                  className="w-12 h-12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <path d="M14 2v6h6" />
                  <path d="M16 13H8" />
                  <path d="M16 17H8" />
                  <path d="M10 9H8" />
                </svg>
              </div>
              <h3 className="text-4xl font-bold text-[#1f2b6c] mb-2">2000+</h3>
              <p className="text-sm text-gray-600 uppercase tracking-wider">Documentation</p>
              {/* Vertical Divider */}
              <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-16 bg-black"></div>
            </div>

            {/* Colleges Stats */}
            <div className="flex flex-col items-center relative">
              <div className="mb-4 text-[#1f2b6c]">
                <svg
                  className="w-12 h-12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <h3 className="text-4xl font-bold text-[#1f2b6c] mb-2">356+</h3>
              <p className="text-sm text-gray-600 uppercase tracking-wider">Colleges</p>
              {/* Vertical Divider */}
              <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-16 bg-black"></div>
            </div>

            {/* Admissions Stats */}
            <div className="flex flex-col items-center">
              <div className="mb-4 text-[#1f2b6c]">
                <svg
                  className="w-12 h-12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="text-4xl font-bold text-[#1f2b6c] mb-2">1100+</h3>
              <p className="text-sm text-gray-600 uppercase tracking-wider">Admissions</p>
            </div>
          </div>
        </div>
      </div>

      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 bg-[url('/images/education-bg.jpg')]
        bg-cover bg-center opacity-10"
      />
    </section>
  );
};

const blogData = [
  {
    date: {
      day: "11th",
      month: "Jan"
    },
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=60", // Students collaborating in classroom
    title: "Free Online Courses From Top Universities.",
    description:
      "Lorem Ipsum Dolor Sit Amet Consectetur. A Morbi Facilisi Vulputate Pellentesque Sit Amet Consectetur. A Morbi Facilisi Vulputate Pellentesque",
  },
  {
    date: {
      day: "12th",
      month: "Feb"
    },
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&auto=format&fit=crop&q=60", // Students with raised hands
    title: "Free Online Courses From Top Universities.",
    description:
      "Lorem Ipsum Dolor Sit Amet Consectetur. A Morbi Facilisi Vulputate Pellentesque Sit Amet Consectetur. A Morbi Facilisi Vulputate Pellentesque",
  },
  {
    date: {
      day: "21th",
      month: "Dec"
    },
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&auto=format&fit=crop&q=60", // Student studying with laptop
    title: "Free Online Courses From Top Universities.",
    description:
      "Lorem Ipsum Dolor Sit Amet Consectetur. A Morbi Facilisi Vulputate Pellentesque Sit Amet Consectetur. A Morbi Facilisi Vulputate Pellentesque",
  },
];

const BlogSection: React.FC = () => {
  return (
    <section className="py-16 px-4 md:px-6">
      {/* Main Container - removed border-2 and border-[#1f2b6c] classes */}
      <div className="max-w-7xl mx-auto rounded-lg p-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#1f2b6c] text-sm font-medium mb-2">Latest Blog</p>
          <h2 className="text-[#1f2b6c] text-3xl font-bold">Have a Look Our Blog</h2>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {blogData.map((blog, index) => (
            <div key={index} className="relative">
              {/* Image Container */}
              <div className="relative h-[200px] mb-4">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover rounded-lg"
                />
                {/* Date Badge */}
                <div className="absolute bottom-4 right-4">
                  <div className="bg-[#1f2b6c] text-white rounded-full p-3 text-center min-w-[70px]">
                    <div className="text-sm font-semibold">{blog.date.day}</div>
                    <div className="text-xs">{blog.date.month}</div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-[#1f2b6c] font-bold text-lg mb-2">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {blog.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Read More Button */}
        <div className="text-center mt-8">
          <button className="inline-flex items-center gap-2 bg-[#1f2b6c] text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition-colors">
            Read More
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

const universities = [
  {
    name: "Athabasca University",
    logo: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&auto=format&fit=crop&q=60"
  },
  {
    name: "Monash University",
    logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop&q=60"
  },
  {
    name: "La Salle University",
    logo: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800&auto=format&fit=crop&q=60"
  },
  {
    name: "AIU",
    logo: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=800&auto=format&fit=crop&q=60"
  },
  {
    name: "ACU",
    logo: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&auto=format&fit=crop&q=60"
  },
  {
    name: "RMIT University",
    logo: "https://images.unsplash.com/photo-1576495199011-eb94736d05d6?w=800&auto=format&fit=crop&q=60"
  }
];

const UniversityPartners: React.FC = () => {
  return (
    <section className="py-16 bg-[#e7e9fc]"> {/* Updated background color to match the image */}
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#ff6b00] text-sm font-medium uppercase tracking-wider mb-2">Institutions</p>
          <h2 className="text-[#1f2b6c] text-3xl font-bold">Our Affiliated Universities</h2>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {universities.map((university, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-4">
                <img
                  src={university.logo}
                  alt={`${university.name}`}
                  className="h-24 w-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="px-4 pb-4 text-center">
                <h3 className="text-[#1f2b6c] font-medium text-sm truncate">
                  {university.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};




export default Home;

















